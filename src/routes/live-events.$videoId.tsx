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
  loader: ({ params }) => {
    const video = getLiveVideoById(params.videoId);
    if (!video) throw notFound();
    return { video };
  },
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
  const { video } = Route.useLoaderData();
  const { t } = useLang();
  const related = liveVideos.filter((v) => v.id !== video.id).slice(0, 3);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-[oklch(0.22_0.08_28)] py-14 sm:py-20">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link to="/live-events" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline">
            <ArrowLeft className="h-4 w-4" /> {t("सर्व थेट प्रसारण")}
          </Link>

          <div className="mt-6">
            <h1 className="font-display text-3xl font-bold text-white sm:text-5xl">
              {t(video.title)}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-secondary/90">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {video.date}
              </span>
              {video.location && (
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {t(video.location)}
                </span>
              )}
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-3xl border border-secondary/40 shadow-2xl">
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <img
                src={video.image}
                alt={video.title}
                className="h-full w-full object-cover"
                width={1280}
                height={720}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl ring-4 ring-white/30">
                  <span className="absolute inset-0 animate-ping rounded-full bg-red-600/50" />
                  <Play className="h-10 w-10 fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            {t("कार्यक्रमाची माहिती")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t(video.description)}
          </p>
          {video.details && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t(video.details)}
            </p>
          )}

          {related.length > 0 && (
            <div className="mt-14">
              <h3 className="font-display text-xl font-bold text-foreground">
                {t("इतर थेट प्रसारण")}
              </h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {related.map((v) => (
                  <Link
                    key={v.id}
                    to="/live-events/$videoId"
                    params={{ videoId: v.id }}
                    className="group overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      <img src={v.image} alt={v.title} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/40">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white ring-2 ring-white/30">
                          <Play className="h-5 w-5 fill-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-display text-sm font-bold text-foreground group-hover:text-primary">{t(v.title)}</p>
                      <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 text-primary" /> {v.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </SiteLayout>
  );
}
