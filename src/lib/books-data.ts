import bookHistory from "@/assets/book-history.jpg";
import bookInspiration from "@/assets/book-inspiration.jpg";
import bookResearch from "@/assets/book-research.jpg";
import bookEbook from "@/assets/book-ebook.jpg";
import bookDocuments from "@/assets/book-documents.jpg";

export type Book = {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  pages: number;
  shortDescription: string;
  longDescription: string;
  cover: string;
  pdfUrl: string;
  highlights: string[];
};

// Public sample PDF used for online viewing (demo).
const SAMPLE_PDF = "https://www.orimi.com/pdf-test.pdf";

export const books: Book[] = [
  {
    id: "samaj-itihas",
    title: "कोहळी समाजाचा इतिहास",
    category: "समाज इतिहास",
    author: "संपादक मंडळ",
    date: "जानेवारी 2024",
    pages: 248,
    shortDescription:
      "कोहळी समाजाची उत्पत्ती, परंपरा, संस्कृती आणि ऐतिहासिक प्रवासाचा सविस्तर आढावा.",
    longDescription:
      "हा ग्रंथ कोहळी समाजाच्या मूळ उत्पत्तीपासून ते आधुनिक काळापर्यंतच्या सामाजिक, सांस्कृतिक आणि ऐतिहासिक प्रवासाचा सखोल अभ्यास सादर करतो. यामध्ये समाजाची जीवनशैली, संघर्ष, योगदान आणि अभिमानास्पद वारसा यांचा समावेश आहे.",
    cover: bookHistory,
    pdfUrl: SAMPLE_PDF,
    highlights: [
      "समाजाची उत्पत्ती आणि प्राचीन संदर्भ",
      "परंपरा, सण आणि सांस्कृतिक वारसा",
      "स्वातंत्र्यपूर्व व स्वातंत्र्योत्तर योगदान",
      "आधुनिक काळातील सामाजिक बदल",
    ],
  },
  {
    id: "prernadayi-vyaktimattve",
    title: "प्रेरणादायी व्यक्तिमत्त्वे",
    category: "प्रेरणादायी पुस्तके",
    author: "प्रेरणा कुलकर्णी",
    date: "मार्च 2024",
    pages: 186,
    shortDescription:
      "महान व्यक्तिमत्त्वे, समाज नेते आणि यशस्वी व्यक्तींच्या प्रेरणादायी कथा.",
    longDescription:
      "समाजाला दिशा देणाऱ्या थोर व्यक्तिमत्त्वांच्या जीवनप्रवासातून प्रेरणा घेणारा हा ग्रंथ. यशस्वी होण्यासाठीचे मार्गदर्शन, विचार आणि अनुभव यांचा संग्रह.",
    cover: bookInspiration,
    pdfUrl: SAMPLE_PDF,
    highlights: [
      "थोर व्यक्तिमत्त्वांचे जीवनचरित्र",
      "प्रेरणादायी विचार आणि संदेश",
      "यशस्वी जीवनासाठी मार्गदर्शन",
      "तरुणांसाठी विशेष प्रेरणास्रोत",
    ],
  },
  {
    id: "samaj-sanshodhan",
    title: "समाज संशोधन",
    category: "संशोधन साहित्य",
    author: "प्रा. डॉ. अनिल देशमुख",
    date: "जून 2023",
    pages: 312,
    shortDescription:
      "समाजशास्त्रीय अभ्यास, संशोधन पद्धती आणि समाजाशी संबंधित लेखांचा संग्रह.",
    longDescription:
      "समाजाच्या विविध पैलूंचा शास्त्रीय पद्धतीने अभ्यास मांडणारा हा संदर्भग्रंथ. विद्यार्थी, संशोधक आणि अभ्यासकांसाठी अत्यंत उपयुक्त.",
    cover: bookResearch,
    pdfUrl: SAMPLE_PDF,
    highlights: [
      "संशोधनाच्या मूलतत्त्वांचे विश्लेषण",
      "सांख्यिकीय व गुणात्मक पद्धती",
      "सामाजिक विषयांवरील लेख",
      "अहवाल लेखनासाठी मार्गदर्शन",
    ],
  },
  {
    id: "digital-ebooks",
    title: "डिजिटल ई-बुक्स",
    category: "ई-बुक्स",
    author: "डिजिटल संपादन समिती",
    date: "ऑगस्ट 2024",
    pages: 128,
    shortDescription:
      "डिजिटल स्वरूपात उपलब्ध पुस्तके — कुठेही, कधीही वाचनासाठी सहज उपलब्ध.",
    longDescription:
      "आधुनिक तंत्रज्ञानाच्या माध्यमातून वाचन अनुभव सुलभ करणारा ई-बुक्सचा संग्रह. सर्व वयोगटातील वाचकांसाठी उपयुक्त डिजिटल साहित्य.",
    cover: bookEbook,
    pdfUrl: SAMPLE_PDF,
    highlights: [
      "कुठेही, कधीही वाचन सुविधा",
      "सोपे डाउनलोड व शेअरिंग",
      "इंटरअॅक्टिव्ह वाचन अनुभव",
      "पर्यावरणपूरक डिजिटल स्वरूप",
    ],
  },
  {
    id: "samaj-dastavej",
    title: "समाज दस्तऐवज",
    category: "समाज दस्तऐवज",
    author: "कोहळी समाज विकास मंडळ",
    date: "डिसेंबर 2023",
    pages: 96,
    shortDescription:
      "समाजाशी संबंधित अधिकृत दस्तऐवज, अहवाल आणि महत्त्वाचे संदर्भ साहित्य.",
    longDescription:
      "समाजाच्या अधिकृत नोंदी, वार्षिक अहवाल, ठराव आणि महत्त्वाच्या संदर्भांचे संकलन. भावी पिढ्यांसाठी अमूल्य दस्तऐवज.",
    cover: bookDocuments,
    pdfUrl: SAMPLE_PDF,
    highlights: [
      "अधिकृत दस्तऐवज व नोंदी",
      "वार्षिक अहवाल व ठराव",
      "महत्त्वाचे संदर्भ साहित्य",
      "ऐतिहासिक जतन आणि वारसा",
    ],
  },
];

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}
