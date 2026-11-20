import { EventItem } from "@/lib/eventsDetails";

export function getEventCover(event: EventItem): string {
  if (event.coverImage && event.coverImage.trim() !== "" && !event.coverImage.startsWith("/images/updates/")) {
    return event.coverImage.trim();
  }
  return getEventFallback(event);
}

export function getEventFallback(event: EventItem): string {
  const cat = (event.category || "").toLowerCase();
  const title = (event.title || "").toLowerCase();

  if (title.includes("renaissance")) {
    return "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80";
  }
  if (cat.includes("silver") || title.includes("jubilee")) {
    return "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80";
  }
  if (cat.includes("webinar") || title.includes("webinar")) {
    return "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80";
  }
  if (cat.includes("workshop") || title.includes("workshop")) {
    return "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80";
  }
  if (title.includes("water") || title.includes("arsenic")) {
    return "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80";
  }
  if (title.includes("ai") || title.includes("digital")) {
    return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80";
  }
  if (title.includes("education") || title.includes("pedagogy")) {
    return "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80";
  }
  return "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80";
}
