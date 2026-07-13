import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FaInstagram, FaFacebookF, FaXTwitter, FaPinterestP, FaArrowRight } from 'react-icons/fa6';

import {
  Radio,
  Calendar,
  MapPin,
  ArrowRight,
  Bell,
  AlertCircle,
  Info,
  AlertTriangle,
  Landmark,
  History,
  Building2,
  Youtube,
  Camera,
  Play,
  Target,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Accessibility,
  Scale,
  PartyPopper,
  Pin,
  ScrollText,
  ChevronLeft,
  ChevronRight, Users,
  type LucideIcon,
} from "lucide-react";
import parichayHero from "@/assets/samaj-parichay-hero.jpg";
import shapeEvent from "@/assets/about-shap-top.png";
import parichaySlide1 from "@/assets/hero-slide-1.jpg";
import parichaySlide2 from "@/assets/hero-slide-2.jpg";
import parichaySlide3 from "@/assets/hero-slide-3.jpg";
import parichaySlide4 from "@/assets/hero-slide-4.jpg";
import { YOUTUBE_CHANNEL_URL } from "@/lib/live-events-data";
import { notices, upcomingEvents, pastEvents } from "@/lib/events-data";
import { members } from "@/lib/members-data";
import { MemberCard } from "@/components/MemberCard";
import { galleryPhotos } from "@/lib/gallery-data";
import { samajVideos } from "@/lib/videos-data";
import { useLang } from "@/lib/i18n";
import { CommunityFeedback } from "@/components/CommunityFeedback";

/* Focus ring used on every interactive element — keyboard users get a
   clearly visible, on-brand outline instead of the browser default. */
const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2";
const FOCUS_RING_DARK =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2C050D]";

export const Route = createFileRoute("/index - Copy")({
  head: () => ({
    meta: [
      { title: "कोहळी समाज विकास मंडळ नागपूर" },
      { name: "description", content: "कोहळी समाज विकास मंडळ नागपूर — शिक्षण, रोजगार, सामाजिक न्याय आणि सर्वांगीण विकासासाठी समर्पित डिजिटल व्यासपीठ." },
      { property: "og:title", content: "कोहळी समाज विकास मंडळ नागपूर" },
      { property: "og:description", content: "एक समाज • एक ओळख • एक दिशा • एक विकास" },
    ],
  }),
  component: HomePage,
});
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

