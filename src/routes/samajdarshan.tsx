import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section } from "@/components/ui/Section";
import { samajVideos } from "@/lib/videos-data";
import { useLang } from "@/lib/i18n";
import {ArrowRight, type LucideIcon,} from "lucide-react";
import videogallery from "@/assets/video_gallery.jpg"
/* ============================================================
   DESIGN TOKENS
   ============================================================ */
const MAROON_950 = "var(--maroon-black)";
const MAROON_900 = "var(--maroon-950)";
const MAROON_800 = "var(--maroon-925)";
const MAROON_700 = "var(--maroon-900)";
const CREAM = "var(--paper)";

const videos = [
  {
    title: "AGM Highlights 2025",
    description: "Key moments from last year's general meeting.",
    thumbnail:
      "https://images.unsplash.com/photo-1666244453401-43a8c15b5640?w=700&q=80&fit=crop&auto=format",
    type: "youtube",
    src: "dQw4w9WgXcQ", // TODO: replace with real YouTube video ID
    date:"02-07-206"
  },
  {
    title: "Samaj Milan Samaroh",
    description: "Full recording of the annual cultural celebration.",
    thumbnail:
      "https://images.unsplash.com/photo-1667670651830-2d5bcd0e4f8f?w=700&q=80&fit=crop&auto=format",
    type: "youtube",
    src: "dQw4w9WgXcQ", // TODO: replace with real YouTube video ID
     date:"02-07-206"
  },
  {
    title: "Scholars' Felicitation",
    description: "Honouring our academic achievers on stage.",
    thumbnail:
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=700&q=80&fit=crop&auto=format",
    type: "youtube",
    src: "dQw4w9WgXcQ", // TODO: replace with real YouTube video ID
     date:"02-07-206"
  },
];



function VideoCard({ video }: any) {
   const [playing, setPlaying] = useState(false);
 
  return (
    <div className="rounded-2xl group bg-[var(--maroon-925)] border border-[var(--gold-500)]/30 overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
      <div className="relative aspect-video">
        {playing ? (
          video.type === "youtube" ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.src}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={video.src}
              controls
              autoPlay
            />
          )
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url('${video.thumbnail}')` }}
          >
            <span className="relative z-10 w-[52px] h-[52px] rounded-full bg-[var(--gold-500)] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[var(--maroon-950)] ml-[3px]">
                <path d="M6 4 L20 12 L6 20 Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
 
      <div className="p-[20px] px-5">
        <h4 className="font-bold text-[22px] text-[var(--gold-text-alt)] mb-2">
          {video.title}
        </h4>
        <p className="text-[16px] text-[var(--cream-text)]/75 leading-relaxed mb-3">
          {video.description}
        </p>
        <p className="text-[16px] font-bold text-[var(--gold-500)] flex gap-2 items-center">
         <Calendar className="h-[15px] w-[15px]"/> {video.date}
        </p>
      </div>
    </div>
  );
}
export const Route = createFileRoute("/samajdarshan")({
  head: () => ({
    meta: [
      { title: "समाजदर्शन | कोहळी समाज विकास मंडळ नागपूर" },
      {
        name: "description",
        content:
          "समाजातील विविध कार्यक्रम, उपक्रम आणि महत्त्वाच्या क्षणांचे व्हिडिओ संग्रह.",
      },
    ],
  }),
  errorComponent: () => (
    <SiteLayout>
      <Section>
        <p className="text-center text-muted-foreground">काहीतरी चूक झाली आहे.</p>
      </Section>
    </SiteLayout>
  ),
  component: SamajDarshanPage,
});

function SamajDarshanPage() {
  const { t } = useLang();
  const router = useRouter();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Samajdarshan"
        title={t("समाजदर्शन")}
        subtitle={t(
          "समाजातील विविध कार्यक्रम, उपक्रम आणि महत्त्वाच्या क्षणांचे व्हिडिओ संग्रह.",
        )}
        backgroundImage={videogallery}
      />
      <section
              className="relative overflow-hidden py-16 sm:py-20">
              <div
                className="pointer-events-none absolute inset-0"
              />
              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                   <button
                    type="button"
                    onClick={() => router.history.back()}
                    className="cursor-pointer group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {t("मुख्यपृष्ठावर परत जा")}
                  </button>
                </div>
                
                <div className="mt-0 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {samajVideos.map((v) => (
                    <VideoCard key={v.id} video={v} />
                  ))}
                </div>
              </div>
            </section>
      
      
    </SiteLayout>
  );
}