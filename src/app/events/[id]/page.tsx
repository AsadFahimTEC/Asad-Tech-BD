import EventDetailsClient from "./EventDetailsClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  const rawIds = process.env.NEXT_PUBLIC_EVENT_IDS?.split(",")?.filter(Boolean) ?? ["1"];
  return rawIds.map((id) => ({ id }));
}

interface EventDetailsPageProps {
  params: { id: string };
}

export default function EventDetailsPage({ params }: EventDetailsPageProps) {
  return <EventDetailsClient eventId={params.id} />;
}
