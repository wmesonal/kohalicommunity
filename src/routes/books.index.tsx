import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section } from "@/components/ui/Section";
import { books } from "@/lib/books-data";
import { Calendar, BookOpen, ArrowRight, FileText } from "lucide-react";
import booksbg from "@/assets/booksbg.jpg";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/books/")({
  head: () => ({
    meta: [
      { title: "पुस्तके | कोहळी पाटील समाज" },
      { name: "description", content: "समाजाचा इतिहास, संस्कृती, संशोधन आणि ई-बुक्सचा डिजिटल संग्रह — ऑनलाइन वाचनासाठी उपलब्ध." },
      { property: "og:title", content: "पुस्तके | कोहळी पाटील समाज" },
      { property: "og:description", content: "ज्ञान, संस्कार आणि इतिहासाचा डिजिटल खजिना." },
    ],
  }),
  component: BooksPage,
});

// Alternating shelf-lean per card, matched by index (index % 3)
const TILTS = ["-0.5deg", "0.4deg", "-0.25deg"];

function BooksPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Digital Library"
        title="पुस्तके"
        subtitle="ज्ञान, संस्कार आणि इतिहासाचा डिजिटल खजिना — क्लिक करा आणि ऑनलाइन वाचा"
        backgroundImage={booksbg}
      />

      <Section>
        <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
          {books.map((book, i) => (
            <li key={book.id}>
              <Link
                to="/books/$bookId"
                params={{ bookId: book.id }}
                className="group block [perspective:1400px]"
              >
                {/* Cover */}
                <div
                  className="relative overflow-hidden pt-4 pr-4 pb-0 pl-[34px] rounded-[3px_8px_8px_3px]
                             bg-[radial-gradient(ellipse_at_30%_0%,var(--maroon-700),transparent_65%),linear-gradient(150deg,var(--maroon-700)_0%,var(--maroon-850)_58%,var(--maroon-900)_100%)]
                             shadow-[0_20px_30px_-16px_color-mix(in_srgb,var(--maroon-900)_40%,transparent),0_4px_8px_color-mix(in_srgb,var(--maroon-900)_22%,transparent),inset_0_0_0_1px_rgba(0,0,0,0.18)]  transition-all duration-500 ease-out motion-reduce:transition-none
                             group-hover:[transform:translateY(-10px)_rotateY(-5deg)]
                             group-hover:shadow-[-16px_26px_36px_-16px_color-mix(in_srgb,var(--maroon-900)_45%,transparent),0_4px_8px_color-mix(in_srgb,var(--maroon-900)_22%,transparent),inset_0_0_0_1px_rgba(0,0,0,0.18)]"
                  style={{ "--tilt": TILTS[i % 3] } as CSSProperties}
                >
                  {/* Spine with raised gold cords */}
                  <div className="absolute left-0 top-0 bottom-0 w-[22px] z-[6]
                                   bg-[linear-gradient(90deg,var(--maroon-900),var(--maroon-850)_55%,var(--maroon-700))]
                                   shadow-[inset_-4px_0_8px_rgba(0,0,0,0.32)]">
                    <span className="absolute left-[2px] right-[2px] top-[18%] h-[9px] rounded-[2px]
                                      bg-[linear-gradient(180deg,rgba(0,0,0,0.28),transparent_35%,transparent_65%,rgba(255,255,255,0.18)),linear-gradient(90deg,var(--gold-700),var(--gold-400)_45%,var(--gold-100)_52%,var(--gold-400)_60%,var(--gold-700))]
                                      shadow-[0_1px_2px_rgba(0,0,0,0.4),0_-1px_1px_rgba(255,255,255,0.2)]" />
                    <span className="absolute left-[2px] right-[2px] top-[38%] h-[9px] rounded-[2px]
                                      bg-[linear-gradient(180deg,rgba(0,0,0,0.28),transparent_35%,transparent_65%,rgba(255,255,255,0.18)),linear-gradient(90deg,var(--gold-700),var(--gold-400)_45%,var(--gold-100)_52%,var(--gold-400)_60%,var(--gold-700))]
                                      shadow-[0_1px_2px_rgba(0,0,0,0.4),0_-1px_1px_rgba(255,255,255,0.2)]" />
                    <span className="absolute left-[2px] right-[2px] top-[58%] h-[9px] rounded-[2px]
                                      bg-[linear-gradient(180deg,rgba(0,0,0,0.28),transparent_35%,transparent_65%,rgba(255,255,255,0.18)),linear-gradient(90deg,var(--gold-700),var(--gold-400)_45%,var(--gold-100)_52%,var(--gold-400)_60%,var(--gold-700))]
                                      shadow-[0_1px_2px_rgba(0,0,0,0.4),0_-1px_1px_rgba(255,255,255,0.2)]" />
                    <span className="absolute left-[2px] right-[2px] top-[78%] h-[9px] rounded-[2px]
                                      bg-[linear-gradient(180deg,rgba(0,0,0,0.28),transparent_35%,transparent_65%,rgba(255,255,255,0.18)),linear-gradient(90deg,var(--gold-700),var(--gold-400)_45%,var(--gold-100)_52%,var(--gold-400)_60%,var(--gold-700))]
                                      shadow-[0_1px_2px_rgba(0,0,0,0.4),0_-1px_1px_rgba(255,255,255,0.2)]" />
                  </div>

                  {/* Ornate gold frame */}
                  <div className="relative p-4 border border-[color-mix(in_srgb,var(--gold-400)_65%,transparent)]
                                   before:content-[''] before:absolute before:inset-[5px]
                                   before:border before:border-[color-mix(in_srgb,var(--gold-400)_40%,transparent)] before:pointer-events-none">
                    <svg className="absolute w-[13px] h-[13px] text-[var(--gold-400)] opacity-90 top-[-1px] left-[-1px]"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M2 22V6a4 4 0 0 1 4-4h16" />
                    </svg>
                    <svg className="absolute w-[13px] h-[13px] text-[var(--gold-400)] opacity-90 top-[-1px] right-[-1px] [transform:scaleX(-1)]"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M2 22V6a4 4 0 0 1 4-4h16" />
                    </svg>
                    <svg className="absolute w-[13px] h-[13px] text-[var(--gold-400)] opacity-90 bottom-[-1px] left-[-1px] [transform:scaleY(-1)]"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M2 22V6a4 4 0 0 1 4-4h16" />
                    </svg>
                    <svg className="absolute w-[13px] h-[13px] text-[var(--gold-400)] opacity-90 bottom-[-1px] right-[-1px] [transform:scale(-1,-1)]"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M2 22V6a4 4 0 0 1 4-4h16" />
                    </svg>

                    {/* Framed illustration plate */}
                    <div className="mt-0 p-[5px] bg-[linear-gradient(155deg,var(--gold-100),var(--gold-400)_40%,var(--gold-700))] shadow-[0_3px_8px_rgba(0,0,0,0.3)]">
                      <div className="relative aspect-[2/3] overflow-hidden bg-[var(--maroon-900)] shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]">
                        <img
                          src={book.cover}
                          alt={book.title}
                          loading="lazy"
                          className="w-full h-full object-cover [filter:sepia(0.1)_saturate(1.02)_contrast(1.02)_brightness(1.04)]
                                     transition-transform duration-700 ease-in-out group-hover:scale-[1.07]"
                        />
                      </div>
                    </div>

                    {/* Category banner */}
                    <div className="mx-auto mt-[-14px] w-fit px-5 py-1 text-[11px] tracking-[0.06em] text-[var(--maroon-900)]
                                     bg-[linear-gradient(180deg,var(--gold-100),var(--gold-400))] shadow-[0_2px_4px_rgba(0,0,0,0.22)]
                                     [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_50%,calc(100%-10px)_100%,10px_100%,0_50%)]">
                      {book.category}
                    </div>

                    {/* Title & author */}
                    <h3 className="font-display mt-3 text-center text-xl text-[var(--gold-100)]
                                    [text-shadow:0_1px_0_rgba(255,255,255,0.3),0_-1px_1px_rgba(0,0,0,0.4),0_2px_3px_rgba(0,0,0,0.25)]">
                      {book.title}
                    </h3>
                    <p className="font-en mt-1 text-center text-xs italic text-[var(--gold-400)] opacity-95">
                      {book.author}
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-2 mx-auto mt-[10px] w-[70%]">
                      <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,var(--gold-400))]" />
                      <span className="text-[8px] leading-none text-[var(--gold-400)]">◆</span>
                      <span className="h-px flex-1 bg-[linear-gradient(90deg,var(--gold-400),transparent)]" />
                    </div>

                    {/* Date / pages */}
                    <div className="flex items-center justify-center gap-2.5 mt-2 text-[11px] text-[var(--gold-400)] opacity-95">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{book.date}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1"><BookOpen className="h-3 w-3" />{book.pages} पाने</span>
                    </div>

                    {/* Parchment description plaque */}
                    <div className="mt-3.5 p-3.5 [background:repeating-linear-gradient(0deg,color-mix(in_srgb,var(--maroon-800)_3.5%,transparent)_0_1px,transparent_1px_22px),var(--cream)]
                                     shadow-[0_4px_10px_color-mix(in_srgb,var(--maroon-900)_18%,transparent)]">
                      <p className="text-sm leading-relaxed text-[color-mix(in_srgb,var(--ink)_85%,transparent)]">
                        {book.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-[13.5px] font-bold text-[var(--maroon-700)]">
                        <FileText className="h-[15px] w-[15px]" />
                        ऑनलाइन वाचा
                        <ArrowRight className="ml-auto h-[15px] w-[15px] transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </SiteLayout>
  );
}