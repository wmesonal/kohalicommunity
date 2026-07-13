import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { getBookById, books } from "@/lib/books-data";
import { PageHero, Section } from "@/components/ui/Section";
import { ArrowLeft, Calendar, BookOpen, User, Download } from "lucide-react";
import book_details from "@/assets/book_details.jpg";

export const Route = createFileRoute("/books/$bookId")({
  loader: ({ params }) => {
    const book = getBookById(params.bookId);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.book.title} | पुस्तके` },
          { name: "description", content: loaderData.book.shortDescription },
        ]
      : [{ title: "पुस्तक सापडले नाही" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-display text-3xl font-bold">पुस्तक सापडले नाही</h1>
          <Link to="/books" className="mt-6 inline-block text-primary underline">पुस्तके पहा</Link>
        </div>
      </Section>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-display text-2xl font-bold">त्रुटी</h1>
          <p className="mt-2 text-muted-foreground">{error.message}</p>
          <button onClick={reset} className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground">पुन्हा प्रयत्न करा</button>
        </div>
      </Section>
    </SiteLayout>
  ),
  component: BookDetailPage,
});

// small gold corner flourish reused on cards — echoes the hero's frame language
function CornerFlourish({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M2 22V6a4 4 0 0 1 4-4h16" />
    </svg>
  );
}

function BookDetailPage() {
  const { book } = Route.useLoaderData();
  const related = books.filter((b) => b.id !== book.id).slice(0, 3);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Digital Library"
        title="पुस्तके"
        subtitle="ज्ञान, संस्कार आणि इतिहासाचा डिजिटल खजिना — क्लिक करा आणि ऑनलाइन वाचा"
        backgroundImage={book_details}
      />
      <Section>
        <Link
          to="/books"
          className="group inline-flex items-center justify-center gap-1.5 rounded-[2px] px-5 py-2.5 sm:px-7 sm:py-3 font-['Mukta'] text-xs sm:text-sm font-bold tracking-[0.02em] transition-all duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4" />
          पुस्तके यादीकडे परत जा
        </Link>

         {/* ===== HERO ===== */}
        <div className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[#2a0810] shadow-elegant">
          {/* subtle texture, purely decorative, no layout impact */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "18px 18px" }}
            aria-hidden="true"
          />

          <div className="relative grid gap-8 p-6 sm:p-10 md:grid-cols-[220px_1fr] md:gap-10 lg:grid-cols-[260px_1fr] lg:gap-12 lg:p-8">
            {/* Cover */}
            <div className="mx-auto w-full max-w-[220px] md:mx-0">
              <div className="overflow-hidden rounded-xl border-4 border-[#d3af35] shadow-2xl ring-1 ring-white/10">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="aspect-[2/3] w-full object-cover"
                />
              </div>
            </div>

            {/* Title / meta */}
            <div className="flex flex-col justify-center text-center text-primary-foreground md:text-left">
              <span className="mx-auto inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary md:mx-0">
                {book.category}
              </span>
              <h1 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-5xl">
                {book.title}
              </h1>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/75 md:justify-start">
                <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />{book.author}</span>
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{book.date}</span>
                <span className="inline-flex items-center gap-1.5"><BookOpen className="h-4 w-4" />{book.pages} पाने</span>
              </div>

              <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:mx-0">
                {book.shortDescription}
              </p>
              <div className="flex gap-3 mt-5">
                <a
                  href="#reader"
                  className="group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]"
                >
                  ऑनलाइन वाचा
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </a>
                <a
                  href={book.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-1 rounded-[2px] border border-[var(--gold-500)] bg-transparent px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--gold-300)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-[rgba(212,175,55,0.12)]"
                >
                  <Download className="h-4 w-4" />
                  PDF डाउनलोड करा
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* ===== BODY ===== */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="space-y-7">
            {/* Description */}
            <div className="relative border border-[rgba(156,116,32,0.35)] bg-[#faf3e0] p-6 shadow-[0_6px_18px_-14px_rgba(74,17,25,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-16px_rgba(74,17,25,0.45)] sm:p-5">
              <p className="text-lg font-bold uppercase text-[#9c7420]">पुस्तकाबद्दल</p>
              <div className="mt-2 h-px w-16 bg-[#9c7420]" />
              <p className="mt-4 text-lg leading-relaxed text-[rgba(42,24,16,0.85)]">
                {book.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="border border-[rgba(156,116,32,0.35)] bg-[#faf3e0] p-6 shadow-[0_6px_18px_-14px_rgba(74,17,25,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-16px_rgba(74,17,25,0.45)] sm:p-5">
              <h3 className="font-display text-lg font-semibold text-[#4a1119]">पुस्तकाची वैशिष्ट्ये</h3>
              <div className="mt-2 h-px w-16 bg-[#9c7420]" />
              <ul className="mt-5 grid gap-1 sm:grid-cols-2">
                {book.highlights.map((h: string) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 rounded-sm px-2 py-1.5 text-lg text-[rgba(42,24,16,0.85)] transition-colors duration-200 hover:bg-[rgba(156,116,32,0.08)]"
                  >
                    <span className="mt-0.5 shrink-0 text-[#9c7420]">◆</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PDF viewer — reading stand */}
            <div id="reader" className="scroll-mt-24">
              <div className="mx-auto flex w-fit items-center gap-2 rounded-t-md bg-[linear-gradient(180deg,#fff3cc,#e8c14a)] px-6 py-1.5 text-xs font-bold tracking-[0.08em] text-[#4a1119] shadow-[0_2px_4px_rgba(0,0,0,0.22)]">
                <BookOpen className="h-3.5 w-3.5" />
                ऑनलाइन वाचा
              </div>
              <div className="relative border-[6px] border-[#5c1420] bg-[#4a1119] p-2 shadow-[0_20px_40px_-16px_rgba(74,17,25,0.5)]">
                <svg className="absolute left-1 top-1 h-3.5 w-3.5 text-[#e8c14a] opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2 22V6a4 4 0 0 1 4-4h16" /></svg>
                <svg className="absolute right-1 top-1 h-3.5 w-3.5 text-[#e8c14a] opacity-90 [transform:scaleX(-1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2 22V6a4 4 0 0 1 4-4h16" /></svg>
                <svg className="absolute bottom-1 left-1 h-3.5 w-3.5 text-[#e8c14a] opacity-90 [transform:scaleY(-1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2 22V6a4 4 0 0 1 4-4h16" /></svg>
                <svg className="absolute bottom-1 right-1 h-3.5 w-3.5 text-[#e8c14a] opacity-90 [transform:scale(-1,-1)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2 22V6a4 4 0 0 1 4-4h16" /></svg>
                <iframe src={book.pdfUrl} title={book.title} className="h-[60vh] w-full sm:h-[70vh]" />
              </div>
              <p className="mt-2 text-center text-xs text-muted-foreground">खालील व्ह्यूअरमध्ये पुस्तक थेट वाचता येईल.</p>
            </div>
          </div>

          {/* Sidebar — bookplate tag */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="relative border border-[rgba(156,116,32,0.35)] bg-[#faf3e0] p-6 shadow-[0_10px_24px_-12px_rgba(74,17,25,0.35)] transition-shadow duration-300 hover:shadow-[0_16px_32px_-14px_rgba(74,17,25,0.4)]">
              <h3 className="text-center font-display text-lg font-bold uppercase text-[#7c2431]">तपशील</h3>
              <div className="mx-auto mt-2 h-px w-10 bg-[#9c7420]" />
              <dl className="mt-5 space-y-3.5 text-lg">
                <div className="flex items-center justify-between border-b border-dashed border-[rgba(156,116,32,0.4)] pb-3">
                  <dt className="inline-flex items-center gap-2 text-[rgba(74,17,25,0.6)]"><User className="h-4 w-4" />लेखक</dt>
                  <dd className="font-medium text-[#4a1119]">{book.author}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-[rgba(156,116,32,0.4)] pb-3">
                  <dt className="inline-flex items-center gap-2 text-[rgba(74,17,25,0.6)]"><Calendar className="h-4 w-4" />प्रकाशन</dt>
                  <dd className="font-medium text-[#4a1119]">{book.date}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="inline-flex items-center gap-2 text-[rgba(74,17,25,0.6)]"><BookOpen className="h-4 w-4" />पाने</dt>
                  <dd className="font-medium text-[#4a1119]">{book.pages}</dd>
                </div>
              </dl>
              <a
                href={book.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full mt-5 items-center justify-center gap-1.5 rounded-[2px] px-5 py-2.5 sm:px-7 sm:py-3 font-['Mukta'] text-xs sm:text-sm font-bold tracking-[0.02em] transition-all duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2 active"
              >
                <Download className="h-4 w-4" />
                PDF डाउनलोड करा
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.5),transparent)] transition-transform duration-700 group-hover/btn:translate-x-full" />
              </a>
            </div>
          </aside>
        </div>

        {/* ===== RELATED — ON THE SHELF ===== */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-xl font-bold text-[#4a1119] sm:text-2xl">इतर पुस्तके</h2>
            <div className="mt-2 h-px w-16 bg-[#9c7420]" />
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((b) => (
                <Link
                  key={b.id}
                  to="/books/$bookId"
                  params={{ bookId: b.id }}
                  className="group relative flex gap-3 overflow-hidden rounded-sm bg-[linear-gradient(150deg,#7c2431_0%,#5c1420_58%,#4a1119_100%)] p-3 pl-5 shadow-[0_10px_20px_-12px_rgba(74,17,25,0.4)] ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_-14px_rgba(74,17,25,0.5)] hover:ring-[rgba(232,193,74,0.5)]"
                >
                  <div className="absolute bottom-0 left-0 top-0 w-[10px] bg-[linear-gradient(90deg,#4a1119,#5c1420_55%,#7c2431)]" />
                  <div className="w-16 shrink-0 overflow-hidden bg-[linear-gradient(155deg,#fff3cc,#e8c14a_40%,#9c7420)] p-[3px]">
                    <div className="aspect-[2/3] overflow-hidden bg-[#4a1119]">
                      <img
                        src={b.cover}
                        alt={b.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center py-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#e8c14a]">{b.category}</p>
                    <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold text-[#fbe9bc]">{b.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>
    </SiteLayout>
  );
}