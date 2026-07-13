import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Camera } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section } from "@/components/ui/Section";
import { galleryPhotos } from "@/lib/gallery-data";
import { useLang } from "@/lib/i18n";
import imagebg from "@/assets/photo_gallery.jpg"

import {ArrowRight, type LucideIcon,} from "lucide-react";
/* ============================================================
   DESIGN TOKENS
   ============================================================ */
const MAROON_950 = "var(--maroon-black)";
const MAROON_900 = "var(--maroon-950)";
const MAROON_800 = "var(--maroon-925)";
const MAROON_700 = "var(--maroon-900)";
const CREAM = "var(--paper)";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "फोटो गॅलरी | कोहळी समाज विकास मंडळ नागपूर" },
      {
        name: "description",
        content:
          "समाजातील विविध कार्यक्रम, उपक्रम आणि अविस्मरणीय क्षणांचे छायाचित्र संग्रह.",
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
  component: GalleryPage,
});
  const galleryRotations = ["rotate-[-4deg]", "rotate-[3deg]", "rotate-[-2deg]", "rotate-[4deg]"];

function GalleryPage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Photo Gallery"
        title={t("फोटो गॅलरी")}
        subtitle={t(
          "समाजातील विविध कार्यक्रम, उपक्रम आणि अविस्मरणीय क्षणांचे छायाचित्र संग्रह",
        )}
        backgroundImage={imagebg}
      />
      <section className="py-16 sm:py-18">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <Link
                    to="/"
                    className="group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {t("मुख्यपृष्ठावर परत जा")}
                  </Link>
                </div>

      
                <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6">
                  {galleryPhotos.map((p, i) => (
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
              </div>
            </section>
    
    </SiteLayout>
  );
}