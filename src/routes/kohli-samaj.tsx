import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BandLabel, PageHero, Section, SectionHeader } from "@/components/ui/Section";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  GraduationCap,
  Heart,
  Landmark,
  Waves,
  MapPin,
  BookOpen,
  Shield,
  Quote,
  Star,
} from "lucide-react";
import kohalibg from "@/assets/kohali_samaj.jpg";
import videobg from "@/assets/bg-main.png";

export const Route = createFileRoute("/kohli-samaj")({
  head: () => ({
    meta: [
      { title: "कोहळी समाज | परंपरा, संस्कृती आणि प्रगतीचा अभिमान" },
      { name: "description", content: "कोहळी समाज — मेहनती, संस्कारशील आणि प्रगतिशील समाजाचा इतिहास, वारसा, योगदान आणि आधुनिक वाटचाल." },
      { property: "og:title", content: "कोहळी समाज | परंपरा, संस्कृती आणि प्रगतीचा अभिमान" },
      { property: "og:description", content: "आपली ओळख – आपला अभिमान, आपला समाज – आपली ताकद." },
    ],
  }),
  component: KohliSamajPage,
});



const contributions = [
  { icon: Landmark, title: "कृषी व जलसंधारण", desc: "शेती, सिंचन आणि जलव्यवस्थापनात पिढ्यानपिढ्या योगदान." },
  { icon: Waves, title: "मत्स्यव्यवसाय", desc: "पारंपरिक व्यवसायातील कौशल्य आणि आधुनिक विकास." },
  { icon: GraduationCap, title: "शिक्षण व शासकीय सेवा", desc: "शिक्षण, प्रशासन आणि सार्वजनिक सेवेत उल्लेखनीय सहभाग." },
  { icon: Heart, title: "सामाजिक कार्य", desc: "समाजसेवा, सांस्कृतिक जपणूक आणि सामाजिक बांधिलकी." },
];

const values = [
  { title: "पारंपरिक मूल्यांची जपणूक", desc: "पिढ्यानपिढ्या चालत आलेले संस्कार आणि रीतिरिवाज जोपासणे." },
  { title: "शिक्षण व ज्ञानाला प्राधान्य", desc: "प्रत्येक मुलामुलीपर्यंत दर्जेदार शिक्षण पोहोचवणे." },
  { title: "आधुनिक विचार आणि तंत्रज्ञानाचा स्वीकार", desc: "बदलत्या काळानुसार नवीन संधी आत्मसात करणे." },
  { title: "एकजूट व सामाजिक बांधिलकी", desc: "समाजबांधवांमध्ये परस्पर सहकार्य आणि विश्वास वाढवणे." },
  { title: "युवकांचे सक्षमीकरण", desc: "युवा पिढीला व्यवसाय व करिअरसाठी व्यासपीठ उपलब्ध करून देणे." },
  { title: "महिलांचा सन्मान व सहभाग", desc: "निर्णयप्रक्रिया आणि समाजकार्यात महिलांचा सक्रिय सहभाग." },
];

// ornamental corner motif — pure currentColor SVG, inherits whatever text color it's given
function CornerMandala({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="100" y1="10" x2="100" y2="30" stroke="currentColor" strokeWidth="1.5" transform={`rotate(${i * 30} 100 100)`} />
      ))}
    </svg>
  );
}

// a gentle S-curve river line — the page's signature motif
function RiverLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 900"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute text-[var(--maroon-800)] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M32,0 C6,90 58,180 32,270 C6,360 58,450 32,540 C6,630 58,720 32,810 C18,850 46,875 32,900"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="1 10"
        strokeLinecap="round"
      />
    </svg>
  );
}

