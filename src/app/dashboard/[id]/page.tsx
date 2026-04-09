import DashboardDetailsClient from "./DashboardDetailsClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  const rawIds = process.env.NEXT_PUBLIC_DASHBOARD_IDS?.split(",")?.filter(Boolean) ?? ["1"];
  return rawIds.map((id) => ({ id }));
}

interface DashboardDetailsPageProps {
  params: { id: string };
}

export default function DashboardDetailsPage({ params }: DashboardDetailsPageProps) {
  return <DashboardDetailsClient dashboardId={params.id} />;
}
