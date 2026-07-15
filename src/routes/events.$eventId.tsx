import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/ui/Section";
import { ArrowLeft, Calendar, Clock, MapPin, Tag } from "lucide-react";
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
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/" });
    }
  };

  return (
    <SiteLayout>
      {/* HERO */}
      <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden">
        <img src={event.image} alt={event.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-black/10" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-11 sm:px-6 lg:px-8">

          <span className="text-[14px] font-bold uppercase text-secondary sm:text-sm mb-3">
            {event.tag}
          </span>

          <h1 className="max-w-2xl font-display text-3xl font-bold leading-tight text-white drop-shadow-sm sm:text-5xl">
            {event.name}
          </h1>
        </div>
      </div>


      <Section>
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <button
              type="button"
              onClick={handleBack}
              className="group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]"
            >
              <ArrowLeft className="h-4 w-4" />
              मुख्यपृष्ठावर परत जा
            </button>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.55fr_1fr] lg:items-start">
          {/* MAIN CONTENT */}
          <div>
            <div className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-primary">
              कार्यक्रमाची माहिती
              <span className="h-px flex-1 bg-gradient-to-r from-accent to-transparent" />
            </div>

            <div className="space-y-5">
              {event.fullDesc.map((p: string, i: number) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-lg leading-relaxed text-muted-foreground first-letter:float-left first-letter:pr-2 first-letter:pt-1 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-primary"
                      : "text-lg leading-relaxed text-muted-foreground"
                  }
                >
                  {p}
                </p>
              ))}
            </div>

          </div>

          {/* INVITATION CARD */}
          <aside className="lg:sticky lg:top-8">
            <div className="rounded-sm border border-border bg-card p-2 shadow-soft">
              <div className="relative border-[1.5px] border-accent p-6">
                {/* corner brackets */}
                <span className="absolute -left-[2px] -top-[2px] h-5 w-5 border-l-2 border-t-2 border-accent" />
                <span className="absolute -right-[2px] -top-[2px] h-5 w-5 border-r-2 border-t-2 border-accent" />
                <span className="absolute -bottom-[2px] -left-[2px] h-5 w-5 border-b-2 border-l-2 border-accent" />
                <span className="absolute -bottom-[2px] -right-[2px] h-5 w-5 border-b-2 border-r-2 border-accent" />

                <h2 className="mb-5 border-b border-dashed border-accent pb-4 text-center font-display text-xl font-semibold text-foreground">
                  आमंत्रण
                </h2>

                <div className="divide-y divide-dashed divide-border">
                  <InviteRow icon={<Calendar className="h-4 w-4" />} label="दिनांक" value={event.date} />
                  <InviteRow icon={<MapPin className="h-4 w-4" />} label="ठिकाण" value={event.location} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}

function InviteRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
      <div className="grid h-9 w-9 flex-none place-items-center rounded-full bg-primary text-accent">
        {icon}
      </div>
      <div>
        <p className="text-[14px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-bold text-base text-foreground">{value}</p>
      </div>
    </div>
  );
}