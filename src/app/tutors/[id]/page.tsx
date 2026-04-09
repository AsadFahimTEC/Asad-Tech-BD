import TutorProfileFrom from "@/app/components/TutorProfileFrom";

export const dynamicParams = false;

export async function generateStaticParams() {
  const rawIds = process.env.NEXT_PUBLIC_TUTOR_IDS?.split(",")?.filter(Boolean) ?? ["1"];
  return rawIds.map((id) => ({ id }));
}

export default function TutorsPageDynamicPage() {
  
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Edit Tutor Profile</h1>
      <TutorProfileFrom></TutorProfileFrom>
    </div>
  );
}