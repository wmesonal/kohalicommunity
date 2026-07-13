import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { BandLabel } from "@/components/ui/Section";
import overviewbg from "@/assets/overviewbg.jpg";

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
  Sparkles,
  User,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import MapPin2 from "lucide-react";

export const Route = createFileRoute("/statistics_13-07")({
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
  accent: string;
};

const metrics: Metric[] = [
  { icon: <Users className="h-7 w-7" />, label: "एकूण कुटुंबे", value: "12,458", accent: "from-primary/15 to-primary/5" },
  { icon: <User className="h-7 w-7" />, label: "एकूण सदस्य", value: "56,782", accent: "from-accent/25 to-accent/5" },
  { icon: <GraduationCap className="h-7 w-7" />, label: "शिक्षण व विद्यार्थी", value: "18,425", accent: "from-primary/15 to-primary/5" },
  { icon: <Briefcase className="h-7 w-7" />, label: "रोजगार व व्यवसाय", value: "15,286", accent: "from-accent/25 to-accent/5" },
  { icon: <Wheat className="h-7 w-7" />, label: "शेती व शेतकरी", value: "7,856", accent: "from-primary/15 to-primary/5" },
  { icon: <HeartHandshake className="h-7 w-7" />, label: "महिला व लाभार्थी", value: "27,821", accent: "from-accent/25 to-accent/5" },
  { icon: <Landmark className="h-7 w-7" />, label: "शासकीय योजना लाभार्थी", value: "18,452", accent: "from-primary/15 to-primary/5" },
  { icon: <Home className="h-7 w-7" />, label: "घरकुल व निवास स्थिती", value: "10,486", accent: "from-accent/25 to-accent/5" },
  { icon: <Award className="h-7 w-7" />, label: "व्यावसायिक व कौशल्यधारक", value: "2,648", accent: "from-primary/15 to-primary/5" },
  { icon: <MapPin className="h-7 w-7" />, label: "गाव, तालुका व भौगोलिक वितरण", value: "184 गावे", accent: "from-accent/25 to-accent/5" },
];

type DrillDown = {
  icon: ReactNode;
  title: string;
  items: { label: string; value: string }[];
};

const drilldowns: DrillDown[] = [
  {
    icon: <GraduationCap className="h-7 w-7" />,
    title: "शिक्षण व विद्यार्थी",
    items: [
      { label: "विद्यार्थी", value: "12,486" },
      { label: "पदवीधर", value: "5,842" },
      { label: "पदव्युत्तर", value: "1,624" },
    ],
  },
  {
    icon: <Briefcase className="h-7 w-7" />,
    title: "रोजगार व व्यवसाय",
    items: [
      { label: "सरकारी कर्मचारी", value: "1,486" },
      { label: "खाजगी कर्मचारी", value: "8,742" },
      { label: "उद्योजक", value: "2,186" },
    ],
  },
  {
    icon: <Wheat className="h-7 w-7" />,
    title: "शेती व शेतकरी",
    items: [
      { label: "शेतकरी कुटुंबे", value: "7,856" },
      { label: "सिंचित शेती", value: "4,782" },
      { label: "कृषी कर्ज आवश्यक", value: "1,286" },
    ],
  },
  {
    icon: <User className="h-7 w-7"/>,
    title: "महिला व महिला लाभार्थी",
    items: [
      { label: "महिला सदस्य", value: "27,821" },
      { label: "बचत गट सदस्य", value: "6,524" },
      { label: "लाडकी बहीण लाभार्थी", value: "4,286" },
    ],
  },
  {
    icon: <Landmark className="h-7 w-7" />,
    title: "शासकीय योजना लाभार्थी",
    items: [
      { label: "घरकुल", value: "2,184" },
      { label: "शिष्यवृत्ती", value: "3,542" },
      { label: "पेन्शन", value: "1,876" },
    ],
  },
];

interface MetricCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  count: number;
}

