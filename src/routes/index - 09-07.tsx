import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Section, SectionHeader } from "@/components/ui/Section";
import logo from "@/assets/kohali-logo.png";
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
  Briefcase,
  HeartHandshake,
  HeartPulse,
  Accessibility,
  Scale,
  PartyPopper,
  Pin,
  TrendingUp,
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
import background1 from "@/assets/bg-main.jpg";
import videobg from "@/assets/video_bg.png";

import { YOUTUBE_CHANNEL_URL } from "@/lib/live-events-data";
import { notices, upcomingEvents, pastEvents } from "@/lib/events-data";
import { members } from "@/lib/members-data";
import { MemberCard } from "@/components/MemberCard";
import { galleryPhotos } from "@/lib/gallery-data";
import { samajVideos } from "@/lib/videos-data";
import { useLang } from "@/lib/i18n";
import { CommunityFeedback } from "@/components/CommunityFeedback";

// Import images for AboutImageSection
import aboutIcon from "@/assets/kohali-logo.png";
import aboutImg1 from "@/assets/about1.png";
import aboutImg2 from "@/assets/about2.png";
import aboutShape from "@/assets/about-line-shape.png";


/* ============================================================
   DESIGN TOKENS
   ============================================================ */
const MAROON_950 = "#210307";
const MAROON_900 = "#2A0509";
const MAROON_800 = "#3B0A12";
const MAROON_700 = "#4A0B1A";
const CREAM = "#FBF7EF";
/* Focus ring used on every interactive element — keyboard users get a
   clearly visible, on-brand outline instead of the browser default. */
const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2";
const FOCUS_RING_DARK =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2C050D]";

  const galleryRotations = ["rotate-[-4deg]", "rotate-[3deg]", "rotate-[-2deg]", "rotate-[4deg]"];

