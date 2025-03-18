import React from "react";
import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useLoaderData();

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch details for seleted event" }),
      {
        status: 500,
        statusText: "Could not fetch events",
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    return response;
  }
}