// Updated Metric Card with New Design
const MetricCard = ({ icon, label, value }: MetricCardProps) => {
  return (
    <div className="relative cursor-pointer block bg-white shadow-[0px_10px_40px_0px_rgba(0,0,0,0.10)] rounded-[10px] p-5 group hover:shadow-[0px_15px_50px_0px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:-translate-y-0.5">
      {/* Main Content */}
      <div className="relative block bg-[#f7f4f1] rounded-[5px] pt-[25px] pr-5 pb-[30px] pl-5 border-b-2 border-[#f0ab22] border-l-2 border-[#f0ab22] rounded-br-[30px] min-h-[160px]">
        {/* Icon - Bottom Right */}
        <div className="absolute -bottom-[2px] -right-[2px] flex items-center justify-center w-[65px] h-[65px] border-2 border-[#f0ab22] rounded-full bg-[#f7f4f1]">
          {/* Decorative left corner */}
          <div className="absolute top-5 -left-[2px] w-[10px] h-[41px] bg-[#f7f4f1]"></div>
          {/* Decorative bottom corner */}
          <div className="absolute bottom-[0px] -left-[2px] w-[30px] h-[25px] bg-[#f7f4f1]"></div>

          {/* Star icon */}
          <div className="absolute -left-[9px] top-[17px]">
            <Sparkles className="h-5 w-5 text-[#f0ab22]" />
          </div>

          {/* Main Icon */}
          <span className="relative inline-block text-[40px] text-[#8c182f] transition-all duration-500 group-hover:scale-110">
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
// Drilldown section — ring-gauge "ledger plaque" redesign
// ---------------------------------------------------------------------------

const RING_RADIUS = 20;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function RingGauge({ pct }: { pct: number }) {
  const circleRef = useRef<SVGCircleElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFilled(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    // fallback for fast scroll / hash-based loads where the observer
    // callback can fire before layout settles
    const fallback = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) setFilled(true);
    }, 600);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const offset = filled
    ? RING_CIRCUMFERENCE - (pct / 100) * RING_CIRCUMFERENCE
    : RING_CIRCUMFERENCE;

  return (
    <div className="relative h-12 w-12 flex-none">
      <svg viewBox="0 0 48 48" className="h-12 w-12 -rotate-90">
        <circle
          cx="24"
          cy="24"
          r={RING_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          className="text-muted"
        />
        <circle
          ref={circleRef}
          cx="24"
          cy="24"
          r={RING_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={RING_CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="text-primary transition-[stroke-dashoffset] duration-[1100ms] ease-out motion-reduce:transition-none"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center font-display text-[10.5px] font-bold text-primary">
        {pct}%
      </div>
    </div>
  );
}

function DrilldownCard({ drilldown }: { drilldown: DrillDown }) {
  const total = drilldown.items.reduce(
    (sum, item) => sum + parseInt(item.value.replace(/,/g, ""), 10),
    0
  );

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-md border border-border bg-card p-6 pt-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
      {/* brass corner brackets */}
      <span className="pointer-events-none absolute left-2 top-2 h-5 w-5 border-l-2 border-t-2 border-primary/60" />
      <span className="pointer-events-none absolute right-2 top-2 h-5 w-5 border-r-2 border-t-2 border-primary/60" />
      <span className="pointer-events-none absolute bottom-2 left-2 h-5 w-5 border-b-2 border-l-2 border-primary/60" />
      <span className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 border-b-2 border-r-2 border-primary/60" />

      <div className="mb-5 flex items-center gap-3.5 border-b border-dashed border-border pb-4">
        <div className="grid h-[52px] w-[52px] flex-none place-items-center rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent text-2xl text-primary shadow-inner">
          {drilldown.icon}
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold leading-tight text-foreground">
            {drilldown.title}
          </h3>
          <p className="mt-0.5 text-[11.5px] text-muted-foreground">
            एकूण नोंदी —{" "}
            <b className="font-semibold text-primary">{total.toLocaleString("en-IN")}</b>
          </p>
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {drilldown.items.map((item) => {
          const num = parseInt(item.value.replace(/,/g, ""), 10);
          const pct = Math.round((num / total) * 100);
          return (
            <li key={item.label} className="flex items-center gap-3.5">
              <RingGauge pct={pct} />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[13.5px] font-medium text-foreground/85">
                    {item.label}
                  </span>
                  <span className="whitespace-nowrap font-display text-[15px] font-bold text-primary">
                    {item.value}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-dashed border-border pt-3.5">
        <span className="text-[11px] text-muted-foreground">या महिन्यात अद्ययावत</span>
        <a
          href="#"
          className="group/link flex items-center gap-1.5 text-[11.5px] font-semibold text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          सविस्तर पहा
          <span className="transition-transform duration-200 group-hover/link:translate-x-1">
            →
          </span>
        </a>
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
           <BandLabel
          eyebrow="Counters"
          title="Live Overview"
        />
        </div>
       

        {/* Metrics Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {metrics.map((m, index) => (
            <MetricCard
              key={m.label}
              icon={m.icon}
              label={m.label}
              value={m.value}
              count={index + 1}
            />
          ))}
        </div>
      </Section>

      {/* Drilldown — ring-gauge ledger plaques */}
      <div className="bg-surface">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          
          <div className="mb-8">
            <BandLabel
            eyebrow="मंडळाची नोंदवही"
            title="तपशीलवार आकडेवारी"
            sub="प्रत्येक विभागाची सखोल माहिती — विकास योजना आणि निर्णयक्षमतेसाठी आधार."
          />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {drilldowns.map((d) => (
              <DrilldownCard key={d.title} drilldown={d} />
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}