// wave divider between bands
function WaveDivider({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={`pointer-events-none block h-10 w-full sm:h-14 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function KohliSamajPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="कोहळी समाजाबद्दल"
        title="परंपरा, संस्कृती आणि प्रगतीचा अभिमान"
        subtitle="मेहनती, संस्कारशील आणि प्रगतिशील समाजाची ओळख"
        backgroundImage={kohalibg}
      >
      </PageHero>


      {/* ---------------- INTRO — two columns: story + motto card, fills the width ---------------- */}
      <Section>
         <Link
          to="/"
          className="group inline-flex items-center justify-center gap-1.5 rounded-[2px] px-5 py-2.5 sm:px-7 sm:py-3 font-['Mukta'] text-xs sm:text-sm font-bold tracking-[0.02em] transition-all duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_color-mix(in_srgb,var(--gold-500)_65%,transparent)] hover:shadow-[0_12px_28px_-8px_color-mix(in_srgb,var(--gold-500)_75%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4" /> मुख्यपृष्ठावर परत जा
        </Link>
        <div className="relative mx-auto grid max-w-7xl gap-10 mt-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="relative overflow-hidden">
            <Quote className="mb-4 h-8 w-8 rotate-180 text-accent/30" />
            <div className="relative space-y-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
              <p>
                <span className="float-left mr-3 mt-1 font-serif text-6xl font-bold leading-[0.8] text-accent sm:text-7xl">क</span>
                ोहळी समाज हा महाराष्ट्रासह देशातील विविध भागांमध्ये आपली स्वतंत्र ओळख निर्माण करणारा, मेहनती, संस्कारशील आणि प्रगतिशील समाज आहे. कृषी, जलसंधारण, मत्स्यव्यवसाय, शिक्षण, सामाजिक कार्य, शासकीय सेवा, उद्योग, व्यवसाय आणि विविध व्यावसायिक क्षेत्रांमध्ये कोहळी समाजाने उल्लेखनीय योगदान दिले आहे.
              </p>
              <p>
                समाजाच्या समृद्ध इतिहासासोबतच आधुनिक काळातील प्रगतीची वाटचाल हे कोहळी समाजाचे वैशिष्ट्य आहे. पारंपरिक मूल्ये जपत शिक्षण, तंत्रज्ञान आणि आधुनिक विचारांचा स्वीकार करून समाज सातत्याने पुढे जात आहे.
              </p>
            </div>
          </div>

          {/* motto card — pulls the tagline up here so it earns real space instead of sitting in its own empty band */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-accent/25 bg-gradient-to-br from-secondary via-secondary to-secondary/90 p-8 text-center shadow-soft sm:p-10">
            <CornerMandala className="-left-10 -top-10 h-32 w-32 text-secondary-foreground/10" />
            <CornerMandala className="-bottom-12 -right-10 h-32 w-32 text-secondary-foreground/10" />
            <RiverLine className="left-1/2 top-0 h-full w-20 -translate-x-1/2 text-secondary-foreground/[0.1]" />
            <div className="relative">
              <Star className="mx-auto h-7 w-7 text-accent" />
              <p className="mt-5 font-serif text-2xl italic leading-snug text-secondary-foreground sm:text-[1.75rem]">
                "आपली ओळख – आपला अभिमान, आपला समाज – आपली ताकद."
              </p>
              <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
              <p className="mt-6 text-sm text-secondary-foreground/70">कोहळी समाज विकास मंडळ, नागपूर</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl mt-8">
            <BandLabel eyebrow="योगदान" title="समाजाचे विविध क्षेत्रातील योगदान" align="left" />
            <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contributions.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`group relative ${i % 2 === 0 ? "-rotate-1" : "rotate-1"} transition duration-300 hover:rotate-0`}
                >
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[var(--gold-500)] to-[var(--gold-600)] opacity-0 blur transition duration-300 group-hover:opacity-60" />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card p-6 shadow-soft ring-1 ring-black/5 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <CornerMandala className="-bottom-10 -right-10 h-28 w-28 text-accent/[0.06]" />
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 ring-2 ring-accent">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="relative mt-4 text-lg font-semibold text-foreground">{title}</h3>
                    <p className="relative mt-1 text-sm text-foreground/70">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </Section>

      {/* ---------------- CONTRIBUTIONS — pinned tilted cards over textured band ---------------- */}
      {/* <div className="relative overflow-hidden text-secondary-foreground">
        <div className="relative -mt-px py-14 sm:py-16">
          
        </div>
      </div> */}

      {/* ---------------- VALUES — winding river timeline, alternating banks ---------------- */}
       <div
                className="relative overflow-hidden"
              >
              <div className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${videobg})` }} />
        
          
      <Section>
        <BandLabel eyebrow="आपली मूल्ये" title="परंपरा आणि आधुनिकतेचा संगम" />      
        {/* mobile — simple stacked line, no zig-zag */}
        <div className="relative mx-auto mt-14 max-w-2xl sm:hidden">
          <div className="absolute bottom-0 left-[19px] top-0 w-px border-l-2 border-dashed border-accent/40" />
          <ol className="space-y-8">
            {values.map((v, i) => (
              <li key={v.title} className="relative flex gap-5">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-card text-sm font-bold text-accent shadow-soft">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="pt-1">
                  <h3 className="flex items-center gap-2 text-base font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/65">{v.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* desktop — river runs down the fixed center column, so it can never drift from the nodes */}
        <div className="relative mx-auto mt-12 hidden max-w-5xl sm:block">
          <RiverLine className="left-1/2 top-0 h-full w-16 -translate-x-1/2" />
          <div className="flex flex-col gap-y-6">
            {values.map((v, i) => {
              const flip = i % 2 === 1;
              const card = (
                <div className={`max-w-lg rounded-2xl bg-card/80 p-5 shadow-soft ring-1 ring-accent/10 ${flip ? "text-left" : "text-right"}`}>
                  <h3 className={`flex items-center gap-2 text-base font-semibold text-foreground lg:text-lg ${flip ? "" : "flex-row-reverse"}`}>
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/65">{v.desc}</p>
                </div>
              );
              return (
                <div key={v.title} className="grid grid-cols-[1fr_64px_1fr] items-center gap-x-6">
                  <div className="flex justify-end">{!flip && card}</div>
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-card text-sm font-bold text-accent shadow-soft">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/20 [animation-duration:3s]" />
                    <span className="relative">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex justify-start">{flip && card}</div>
                </div>
              );
            })}
          </div>
        </div>
         {/* ---------------- CLOSING CTA — double-framed ornate panel ---------------- */}
      <div>
  <div className="relative mx-auto max-w-7xl mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--maroon-800)] via-[var(--maroon-850)] to-[var(--maroon-900)] px-6 py-8 text-center sm:px-10 sm:py-10">
    <CornerMandala className="-left-8 -top-8 h-28 w-28 text-[color-mix(in_srgb,var(--gold-500)_20%,transparent)]" />
    <CornerMandala className="-bottom-10 -right-8 h-28 w-28 text-[color-mix(in_srgb,var(--gold-500)_20%,transparent)]" />

    <div className="relative">
      <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--gold-500)_50%,transparent)] bg-[color-mix(in_srgb,var(--gold-500)_10%,transparent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--gold-400)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-500)]" />
        कोहळी समाज विकास मंडळ
      </div>

      <h2 className="text-2xl font-bold text-[var(--ivory-100)] sm:text-3xl">
        एकत्र येऊया, प्रगती घडवूया
      </h2>

      <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[var(--ivory-100)]/75 sm:text-base">
        कोहळी समाजाच्या उज्ज्वल भविष्यासाठी प्रत्येक समाजबांधवाचे योगदान महत्त्वाचे आहे. एकजूट, शिक्षण, संस्कार, सामाजिक बांधिलकी आणि आधुनिक विचार यांच्या आधारावर आपण सर्व मिळून अधिक सक्षम, प्रगत आणि आदर्श समाज निर्माण करू शकतो.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold-600)] to-[var(--gold-500)] px-6 py-2.5 text-sm font-semibold text-[var(--maroon-900)] shadow-[0_6px_18px_-6px_color-mix(in_srgb,var(--gold-500)_50%,transparent)] transition hover:scale-[1.03]"
        >
          मुख्यपृष्ठावर जा <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--ivory-100)]/30 px-6 py-2.5 text-sm font-semibold text-[var(--ivory-100)] transition hover:border-[color-mix(in_srgb,var(--gold-500)_60%,transparent)] hover:bg-[var(--ivory-100)]/10"
        >
          अधिक जाणून घ्या
        </Link>
      </div>
    </div>
  </div>
</div>
      </Section>
      
       </div>

     
    </SiteLayout>
  );
}