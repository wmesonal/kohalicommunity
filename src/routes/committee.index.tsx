import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section } from "@/components/ui/Section";
import { MemberCard } from "@/components/MemberCard";
import { members } from "@/lib/members-data";
import communitybg from "@/assets/community_member.jpg"

export const Route = createFileRoute("/committee/")({
  head: () => ({
    meta: [
      { title: "कार्यकारिणी मंडळ | कोहळी समाज विकास मंडळ नागपूर" },
      { name: "description", content: "कोहळी समाज विकास मंडळ नागपूरच्या कार्यकारिणी मंडळातील प्रमुख पदाधिकाऱ्यांची संपूर्ण यादी." },
      { property: "og:title", content: "कार्यकारिणी मंडळ" },
      { property: "og:description", content: "समाजाच्या प्रगतीसाठी समर्पित प्रमुख पदाधिकारी." },
    ],
  }),
  component: CommitteePage,
});

function CommitteePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Executive Committee"
        title="कार्यकारिणी मंडळ"
        subtitle="समाजाच्या प्रगतीसाठी समर्पित प्रमुख पदाधिकारी"
        backgroundImage={communitybg}
      />
      <Section>
        <div className="mb-8">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]"
          >
            <ArrowLeft className="h-4 w-4" />
            मुख्यपृष्ठावर परत जा
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
