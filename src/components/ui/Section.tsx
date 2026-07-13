import type { ReactNode } from "react";
/* ============================================================
   DESIGN TOKENS
   ============================================================ */
const MAROON_950 = "var(--maroon-black)";
const MAROON_900 = "var(--maroon-950)";
const MAROON_800 = "var(--maroon-925)";
const MAROON_700 = "var(--maroon-900)";
const CREAM = "var(--paper)";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  backgroundImage,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
<section className="relative overflow-hidden"
style={{ background: `linear-gradient(175deg, ${MAROON_950} 0%, ${MAROON_800} 100%)` }}>
  <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `repeating-linear-gradient(60deg, rgba(212,175,55,0.05) 0 1.5px, transparent 1.5px 26px),
          repeating-linear-gradient(-60deg, rgba(212,175,55,0.05) 0 1.5px, transparent 1.5px 26px)`,
      }}
    />
  {backgroundImage && (
    <>
      <img src={backgroundImage} alt="" aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.20_0.08_28)/0.85] via-[oklch(0.18_0.08_28)/0.80] to-[oklch(0.15_0.06_28)/0.92]" />
      <div className="absolute inset-0 bg-black/30" />
    </>
  )}
  {/* removed: fake radial-dot pattern, doesn't exist on the site */}

  <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-32">
    {breadcrumbs && breadcrumbs.length > 0 && (
      <nav aria-label="Breadcrumb" className="mb-6 flex justify-center gap-3 text-xs tracking-wide sm:text-sm">
        {breadcrumbs.map((crumb, i) => {
          const isLast = i === breadcrumbs.length - 1;
          return (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true" className="text-[oklch(0.85_0.15_85)]/50">/</span>}
              {crumb.href && !isLast ? (
                <a href={crumb.href} className="text-primary-foreground/65 hover:text-[oklch(0.85_0.15_85)]">
                  {crumb.label}
                </a>
              ) : (
                <span className={isLast ? "font-semibold text-[oklch(0.85_0.15_85)]" : "text-primary-foreground/65"}>
                  {crumb.label}
                </span>
              )}
            </span>
          );
        })}
      </nav>
    )}

    {eyebrow && (
      <div className={`mb-5 flex items-center justify-center gap-3`}>
        <span
          aria-hidden="true"
          className="h-px w-8 sm:w-12"
          style={{ background: `linear-gradient(90deg, transparent, #f0d585)` }}
        />
        <span
          className="text-[11px] font-bold uppercase tracking-[0.25em] sm:text-xs sm:tracking-[0.3em] text-[var(--gold-400)]"
        >
          {eyebrow}
        </span>
        <span
          aria-hidden="true"
          className="h-px w-8 sm:w-12"
          style={{ background: `linear-gradient(270deg, transparent, #f0d585)` }}
        />
      </div>
    )}

    <h1 className="script-heading2 relative mt-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-4xl" style={{ color: `#f0d585` }}>
      {title}
    </h1>
    {subtitle && (
      <p className="relative mt-3 text-sm leading-relaxed sm:text-base md:text-lg mx-auto px-2 sm:px-4 text-white/70">
        {subtitle}
      </p>
    )}
    {children && <div className="mt-8">{children}</div>}
  </div>
</section>
  );
}

type BandLabelProps = {
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
  align?: "left" | "center";
};

export function BandLabel({ eyebrow, title, sub, dark = false, align = "center" }: BandLabelProps) {
  const accent = dark ? "var(--gold-400)" : "var(--gold-700)";
  const textColor = dark ? "#f0d585" : "#760823";

  return (
    <div className={`relative w-full max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <span
          aria-hidden="true"
          className="h-px w-8 sm:w-12"
          style={{ background: `linear-gradient(90deg, transparent, ${accent})` }}
        />
        <span
          className="text-[14px] font-bold uppercase sm:text-[15px]"
          style={{ color: accent }}
        >
          {eyebrow}
        </span>
        <span
          aria-hidden="true"
          className="h-px w-8 sm:w-12"
          style={{ background: `linear-gradient(270deg, transparent, ${accent})` }}
        />
      </div>

      <h2
        className="script-heading2 relative mt-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-4xl"
        style={dark ? { color: textColor, textShadow: "0 2px 26px rgba(212,175,55,0.28)" } : { color: textColor }}
      >
        {title}
      </h2>

      {sub && (
        <p
          className={`relative mt-3 text-sm leading-relaxed sm:text-base md:text-lg ${
            align === "center" ? "mx-auto px-2 sm:px-4" : ""
          } ${dark ? "text-white/70" : "text-[#5f4b35]"}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 max-w-3xl m-auto md:mb-16 ${
        isCenter ? "text-center" : "text-left"
      }`}
    >
      
      {eyebrow && (
        <div
          className={`inline-flex ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span className="flex items-center gap-4 text-[#b8860b] text-sm font-semibold uppercase tracking-[0.2em]">
            <span className="h-px w-8 bg-[#b8860b]" />
            {eyebrow}
            <span className="h-px w-8 bg-[#b8860b]" />
          </span>
        </div>
      )}

      <h4
        className={`mt-3 mb-4 font-['Cinzel',serif] font-extrabold text-3xl md:text-4xl lg:text-4xl text-[#6b1024] ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {title}
      </h4>

      {subtitle && (
        <p
          className={`text-sm md:text-base text-gray-600 leading-relaxed ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  items,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  items?: string[];
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
      {icon && (
        <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {icon}
        </div>
      )}
      <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">{title}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>}
      {items && items.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-foreground/85">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
      <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
