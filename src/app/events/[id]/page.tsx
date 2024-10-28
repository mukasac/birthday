// src/app/events/[id]/page.tsx
export default function EventDetailPage({ params }: { params: { id: string } }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Event Details #{params.id}</h1>
        {/* Add event details content */}
      </div>
    );
  }