function BandLabel({ eyebrow, title, sub, dark = false }: { eyebrow: string; title: string; sub?: string; dark?: boolean }) {
  const accent = dark ? "var(--gold-400)" : "var(--gold-700)";
  return (
    <div className="relative text-center">
      <div className="flex items-center justify-center gap-3">
        <span aria-hidden="true" className="h-px w-8 sm:w-12" style={{ background: `linear-gradient(90deg, transparent, ${accent})` }} />
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] sm:text-xs sm:tracking-[0.3em]" style={{ color: accent }}>
          {eyebrow}
        </span>
        <span aria-hidden="true" className="h-px w-8 sm:w-12" style={{ background: `linear-gradient(270deg, transparent, ${accent})` }} />
      </div>
      <h2
        className="script-heading2 relative mt-3 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
        style={dark ? { color: "#f0d585", textShadow: "0 2px 26px rgba(212,175,55,0.28)" } : undefined}
      >
        {title}
      </h2>
      {sub ? (
        <p className={`relative mx-auto mt-3 max-w-2xl px-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-[#6b5843]"}`}>{sub}</p>
      ) : null}
    </div>
  );
}

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Ananada Anh",
    designation: "Temple Administrator",
    image: "assets/images/team/team-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptates modi omnis dolore et mollitia dolorem alias voluptatibus."
  },
  {
    id: 2,
    name: "Manjusri Bankei",
    designation: "Temple Monk",
    image: "assets/images/team/team-2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptates modi omnis dolore et mollitia dolorem alias voluptatibus."
  },
  {
    id: 3,
    name: "Banzan Bao",
    designation: "Temple Monk",
    image: "assets/images/team/team-3.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptates modi omnis dolore et mollitia dolorem alias voluptatibus."
  }
];
const videos = [
  {
    title: "AGM Highlights 2025",
    description: "Key moments from last year's general meeting.",
    thumbnail:
      "https://images.unsplash.com/photo-1666244453401-43a8c15b5640?w=700&q=80&fit=crop&auto=format",
    type: "youtube",
    src: "dQw4w9WgXcQ", // TODO: replace with real YouTube video ID
  },
  {
    title: "Samaj Milan Samaroh",
    description: "Full recording of the annual cultural celebration.",
    thumbnail:
      "https://images.unsplash.com/photo-1667670651830-2d5bcd0e4f8f?w=700&q=80&fit=crop&auto=format",
    type: "youtube",
    src: "dQw4w9WgXcQ", // TODO: replace with real YouTube video ID
  },
  {
    title: "Scholars' Felicitation",
    description: "Honouring our academic achievers on stage.",
    thumbnail:
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=700&q=80&fit=crop&auto=format",
    type: "youtube",
    src: "dQw4w9WgXcQ", // TODO: replace with real YouTube video ID
  },
];
function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
 
  return (
    <div className="group bg-[#3d0a16] border border-[#D4AF37]/30 overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
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
            <span className="absolute inset-0 bg-gradient-to-b from-[#2C050D]/35 to-[#2C050D]/75" />
            <span className="relative z-10 w-[52px] h-[52px] rounded-full bg-[#D4AF37]/90 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#2C050D] ml-[3px]">
                <path d="M6 4 L20 12 L6 20 Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
 
      <div className="p-[18px] px-5">
        <h4 className="font-serif text-[0.94rem] text-[#E8C468] mb-1.5">
          {video.title}
        </h4>
        <p className="text-[0.82rem] text-[#F5E6C8]/75 leading-relaxed mb-3">
          {video.description}
        </p>
        {!playing && (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="text-[0.8rem] font-bold text-[#D4AF37] border-b border-[#C9A227] pb-0.5"
          >
            Watch now →
          </button>
        )}
      </div>
    </div>
  );
}


