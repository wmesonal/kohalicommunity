import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section, SectionHeader, FeatureCard } from "@/components/ui/Section";
import {
  Database,
  Users,
  GraduationCap,
  Briefcase,
  Building2,
  BarChart3,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

export const Route = createFileRoute("/services/socio-economic-portal")({
  head: () => ({
    meta: [
      { title: "Kohli Patil Socio-Economic Portal | सेवा" },
      { name: "description", content: "समाजाच्या सर्वांगीण विकासासाठी डेटा आधारित डिजिटल पोर्टल — कुटुंब सर्वेक्षण, समाज निर्देशिका, शिक्षण व रोजगार माहिती आणि समाज आकडेवारी." },
      { property: "og:title", content: "Kohli Patil Socio-Economic Portal" },
      { property: "og:description", content: "समाज विकासासाठी डेटा आधारित डिजिटल प्लॅटफॉर्म." },
    ],
  }),
  component: SocioEconomicPage,
});

function SocioEconomicPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service · 01"
        title="Kohli Patil Socio-Economic Portal"
        subtitle="समाज विकासासाठी डेटा आधारित डिजिटल प्लॅटफॉर्म"
      />

      <Section>
        <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> सर्व सेवा
        </Link>

        <div className="mx-auto mt-8 max-w-4xl space-y-5">
          <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
            Kohli Patil Socio-Economic Portal हे समाजाच्या सर्वांगीण विकासासाठी तयार करण्यात आलेले एक आधुनिक डिजिटल पोर्टल आहे. या पोर्टलच्या माध्यमातून समाजातील कुटुंब, शिक्षण, रोजगार, व्यवसाय, आर्थिक स्थिती, कौशल्ये आणि सामाजिक माहितीचे डिजिटल स्वरूपात संकलन व व्यवस्थापन केले जाईल.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            या माहितीच्या आधारे समाजासाठी विविध विकास योजना, शैक्षणिक उपक्रम, रोजगार निर्मिती, व्यवसाय नेटवर्किंग आणि सामाजिक प्रकल्प प्रभावीपणे राबविता येतील.
          </p>
        </div>
      </Section>

      <div className="bg-surface">
        <Section>
          <SectionHeader eyebrow="Objectives" title="Portal चे उद्दिष्ट" />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              "समाजाची अद्ययावत माहिती संकलित करणे",
              "समाजाची अचूक आकडेवारी तयार करणे",
              "युवकांना रोजगाराच्या संधी उपलब्ध करून देणे",
              "विद्यार्थ्यांना शैक्षणिक मदत आणि मार्गदर्शन",
              "उद्योजक आणि व्यावसायिकांना एकत्र जोडणे",
              "समाज विकासासाठी नियोजन सुलभ करणे",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Section>
        <SectionHeader eyebrow="Features" title="प्रमुख सुविधा" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<Database className="h-6 w-6" />} title="Family Survey System" description="समाजातील प्रत्येक कुटुंबाची माहिती डिजिटल स्वरूपात संकलित केली जाईल." />
          <FeatureCard icon={<Users className="h-6 w-6" />} title="Community Directory" description="समाजातील सर्व सदस्यांची शोधता येणारी निर्देशिका." />
          <FeatureCard icon={<GraduationCap className="h-6 w-6" />} title="Education Database" description="विद्यार्थी, पदवीधर, स्पर्धा परीक्षा उमेदवार आणि शैक्षणिक माहिती." />
          <FeatureCard icon={<Briefcase className="h-6 w-6" />} title="Employment Information" description="रोजगार शोधणारे युवक आणि कार्यरत व्यावसायिकांची माहिती." />
          <FeatureCard icon={<Building2 className="h-6 w-6" />} title="Business & Entrepreneur Network" description="समाजातील व्यावसायिक आणि उद्योजकांना जोडणारे नेटवर्क." />
          <FeatureCard icon={<BarChart3 className="h-6 w-6" />} title="Community Statistics Dashboard" description="समाजाच्या विकासाशी संबंधित आकडेवारीचे आधुनिक Dashboard." />
        </div>
      </Section>

      <div className="bg-surface">
        <Section>
          <SectionHeader eyebrow="Benefits" title="या पोर्टलचे फायदे" />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {[
              "अचूक समाज आकडेवारी",
              "विकास नियोजनासाठी उपयुक्त डेटा",
              "समाजातील प्रतिभा शोधणे",
              "रोजगार आणि व्यवसाय संधी",
              "डिजिटल समाज उभारणी",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">✓</span>
                <span className="text-sm font-medium text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </SiteLayout>
  );
}
