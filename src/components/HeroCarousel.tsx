import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import slide1 from "@/assets/hero1.jpg";
import slide2 from "@/assets/hero2.jpg";
import slide3 from "@/assets/hero3.jpg";
import slide4 from "@/assets/hero4.jpg";

const slides = [
  {
    image: slide1,
    eyebrow: "॥ स्वागत आहे ॥",
    title: "एकता, संस्कृती\nआणि प्रगतीचा संगम",
    description:
      "कोहळी समाजाच्या सामाजिक, शैक्षणिक आणि सांस्कृतिक उन्नतीसाठी एकत्र काम करणारी विश्वासार्ह संस्था",
    primary: "अधिक जाणून घ्या",
    secondary: "सदस्य नोंदणी",
  },
  {
    image: slide2,
    eyebrow: "॥ आमचे उपक्रम ॥",
    title: "सामाजिक व सांस्कृतिक\nकार्यक्रमांचे आयोजन",
    description:
      "सण, समारंभ, शैक्षणिक शिबिरे आणि आरोग्य शिबिरांच्या माध्यमातून समाजासाठी अखंड सेवा",
    primary: "कार्यक्रम पहा",
    secondary: "फोटो गॅलरी",
  },
  {
    image: slide3,
    eyebrow: "॥ सदस्यत्व ॥",
    title: "आजच मंडळाचे\nसदस्य व्हा",
    description:
      "आपल्या समाजाच्या विकासात सहभागी व्हा, नवीन नाती जोडा आणि परंपरा पुढे न्या",
    primary: "नोंदणी करा",
    secondary: "संपर्क साधा",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[450px] sm:h-[500px] md:h-[680px] lg:h-screen lg:max-h-[700px] overflow-hidden bg-[#240206]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100 visible z-20" : "opacity-0 invisible z-10"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[7000ms] ease-linear ${
              current === index ? "scale-110" : "scale-105"
            }`}
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#240206]/95 via-[#240206]/70 to-[#240206]/40 sm:bg-gradient-to-r sm:from-[#240206]/95 sm:via-[#240206]/70 sm:to-[#240206]/20" />
          <div
            className="absolute inset-0 opacity-[0.08]
              bg-[repeating-linear-gradient(45deg,rgba(212,175,55,0.5)_0px,rgba(212,175,55,0.5)_1px,transparent_1px,transparent_18px),repeating-linear-gradient(-45deg,rgba(212,175,55,0.5)_0px,rgba(212,175,55,0.5)_1px,transparent_1px,transparent_18px)]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_-10%,rgba(212,175,55,0.22),transparent_45%),radial-gradient(circle_at_85%_5%,rgba(212,175,55,0.14),transparent_40%)]" />

          {/* Content — mobile just needs small side padding now that arrows moved to bottom; desktop gets wide clearance from side arrows */}
          <div className="relative z-30 flex h-full flex-col justify-center max-w-7xl px-4 pb-10 pt-6 sm:px-10 sm:pb-0 sm:pt-0 m-auto">
            <div className="max-w-full sm:max-w-md md:max-w-xl lg:max-w-2xl text-white">
              <span
                className={`mb-3 inline-block rounded-full border border-yellow-400/50 bg-white/10 px-3 py-1 text-[11px] sm:mb-5 sm:px-5 sm:py-2 sm:text-sm text-yellow-300 transition-all duration-700 ${
                  current === index ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                {slide.eyebrow}
              </span>

              <h1
                className={`script-heading whitespace-pre-line text-2xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-700 delay-150 ${
                  current === index ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                {slide.title}
              </h1>

              <p
                className={`mt-3 sm:mt-6 font-[var(--font-short)] max-w-sm sm:max-w-md md:max-w-xl text-xs sm:text-base md:text-lg text-yellow-100 transition-all duration-700 delay-300 ${
                  current === index ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                {slide.description}
              </p>

              <div
                className={`mt-5 sm:mt-10 flex flex-row flex-wrap gap-2 sm:gap-3 transition-all duration-700 delay-500 ${
                  current === index ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <button className="group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]">
                  {slide.primary}
                  <ArrowRight className="h-3.5 w-3.5 sm:h-5 sm:w-5 transition group-hover:translate-x-1" />
                </button>

                <button className="group inline-flex items-center justify-center gap-1 rounded-[2px] border border-[var(--gold-500)] bg-transparent px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--gold-300)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-[rgba(212,175,55,0.12)]">
                  {slide.secondary}
                  <ArrowRight className="h-3.5 w-3.5 sm:h-5 sm:w-5 transition group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Previous — bottom-left on mobile, mid-left on sm+ */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 bottom-4 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition hover:bg-gradient-to-br hover:from-[var(--gold-300)] hover:via-[var(--gold-600)] hover:to-[var(--gold-400)] hover:text-[#3b0a0a] sm:left-6 sm:bottom-auto sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {/* Next — bottom-right on mobile, mid-right on sm+ */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 bottom-4 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition hover:bg-gradient-to-br hover:from-[var(--gold-300)] hover:via-[var(--gold-600)] hover:to-[var(--gold-400)] hover:text-[#3b0a0a] sm:right-6 sm:bottom-auto sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {/* Progress — centered at bottom, sits between the two arrows on mobile */}
      {/* <div className="absolute bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-2 sm:bottom-8 sm:gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-6 sm:w-12 rounded-full transition ${
              i === current ? "bg-yellow-400" : "bg-white/30"
            }`}
          />
        ))}
      </div> */}

      {/* Scroll Indicator - desktop only */}
      <a
        href="#highlights"
        className="hidden md:flex absolute bottom-8 right-8 z-40 h-14 w-9 justify-center rounded-full border-2 border-white/50 pt-2"
      >
        <span className="h-2 w-2 animate-bounce rounded-full bg-yellow-400"></span>
      </a>
    </section>
  );
}