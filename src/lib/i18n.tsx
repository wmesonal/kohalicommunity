import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "mr" | "en";

// Dictionary: Marathi (default) -> English translation.
// Add entries here to translate more text across the site.
export const dict: Record<string, string> = {
  // Topbar
  "contact@kohalisamaj.org": "contact@kohalisamaj.org",
  "Society Reg. No.": "Society Reg. No.",
  "Public Trust Reg. No.": "Public Trust Reg. No.",
  "English": "मराठी",

  // Nav
  "मुख्यपृष्ठ": "Home",
  "सेवा": "Services",
  "समाज आकडेवारी": "Community Statistics",
  "पुस्तके": "Books",
  "कोहळी समाज": "Kohli Samaj",
  "संपर्क": "Contact",

  // Brand
  "कोहळी समाज विकास मंडळ": "Kohli Samaj Vikas Mandal",
  "नागपूर": "Nagpur",
  "कोहळी समाज विकास मंडळ नागपूर": "Kohli Samaj Vikas Mandal Nagpur",

  // Footer
  "एक समाज • एक ओळख • एक दिशा • एक विकास": "One Society • One Identity • One Direction • One Development",
  "एकजूट • शिक्षण • संस्कार • प्रगती": "Unity • Education • Culture • Progress",
  "कोहळी समाज विकास मंडळ, नागपूर हे समाजाच्या शैक्षणिक, सामाजिक, सांस्कृतिक आणि आर्थिक विकासासाठी कार्यरत असलेले एक नोंदणीकृत सामाजिक व्यासपीठ आहे.": "Kohli Samaj Vikas Mandal, Nagpur is a registered social platform working for the educational, social, cultural and economic development of the community.",
  "महत्त्वाचे दुवे": "Important Links",
  "महाराष्ट्र, भारत": "Maharashtra, India",
  "सर्व हक्क राखीव.": "All rights reserved.",
  "आम्हाला फॉलो करा": "Follow Us",
  "प्रेमाने आणि सेवाभावाने निर्मित": "Crafted with love & service",
  "केंद्रिय कार्यालय : प्लॉट नं. ०७, गावंडे ले-आऊट, तुकाराम सभागृहाचे मागे, रिंग रोड, नरेंद्रनगर, नागपूर, पिन कोड – ४४००२७": "Central Office: Plot No. 07, Gawande Layout, Behind Tukaram Hall, Ring Road, Narendra Nagar, Nagpur, PIN – 440027",
  "समस्या नोंदवा": "Report a Problem",
  "सूचना मंच": "Suggestion Forum",

  // Home hero / CTAs
  "समाज विकासाचे डिजिटल व्यासपीठ": "Digital Platform for Community Development",
  "आमच्या सेवा पहा": "View Our Services",

  // Live events section
  "समाज": "Community",
  "कार्यक्रम थेट": "Live Programs",
  "थेट प्रसारण — Live Now": "Live Broadcast — Live Now",
  "कोहळी समाज वार्षिक अधिवेशन सभा": "Kohli Samaj Annual Convention Meeting",
  "समाज भवन, नागपूर": "Samaj Bhavan, Nagpur",
  "सर्वसाधारण सभा": "General Meeting",
  "कोहळी समाज विकास मंडळ नागपूरच्या वतीने आयोजित वार्षिक सर्वसाधारण सभेमध्ये समाजाच्या शैक्षणिक, सामाजिक आणि आर्थिक विकासाचा आढावा घेतला जाईल. सभेमध्ये विविध योजनांची माहिती, नवीन प्रकल्पांची घोषणा आणि समाजातील मान्यवरांचे मार्गदर्शन अपेक्षित आहे.":
    "The Annual General Meeting organized by Kohli Samaj Vikas Mandal Nagpur will review the community's educational, social and economic development. The meeting will include information on various schemes, announcement of new projects and guidance from community dignitaries.",
  "या सभेत युवक व महिला विकास, रोजगार मार्गदर्शन, शैक्षणिक शिष्यवृत्ती आणि सामाजिक एकता यावर विशेष चर्चा होईल. थेट प्रसारणाद्वारे दूरवर बसलेल्या सर्व समाज बांधवांना या कार्यक्रमाचा लाभ घेता येईल. सर्व सभासदांनी या महत्त्वपूर्ण कार्यक्रमास उपस्थित राहावे.":
    "The meeting will feature special discussions on youth and women development, employment guidance, educational scholarships and social unity. Through live broadcast, all community members sitting far away will be able to benefit from this program. All members should attend this important program.",
  "पुढील कार्यक्रम पहा": "View Upcoming Events",
  "YouTube वर पहा": "Watch on YouTube",
  "तुमची समस्या सांगा": "Tell us your problem",
  "आपली सूचना द्या": "Give your suggestion",
  "समाज अधिवेशन सभा": "Community Convention Meeting",
  "General Body Meeting — कोहळी समाज विकास मंडळ नागपूर": "General Body Meeting — Kohli Samaj Vikas Mandal Nagpur",

  // Notices & Events block
  "सूचना आणि पुढील कार्यक्रम व उपक्रम": "Notices, Upcoming Events & Initiatives",
  "समाजाच्या महत्त्वाच्या सूचना आणि आगामी कार्यक्रमांची सविस्तर माहिती.": "Detailed information about the community's important notices and upcoming events.",
  "सूचना": "Notices",
  "पुढील कार्यक्रम": "Upcoming Events",
  "कार्यक्रम व उपक्रम": "Events & Initiatives",
  "सर्व सूचना पहा": "View All Notices",
  "सर्व कार्यक्रम पहा": "View All Events",
  "सविस्तर पहा": "View Details",

  // Services preview
  "समाज विकासासाठी आधुनिक डिजिटल सेवा": "Modern Digital Services for Community Development",
  "शैक्षणिक, सामाजिक आणि आर्थिक प्रगतीसाठी विविध डिजिटल सेवा एकाच व्यासपीठावर.": "Various digital services for educational, social and economic progress on a single platform.",
  "अधिक जाणून घ्या": "Learn More",
  "समाजाची सामाजिक, शैक्षणिक, आर्थिक आणि व्यावसायिक माहिती एकत्रित करणारे डिजिटल पोर्टल.": "A digital portal that consolidates the community's social, educational, economic and occupational information.",
  "समाजातील युवक-युवतींसाठी सुरक्षित, विश्वासार्ह आणि आधुनिक वधू-वर परिचय सेवा.": "A safe, reliable and modern matrimony service for the youth of the community.",
  "रोजगार, करिअर मार्गदर्शन आणि उद्योजकतेच्या संधी एकाच ठिकाणी.": "Employment, career guidance and entrepreneurship opportunities in one place.",
  "\"एक संघटित, शिक्षित, सक्षम आणि प्रगत कोहळी समाज घडविण्यासाठी डिजिटल माध्यमातून प्रत्येक समाज बांधवाला जोडणे.\"": "\"To connect every community member through digital means to build a united, educated, capable and progressive Kohli community.\"",
  "तातडीची": "Urgent",
  "महत्त्वाची": "Important",
  "सामान्य": "General",

  // Gallery
  "फोटो गॅलरी": "Photo Gallery",
  "समाजातील विविध कार्यक्रम, उपक्रम आणि अविस्मरणीय क्षणांचे छायाचित्र संग्रह": "A collection of photographs of various programs, initiatives and memorable moments of the community",
  "सर्व फोटो पहा": "View All Photos",
  "मुख्यपृष्ठावर परत जा": "Return to Home",
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; t: (k: string) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mr");

  useEffect(() => {
    try {
      const saved = (typeof window !== "undefined" && window.localStorage.getItem("lang")) as Lang | null;
      if (saved === "mr" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { window.localStorage.setItem("lang", l); } catch {}
  }, []);

  const toggle = useCallback(() => setLang(lang === "mr" ? "en" : "mr"), [lang, setLang]);

  const t = useCallback(
    (k: string) => {
      if (lang === "mr") return k;
      return dict[k] ?? k;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, toggle, t }), [lang, setLang, toggle, t]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
