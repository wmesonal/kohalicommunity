import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Section } from "@/components/ui/Section";
import { ArrowLeft, Calendar, MapPin, Play } from "lucide-react";
import { getLiveVideoById, liveVideos } from "@/lib/live-events-data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/live-events/$videoId")({
  head: ({ params }) => {
    const v = getLiveVideoById(params.videoId);
    const title = v ? `${v.title} — थेट प्रसारण` : "थेट प्रसारण";
    const desc = v?.description ?? "कोहळी समाज विकास मंडळ नागपूर थेट प्रसारण.";
    return {
      meta: [
        { title: `${title} | कोहळी समाज विकास मंडळ नागपूर` },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  // loader: ({ params }) => {
  //   const video = getLiveVideoById(params.videoId);
  //   if (!video) throw notFound();
  //   return { video };
  // },
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl font-bold">कार्यक्रम सापडला नाही</h1>
          <Link to="/live-events" className="mt-4 inline-block text-primary underline">
            सर्व थेट प्रसारण पहा
          </Link>
        </div>
      </Section>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <Section>
        <p className="text-center text-destructive">{error.message}</p>
        <div className="mt-4 text-center">
          <button onClick={reset} className="text-primary underline">पुन्हा प्रयत्न करा</button>
        </div>
      </Section>
    </SiteLayout>
  ),
  component: VideoDetailPage,
});

function VideoDetailPage() {
  const { videoId } = Route.useParams();
  const video = getLiveVideoById(videoId);
  if (!video) {
    throw notFound();
  }
  const { t } = useLang();
  const related = liveVideos.filter((v) => v.id !== video.id).slice(0, 3);

  return (
    <SiteLayout>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-[oklch(0.22_0.08_28)] pb-40 pt-14 sm:pb-48 sm:pt-20">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-[#d4af37]/20 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #d4af37 0 2px, transparent 2px 40px), repeating-linear-gradient(-45deg, #d4af37 0 2px, transparent 2px 40px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        

          <p className="mx-auto mt-8 flex w-fit items-center gap-3 font-en text-sm italic text-[#d4af37]">
            <span className="h-px w-6 bg-[#a9873a]" />
            {t("कोहळी समाज विकास मंडळ नागपूर")}
            <span className="h-px w-6 bg-[#a9873a]" />
          </p>

          <h1 className="mx-auto mt-4 max-w-3xl text-balance font-display text-3xl font-bold leading-tight text-white drop-shadow-sm sm:text-5xl">
            {t(video.title)}
          </h1>

          {/* flourish divider */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#a9873a]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#d4af37]" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#a9873a]" />
          </div>
        </div>
      </section>

      {/* ---------- VIDEO — ARCH FRAME ---------- */}
      <div className="relative z-10 mx-auto -mt-28 max-w-4xl px-4 sm:-mt-32 sm:px-6 lg:px-8">
        <div className="relative rounded-[28px] bg-gradient-to-b from-[#ecd48f] via-[#d4af37] to-[#a9873a] p-[3px] shadow-[0_30px_60px_-20px_rgba(20,4,7,0.55)]">
          <div className="relative overflow-hidden rounded-[26px] bg-black">
            <div className="relative aspect-video w-full">
              <img
                src={video.image}
                alt={video.title}
                className="h-full w-full object-cover opacity-90"
                width={1280}
                height={720}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/55" />

              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[#a9873a] bg-[#2c0a10] py-1 pl-2 pr-3 text-xs font-semibold text-[#ecd48f]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
                </span>
                {t("थेट")}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#ecd48f,#d4af37_55%,#a9873a_100%)] shadow-[0_8px_30px_rgba(0,0,0,0.5)] ring-4 ring-white/15">
                  <span className="absolute -inset-3.5 animate-ping rounded-full border border-[#d4af37]/50" />
                  <Play className="ml-1 h-8 w-8 fill-[#2c0a10] text-[#2c0a10]" />
                </div>
              </div>
            </div>
          </div>
{/* 
          <span className="pointer-events-none absolute -left-[3px] -top-[3px] h-8 w-8 rounded-tl-[14px] border-l-2 border-t-2 border-[#d4af37]" />
          <span className="pointer-events-none absolute -right-[3px] -top-[3px] h-8 w-8 rounded-tr-[14px] border-r-2 border-t-2 border-[#d4af37]" />
          <span className="pointer-events-none absolute -bottom-[3px] -left-[3px] h-8 w-8 rounded-bl-[6px] border-b-2 border-l-2 border-[#d4af37]" />
          <span className="pointer-events-none absolute -bottom-[3px] -right-[3px] h-8 w-8 rounded-br-[6px] border-b-2 border-r-2 border-[#d4af37]" /> */}
        </div>

        {/* museum-plaque info card, hanging off the bottom edge of the frame */}
        <div className="relative z-20 mx-auto -mt-6 flex w-fit max-w-[92%] flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl border border-[#d4af37]/50 bg-card px-6 py-3.5 shadow-[0_12px_30px_-8px_rgba(20,4,7,0.35)] sm:gap-x-8">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <Calendar className="h-3.5 w-3.5 text-primary" /> {video.date}
          </span>
          {video.location && (
            <>
              <span className="hidden h-4 w-px bg-[#a9873a]/40 sm:inline-block" />
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" /> {t(video.location)}
              </span>
            </>
          )}
        </div>
      </div>

      {/* ---------- BODY ---------- */}
      <Section className="pt-16 sm:pt-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.55fr_1fr]">
          {/* description column */}
          <div>
            <h2 className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-primary">
              {t("कार्यक्रमाची माहिती")}
              <span className="h-px flex-1 bg-gradient-to-r from-accent to-transparent"></span>
            </h2>

            <div className="mt-5 space-y-4 font-display text-lg leading-relaxed text-muted-foreground first-letter:float-left first-letter:mr-2.5 first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-primary">
              <p>{t(video.description)}</p>
            </div>

            {video.details && (
              <div className="relative mt-8 rounded-xl border border-[#d4af37]/30 bg-card px-7 py-6 shadow-sm">
                <span className="pointer-events-none absolute -top-3 left-6 font-display text-5xl leading-none text-[#d4af37]/70">
                  “
                </span>
                <p className="font-bold text-base italic leading-relaxed text-muted-foreground">
                  {t(video.details)}
                </p>
              </div>
            )}
          </div>

          {/* related — vertical timeline */}
          {related.length > 0 && (
            <aside>
              <p className="mb-6 font-en text-lg font-semibold uppercase text-primary">
                {t("इतर थेट प्रसारण")}
              </p>

              <div className="relative space-y-6 border-l-[1.5px] border-[#d4af37]/70 pl-6">
                {related.map((v) => (
                  <Link
                    key={v.id}
                    to="/live-events/$videoId"
                    params={{ videoId: v.id }}
                    className="group relative flex gap-3.5"
                  >
                    <span className="absolute -left-[33px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#d4af37] bg-background">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>

                    <div className="relative aspect-[16/10] w-24 flex-shrink-0 overflow-hidden rounded-t-[16px] rounded-b-md shadow-md ring-1 ring-[#d4af37]/0 transition group-hover:shadow-lg group-hover:ring-[#d4af37]/60">
                      <img
                        src={v.image}
                        alt={v.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                        <Play className="h-4 w-4 fill-[#ecd48f] text-[#ecd48f]" />
                      </div>
                    </div>

                    <div className="pt-0.5">
                      <p className="font-display text-sm font-bold leading-snug text-foreground group-hover:text-primary">
                        {t(v.title)}
                      </p>
                      <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-[#a9873a]">
                        <Calendar className="h-3 w-3" /> {v.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/live-events"
                className="group inline-flex items-center justify-center gap-1.5 rounded-[2px] px-5 py-2.5 sm:px-7 sm:py-3 font-['Mukta'] text-xs sm:text-sm font-bold tracking-[0.02em] transition-all duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2 mt-8"
              >
                {t("सर्व थेट प्रसारण पहा")}
              </Link>
            </aside>
          )}
        </div>

      </Section>
    </SiteLayout>
  );
}