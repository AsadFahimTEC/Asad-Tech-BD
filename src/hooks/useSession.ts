"use client";

import { useState, useEffect } from "react";
import { UserRole } from "@/constants/roles";

export type SessionUser = {
  id: string;
  email: string;
  name?: string;
  image?: string | null;
  role?: UserRole;
};

export const useSession = () => {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  const loadSession = async () => {
    try {
      setLoading(true);

      // Simplified session loading for deployment
      // In a real app, this would call your auth API
      setUser(null);
    } catch (error) {
      console.error("Error loading session:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchSession = async () => {
      try {
        // Simplified - no auth client call
        if (isMounted) {
          setUser(null);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setUser(null);
          setLoading(false);
        }
        console.error(error);
      }
    };

    fetchSession();

    return () => {
      isMounted = false; // prevent state update if component unmounted
    };
  }, []);

  return { user, loading, refreshSession: loadSession };
};