import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { members } from "@/lib/members-data";
import { PageHero, Section } from "@/components/ui/Section";
import { User, ArrowLeft, MapPin, Phone, Mail } from "lucide-react";
import memberbg from "@/assets/community_member.jpg"
export const Route = createFileRoute("/committee/$memberId")({
  loader: ({ params }) => {
    const member = members.find((m) => m.id === params.memberId);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.member.name ?? "सदस्य"} | कार्यकारिणी मंडळ` },
      { name: "description", content: loaderData?.member.bio?.[0] ?? "कार्यकारिणी सदस्य माहिती." },
    ],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <p className="text-center text-muted-foreground">सदस्य सापडला नाही.</p>
      </Section>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <Section>
        <p className="text-center text-muted-foreground">माहिती लोड करताना त्रुटी आली.</p>
      </Section>
    </SiteLayout>
  ),
  component: MemberDetailPage,
});

function MemberDetailPage() {
  const { member } = Route.useLoaderData();

  return (
     <SiteLayout>
      <PageHero
        eyebrow={member.role}
        title={member.name}
        subtitle={member.organization}
        backgroundImage={memberbg}
      />
      <Section>
        <div className="mx-auto max-w-7xl">
          <Link
            to="/committee"
            className="group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]"
          >
            <ArrowLeft className="h-4 w-4" /> सर्व सदस्य पहा
          </Link>

          <div className="mt-8 grid gap-10 rounded-3xl items-center border border-border bg-card p-4 shadow-soft sm:p-5 md:grid-cols-[300px_1fr]">
            {/* Portrait */}
            <div className="mx-auto w-full max-w-[260px] md:max-w-none">
              <div className="relative rounded-t-[999px] rounded-b-2xl bg-gradient-to-b from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] p-[6px] shadow-[0_14px_30px_-12px_rgba(212,175,55,0.55)]">
                <div className="rounded-t-[999px] rounded-b-2xl bg-card p-[5px]">
                  <div className="h-[300px] w-full overflow-hidden rounded-t-[999px] rounded-b-xl bg-secondary/20">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="grid h-24 w-24 place-items-center rounded-full bg-secondary text-secondary-foreground">
                          <User className="h-12 w-12" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative mx-auto -mt-4 w-fit">
                <div
                  className="bg-gradient-to-r from-[var(--gold-600)] via-[var(--gold-300)] to-[var(--gold-600)] px-6 py-2 text-center font-['Mukta'] text-xs font-bold tracking-[0.08em] text-[var(--maroon-950)] shadow-[0_6px_16px_-6px_rgba(0,0,0,0.35)]"
                  style={{ clipPath: "polygon(6% 0%, 94% 0%, 100% 50%, 94% 100%, 6% 100%, 0% 50%)" }}
                >
                  {member.role}
                </div>
              </div>
            </div>

            {/* Content — clean and quiet, one gold rule as the only flourish */}
            <div>
              <h1 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
                {member.name}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground font-bold">{member.organization}</p>
              <span className="mt-3 block h-[3px] w-14 rounded-full bg-gradient-to-r from-[var(--gold-600)] to-[var(--gold-300)]" />
              

              {member.bio && (
                <div className="mt-6 space-y-3 text-base leading-relaxed text-foreground/85">
                  {member.bio.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}

              <div className="mt-5">
                {member.area && (
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-[var(--gold-600)]" />
                    <span className="text-sm">{member.area}</span>
                  </div>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-3 mb-3"
                  >
                    <Phone className="h-5 w-5 text-[var(--gold-600)]" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3"
                  >
                    <Mail className="h-5 w-5 text-[var(--gold-600)]" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}