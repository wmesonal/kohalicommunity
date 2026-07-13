import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/ui/Section";
import { ArrowLeft, Calendar, MapPin, Tag } from "lucide-react";
import { upcomingEvents, pastEvents } from "@/lib/events-data";

export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }) => {
    const event =
      upcomingEvents.find((e) => e.id === params.eventId) ??
      pastEvents.find((e) => e.id === params.eventId);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.event.name} | कोहळी समाज` },
      { name: "description", content: loaderData?.event.shortDesc },
      { property: "og:title", content: loaderData?.event.name },
      { property: "og:description", content: loaderData?.event.shortDesc },
      { property: "og:image", content: loaderData?.event.image },
    ],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">कार्यक्रम सापडला नाही</h1>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary">
            <ArrowLeft className="h-4 w-4" /> मुख्यपृष्ठावर परत जा
          </Link>
        </div>
      </Section>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout>
      <Section>
        <p className="text-center text-destructive">कार्यक्रम लोड करताना त्रुटी आली.</p>
        <div className="mt-4 text-center">
          <button onClick={reset} className="rounded-full bg-primary px-5 py-2 text-primary-foreground">पुन्हा प्रयत्न करा</button>
        </div>
      </Section>
    </SiteLayout>
  ),
  component: EventDetailPage,
});

function EventDetailPage() {
  const { event } = Route.useLoaderData();

  return (
    <SiteLayout>
      <div className="relative h-72 w-full overflow-hidden sm:h-96">
        <img src={event.image} alt={event.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-5xl flex-col justify-end px-4 pb-8 sm:px-6 lg:px-8">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
            <Tag className="h-3 w-3" />
            {event.tag}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">{event.name}</h1>
        </div>
      </div>

      <Section>
        <div className="mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> मुख्यपृष्ठावर परत जा
          </Link>

          <div className="mt-6 grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">दिनांक</p>
                <p className="font-display text-lg font-semibold text-foreground">{event.date}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">ठिकाण</p>
                <p className="font-display text-lg font-semibold text-foreground">{event.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">कार्यक्रमाची माहिती</h2>
            {event.fullDesc.map((p: string, i: number) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">{p}</p>
            ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
