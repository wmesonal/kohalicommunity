import { useState, type FormEvent } from "react";
import { PenLine, X, Send, CheckCircle2, MessageCircle, Megaphone, Mail, Upload, type LucideIcon } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { BandLabel } from "@/components/ui/Section";

/* ============================================================
   DESIGN TOKENS
   ============================================================ */
const MAROON_950 = "var(--maroon-black)";
const MAROON_900 = "var(--maroon-950)";
const MAROON_800 = "var(--maroon-925)";
const MAROON_700 = "var(--maroon-900)";
const CREAM = "var(--paper)";


type FormKind = "feedback" | "suggestion";

interface FeedbackCard {
  id: FormKind;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  desc: string;
  cta: string;
}

const cards: FeedbackCard[] = [
  {
    id: "feedback",
    icon: MessageCircle,
    eyebrow: "Share an Experience",
    title: "अभिप्राय कळवा",
    desc: "समाजाच्या कार्यक्रमांबद्दल आणि उपक्रमांबद्दल तुमचा अनुभव आमच्यासोबत शेअर करा.",
    cta: "अभिप्राय लिहा",
  },
  {
    id: "suggestion",
    icon: Megaphone,
    eyebrow: "Suggest an Idea",
    title: "सूचना अथवा तक्रार",
    desc: "समाजाच्या प्रगतीसाठी तुमची सूचना महत्त्वाची आहे — मोकळेपणाने कळवा.",
    cta: "सूचना लिहा",
  },
];