function HomePage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      {/* HERO CAROUSEL */}
      <HeroCarousel />
  
      {/* Live Events */}
      {/* <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 texture-maroon-grain opacity-70" />
        <div className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full ambient-glow-gold" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle,rgba(212,175,55,0.14),transparent 70%)", filter: "blur(60px)" }} />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <BandLabel eyebrow="Live Right Now" title={t("समाज कार्यक्रम थेट")} sub={t("वार्षिक सर्वसाधारण सभेत सहभागी व्हा — जोडले जा, सहभागी व्हा, एकत्र वाढा")} />

          <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-[0.55fr_1fr]">
          
            <div className="flex flex-col justify-center gap-5 rounded-3xl border border-[var(--gold-500)]/25 bg-white/[0.04] p-6 backdrop-blur-sm sm:gap-6 sm:p-8"  style={{ background: "linear-gradient(160deg,#2C050D 0%,#4A0B1A 55%,#5c0f21 100%)" }}>
              <div className="flex items-end gap-4">
                <span className="font-display text-6xl font-black leading-none text-[var(--gold-300)] sm:text-7xl">१५</span>
                <div className="pb-2">
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--gold-400)]">जून</p>
                  <p className="text-xs text-white/50">२०२६</p>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-[var(--gold-500)]/50 to-transparent" />
              <h3 className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">{t("कोहळी समाज वार्षिक अधिवेशन सभा")}</h3>
              <p className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 text-[var(--gold-400)]" />
                {t("समाज भवन, नागपूर")}
              </p>
              <p className="text-sm leading-relaxed text-white/70">
                {t("कोहळी समाज विकास मंडळ नागपूरच्या वतीने आयोजित वार्षिक सर्वसाधारण सभेमध्ये समाजाच्या शैक्षणिक, सामाजिक आणि आर्थिक विकासाचा आढावा घेतला जाईल.")}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/live-events"
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-6 py-2.5 text-sm font-bold text-[#3b0a0a] shadow-[0_10px_24px_-10px_rgba(212,175,55,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-10px_rgba(212,175,55,0.7)] ${FOCUS_RING_DARK}`}
                >
                  {t("अधिक पहा")} <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 ${FOCUS_RING_DARK}`}
                >
                  <Youtube className="h-4 w-4" /> YouTube
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl p-2" style={{ background: "linear-gradient(135deg,var(--gold-600),var(--gold-300),var(--gold-600))" }}>
              <div className="overflow-hidden rounded-[1.25rem] bg-black">
                <div className="flex items-center justify-between px-4 py-3 sm:px-5" style={{ background: "linear-gradient(90deg,#1a0104,#2C050D)" }}>
                  <span className="flex items-center gap-2 text-sm font-semibold text-[var(--gold-300)]">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                    </span>
                    <span className="hidden sm:inline">{t("थेट प्रसारण")}</span>
                  </span>
                  <span className="text-xs font-medium text-white/50">1.2k {t("पाहणारे")}</span>
                </div>
                <div className="relative aspect-video w-full">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/live_stream?channel=UCBR8-60-B28hp2BmDPdntcQ"
                    title="YouTube Live Stream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
         <Toran tone="gold" /> 
      </section> */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative elements with maroon/gold tones */}
        <img src={shapeEvent} className="pointer-events-none absolute top-0 left-0 w-[40%] z-0" />
        {/* <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#c9432f]/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_40%,rgba(163,130,47,0.06)_80%)]" /> */}

        {/* Subtle grid pattern */}
        {/* <div className="pointer-events-none absolute inset-0 opacity-40" style={{
          backgroundImage: "radial-gradient(#a3822f 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} /> */}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sm:py-16 lg:px-8 lg:py-20 ">
          {/* Header */}
           <SectionHeader
            align="center"
            eyebrow="Live Right Now"
            title={t("समाज कार्यक्रम थेट")}
            subtitle={t("वार्षिक सर्वसाधारण सभेत सहभागी व्हा — जोडले जा, सहभागी व्हा, एकत्र वाढा")}
          />    

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left: Event details */}
            <div className="rounded-2xl bg-white p-8 shadow-xl shadow-[#a3822f]/10 ring-1 ring-[#eee3ce]">
              <div className="flex items-start gap-6">
                {/* Date block */}
                <div className="flex shrink-0 flex-col items-center rounded-xl bg-gradient-to-br from-[#a3822f] to-[#8a6d1f] px-5 py-3 text-white shadow-lg shadow-[#a3822f]/25">
                  <span className="text-3xl font-bold leading-none">१५</span>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#f0e0b0]">जून</span>
                  <span className="mt-0.5 text-[10px] font-bold text-white/70">२०२६</span>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-bold leading-tight text-[#2a0507]">
                    {t("कोहळी समाज वार्षिक अधिवेशन सभा")}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-2 text-sm text-[#6b5843]">
                    <MapPin className="h-4 w-4 text-[#a3822f]" />
                    {t("समाज भवन, नागपूर")}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-100">
                      <Radio className="mr-1.5 h-3 w-3 animate-pulse text-red-500" />
                      Live
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#f7f1e3] px-3 py-1 text-xs font-medium text-[#8a6d1f] ring-1 ring-[#eee3ce]">
                      {t("सर्वसाधारण सभा")}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#faece0] px-3 py-1 text-xs font-medium text-[#7a3a1a] ring-1 ring-[#f0d8c0]">
                      <Target className="h-3 w-3" />
                      {t("वार्षिक आढावा")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 space-y-3 border-t border-[#f0e8d8] pt-6">
                <p className="text-base leading-relaxed text-[#54473a]">
                  {t("कोहळी समाज विकास मंडळ नागपूरच्या वतीने आयोजित वार्षिक सर्वसाधारण सभेमध्ये समाजाच्या शैक्षणिक, सामाजिक आणि आर्थिक विकासाचा आढावा घेतला जाईल. सभेमध्ये विविध योजनांची माहिती, नवीन प्रकल्पांची घोषणा आणि समाजातील मान्यवरांचे मार्गदर्शन अपेक्षित आहे.")}
                </p>
                <p className="text-base leading-relaxed text-[#6b5843]">
                  {t("या सभेत युवक व महिला विकास, रोजगार मार्गदर्शन, शैक्षणिक शिष्यवृत्ती आणि सामाजिक एकता यावर विशेष चर्चा होईल. थेट प्रसारणाद्वारे दूरवर बसलेल्या सर्व समाज बांधवांना या कार्यक्रमाचा लाभ घेता येईल.")}
                </p>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/live-events"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2a0507] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#2a0507]/20 transition hover:bg-[#3b0a0a] hover:shadow-xl hover:scale-[1.02]"
                >
                  {t("अधिक पहा")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#eee3ce] bg-white px-6 py-2.5 text-sm font-semibold text-[#2a0507] transition hover:bg-[#f7f1e3] hover:border-[#e0d0a8] hover:shadow-md"
                >
                  <Youtube className="h-4 w-4 text-red-600" />
                  {t("YouTube वर पहा")}
                </a>
              </div>

            </div>

            {/* Right: Stream card */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-[#a3822f]/10 ring-1 ring-[#eee3ce]">
                {/* Stream header */}
                <div className="flex items-center justify-between border-b border-[#f0e8d8] bg-gradient-to-r from-[#f7f1e3]/60 to-transparent px-5 py-3">
                  <span className="flex items-center gap-2 text-sm font-semibold text-[#8a6d1f]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                    </span>
                    {t("थेट प्रसारण")}
                  </span>
                  <span className="text-xs font-medium text-[#a3822f]">1.2k {t("पाहणारे")}</span>
                </div>

                {/* Video player */}
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/live_stream?channel=UCBR8-60-B28hp2BmDPdntcQ"
                    title="YouTube Live Stream"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    Live
                  </div>
                </div>

                {/* Stream info */}
                <div className="flex items-start gap-3 px-5 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f7f1e3] text-[#a3822f]">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2a0507]">{t("समाज अधिवेशन सभा")}</h4>
                    <p className="text-sm text-[#6b5843]">{t("General Body Meeting — कोहळी समाज विकास मंडळ नागपूर")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
            <div className="relative z-10 mx-auto mt-8">
                <div className="relative rounded-2xl border border-[var(--gold-500)]/40 bg-gradient-to-br from-[#2a0507] to-[#1a0104] px-5 py-5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] sm:px-8 sm:py-6">
                
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                    {/* Rotated wax-seal date stamp */}
                    <div className="flex shrink-0 justify-center sm:justify-start">
                      <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 rotate-[-8deg] flex-col items-center justify-center rounded-full border-2 border-dashed border-[#3b0a0a]/40 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[#3b0a0a] shadow-[0_6px_16px_-4px_rgba(212,175,55,0.5)]">
                        <span className="font-display text-xl sm:text-2xl font-bold leading-none">५</span>
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase">जुलै २०२६</span>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 text-center sm:text-left">
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                        <span className="inline-flex items-center rounded-full bg-red-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-red-300 border border-red-500/30">
                          <Radio className="mr-1 h-3 w-3 animate-pulse" />
                          Live
                        </span>
                        <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-white/70 border border-white/10">
                          {t("Upcoming Event")}
                        </span>
                      </div>
                      <h4 className="mt-2 font-display text-lg sm:text-xl font-bold text-white leading-snug">
                        {t("युवक विकास कार्यशाळा ")}
                      </h4>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--gold-300)]">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        {t("समाज भवन, नागपूर")}
                      </p>
                    </div>

                    {/* Vertical divider on desktop */}
                    <div className="hidden h-16 w-px shrink-0 bg-gradient-to-b from-transparent via-[var(--gold-500)]/40 to-transparent sm:block" />

                    {/* CTAs */}
                    <div className="flex shrink-0 flex-col gap-2 sm:gap-2.5">
                      <Link
                        to="/live-events"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-5 py-2 text-xs sm:text-sm font-bold text-[#3b0a0a] shadow-[0_8px_20px_-8px_rgba(212,175,55,0.6)] transition hover:-translate-y-0.5"
                      >
                        {t("सर्व कार्यक्रम पहा")} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={YOUTUBE_CHANNEL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2 text-xs sm:text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                      >
                        <Youtube className="h-3.5 w-3.5" />
                        {t("YouTube")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </section>

      {/* Notices & Upcoming Events */}
      
      <Section>
  <SectionHeader
    eyebrow="Notices & Events"
    title={t("सूचना आणि पुढील कार्यक्रम व उपक्रम")}
    subtitle={t("समाजाच्या महत्त्वाच्या सूचना आणि आगामी कार्यक्रमांची सविस्तर माहिती.")}
  />

  <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_2fr] lg:items-start">
    {/* ============ Left — hanging announcement scroll ============ */}
    <div className="relative mx-auto max-w-sm lg:mx-0">
      <div className="mb-6 flex items-center gap-2.5 pl-2">
        <Bell className="h-4 w-4 text-primary" />
        <h3 className="font-display text-lg font-bold text-foreground">{t("सूचना")}</h3>
      </div>

      {/* top dowel the scroll hangs from */}
      <div className="relative mx-3 h-3 rounded-full bg-gradient-to-b from-secondary to-secondary/70 shadow-soft">
        <span className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-secondary/80" />
        <span className="absolute -right-1.5 top-0 h-3 w-3 rounded-full bg-secondary/80" />
      </div>
      {/* two threads holding it */}
      <div className="mx-auto flex w-full justify-between px-6">
        <span className="h-4 w-px bg-border" />
        <span className="h-4 w-px bg-border" />
      </div>

      {/* the parchment itself */}
      <div className="relative border-x border-border/60 bg-card px-6 pb-10 pt-6 shadow-soft">
        <div className="space-y-7">
          {notices.slice(0, 2).map((n, i) => {
            const dot =
              n.type === "तातडीची" ? "bg-destructive" : n.type === "महत्त्वाची" ? "bg-primary" : "bg-secondary";
            return (
              <div key={n.id}>
                {i > 0 && <div className="mb-7 border-t border-dashed border-border/70" />}
                <div className="flex items-start gap-3">
                  <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${dot}`} />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        {t(n.type)}
                      </span>
                      <span className="text-[10px] text-muted-foreground/70">{n.date}</span>
                    </div>
                    <h4 className="mt-1 font-display text-base font-bold leading-snug text-foreground">
                      {t(n.title)}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t(n.desc)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          to="/notices"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          {t("सर्व सूचना पहा")} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* bottom dowel with pennant notch */}
      {/* <div className="relative mx-3 h-3 rounded-full bg-gradient-to-b from-secondary/70 to-secondary shadow-soft">
        <span className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-secondary/60" />
        <span className="absolute -right-1.5 top-0 h-3 w-3 rounded-full bg-secondary/60" />
      </div> */}
      <div
        className="-mt-[1px] h-7 bg-card"
        style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        aria-hidden
      />
    </div>

    {/* ============ Right — patrika (invitation card) for next event ============ */}
    <div>
      <div className="mb-7 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground shadow-soft">
          <Calendar className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">{t("कार्यक्रम व उपक्रम")}</h3>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {[
          { label: "पुढील कार्यक्रम", ev: upcomingEvents[0], tone: "primary" as const },
          { label: "झालेले कार्यक्रम", ev: pastEvents[0], tone: "secondary" as const },
        ].map(({ label, ev, tone }) =>
          ev ? (
            <Link
              key={label}
              to="/events/$eventId"
              params={{ eventId: ev.id }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <span
                className={`absolute -top-2.5 left-5 z-10 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-soft ${
                  tone === "primary" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                {t(label)}
              </span>

              {/* image + postage-stamp date badge */}
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

              {/* perforated tear line */}
              <div className="relative">
                <div className="border-t-2 border-dashed border-border" />
                <span className="absolute -left-[9px] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-background" aria-hidden />
                <span className="absolute -right-[9px] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-background" aria-hidden />
              </div>

              <div className="flex flex-1 flex-col p-5 pt-4">
                <h4 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {t(ev.name)}
                </h4>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {t("सविस्तर पहा")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ) : null,
        )}
      </div>

      <Link
        to="/events"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.02]"
      >
        {t("सर्व कार्यक्रम पहा")} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
</Section>

    {/* Services preview */}
    {/* <div className="bg-surface">
      <Section>
        <SectionHeader
          eyebrow="Services"
          title={t("समाज विकासासाठी आधुनिक डिजिटल सेवा")}
          subtitle={t("शैक्षणिक, सामाजिक आणि आर्थिक प्रगतीसाठी विविध डिजिटल सेवा एकाच व्यासपीठावर.")}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {servicesPreview.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {s.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t(s.desc)}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {t("अधिक जाणून घ्या")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </Section>
    </div> */}



<section className="bg-[#fff] py-16 px-4 md:py-20" id="services">
  <div className="container max-w-6xl mx-auto">
    <SectionHeader
    align="center"
      eyebrow="Services"
      title={t("समाज विकासासाठी आधुनिक डिजिटल सेवा")}
      subtitle={t("शैक्षणिक, सामाजिक आणि आर्थिक प्रगतीसाठी विविध डिजिटल सेवा एकाच व्यासपीठावर.")}
      />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      
            {servicesPreview.map((s) => (
               <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer" className="group corner-frame bg-white px-7 py-9 text-center relative border border-[#6b1024]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(107,16,36,0.15)] hover:border-[#b8860b]">
              <span className="corner-tl"></span><span className="corner-br"></span>
                <div className="w-[66px] h-[66px] rounded-full border-2 border-[#b8860b] flex items-center justify-center mx-auto mb-5 bg-gradient-to-br from-[#6b1024] to-[#4a0b18]">
                  {/* <svg className="w-[30px] h-[30px] stroke-[#d4a847]" viewBox="0 0 24 24" fill="none" stroke-width="1.6">
                    <path d="M12 21 C 6 17 3 13 3 9 C 3 6 5 4 8 4 C 10 4 12 6 12 8 C 12 6 14 4 16 4 C 19 4 21 6 21 9 C 21 13 18 17 12 21 Z"/>
                  </svg> */}
                  {s.icon}
                </div>
                <h3 className="font-['Cinzel',serif] text-[#6b1024] text-base md:text-[1.02rem] mb-2.5">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(s.desc)}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {t("अधिक जाणून घ्या")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
    

    </div>
  </div>
</section>

      {/* Committee */}
      
      <section className="team-section-1 pt-24 md:pt-20 pb-24 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">
          {/* Left Column - Sticky */}
          <div className="w-full lg:w-1/3 px-4">
            <div className="team-left ">
              {/* Section Title */}
              <SectionHeader
                align="left"
                eyebrow="Executive Committee"
                title={t("कार्यकारिणी मंडळ")}
                subtitle={t("समाजाच्या प्रगतीसाठी समर्पित प्रमुख पदाधिकारी")}
              />
              
              {/* Team Button */}
              <div className="">
                <Link
                  to="/committee"
                  className="group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]"
                >
                  {t("संपूर्ण कार्यकारिणी पहा")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Team List */}
          <div className="w-full lg:w-2/3 px-4 mt-10 lg:mt-0">
            <div className="team-right">
              <div className="team-list space-y-7  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {members.slice(0, 3).map((m) => (
                  <MemberCard key={m.id} member={m} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* समाज परिचय — Samaj Parichay */}
      <div className="bg-surface">
        <Section>
          <SectionHeader
            eyebrow="Samaj Parichay"
            title={t("समाज परिचय")}
            subtitle={t("कोहळी समाजाचा इतिहास, वारसा आणि समाज भवनांची सविस्तर माहिती.")}
          />
          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
            {/* Left: auto-sliding image carousel */}
            <ParichayImageSlider />

            {/* Right: cards */}
            <div className="flex flex-col justify-center gap-5">
              {parichayCards.map((card) => (
                <Link
                  key={card.id}
                  to="/samaj-parichay/$topicId"
                  params={{ topicId: card.id }}
                  className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant sm:p-7"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <card.icon className="h-8 w-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
                      {card.eyebrow}
                    </p>
                    <h4 className="mt-1 font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                      {t(card.title)}
                    </h4>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      {t("सविस्तर वाचा")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* फोटो गॅलरी — Photo Gallery */}
       <section className="bg-[#f5f0e8] py-16 md:py-24" id="gallery">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <SectionHeader
        align="center"
          eyebrow="Photo Gallery"
          title={t("फोटो गॅलरी")}
          subtitle={t("समाजातील विविध कार्यक्रम, उपक्रम आणि अविस्मरणीय क्षणांचे छायाचित्र संग्रह")}
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {galleryPhotos.slice(0, 3).map((p) => (
            <div
              key={p.id}
              className="aspect-square bg-[#faf3e8] p-2 relative group"
            >
              <div className="w-full h-full border border-[#b8860b] relative overflow-hidden">
                <img
                  src={p.image}
                  alt={t(p.title)}
                  loading="lazy"
                  className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Caption */}
                <div className="absolute left-0 right-0 bottom-0 px-3 py-2 md:px-4 md:py-3 bg-gradient-to-t from-[#2c050d]/90 to-transparent">
                  <span className="block text-[#fbf0d0] font-serif text-[0.6rem] md:text-xs uppercase tracking-wider">
                    {t(p.title)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* <Section>
        <SectionHeader
          eyebrow="Photo Gallery"
          title={t("फोटो गॅलरी")}
          subtitle={t("समाजातील विविध कार्यक्रम, उपक्रम आणि अविस्मरणीय क्षणांचे छायाचित्र संग्रह")}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.slice(0, 3).map((p) => (
            <article
              key={p.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={t(p.title)}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-card/95 px-3 py-1 text-[11px] font-bold text-primary shadow-soft backdrop-blur">
                  <Camera className="h-3.5 w-3.5" />
                  Photo
                </span>
              </div>
              <div className="flex flex-col p-5">
                <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  {p.date}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                  {t(p.title)}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.02]"
          >
            {t("सर्व फोटो पहा")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section> */}

      {/* समाजदर्शन — Video Gallery */}
        <section
      id="darshan"
      className="relative text-[#F5E6C8]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(44,5,13,0.94), rgba(74,11,26,0.9)), url('https://images.unsplash.com/photo-1577083753695-e010191bacb5?w=1600&q=80&fit=crop&auto=format')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(60deg, rgba(212,175,55,0.055) 0 1.5px, transparent 1.5px 26px),
            repeating-linear-gradient(-60deg, rgba(212,175,55,0.055) 0 1.5px, transparent 1.5px 26px),
            repeating-linear-gradient(0deg, rgba(212,175,55,0.035) 0 1.5px, transparent 1.5px 26px)`,
        }}
      />
 
      <div className="relative z-[2] max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
            <span className="w-8 h-px bg-[#D4AF37]/60" />
            Watch &amp; Witness
            <span className="w-8 h-px bg-[#D4AF37]/60" />
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-[#E8C468]">
            Samaj Darshan
          </h2>
          <p className="mt-3 text-[#F5E6C8]/80 max-w-xl mx-auto">
            Recorded ceremonies, cultural performances and Samaj proceedings.
            Replace each link with your video URL.
          </p>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>
      </div>
    </section>
      <div className="bg-surface">
        <Section>
          <SectionHeader
            eyebrow="Samajdarshan"
            title={t("समाजदर्शन")}
            subtitle={t("समाजातील विविध कार्यक्रम, उपक्रम आणि महत्त्वाच्या क्षणांचे व्हिडिओ संग्रह.")}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {samajVideos.slice(0, 3).map((v) => (
              <a
                key={v.id}
                href={v.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={v.thumbnail}
                    alt={t(v.title)}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-destructive text-white shadow-2xl transition-transform group-hover:scale-110">
                      <Play className="h-7 w-7 fill-current" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {v.date}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                    {t(v.title)}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {t(v.description)}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/samajdarshan"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.02]"
            >
              {t("सर्व व्हिडिओ पहा")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      </div>

      {/* समाज संवाद — Report Problem & Suggestions */}
      <CommunityFeedback />

    </SiteLayout>
  );
}



const parichayCards: { id: string; eyebrow: string; title: string; icon: LucideIcon }[] = [
  {
    id: "itihas-varsa",
    eyebrow: "History & Origin",
    title: "समाजाची उत्पत्ती",
    icon: History,
  },
  {
    id: "samaj-bhavan",
    eyebrow: "Community Halls",
    title: "समाज भवन",
    icon: Building2,
  },
];

const parichaySlides = [parichayHero, parichaySlide1, parichaySlide2, parichaySlide3, parichaySlide4];

function ParichayImageSlider() {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % parichaySlides.length), 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-elegant sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[520px]">
        {parichaySlides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="कोहळी समाज ऐतिहासिक वारसा"
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-secondary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground">
            <Landmark className="h-3.5 w-3.5" />
            History & Heritage
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
            {t("आमचा गौरवशाली वारसा")}
          </h3>
          <p className="mt-1 text-sm text-white/80">
            {t("परंपरा, संस्कृती आणि समाज भवनांचा प्रवास")}
          </p>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-1.5">
          {parichaySlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const servicesPreview = [
  {
    href: "https://ksvm.lovable.app/",
    icon: <svg className="w-[30px] h-[30px] stroke-[#d4a847]" viewBox="0 0 24 24" fill="none" stroke-width="1.6">
            <path d="M12 21 C 6 17 3 13 3 9 C 3 6 5 4 8 4 C 10 4 12 6 12 8 C 12 6 14 4 16 4 C 19 4 21 6 21 9 C 21 13 18 17 12 21 Z"/>
          </svg>,
    title: "Socio-Economic Portal",
    desc: "समाजाची सामाजिक, शैक्षणिक, आर्थिक आणि व्यावसायिक माहिती एकत्रित करणारे डिजिटल पोर्टल.",
  },
  {
    href: "#",
    icon: <svg className="w-[30px] h-[30px] stroke-[#d4a847]" viewBox="0 0 24 24" fill="none" stroke-width="1.6">
            <path d="M12 3 L21 8 L12 13 L3 8 Z"/>
            <path d="M6 10 V16 C6 18 9 19 12 19 C15 19 18 18 18 16 V10"/>
          </svg>,
    title: "Scholarships & Education",
    desc: "Financial aid and mentorship for meritorious students of the Samaj.",
  },
  {
    href: "#",
    icon: <svg  className="w-[30px] h-[30px] stroke-[#d4a847]" viewBox="0 0 24 24" fill="none" stroke-width="1.6"><path d="M4 21 V10 L12 4 L20 10 V21 Z"/><path d="M9 21 V14 H15 V21"/></svg>,
    title: "Healthcare Assistance",
    desc: "Medical camps, insurance guidance and emergency support funds.",
  },
];
