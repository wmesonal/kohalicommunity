import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section } from "@/components/ui/Section";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { upcomingEvents, pastEvents, type UpcomingEvent } from "@/lib/events-data";
import eventbg from "@/assets/events_activity.jpg"
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "कार्यक्रम व उपक्रम | कोहळी समाज विकास मंडळ नागपूर" },
      { name: "description", content: "कोहळी समाज विकास मंडळ नागपूरचे पुढील कार्यक्रम आणि झालेले कार्यक्रम — सभा, शिबिर, परिषद आणि सांस्कृतिक कार्यक्रम." },
      { property: "og:title", content: "कार्यक्रम व उपक्रम | कोहळी समाज" },
      { property: "og:description", content: "पुढील व झालेल्या सर्व कार्यक्रमांची यादी." },
    ],
  }),
  component: EventsListPage,
});

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2";
const FOCUS_RING_DARK =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2C050D]";

function Toran({ tone = "gold" }: { tone?: "gold" | "maroon-on-cream" }) {
  const color = tone === "gold" ? "var(--gold-500)" : "#6f1327";
  return (
    <div aria-hidden="true" className="relative flex h-14 w-full items-center justify-center sm:h-20">
      <span className="h-px w-16 sm:w-24 md:w-40" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      <span className="mx-3 h-1.5 w-1.5 shrink-0 rotate-45" style={{ background: color }} />
      <span className="h-px w-16 sm:w-24 md:w-40" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
    </div>
  );
}

function EventCard({ ev }: { ev: UpcomingEvent }) {
  const { t } = useLang();
  return (
    <Link
      to="/events/$eventId"
      params={{ eventId: ev.id }}
      className={`group relative flex flex-col rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant ${FOCUS_RING}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-muted">
        <img
          src={ev.image}
          alt={ev.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute -right-2 -top-1 flex rotate-6 flex-col items-center rounded-md border-2 border-dashed border-card/80 bg-card/95 px-3 py-2 text-center shadow-soft backdrop-blur">
          <span className="font-display text-xl font-bold leading-none text-primary">{ev.dateShort.day}</span>
          <span className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground">{ev.dateShort.month}</span>
        </div>
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 text-xs font-medium text-white/90">
          <MapPin className="h-3.5 w-3.5" />
          {t(ev.location)}
        </span>
      </div>

      <div className="border-t-2 border-dashed border-border" />

      <div className="flex flex-1 flex-col p-5 pt-4">
        <h4 className="font-display text-base text-[15px] font-bold text-foreground transition-colors group-hover:text-primary">
          {t(ev.name)}
        </h4>
        <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
          {t(ev.shortDesc)}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          {t("सविस्तर पहा")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function EventsListPage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <PageHero 
        eyebrow="Events & Activities" 
        title="कार्यक्रम व उपक्रम" 
        subtitle="समाजाच्या पुढील व झालेल्या सर्व कार्यक्रमांची सविस्तर माहिती." 
        backgroundImage={eventbg} 
      />
      <Section>
        <div className="mx-auto max-w-7xl">
          <Link 
            to="/" 
            className="group inline-flex items-center justify-center gap-1.5 rounded-[2px] px-5 py-2.5 sm:px-7 sm:py-3 font-['Mukta'] text-xs sm:text-sm font-bold tracking-[0.02em] transition-all duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" /> मुख्यपृष्ठावर परत जा
          </Link>

          {/* पुढील कार्यक्रम - Upcoming Events Section */}
          <div className="mt-10 mb-8 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">पुढील कार्यक्रम</h2>
              <p className="text-xs text-muted-foreground">Upcoming Events</p>
            </div>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((ev) => (
                <EventCard key={ev.id} ev={ev} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
              <p className="text-muted-foreground">सध्या कोणतेही पुढील कार्यक्रम नाहीत.</p>
              <p className="text-xs text-muted-foreground">No upcoming events at the moment.</p>
            </div>
          )}

          {/* झालेले कार्यक्रम - Past Events Section */}
          <div className="mt-16 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-secondary-foreground shadow-soft">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">झालेले कार्यक्रम</h2>
              <p className="text-xs text-muted-foreground">Past Events</p>
            </div>
          </div>

          {pastEvents.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((ev) => (
                <EventCard key={ev.id} ev={ev} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
              <p className="text-muted-foreground">अद्याप कोणतेही झालेले कार्यक्रम नाहीत.</p>
              <p className="text-xs text-muted-foreground">No past events yet.</p>
            </div>
          )}
        </div>
      </Section>
    </SiteLayout>
  );
}