export function CommunityFeedback() {
  const { t } = useLang();
  const [openForm, setOpenForm] = useState<FormKind | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const activeCard = cards.find((c) => c.id === openForm) ?? null;

  function handleOpen(id: FormKind) {
    setSubmitted(false);
    setFileName("");
    setOpenForm(id);
  }

  function handleClose() {
    setOpenForm(null);
    setSubmitted(false);
    setFileName("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <style>{`
        @keyframes letterUnfold {
          from { opacity: 0; transform: translateY(18px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes sealDrop {
          from { opacity: 0; transform: translate(-50%, -14px) scale(0.6); }
          to   { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
      `}</style>

      {/* faint stitched-paper texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `radial-gradient(${MAROON_700} 1px, transparent 1px)`, backgroundSize: "22px 22px" }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <BandLabel
            eyebrow="Voice of the Community"
            title={t("समाजाचा आवाज")}
            sub={t("तुमचे विचार, अनुभव आणि सूचना आमच्यासाठी अमूल्य आहेत — आम्हाला एक पत्र लिहा.")}
          />
       
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {cards.map((card) => (
            <div key={card.id} className="group relative">
              {/* envelope peeking out behind, deepens the paper-stack feel */}
              <div
                aria-hidden="true"
                className="absolute inset-x-4 -bottom-2.5 h-full rounded-2xl opacity-70 transition-transform duration-300 group-hover:-translate-y-1"
                style={{ background: `linear-gradient(160deg, ${MAROON_800}, ${MAROON_900})` }}
              />
              {/* envelope front */}
              <div
                className="relative overflow-hidden rounded-2xl bg-card p-8 shadow-elegant transition-transform duration-300 group-hover:-translate-y-1.5"
                style={{ border: "1px solid var(--gold-500)" }}
              >
                <svg
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-24 w-full"
                  viewBox="0 0 300 100"
                  preserveAspectRatio="none"
                  style={{ color: "var(--gold-500)", opacity: 0.08 }}
                >
                  <path d="M0 0 L150 90 L300 0 Z" fill="currentColor" />
                </svg>

                <div className="relative flex flex-col items-center text-center">
                  <div
                    className="grid h-16 w-16 place-items-center rounded-full shadow-md"
                    style={{ background: "linear-gradient(160deg, var(--gold-300), var(--gold-600))" }}
                  >
                    <card.icon className="h-7 w-7 text-[var(--maroon-icon-ink)]" />
                  </div>
                  <p className="mt-4 text-[12px] font-bold uppercase tracking-widest" style={{ color: MAROON_700 }}>
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-1 font-display text-[20px] font-bold" style={{ color: MAROON_900 }}>
                    {t(card.title)}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-foreground/65">{t(card.desc)}</p>

                  <button
                    type="button"
                    onClick={() => handleOpen(card.id)}
                    className="mt-6 group inline-flex items-center justify-center gap-1 rounded-[2px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] px-4 py-2 sm:px-[26px] sm:py-3 font-['Mukta'] text-xs sm:text-[0.88rem] font-bold tracking-[0.02em] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_rgba(212,175,55,0.65)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.75)]"
                    style={{ background: "linear-gradient(135deg, var(--gold-300), var(--gold-600))" }}
                  >
                    <PenLine className="h-4 w-4" />
                    {t(card.cta)}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Modal: an unfolding letter ===== */}
      {activeCard ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t(activeCard.title)}
          onClick={handleClose}
        >
          {/* Outer shell: NOT clipped, so the wax seal can poke out above the card.
              It owns the height budget; the card inside sizes its own scroll area against it,
              so the seal + close button never move when the form content scrolls. */}
          <div
            className="relative flex w-full max-w-2xl flex-col"
            style={{ maxHeight: "min(90vh, 720px)", animation: "letterUnfold 0.35s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* wax seal - anchored to the shell, half-overlaps the card top, stays put on scroll */}
            <div
              className="absolute left-1/2 top-0 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] shadow-lg sm:h-14 sm:w-14 sm:border-4"
              style={{
                borderColor: CREAM,
                background: "linear-gradient(160deg, var(--gold-300), var(--gold-600))",
                animation: "sealDrop 0.4s 0.1s ease-out backwards",
              }}
              aria-hidden="true"
            >
              <Mail className="h-5 w-5 text-[var(--maroon-icon-ink)] sm:h-6 sm:w-6" />
            </div>

            {/* Card: clips to rounded corners; its own inner div (below) handles scrolling
                so this wrapper's border-radius never gets cut into by scrolled content. */}
            <div
              className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl shadow-2xl"
              style={{ background: CREAM }}
            >
              <button
                type="button"
                onClick={handleClose}
                aria-label={t("बंद करा")}
                className="absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full bg-black/[0.03] transition hover:bg-black/10 sm:right-4 sm:top-4"
                style={{ color: MAROON_700 }}
              >
                <X className="h-4 w-4" />
              </button>

              {/* Scrollable body — only this area scrolls; seal & close button stay fixed */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6 pt-9 sm:px-9 sm:pb-8 sm:pt-11">
              {!submitted ? (
                <>
                  <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: MAROON_700 }}>
                    {activeCard.eyebrow}
                  </p>
                  <h3 className="mt-2 text-center font-display text-2xl font-bold" style={{ color: MAROON_900 }}>
                    {t(activeCard.title)}
                  </h3>

                  <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    {/* Full name and phone - 2 columns */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-xs font-semibold" style={{ color: MAROON_800 }}>
                          {t("पूर्ण नाव")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          className="w-full rounded-lg border border-black/10 bg-white/70 px-4 py-2.5 text-sm text-foreground shadow-inner outline-none focus:border-[var(--gold-500)] focus:ring-1 focus:ring-[var(--gold-500)]"
                          placeholder={t("पूर्ण नाव")}
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-semibold" style={{ color: MAROON_800 }}>
                          {t("मोबाईल क्रमांक")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          className="w-full rounded-lg border border-black/10 bg-white/70 px-4 py-2.5 text-sm text-foreground shadow-inner outline-none focus:border-[var(--gold-500)] focus:ring-1 focus:ring-[var(--gold-500)]"
                          placeholder={t("मोबाईल क्रमांक")}
                        />
                      </div>
                    </div>

                    {/* District, Taluka, Village - 3 columns */}
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label className="mb-1 block text-xs font-semibold" style={{ color: MAROON_800 }}>
                          {t("जिल्हा")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="district"
                          className="w-full rounded-lg border border-black/10 bg-white/70 px-4 py-2.5 text-sm text-foreground shadow-inner outline-none focus:border-[var(--gold-500)] focus:ring-1 focus:ring-[var(--gold-500)]"
                          placeholder={t("जिल्हा")}
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-semibold" style={{ color: MAROON_800 }}>
                          {t("तालुका")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="taluka"
                          className="w-full rounded-lg border border-black/10 bg-white/70 px-4 py-2.5 text-sm text-foreground shadow-inner outline-none focus:border-[var(--gold-500)] focus:ring-1 focus:ring-[var(--gold-500)]"
                          placeholder={t("तालुका")}
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-semibold" style={{ color: MAROON_800 }}>
                          {t("गाव / शहर")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="village"
                          className="w-full rounded-lg border border-black/10 bg-white/70 px-4 py-2.5 text-sm text-foreground shadow-inner outline-none focus:border-[var(--gold-500)] focus:ring-1 focus:ring-[var(--gold-500)]"
                          placeholder={t("गाव / शहर")}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <label className="mb-1 block text-xs font-semibold" style={{ color: MAROON_800 }}>
                        {activeCard.id === "feedback" ? t("अभिप्रायाचे शीर्षक") : t("सूचनेचे शीर्षक")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="title"
                        className="w-full rounded-lg border border-black/10 bg-white/70 px-4 py-2.5 text-sm text-foreground shadow-inner outline-none focus:border-[var(--gold-500)] focus:ring-1 focus:ring-[var(--gold-500)]"
                        placeholder={activeCard.id === "feedback" ? t("अभिप्रायाचे शीर्षक") : t("सूचनेचे शीर्षक")}
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="mb-1 block text-xs font-semibold" style={{ color: MAROON_800 }}>
                        {activeCard.id === "feedback" ? t("अभिप्रायाचे संक्षिप्त वर्णन") : t("आपली सूचना / कल्पना")} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        className="w-full resize-none rounded-lg border border-black/10 bg-white/70 px-4 py-2.5 text-sm text-foreground shadow-inner outline-none focus:border-[var(--gold-500)] focus:ring-1 focus:ring-[var(--gold-500)]"
                        placeholder={t("इथे लिहा...")}
                      />
                    </div>

                    {/* File upload */}
                    <div>
                      <label className="mb-1 block text-xs font-semibold" style={{ color: MAROON_800 }}>
                        {t("फोटो / दस्तऐवज अपलोड")} <span className="text-xs font-normal" style={{ color: MAROON_700 }}>({t("ऐच्छिक")})</span>
                      </label>
                      <label
                        htmlFor={`${activeCard.id}-file`}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-black/10 bg-white/70 px-4 py-3 text-sm text-muted-foreground shadow-inner transition hover:border-[var(--gold-500)] hover:bg-white/90"
                      >
                        <Upload className="h-4 w-4" />
                        <span className="truncate">{fileName || t("फाइल निवडा किंवा येथे ड्रॅग करा")}</span>
                      </label>
                      <input
                        id={`${activeCard.id}-file`}
                        type="file"
                        name="file"
                        accept="image/*,.pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-[var(--maroon-icon-ink)] shadow-md transition hover:-translate-y-0.5"
                      style={{ background: "linear-gradient(135deg, var(--gold-300), var(--gold-600))" }}
                    >
                      <Send className="h-4 w-4" />
                      {activeCard.id === "feedback" ? t("अभिप्राय पाठवा") : t("सूचना पाठवा")}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center py-6 text-center">
                  <CheckCircle2 className="h-12 w-12" style={{ color: "var(--gold-600)" }} />
                  <h3 className="mt-4 font-display text-xl font-bold" style={{ color: MAROON_900 }}>
                    {t("धन्यवाद!")}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-foreground/65">
                    {t("आपला संदेश यशस्वीरित्या पाठविला आहे. आम्ही लवकरच आपल्याशी संपर्क साधू.")}
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-6 rounded-full px-6 py-2.5 text-sm font-bold shadow-md transition hover:-translate-y-0.5"
                    style={{ background: MAROON_800, color: "var(--gold-100)" }}
                  >
                    {t("बंद करा")}
                  </button>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}