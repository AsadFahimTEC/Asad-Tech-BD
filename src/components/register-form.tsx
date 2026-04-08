"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { User, Shield } from "lucide-react";

export function RegisterForm(props: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER" as "USER" | "ADMIN",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading("Creating account...");

    try {
      // For now, just show success and redirect
      // In a real app, you'd call your API here
      toast.success("Account created successfully 🎉", {
        id: toastId,
      });

      router.push("/");
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    // Simplified Google login - in real app, implement OAuth
    toast.info("Google login not implemented yet");
  };

  return (
    <div className="relative p-[3px] rounded-2xl bg-gradient-to-r from-red-500 via-green-400 via-blue-500 to-pink-500 animate-rgb">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 bg-gradient-to-r from-red-500 via-green-400 via-blue-500 to-pink-500 animate-rgb"></div>

      <Card
        {...props}
        className="relative rounded-2xl bg-background border"
      >
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Choose your role and enter your details to get started
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label>Select Role</Label>
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => setFormData({ ...formData, role: "USER" })}
                  className={`cursor-pointer p-4 rounded-xl border text-center transition ${
                    formData.role === "USER"
                      ? "border-blue-500 bg-blue-50"
                      : ""
                  }`}
                >
                  <User className="mx-auto mb-2 w-6 h-6" />
                  User
                </div>

                <div
                  onClick={() => setFormData({ ...formData, role: "ADMIN" })}
                  className={`cursor-pointer p-4 rounded-xl border text-center transition ${
                    formData.role === "ADMIN"
                      ? "border-purple-500 bg-purple-50"
                      : ""
                  }`}
                >
                  <Shield className="mx-auto mb-2 w-6 h-6" />
                  Admin
                </div>
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Register"}
          </Button>

          <Button
            className="w-full"
            variant="outline"
            onClick={handleGoogleLogin}
            type="button"
          >
            Continue with Google
          </Button>
        </CardFooter>
      </Card>

      {/* RGB Animation */}
      <style jsx>{`
        @keyframes rgbAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-rgb {
          background-size: 400% 400%;
          animation: rgbAnimation 6s ease infinite;
        }
      `}</style>
    </div>
  );
}