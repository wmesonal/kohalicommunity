import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section, SectionHeader } from "@/components/ui/Section";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, ArrowRight } from "lucide-react";
import contactbg from "@/assets/contactbg.jpg"

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "संपर्क | कोहळी समाज विकास मंडळ नागपूर" },
      { name: "description", content: "आम्हाला संपर्क करा — संपर्क फॉर्म, मोबाईल, WhatsApp, ईमेल आणि कार्यालयाचा पत्ता." },
      { property: "og:title", content: "संपर्क | कोहळी पाटील समाज" },
      { property: "og:description", content: "जोडलेला समाज, सक्षम समाज." },
    ],
  }),
  component: ContactPage,
});

type BandLabelProps = {
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
  align?: "left" | "center";
};

function BandLabel({ eyebrow, title, sub, dark = false, align = "center" }: BandLabelProps) {
  const accent = dark ? "var(--gold-400)" : "var(--gold-700)";
  const textColor = dark ? "var(--gold-300)" : "var(--maroon-800)";

  return (
    <div className={`relative w-full max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
        <span
          aria-hidden="true"
          className="h-px w-8 sm:w-12"
          style={{ background: `linear-gradient(90deg, transparent, ${accent})` }}
        />
        <span
          className="text-[11px] font-bold uppercase tracking-[0.25em] sm:text-xs sm:tracking-[0.3em]"
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
        style={dark ? { color: textColor, textShadow: "0 2px 26px color-mix(in srgb, var(--gold-500) 28%, transparent)" } : { color: textColor }}
      >
        {title}
      </h2>

      {sub && (
        <p
          className={`relative mt-3 text-sm leading-relaxed sm:text-base md:text-lg ${
            align === "center" ? "mx-auto px-2 sm:px-4" : ""
          } ${dark ? "text-white/70" : "text-[var(--text-muted)]"}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add your actual form submission logic here
      // For example, send data to an API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSent(true);
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle error here
    } finally {
      setIsSubmitting(false);
    }
  };

  function ScrollRod({ side = "left" }) {
  return (
    <div className="relative flex-shrink-0 self-stretch">
      {/* top finial */}
      <div
        className="parch-finial absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full shadow-md sm:h-7 sm:w-7"
        aria-hidden="true"
      />
      {/* rod body */}
      <div
        className="parch-rod h-full w-4 rounded-full shadow-[inset_-2px_0_4px_rgba(0,0,0,0.4),inset_2px_0_3px_rgba(255,255,255,0.15),2px_0_8px_rgba(0,0,0,0.35)] sm:w-6"
        aria-hidden="true"
      />
      {/* bottom finial */}
      <div
        className="parch-finial absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full shadow-md sm:h-7 sm:w-7"
        aria-hidden="true"
      />
      {/* curl shadow where paper meets rod */}
      <div
        className={`pointer-events-none absolute top-0 h-full w-6 sm:w-8 ${
          side === "left" ? "left-full" : "right-full"
        }`}
        style={{
          background:
            side === "left"
              ? "linear-gradient(90deg, rgba(58,36,21,0.35), rgba(58,36,21,0))"
              : "linear-gradient(270deg, rgba(58,36,21,0.35), rgba(58,36,21,0))",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

function ContactItem({ icon, title, value, note }: { icon: React.ReactNode; title: string; value: string; note: string }) {
  return (
    <div className="contact-line flex gap-4 items-start mb-4 text-sm">
      <div className="flex items-center justify-center h-[50px] w-[50px] bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[var(--maroon-950)] rounded-[5px]">
        {icon}
      </div>
      <div>
        <p className="font-display text-base text-[14px] font-semibold">{title}</p>
        <p className="mt-1 break-words text-[16px] font-medium text-[var(--gold-300)]">{value}</p>
      </div>
    </div>
  );
}

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title="संपर्क"
        subtitle="आम्ही तुमच्या सेवेसाठी सदैव तत्पर आहोत"
        backgroundImage={contactbg}
      />
      
      <section className="contact bg-[var(--cream)] py-16 ">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="contact-panel grid md:grid-cols-[1.1fr_1fr] bg-white shadow-[0_8px_32px_color-mix(in_srgb,var(--maroon-850)_15%,transparent)] overflow-hidden">
            
            <div className="contact-left bg-gradient-to-br from-[var(--maroon-850)] to-[var(--maroon-icon-ink)] p-8 md:p-12 text-[var(--cream-text)] relative before:content-[''] before:absolute before:inset-[7px] before:border before:border-[color-mix(in_srgb,var(--gold-500)_35%,transparent)] before:pointer-events-none">
              <BandLabel
                align="left"
                eyebrow="संपर्क फॉर्म"
                title="Contact Us"
                sub="आपला संदेश थेट प्रशासनापर्यंत पोहोचवा."
                dark
              />
              <br/>
              <br/>
            
              <ContactItem 
                icon={<Phone />} 
                title="मोबाईल आणि WhatsApp" 
                value="+91 00000 00000" 
                note="जलद संपर्कासाठी थेट सुविधा." 
              />
              <ContactItem 
                icon={<Mail />} 
                title="ईमेल सहाय्यता" 
                value="contact@kohlipatilsamaj.org" 
                note="अधिकृत माहिती आणि संवादासाठी." 
              />
              <ContactItem 
                icon={<MapPin />} 
                title="कार्यालयाचा पत्ता" 
                value="समाज कार्यालय, महाराष्ट्र, भारत" 
                note="समाज कार्यालयाची संपूर्ण माहिती." 
              />
              <ContactItem 
                icon={<MessageCircle />} 
                title="अभिप्राय व सूचना" 
                value="आपल्या सूचना समाजासाठी अमूल्य आहेत." 
                note="प्रत्येक सल्ला समाजाला अधिक सक्षम बनवतो." 
              />

              <div>
                <iframe 
                  className="map-box mt-6 h-35 w-full border border-dashed border-[var(--gold-stroke)] rounded flex items-center justify-center gap-2 text-[var(--gold-stroke)] text-sm" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14888.470550359363!2d79.0624398098952!3d21.10787570703961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf70132cfad1%3A0x7451efc154496452!2sVivekanand%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440015!5e0!3m2!1sen!2sin!4v1783667059479!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  style={{border:0}}  
                  loading="lazy"
                  title="Google Maps Location"
                />
              </div>
            </div>

            <div className="contact-right p-8 md:p-12 bg-white">
              {sent ? (
                <div className="mt-8 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">धन्यवाद!</p>
                    <p className="mt-1 text-sm text-muted-foreground">आपला संदेश पाठविला आहे. आम्ही लवकरच आपल्याशी संपर्क साधू.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="field mb-4">
                    <label className="block text-[var(--maroon-850)] font-bold mb-1 text-[16px]">
                      नाव
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="आपले नाव"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--gold-stroke)] transition-colors" 
                      required
                    />
                  </div>

                  <div className="field mb-4">
                    <label className="block text-[var(--maroon-850)] font-bold mb-1 text-[16px]">मोबाईल</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="मोबाईल क्रमांक"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--gold-stroke)] transition-colors"
                    />
                  </div>

                  <div className="field mb-4">
                    <label className="block text-[var(--maroon-850)] font-bold mb-1 text-[16px]">
                      ईमेल
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="ईमेल पत्ता"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--gold-stroke)] transition-colors"
                      required
                    />
                  </div>

                  <div className="field mb-4">
                    <label className="block text-[var(--maroon-850)] font-bold mb-1 text-[16px]">विषय</label>
                    <input 
                      type="text" 
                      name="subject"
                      placeholder="विषय"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--gold-stroke)] transition-colors"
                    />
                  </div>

                  <div className="field mb-6">
                    <label className="block text-[var(--maroon-850)] font-bold mb-1 text-[16px]">
                      संदेश
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea 
                      name="message"
                      placeholder="आपला संदेश"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--gold-stroke)] transition-colors resize-none"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-1.5 rounded-[2px] px-5 py-2.5 sm:px-7 sm:py-3 font-['Mukta'] text-xs sm:text-sm font-bold tracking-[0.02em] transition-all duration-300 ease-in-out hover:-translate-y-1 bg-gradient-to-br from-[var(--gold-300)] via-[var(--gold-600)] to-[var(--gold-400)] text-[var(--maroon-950)] shadow-[0_8px_22px_-8px_color-mix(in_srgb,var(--gold-500)_65%,transparent)] hover:shadow-[0_12px_28px_-8px_color-mix(in_srgb,var(--gold-500)_75%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "पाठवत आहे..." : "Send Message"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
          <div className="mx-auto max-w-7xl mt-8 px-5 sm:px-6 lg:px-8">
          <div className="flex items-stretch drop-shadow-2xl">
            <ScrollRod side="left" />

            {/* parchment sheet */}
            <div className="parch-sheet relative flex-1 px-6 py-6 sm:px-14 sm:py-14">
              {/* grain / age texture overlay */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18] mix-blend-multiply">
                <filter id="grain">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.35  0 0 0 0 0.27  0 0 0 0 0.15  0 0 0 0.5 0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain)" />
              </svg>

              {/* worn corner darkening */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, color-mix(in srgb, var(--text-muted) 25%, transparent), transparent 30%), radial-gradient(ellipse at bottom right, color-mix(in srgb, var(--text-muted) 25%, transparent), transparent 30%)",
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <h3 className="parch-display text-center text-2xl font-bold text-[var(--maroon-850)] sm:text-3xl">
                  अंतिम संदेश
                </h3>

                <p className="parch-devanagari mt-5 text-center text-base leading-relaxed text-[#4a2c17] sm:text-lg">
                  "समाजाच्या विकासासाठी तुमचा सहभाग, तुमचा आवाज आणि तुमचे सहकार्य अमूल्य आहे."
                </p>

                {/* ink flourish divider */}
                <div className="mx-auto my-6 flex max-w-xs items-center justify-center gap-3">
                  <span className="h-px flex-1 bg-[#8a5a2e]/50" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-[var(--maroon-850)]" />
                  <span className="h-px flex-1 bg-[#8a5a2e]/50" />
                </div>

                <p className="parch-display text-center text-lg font-semibold text-[var(--maroon-850)] sm:text-xl">
                  "जोडलेला समाज, सक्षम समाज."
                </p>
              </div>
            </div>

            <ScrollRod side="right" />
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}