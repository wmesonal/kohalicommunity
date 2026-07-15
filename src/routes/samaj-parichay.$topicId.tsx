import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ScrollText, History, Building2, MapPin, CalendarDays, Info } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section } from "@/components/ui/Section";
import { parichayTopics, type ParichayTopic } from "@/lib/samaj-parichay-data";
import samajbg from "@/assets/samajbhavan.jpg";
import historyImage from "@/assets/samaj.jpg";
import bhavanImage from "@/assets/samaj_bhavan.jpg";

export const Route = createFileRoute("/samaj-parichay/$topicId")({
  loader: ({ params }) => {
    const topic = parichayTopics.find((t) => t.id === params.topicId);
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.topic.title ?? "समाज परिचय"} | कोहळी समाज विकास मंडळ नागपूर` },
      { name: "description", content: loaderData?.topic.shortDesc ?? "कोहळी समाज परिचय" },
    ],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <p className="text-center text-muted-foreground">विषय आढळला नाही.</p>
      </Section>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <Section>
        <p className="text-center text-muted-foreground">काहीतरी चूक झाली आहे.</p>
      </Section>
    </SiteLayout>
  ),
  component: TopicPage,
});

const iconMap = { history: History, scroll: ScrollText, building: Building2 };

// A restrained ornamental divider — a single gold lozenge flanked by hairlines.
// This is the page's one signature flourish; used sparingly, never repeated per-card.
function GoldDivider() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px w-10 bg-[var(--gold-500)]/60" />
      <span className="h-1.5 w-1.5 rotate-45 bg-[var(--gold-500)]" />
      <span className="h-px flex-1 bg-[var(--gold-500)]/25" />
    </div>
  );
}

function TopicPage() {
  const { topic } = Route.useLoaderData() as { topic: ParichayTopic };
  const Icon = iconMap[topic.icon];
   const router = useRouter();
const sideImage =
  topic.id === "samaj-bhavan"
    ? bhavanImage
    : topic.id === "itihas-ani-varasa"
    ? historyImage
    : historyImage;
  return (
    <SiteLayout>
      <PageHero
        eyebrow={topic.eyebrow}
        title={topic.title}
        subtitle={topic.shortDesc}
        backgroundImage={samajbg}
      />

      <Section>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => router.history.back()}
            className="cursor-pointer group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]"
          >
            <ArrowLeft className="h-4 w-4" />
            मुख्यपृष्ठावर परत जा
          </button>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--maroon-800)] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[var(--cream-text)]">
            <Icon className="h-4 w-4 text-[var(--gold-500)]" />
            {topic.eyebrow}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Narrative column — numbered, since these sections read in sequence */}
          <article className="relative">
            {/* connecting spine */}
            <div className="absolute left-[27px] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[var(--gold-500)]/50 via-[var(--maroon-800)]/15 to-transparent sm:block" />
            <div className="space-y-10">
              {topic.sections.map((s, i) => (
                <div key={i} className="relative sm:pl-[70px]">
                  <div className="absolute left-0 top-0 hidden h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--gold-500)] bg-[var(--ivory-100)] font-display text-lg font-bold text-[var(--maroon-800)] shadow-sm sm:flex">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="rounded-2xl border border-[var(--maroon-800)]/10 bg-white p-6 shadow-sm sm:p-7">
                    <div className="mb-2 flex items-center gap-2 sm:hidden">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--maroon-800)] font-display text-sm font-bold text-[var(--cream-text)]">
                        {i + 1}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-[var(--ink)] sm:text-[1.7rem]">
                      {s.heading}
                    </h2>
                    <div className="mt-3 mb-4">
                      <GoldDivider />
                    </div>
                    <p className="text-base leading-relaxed text-[var(--foreground)] sm:text-[1.05rem]">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Aside — framed portrait + pull quote, sticky */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative rounded-2xl border-4 border-[var(--gold-500)]/80 p-1.5 shadow-lg">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={sideImage}
                  alt={topic.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="absolute -left-2 -top-2 h-4 w-4 rotate-45 bg-[var(--gold-500)]" />
              <span className="absolute -right-2 -top-2 h-4 w-4 rotate-45 bg-[var(--gold-500)]" />
              <span className="absolute -bottom-2 -left-2 h-4 w-4 rotate-45 bg-[var(--gold-500)]" />
              <span className="absolute -bottom-2 -right-2 h-4 w-4 rotate-45 bg-[var(--gold-500)]" />
            </div>

            <div className="mt-7 rounded-2xl bg-[var(--maroon-800)] p-7 text-white shadow-lg">
              <ScrollText className="h-6 w-6 text-[var(--gold-500)]" />
              <h3 className="mt-3 font-display text-xl font-bold">आमचा वारसा</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                पिढ्यानपिढ्या जपलेला सांस्कृतिक व सामाजिक वारसा, पुढील पिढीसाठी अभिमानाची प्रेरणा.
              </p>
            </div>
          </aside>
        </div>

        {/* Samaj Bhavans — seal-style index cards */}
        {topic.bhavans && topic.bhavans.length > 0 && (
          <div className="mt-20">
            <div className="mb-8 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full border-2 border-[var(--gold-500)] bg-[var(--maroon-800)] text-[var(--cream-text)]">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[var(--ink)]">समाज भवनांची यादी</h3>
                <p className="text-sm text-[var(--text-muted)]">All Samaj Bhavans — नाव, पत्ता, स्थापना व माहिती</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {topic.bhavans.map((b, idx) => (
                <div
                  key={b.name}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--maroon-800)]/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="pointer-events-none absolute -right-3 -top-5 font-display text-7xl font-black text-[var(--maroon-800)]/[0.04]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--cream)] text-[var(--maroon-800)] ring-1 ring-[var(--gold-500)]/40">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display text-lg font-bold text-[var(--ink)]">{b.name}</h4>
                      <div className="mt-3 space-y-2 text-sm">
                        <p className="flex items-start gap-2 text-[var(--text-muted)]">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--maroon-800)]" />
                          <span>{b.address}</span>
                        </p>
                        <p className="flex items-start gap-2 text-[var(--text-muted)]">
                          <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[var(--maroon-800)]" />
                          <span>स्थापना: <strong className="text-[var(--ink)]">{b.established}</strong></span>
                        </p>
                        <p className="flex items-start gap-2 text-[var(--text-muted)]">
                          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--maroon-800)]" />
                          <span>{b.info}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--gold-500)] transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other topics — horizontal strip */}
        <div className="mt-20">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-display text-lg font-bold text-[var(--ink)]">इतर विषय पहा</h3>
            <span className="h-px flex-1 mx-4 bg-[var(--maroon-800)]/10" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {parichayTopics
              .filter((t) => t.id !== topic.id)
              .map((t) => (
                <Link
                  key={t.id}
                  to="/samaj-parichay/$topicId"
                  params={{ topicId: t.id }}
                  className="group inline-flex items-center justify-between gap-1.5 rounded-[2px] px-5 py-2.5 sm:px-7 sm:py-3 font-['Mukta'] text-xs sm:text-sm font-bold tracking-[0.02em] transition-all duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_color-mix(in_srgb,var(--gold-500)_65%,transparent)] hover:shadow-[0_12px_28px_-8px_color-mix(in_srgb,var(--gold-500)_75%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2"
                >
                  <span className="font-display font-semibold">
                    {t.title}
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}