// =================== ABOUT IMAGE SECTION COMPONENT ===================
const AboutImageSection = ({ 
  iconSrc = aboutIcon,
  mainImageSrc = aboutImg1,
  secondImageSrc = aboutImg2,
  shapeSrc = aboutShape,
  iconBgColor = "bg-[#109c3d]",
  mainImageAlt = "About Image",
  secondImageAlt = "About Image",
  shapeAlt = "counter element",
  link = "/samaj-parichay",
  delay = "0.55s"
}) => {
  return (
    <div 
      className="wow animate__fadeInUp relative w-full"
      data-wow-delay={delay}
    >
      <div className="relative">
        {/* Icon Circle - Centered */}
        <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-[100px] h-[100px] ${iconBgColor} border-8 border-white rounded-full 
                      text-center border-[5px] border-white z-10 transition-all duration-500 hover:bg-green-700`}>
          <img 
            src={iconSrc} 
            alt="icon" 
            className="inline-block align-middle"
          />
        </div>

        {/* Main Image 1 */}
        <div className="rounded-lg overflow-hidden mr-[30px]">
           <img 
              src={mainImageSrc} 
              alt={mainImageAlt} 
              className="w-full transition-all duration-500 transform hover:scale-110"
            />
        </div>

        {/* Image 2 - Bottom Left */}
        <div className="absolute bottom-0 left-0 border-t-8 border-r-8 border-[#fff5e7] 
                      rounded-tr-[10px] h-[250px] w-[250px]">
          <img 
              src={secondImageSrc} 
              alt={secondImageAlt} 
              className="block rounded-[10px]"
            />
        </div>

        {/* Shape Mockup - Right Side */}
        <span className="absolute right-0 top-0 h-full pointer-events-none">
          <img 
            src={shapeSrc} 
            alt={shapeAlt} 
            className="h-full object-contain"
          />
        </span>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/index - 09-07")({
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

type BandLabelProps = {
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
  align?: "left" | "center";
};

function BandLabel({
  eyebrow,
  title,
  sub,
  dark = false,
  align = "center",
}: BandLabelProps) {
  const accent = dark ? "var(--gold-400)" : "var(--gold-700)";
  const textColor = dark ? "#f0d585" : "#760823";

  return (
    <div
      className={`max-w-3xl m-auto relative ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <div
        className={`flex items-center gap-3 ${
          align === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <span
          aria-hidden="true"
          className="h-px w-8 sm:w-12"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent})`,
          }}
        />

        <span
          className="text-[11px] font-bold uppercase tracking-[0.25em] sm:text-xs sm:tracking-[0.3em]"
          style={{ color: accent }}
        >
          {eyebrow}
        </span>

        <span
          aria-hidden="true"
          className="h-px w-8 sm:w-12"
          style={{
            background: `linear-gradient(270deg, transparent, ${accent})`,
          }}
        />
      </div>

      <h2
        className="script-heading2 relative mt-3 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-4xl"
        style={
          dark
            ? {
                color: textColor,
                textShadow: "0 2px 26px rgba(212,175,55,0.28)",
              }
            : {
                color: textColor,
              }
        }
      >
        {title}
      </h2>

      {sub && (
        <p
          className={`relative mt-3 text-base sm:text-lg ${
            align === "center" ? "mx-auto px-4" : ""
          } ${
            dark ? "text-white/70" : "text-[#5f4b35]"
          }`}
        >
          {sub}
        </p>
      )}
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
const pillars: { label: string; icon: LucideIcon }[] = [
  { label: "शिक्षण", icon: GraduationCap },
  { label: "रोजगार", icon: Briefcase },
  { label: "सामाजिक न्याय", icon: Scale },
  { label: "सर्वांगीण विकास", icon: TrendingUp },
];
const devanagariNumerals = ["१", "२", "३", "४", "५"];

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
    <div className="rounded-2xl group bg-[#3d0a16] border border-[#D4AF37]/30 overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
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
            <span className="relative z-10 w-[52px] h-[52px] rounded-full bg-[#D4AF37] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#2C050D] ml-[3px]">
                <path d="M6 4 L20 12 L6 20 Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
 
      <div className="p-[20px] px-5">
        <h4 className="font-serif text-[22px] text-[#E8C468] mb-2">
          {video.title}
        </h4>
        <p className="text-[16px] text-[#F5E6C8]/75 leading-relaxed mb-3">
          {video.description}
        </p>
        <p className="text-[16px] font-bold text-[#D4AF37] flex gap-2 items-center">
         <Calendar className="h-[15px] w-[15px]"/> {video.date}
        </p>
        {/* {!playing && (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="text-[0.8rem] font-bold text-[#D4AF37] border-b border-[#C9A227] pb-0.5"
          >
            Watch now →
          </button>
        )} */}
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
  
   {/* ================= ABOUT US — light — "Rangoli Medallion" ================= */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            {/* Rangoli medallion with the four pillars orbiting it */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AboutImageSection 
            iconSrc={aboutIcon}
            mainImageSrc={aboutImg1}
            secondImageSrc={aboutImg2}
            shapeSrc={aboutShape}
            iconBgColor="bg-[#fff]"
            link="/samaj-parichay"
            delay="0.55s"
          />
        </div>
            <div>
              
              <BandLabel
              align="left"
                  eyebrow="Who We Are"
                  title={t("आमच्याविषयी")}
                />
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                  {t(
                    "कोहळी समाज विकास मंडळ नागपूर हे समाजबांधवांना एका छत्राखाली आणून त्यांच्या शिक्षण, रोजगार, सामाजिक न्याय आणि सर्वांगीण विकासासाठी अविरत कार्य करणारे व्यासपीठ आहे. पिढ्यानपिढ्यांचा वारसा जपत, आम्ही उद्याच्या पिढीसाठी नव्या वाटा घडवत आहोत.",
                  )}
                </p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                  संस्थेच्या माध्यमातून शिक्षण, रोजगार, सामाजिक न्याय, युवक व महिला सक्षमीकरण, सांस्कृतिक जतन, आरोग्य जनजागृती आणि समाजकल्याणाच्या विविध उपक्रमांची सातत्याने अंमलबजावणी केली जाते. विद्यार्थ्यांना शैक्षणिक मार्गदर्शन, गुणवंतांचा सत्कार, स्पर्धा परीक्षा मार्गदर्शन, करिअर समुपदेशन तसेच गरजू समाजबांधवांना आवश्यक ते सहकार्य देण्याचे कार्य संस्था निष्ठेने पार पाडत आहे.
                </p>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">"एकता • शिक्षण • विकास • सेवा" या ब्रीदवाक्याने प्रेरित होऊन, कोहळी समाज विकास मंडळ, नागपूर समाजाच्या उज्ज्वल भविष्यासाठी आणि भावी पिढ्यांच्या प्रगतीसाठी अविरत कार्यरत आहे.</p>

              {/* mobile fallback: pillars as a simple grid */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:hidden">
                {pillars.map((p) => (
                  <div key={p.label} className="flex items-center gap-3 rounded-xl border bg-card p-3 shadow-soft" style={{ borderColor: "var(--gold-500)" }}>
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full" style={{ background: "linear-gradient(160deg, var(--gold-300), var(--gold-600))" }}>
                      <p.icon className="h-4.5 w-4.5 text-[#3b0a0a]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: MAROON_800 }}>
                      {t(p.label)}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/samaj-parichay/$topicId"
                params={{ topicId: "itihas-varsa" }}
                className={`group inline-flex items-center justify-center gap-1 rounded-[2px] mt-4 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)] ${FOCUS_RING}`}
              >
                {t("आमची कथा वाचा")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Events */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${MAROON_900} 0%, ${MAROON_700} 60%, ${MAROON_800} 100%)` }}
      >
         <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(60deg, rgba(212,175,55,0.05) 0 1.5px, transparent 1.5px 26px),
              repeating-linear-gradient(-60deg, rgba(212,175,55,0.05) 0 1.5px, transparent 1.5px 26px)`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 texture-maroon-grain opacity-60" />
        <div className="pointer-events-none absolute -top-40 -right-24 h-96 w-96 rounded-full ambient-glow-gold" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.14), transparent 70%)", filter: "blur(60px)" }} />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <BandLabel
            eyebrow="Live Right Now"
            title={t("समाज कार्यक्रम थेट")}
            sub={t("वार्षिक सर्वसाधारण सभेत सहभागी व्हा — जोडले जा, सहभागी व्हा, एकत्र वाढा")}
            dark
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1fr] lg:gap-8">
            {/* Event details card */}
            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-8">
              <div>
                <div className="flex items-start gap-5">
                  <div className="flex shrink-0 flex-col items-center rounded-2xl bg-gradient-to-br from-[var(--gold-300)] to-[var(--gold-600)] px-4 py-3 text-[#3b0a0a] shadow-[0_10px_24px_-8px_rgba(212,175,55,0.55)]">
                    <span className="text-3xl font-black leading-none">१५</span>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">जून २०२६</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                      {t("कोहळी समाज वार्षिक अधिवेशन सभा")}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-white/60">
                      <MapPin className="h-4 w-4 shrink-0 text-[var(--gold-400)]" />
                      {t("समाज भवन, नागपूर")}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-3 py-1 text-[11px] font-semibold text-red-300 ring-1 ring-red-500/30">
                        <Radio className="h-3 w-3 animate-pulse" />
                        Live
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 ring-1 ring-white/10">
                        <Target className="h-3 w-3" />
                        {t("वार्षिक आढावा")}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-[16px] leading-relaxed text-white/70">
                  {t(
                    "कोहळी समाज विकास मंडळ नागपूरच्या वतीने आयोजित वार्षिक सर्वसाधारण सभेमध्ये समाजाच्या शैक्षणिक, सामाजिक आणि आर्थिक विकासाचा आढावा घेतला जाईल.",
                  )}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/live-events"
                  className={`group inline-flex items-center justify-center gap-1 rounded-[2px] mt-4 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2`}
                >
                  {t("अधिक पहा")} <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center justify-center gap-1 rounded-[2px] border border-[var(--gold-500)] bg-transparent px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--gold-300)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-[rgba(212,175,55,0.12)]`}
                >
                  <Youtube className="h-4 w-4" /> YouTube
                </a>
              </div>
            </div>

            {/* Stream card */}
            <div className="relative rounded-3xl p-[1.5px]" style={{ background: "linear-gradient(135deg, var(--gold-600), rgba(212,175,55,0.2), var(--gold-600))" }}>
              <div className="overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-black">
                <div className="flex items-center justify-between px-5 py-3" style={{ background: "linear-gradient(90deg,#1a0104,#2C050D)" }}>
                  <span className="flex items-center gap-2 text-sm font-semibold text-[var(--gold-300)]">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                    </span>
                    <span>{t("थेट प्रसारण")}</span>
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
      </section>

      {/* Notices & Upcoming Events */}
      
      <Section>
  <BandLabel
    eyebrow="Services"
    title={t("समाज विकासासाठी आधुनिक डिजिटल सेवा")}
    sub={t("शैक्षणिक, सामाजिक आणि आर्थिक प्रगतीसाठी विविध डिजिटल सेवा एकाच व्यासपीठावर.")}
  />

  <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_2fr] lg:items-start">
    {/* ============ Left — hanging announcement scroll ============ */}
    <div className="relative mx-auto max-w-sm lg:mx-0">
      <div className="mb-7 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground shadow-soft">
          <Bell className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">{t("सूचना")}</h3>
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
      <div className="relative border-x border-border/60 bg-card px-6 pb-8 pt-6 shadow-soft">
        <div className="space-y-5">
          {notices.slice(0, 2).map((n, i) => {
            const dot =
              n.type === "तातडीची" ? "bg-destructive" : n.type === "महत्त्वाची" ? "bg-primary" : "bg-secondary";
            return (
              <div key={n.id}>
                {i > 0 && <div className="mb-5 border-t border-dashed border-border/70" />}
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
          className="mt-8 group inline-flex items-center justify-center gap-1 rounded-[2px] mt-4 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2"
        >
          {t("सर्व सूचना पहा")} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

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

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "पुढील कार्यक्रम", ev: upcomingEvents[0], tone: "primary" as const },
          { label: "झालेले कार्यक्रम", ev: pastEvents[0], tone: "secondary" as const },
          { label: "झालेले कार्यक्रम", ev: pastEvents[1], tone: "secondary" as const },
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
              </div>

              <div className="flex flex-1 flex-col p-5 pt-4">
                <h4 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
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
          ) : null,
        )}
      </div>

      <Link
        to="/events"
        className="mt-6 group inline-flex items-center justify-center gap-1 rounded-[2px] mt-4 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2"
      >
        {t("सर्व कार्यक्रम पहा")} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
</Section>


<section
        className="relative overflow-hidden py-20 sm:py-24"
        style={{ background: `linear-gradient(175deg, ${MAROON_950} 0%, ${MAROON_800} 100%)` }}
      >
         <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(60deg, rgba(212,175,55,0.05) 0 1.5px, transparent 1.5px 26px),
              repeating-linear-gradient(-60deg, rgba(212,175,55,0.05) 0 1.5px, transparent 1.5px 26px)`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 texture-maroon-grain opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BandLabel
            eyebrow="Services"
            title={t("समाज विकासासाठी आधुनिक डिजिटल सेवा")}
            sub={t("शैक्षणिक, सामाजिक आणि आर्थिक प्रगतीसाठी विविध डिजिटल सेवा एकाच व्यासपीठावर.")}
            dark
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesPreview.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-10 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--gold-400)]/60 hover:bg-white/[0.06] ${FOCUS_RING_DARK}`}
              >
                <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-[var(--gold-400)]/40" />
                <span className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[var(--gold-400)]/40" />
                <div className="mb-5 grid h-16 w-16 place-items-center rounded-full border-2 border-[var(--gold-500)] bg-gradient-to-br from-[#6b1024] to-[#3d0912]">
                  {s.icon}
                </div>
                <h3 className="font-display text-base font-bold text-[var(--gold-300)] sm:text-lg">{t(s.title)}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">{t(s.desc)}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--gold-400)]">
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
              <BandLabel
                align="left"
                eyebrow="Executive Committee"
                title={t("कार्यकारिणी मंडळ")}
                sub={t("समाजाच्या प्रगतीसाठी समर्पित प्रमुख पदाधिकारी")}
              />
              <br/>
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
      <SamajParichaySection />
      

      {/* फोटो गॅलरी — Photo Gallery */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BandLabel
             align="center"
            eyebrow="Photo Gallery"
            title={t("फोटो गॅलरी")}
            sub={t("समाजातील विविध कार्यक्रम, उपक्रम आणि अविस्मरणीय क्षणांचे छायाचित्र संग्रह")}
          />

          <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6">
            {galleryPhotos.slice(0, 4).map((p, i) => (
              <div key={p.id} className={`group relative ${galleryRotations[i % galleryRotations.length]}`}>
                <span
                  aria-hidden="true"
                  className="absolute -top-3.5 left-1/2 z-99 h-6 w-6 -translate-x-1/2 rounded-full shadow-md"
                  style={{ background: "radial-gradient(circle at 35% 30%, #ffe9b0, var(--gold-600))" }}
                />
                <div className="relative bg-white p-2.5 pb-4 shadow-xl transition-all duration-300 ease-out group-hover:z-10 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-2xl">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={t(p.title)}
                      loading="lazy"
                      className="block h-full w-full object-cover"
                    />
                  </div>
                  <p
                    className="mt-3 truncate text-center font-display text-[16px] font-bold uppercase tracking-wide"
                    style={{ color: MAROON_900 }}
                  >
                    {t(p.title)}
                  </p>
                  <p className="inline-flex items-center justify-center w-full mt-1 text-secondary gap-1.5 text-xs font-medium">
                    <Calendar className="h-3.5 w-3.5 text-secondary" />
                    {p.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/gallery"
              className={`group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]`}
            >
              {t("सर्व फोटो पहा")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* समाजदर्शन — Video Gallery */}
      <section
        className="relative overflow-hidden py-20 sm:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0  bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${videobg})` }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BandLabel
            eyebrow="Samajdarshan"
            title={t("समाजदर्शन")}
            sub={t("समाजातील विविध कार्यक्रम, उपक्रम आणि महत्त्वाच्या क्षणांचे व्हिडिओ संग्रह.")}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {samajVideos.slice(0, 3).map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
           <div className="mt-10 text-center">
            <Link
              to="/samajdarshan"
              className="group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]"
            >
              {t("सर्व व्हिडिओ पहा")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

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
   {
    id: "education",
    eyebrow: "Education",
    title: "शैक्षणिक सहाय्य",
    icon: GraduationCap,
  },
  {
    id: "employment",
    eyebrow: "Career Support",
    title: "रोजगार सहाय्य",
    icon: Briefcase,
  },
  {
    id: "social-service",
    eyebrow: "Social Welfare",
    title: "सामाजिक सेवा",
    icon: HeartHandshake,
  },
];

const parichaySlides = [parichayHero, parichaySlide1, parichaySlide2, parichaySlide3, parichaySlide4];

/**
 * ================================================================
 * समाज परिचय — "Illuminated Chapter Explorer"
 * ----------------------------------------------------------------
 * A creative reimagining of the old static book-spread: each of the
 * five parichayCards now owns one of the parichaySlides images, and
 * the section behaves like an interactive manuscript — hover (desktop)
 * or tap (mobile) a chapter "seal" and the stage cross-fades to that
 * chapter's portrait, complete with a wax-seal chapter numeral, a
 * gold ken-doori progress trail, and animated corner brackets.
 * ================================================================
 */
function SamajParichaySection() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const activeCard = parichayCards[active];
  const total = parichayCards.length;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28" style={{ background: MAROON_950 }}>
      {/* fine graph texture — modern, not "old paper" */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.7) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 h-[440px] w-[440px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12), transparent 70%)", filter: "blur(70px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BandLabel
          eyebrow="Samaj Parichay"
          title={t("समाज परिचय")}
          sub={t("कोहळी समाजाचा इतिहास, वारसा आणि समाज भवनांची सविस्तर माहिती.")}
          dark
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:gap-10">
          {/* ============ Left — vertical chapter rail (hover / click to switch) ============ */}
          <div className="flex flex-col justify-center">
            {parichayCards.map((card, i) => {
              const isActive = i === active;
              const isPast = i < active;
              const isLast = i === total - 1;
              return (
                <div key={card.id} className="relative flex gap-5">
                  {/* rail node + connector */}
                  <div className="flex flex-col items-center">
                    <button
                      type="button"
                      aria-label={t(card.title)}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 font-display text-sm font-bold transition-all duration-300 ${FOCUS_RING_DARK} ${
                        isActive
                          ? "scale-110 border-[var(--gold-400)] bg-[var(--gold-400)] text-[#2c050d] shadow-[0_0_0_5px_rgba(212,175,55,0.15)]"
                          : isPast
                            ? "border-[var(--gold-500)] bg-[var(--gold-500)]/15 text-[var(--gold-300)]"
                            : "border-white/20 text-white/40 hover:border-white/40"
                      }`}
                    >
                      {i + 1}
                    </button>
                    {!isLast && (
                      <span
                        className={`min-h-[46px] w-px flex-1 transition-colors duration-500 ${
                          isPast ? "bg-[var(--gold-500)]" : "bg-white/10"
                        }`}
                      />
                    )}
                  </div>

                  {/* label */}
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group -mt-1 flex-1 pb-9 text-left ${FOCUS_RING_DARK}`}
                  >
                    <span
                      className={`block text-[10px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 ${
                        isActive ? "text-[var(--gold-400)]" : "text-white/30"
                      }`}
                    >
                      {card.eyebrow}
                    </span>
                    <span
                      className={`mt-1.5 block font-display text-xl font-bold transition-all duration-300 sm:text-2xl ${
                        isActive ? "translate-x-1.5 text-white" : "text-white/40 group-hover:translate-x-1 group-hover:text-white/70"
                      }`}
                    >
                      {t(card.title)}
                    </span>
                  </button>
                </div>
              );
            })}

            <Link
              to="/samaj-parichay/$topicId"
              params={{ topicId: "itihas-varsa" }}
              className={`ml-14 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-[var(--gold-400)] transition-colors hover:text-[var(--gold-300)] ${FOCUS_RING_DARK}`}
            >
              {t("सर्व प्रकरणे पहा")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* ============ Right — full-color image stage ============ */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-[560px]">
              {parichaySlides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-out ${
                    i === active ? "scale-100 opacity-100" : "scale-110 opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/10" />

              <div className="absolute right-5 top-5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-bold tracking-wider text-white/85 ring-1 ring-white/15 backdrop-blur">
                {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--gold-400)]">
                  {activeCard.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                  {t(activeCard.title)}
                </h3>
                <Link
                  to="/samaj-parichay/$topicId"
                  params={{ topicId: activeCard.id }}
                  className={`group mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-5 py-2.5 text-sm font-bold text-[var(--maroon-950)] shadow-[0_10px_24px_-10px_rgba(212,175,55,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-10px_rgba(212,175,55,0.75)] ${FOCUS_RING_DARK}`}
                >
                  {t("हा अध्याय वाचा")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


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