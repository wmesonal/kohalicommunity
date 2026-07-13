import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, BandLabel } from "@/components/ui/Section";
import { ArrowLeft, ArrowUpRight, Calendar, MapPin, Play } from "lucide-react";
import { featuredLive, liveVideos } from "@/lib/live-events-data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/live-events/")({
  head: () => ({
    meta: [
      { title: "थेट प्रसारण — Live Events | कोहळी समाज विकास मंडळ नागपूर" },
      { name: "description", content: "कोहळी समाज विकास मंडळ नागपूरच्या थेट प्रसारण कार्यक्रमांचे संपूर्ण संग्रह." },
      { property: "og:title", content: "थेट प्रसारण — Live Events" },
      { property: "og:description", content: "समाजाच्या सर्व थेट प्रसारण कार्यक्रमांचे संग्रह." },
    ],
  }),
  component: LiveEventsPage,
});

function LiveEventsPage() {
  const { t } = useLang();

  return (
    <SiteLayout>
      {/* Featured / current broadcast */}
      <section className="relative overflow-hidden bg-[var(--primary)]">
        <div className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-[600px]">
          <img
            src={featuredLive.image}
            alt={featuredLive.title}
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--maroon-950)] via-[var(--maroon-950)]/50 to-[var(--maroon-950)]/10" />

          <div className="relative flex min-h-[440px] flex-col justify-between px-4 py-5 sm:min-h-[520px] sm:px-6 sm:py-6 lg:min-h-[600px] lg:px-8 lg:py-8">
            {/* top bar */}
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between sm:px-6 lg:px-8">
              <Link
                to="/"
                className="group inline-flex items-center justify-center gap-1.5 rounded-[2px] px-5 py-2.5 sm:px-7 sm:py-3 font-['Mukta'] text-xs sm:text-sm font-bold tracking-[0.02em] transition-all duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_color-mix(in_srgb,var(--gold-500)_65%,transparent)] hover:shadow-[0_12px_28px_-8px_color-mix(in_srgb,var(--gold-500)_75%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2"
              >
                <ArrowLeft className="h-4 w-4 shrink-0" />
                <span>{t("मुख्यपृष्ठावर परत जा")}</span>
              </Link>

              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-secondary/40 bg-black/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-secondary backdrop-blur-sm sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary sm:h-2 sm:w-2" />
                </span>
                On Air
              </span>
            </div>

            {/* bottom content */}
            <div className="mx-auto w-full max-w-7xl pt-8 sm:pt-10 sm:px-6 lg:px-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary sm:text-xs sm:tracking-[0.25em]">
                {t("प्रसारण चालू आहे")}
              </p>
              <h1 className="mt-2.5 max-w-3xl font-display text-2xl font-bold leading-[1.15] text-white sm:mt-3 sm:text-4xl sm:leading-[1.1] lg:text-6xl">
                {t(featuredLive.title)}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/70 sm:mt-4 sm:gap-x-5 sm:text-sm">
                <span className="inline-flex items-center gap-1.5 sm:gap-2">
                  <Calendar className="h-3.5 w-3.5 shrink-0 text-secondary sm:h-4 sm:w-4" />
                  {featuredLive.date}
                </span>
                {featuredLive.location && (
                  <span className="inline-flex items-center gap-1.5 sm:gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-secondary sm:h-4 sm:w-4" />
                    {t(featuredLive.location)}
                  </span>
                )}
              </div>

              <p className="mt-3 max-w-xl text-xs leading-relaxed text-white/60 sm:mt-4 sm:text-base">
                {t(featuredLive.description)}
              </p>

              <Link
                to="/live-events/$videoId"
                params={{ videoId: featuredLive.id }}
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_color-mix(in_srgb,var(--gold-500)_65%,transparent)] hover:shadow-[0_12px_28px_-8px_color-mix(in_srgb,var(--gold-500)_75%,transparent)] focus-visible:outline-none px-5 py-2.5 text-xs font-bold text-[var(--primary)] transition-transform hover:-translate-y-0.5 sm:mt-6 sm:gap-2.5 sm:px-7 sm:py-3.5 sm:text-sm"
              >
                <Play className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" />
                {t("आत्ता पहा")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Archive — broadcast log */}
      <Section>
        <div className="mx-auto max-w-7xl">        
          <div className="mb-6 flex items-end justify-between gap-4 border-b-2 border-primary/15 pb-4 sm:mb-8 sm:pb-5">
            <div>
              <BandLabel
                eyebrow="Archive"
                title={t("प्रसारण संग्रह")}
              />
            </div>
            <p className="hidden text-lg font-bold text-muted-foreground sm:block">
              {liveVideos.length} {t("रेकॉर्डिंग")}
            </p>
          </div>

          <div className="divide-y divide-border">
            {liveVideos.map((v, i) => (
              <Link
                key={v.id}
                to="/live-events/$videoId"
                params={{ videoId: v.id }}
                className="group flex flex-col gap-3 py-4 transition-colors hover:bg-primary/[0.04] sm:flex-row sm:items-center sm:gap-5 sm:rounded-lg sm:px-3 sm:py-4"
              >
                {/* thumbnail */}
                <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-black shadow-sm ring-1 ring-black/5 transition-shadow group-hover:shadow-lg sm:w-40 lg:w-48">
                  <img
                    src={v.image}
                    alt={v.title}
                    loading="lazy"
                    width={640}
                    height={360}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-7 w-7 fill-white text-white" />
                  </div>
                  <span className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm">
                    {v.date}
                  </span>
                </div>

                {/* text + index + arrow row */}
                <div className="flex flex-1 items-center gap-3 sm:gap-4">
                  <span className="shrink-0 font-mono text-xs font-semibold tabular-nums text-muted-foreground/50 sm:text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="min-w-0 flex-1 font-display text-base font-bold text-foreground transition-colors group-hover:text-primary sm:text-lg lg:text-xl">
                    {t(v.title)}
                  </h3>

                  <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:flex">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}