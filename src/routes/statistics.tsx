import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BandLabel } from "@/components/ui/Section";
import overviewbg from "@/assets/overviewbg.jpg";
import videobg from "@/assets/bg-main.png";
import { PageHero, Section } from "@/components/ui/Section";
import {
  Users,
  GraduationCap,
  Briefcase,
  Wheat,
  HeartHandshake,
  Landmark,
  Home,
  Award,
  MapPin,
  User, Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/statistics")({
  head: () => ({
    meta: [
      { title: "विश्लेषण विभाग | कोहळी समाज विकास मंडळ नागपूर" },
      { name: "description", content: "समाजाची सामाजिक, शैक्षणिक, आर्थिक व भौगोलिक आकडेवारी आधुनिक Analytics Dashboard स्वरूपात." },
      { property: "og:title", content: "विश्लेषण विभाग | Community Analytics Dashboard" },
      { property: "og:description", content: "समाजाची संपूर्ण आकडेवारी एका डॅशबोर्डवर." },
    ],
  }),
  component: StatsPage,
});

type Metric = {
  icon: ReactNode;
  label: string;
  value: string;
};

const metrics: Metric[] = [
  { icon: <Users className="h-5 w-5" />, label: "एकूण कुटुंबे", value: "12,458" },
  { icon: <User className="h-5 w-5" />, label: "एकूण सदस्य", value: "56,782" },
  { icon: <GraduationCap className="h-5 w-5" />, label: "शिक्षण व विद्यार्थी", value: "18,425" },
  { icon: <Briefcase className="h-5 w-5" />, label: "रोजगार व व्यवसाय", value: "15,286" },
  { icon: <Wheat className="h-5 w-5" />, label: "शेती व शेतकरी", value: "7,856" },
  { icon: <HeartHandshake className="h-5 w-5" />, label: "महिला व लाभार्थी", value: "27,821" },
  { icon: <Landmark className="h-5 w-5" />, label: "शासकीय योजना लाभार्थी", value: "18,452" },
  { icon: <Home className="h-5 w-5" />, label: "घरकुल व निवास स्थिती", value: "10,486" },
  { icon: <Award className="h-5 w-5" />, label: "व्यावसायिक व कौशल्यधारक", value: "2,648" },
  { icon: <MapPin className="h-5 w-5" />, label: "गाव, तालुका व भौगोलिक वितरण", value: "184 गावे" },
];

type DrillDown = {
  icon: ReactNode;
  title: string;
  items: { label: string; value: string }[];
};

const drilldowns: DrillDown[] = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "शिक्षण व विद्यार्थी",
    items: [
      { label: "विद्यार्थी", value: "12,486" },
      { label: "पदवीधर", value: "5,842" },
      { label: "पदव्युत्तर", value: "1,624" },
    ],
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "रोजगार व व्यवसाय",
    items: [
      { label: "सरकारी कर्मचारी", value: "1,486" },
      { label: "खाजगी कर्मचारी", value: "8,742" },
      { label: "उद्योजक", value: "2,186" },
    ],
  },
  {
    icon: <Wheat className="h-5 w-5" />,
    title: "शेती व शेतकरी",
    items: [
      { label: "शेतकरी कुटुंबे", value: "7,856" },
      { label: "सिंचित शेती", value: "4,782" },
      { label: "कृषी कर्ज आवश्यक", value: "1,286" },
    ],
  },
  {
    icon: <User className="h-5 w-5" />,
    title: "महिला व महिला लाभार्थी",
    items: [
      { label: "महिला सदस्य", value: "27,821" },
      { label: "बचत गट सदस्य", value: "6,524" },
      { label: "लाडकी बहीण लाभार्थी", value: "4,286" },
    ],
  },
  {
    icon: <Landmark className="h-5 w-5" />,
    title: "शासकीय योजना लाभार्थी",
    items: [
      { label: "घरकुल", value: "2,184" },
      { label: "शिष्यवृत्ती", value: "3,542" },
      { label: "पेन्शन", value: "1,876" },
    ],
  },
];

// Devanagari entry numerals for the ledger cards (०१, ०२ ...)
const devanagariDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
const toDevanagari = (n: number) =>
  String(n)
    .split("")
    .map((d) => devanagariDigits[parseInt(d, 10)])
    .join("");

