import g1 from "@/assets/gallery/gallery-1.jpg";
import g2 from "@/assets/gallery/gallery-2.jpg";
import g3 from "@/assets/gallery/gallery-3.jpg";
import g4 from "@/assets/gallery/gallery-4.jpg";
import g5 from "@/assets/gallery/gallery-5.jpg";
import g6 from "@/assets/gallery/gallery-6.jpg";

export type GalleryPhoto = {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "varshik-adhiveshan",
    image: g1,
    title: "वार्षिक अधिवेशन सभा",
    description:
      "समाज भवन, नागपूर येथे आयोजित वार्षिक सर्वसाधारण सभेत मोठ्या संख्येने समाज बांधव उपस्थित होते. या सभेत समाजाच्या शैक्षणिक व सामाजिक विकासाचा आढावा घेण्यात आला.",
    date: "१५ जून २०२५",
  },
  {
    id: "shaishanik-samman",
    image: g2,
    title: "शैक्षणिक शिष्यवृत्ती वितरण",
    description:
      "गुणवंत विद्यार्थ्यांना शिष्यवृत्ती व प्रमाणपत्रे प्रदान करण्यात आली. समाजातील मान्यवरांच्या हस्ते हा गौरव सोहळा संपन्न झाला.",
    date: "१० मे २०२५",
  },
  {
    id: "mahila-parishad",
    image: g3,
    title: "महिला सक्षमीकरण परिषद",
    description:
      "समाजातील महिलांच्या सर्वांगीण विकासासाठी आयोजित परिषदेत रोजगार, शिक्षण आणि सामाजिक जागृतीवर मार्गदर्शन करण्यात आले.",
    date: "८ मार्च २०२५",
  },
  {
    id: "sanskrutik-karyakram",
    image: g4,
    title: "युवा सांस्कृतिक कार्यक्रम",
    description:
      "समाजातील युवा-युवतींनी सादर केलेल्या पारंपरिक मराठी नृत्य व सांस्कृतिक कार्यक्रमांनी उपस्थित प्रेक्षकांचे मन जिंकले.",
    date: "२६ जानेवारी २०२५",
  },
  {
    id: "aarogya-shibir",
    image: g5,
    title: "मोफत आरोग्य तपासणी शिबिर",
    description:
      "समाज बांधवांसाठी नि:शुल्क आरोग्य तपासणी शिबिराचे आयोजन करण्यात आले. तज्ञ डॉक्टरांच्या पथकाने शेकडो नागरिकांची तपासणी केली.",
    date: "२० फेब्रुवारी २०२५",
  },
  {
    id: "bhavan-udghatan",
    image: g6,
    title: "समाज भवन उद्घाटन सोहळा",
    description:
      "नवीन समाज भवनाचे मान्यवरांच्या हस्ते फीत कापून थाटामाटात उद्घाटन करण्यात आले. समाजाच्या विकासातील हा एक ऐतिहासिक क्षण ठरला.",
    date: "५ एप्रिल २०२५",
  },
];

export const getGalleryPhotoById = (id: string) =>
  galleryPhotos.find((p) => p.id === id);