// ---------------------------------------------------------------------------
// Section 1 — Brass seal medallion tiles
// ---------------------------------------------------------------------------

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  index: number;
}
const MetricCard = ({ icon, label, value }: MetricCardProps) => {
  return (
    <div className="relative cursor-pointer block bg-[var(--card)] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.10)] rounded-[10px] p-5 group hover:shadow-[0px_15px_50px_0px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:-translate-y-0.5">
      {/* Main Content */}
      <div className="relative block bg-[var(--background)] rounded-[5px] pt-[25px] pr-5 pb-[30px] pl-5 border-b-2 border-[var(--gold-500)] border-l-2 border-[var(--gold-500)] rounded-br-[30px] min-h-[160px]">
        {/* Icon - Bottom Right */}
        <div className="absolute -bottom-[2px] -right-[2px] flex items-center justify-center w-[65px] h-[65px] border-2 border-[var(--gold-500)] rounded-full bg-[var(--background)]">
          {/* Decorative left corner */}
          <div className="absolute top-5 -left-[2px] w-[10px] h-[41px] bg-[var(--background)]"></div>
          {/* Decorative bottom corner */}
          <div className="absolute bottom-[0px] -left-[2px] w-[30px] h-[25px] bg-[var(--background)]"></div>

          {/* Star icon */}
          <div className="absolute -left-[9px] top-[17px]">
            <Sparkles className="h-5 w-5 text-[var(--gold-500)]" />
          </div>

          {/* Main Icon */}
          <span className="relative inline-block text-[40px] text-[var(--maroon-700)] transition-all duration-500 group-hover:scale-110">
            {icon}
          </span>
        </div>

        {/* Value */}
        <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          {value}
        </div>

        {/* Label */}
        <div className="mt-2 text-xs font-bold leading-snug text-muted-foreground sm:text-sm">
          {label}
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Section 2 — Ledger pages, stitched binding, dot-leader entries
// ---------------------------------------------------------------------------

function LedgerCard({ drilldown, index }: { drilldown: DrillDown; index: number }) {
  const total = drilldown.items.reduce(
    (sum, item) => sum + parseInt(item.value.replace(/,/g, ""), 10),
    0
  );

  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(el);
          }
        }),
      { threshold: 0.25 }
    );
    io.observe(el);
    const fallback = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) setInView(true);
    }, 600);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative flex overflow-hidden rounded-md bg-[var(--paper)] shadow-[0_2px_12px_rgba(58,20,24,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(58,20,24,0.14)]"
    >
      {/* stitched binding along the spine */}
      <div className="relative w-6 flex-none bg-[var(--maroon-800)]">
        <div
          className="absolute inset-y-3 left-1/2 w-px -translate-x-1/2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, color-mix(in srgb, var(--gold-500) 90%, transparent) 0 6px, transparent 6px 12px)",
          }}
        />
      </div>

      {/* page body — faint ruled lines like ledger paper */}
      <div
        className="relative flex-1 p-6"
      >
        <div className="mb-5 flex items-center gap-3.5 border-b border-[var(--border)] pb-4">
          <div className="grid h-10 w-10 flex-none place-items-center rounded-full border-2 border-[var(--gold-500)] bg-[var(--maroon-800)] font-display text-[13px] font-bold text-[var(--cream-text)]">
            {toDevanagari(index + 1)}
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-[16.5px] font-semibold leading-tight text-[var(--ink)]">
              {drilldown.title}
            </h3>
            <p className="mt-0.5 text-[11.5px] text-[var(--text-muted)]">
              एकूण नोंदी —{" "}
              <b className="font-semibold text-[var(--maroon-800)]">
                {total.toLocaleString("en-IN")}
              </b>
            </p>
          </div>
          <div className="ml-auto flex-none text-[var(--maroon-800)]/70">{drilldown.icon}</div>
        </div>

        <ul className="flex flex-col gap-3">
          {drilldown.items.map((item) => {
            const num = parseInt(item.value.replace(/,/g, ""), 10);
            const pct = Math.round((num / total) * 100);
            return (
              <li key={item.label}>
                <div className="flex items-center justify-between gap-2">
                  <span className="whitespace-nowrap text-[14px] font-medium text-[var(--foreground)]">
                    {item.label}
                  </span>

                  <span className="whitespace-nowrap font-display text-[13.5px] font-bold text-[var(--maroon-800)]">
                    {item.value}
                  </span>
                </div>
                <div className="mt-1.5 h-[3px] w-full overflow-hidden rounded-full bg-[var(--muted)]">
                  <div
                    className="h-full rounded-full bg-[var(--gold-500)] transition-all duration-[1100ms] ease-out motion-reduce:transition-none"
                    style={{ width: inView ? `${pct}%` : "0%" }}
                  />
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-3">
          <span className="text-[10.5px] text-[var(--muted-foreground)]">या महिन्यात अद्ययावत</span>
          <a
            href="#"
            className="group/link flex items-center gap-1.5 text-[11.5px] font-semibold text-[var(--maroon-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--maroon-800)] focus-visible:outline-offset-2"
          >
            सविस्तर पहा
            <span className="transition-transform duration-200 group-hover/link:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function StatsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="समाज आकडेवारी"
        title="विश्लेषण विभाग"
        subtitle="समाजाची संपूर्ण आकडेवारी — एका आधुनिक डॅशबोर्डवर"
        backgroundImage={overviewbg}
      />

      <Section>
        <div className="mb-8">
          <BandLabel eyebrow="Counters" title="Live Overview" />
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {metrics.map((m, index) => (
            <MetricCard
              key={m.label}
              icon={m.icon}
              label={m.label}
              value={m.value}
              index={index}
            />
          ))}
        </div>
      </Section>


      {/* Drilldown — ledger register */}
       <div
                className="relative overflow-hidden"
              >
              <div className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${videobg})` }} />
        
          
        <section className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mb-8">
            <BandLabel
              eyebrow="मंडळाची नोंदवही"
              title="तपशीलवार आकडेवारी"
              sub="प्रत्येक विभागाची सखोल माहिती — विकास योजना आणि निर्णयक्षमतेसाठी आधार."
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {drilldowns.map((d, index) => (
              <LedgerCard key={d.title} drilldown={d} index={index} />
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}