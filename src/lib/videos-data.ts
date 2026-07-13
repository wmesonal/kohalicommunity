import v1Img from "@/assets/live-v1.jpg";
import v2Img from "@/assets/live-v2.jpg";
import v3Img from "@/assets/live-v3.jpg";
import v4Img from "@/assets/live-v4.jpg";
import v5Img from "@/assets/live-v5.jpg";
import v6Img from "@/assets/live-v6.jpg";

export type SamajVideo = {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  description: string;
  youtubeUrl: string;
};

export const samajVideos: SamajVideo[] = [
  {
    id: "vd1",
    title: "वार्षिक अधिवेशन सभा — मुख्य क्षण",
    date: "१५ जून २०२६",
    thumbnail: v1Img,
    description:
      "समाज भवन, नागपूर येथे आयोजित वार्षिक सर्वसाधारण सभेतील मुख्य क्षण, मान्यवरांची भाषणे व कार्यकारिणीचा वर्षभराचा आढावा.",
    youtubeUrl: "https://www.youtube.com/",
  },
  {
    id: "vd2",
    title: "युवक मार्गदर्शन शिबिर",
    date: "२८ एप्रिल २०२६",
    thumbnail: v2Img,
    description:
      "MPSC, UPSC व स्पर्धा परीक्षांच्या तयारीसाठी तज्ज्ञांचे मार्गदर्शन, करिअर पर्याय व कौशल्य विकासावर विशेष व्याख्यान.",
    youtubeUrl: "https://www.youtube.com/",
  },
  {
    id: "vd3",
    title: "महिला सक्षमीकरण परिषद",
    date: "१५ एप्रिल २०२६",
    thumbnail: v3Img,
    description:
      "बचत गट, महिला उद्योजकता, आरोग्य आणि कायदेविषयक साक्षरतेवर आधारित परिषदेचे संपूर्ण चित्रण.",
    youtubeUrl: "https://www.youtube.com/",
  },
  {
    id: "vd4",
    title: "शैक्षणिक शिष्यवृत्ती वितरण",
    date: "०२ एप्रिल २०२६",
    thumbnail: v4Img,
    description:
      "गुणवंत विद्यार्थ्यांचा सत्कार व शिष्यवृत्ती वितरण समारंभाचे संपूर्ण व्हिडिओ रेकॉर्डिंग.",
    youtubeUrl: "https://www.youtube.com/",
  },
  {
    id: "vd5",
    title: "समाज सांस्कृतिक कार्यक्रम",
    date: "२० मार्च २०२६",
    thumbnail: v5Img,
    description:
      "पारंपरिक लोकनृत्य, गायन आणि नाट्य सादरीकरणाचा रंगारंग सोहळा — समाजाच्या समृद्ध सांस्कृतिक वारशाचे दर्शन.",
    youtubeUrl: "https://www.youtube.com/",
  },
  {
    id: "vd6",
    title: "रोजगार मार्गदर्शन कार्यशाळा",
    date: "०५ मार्च २०२६",
    thumbnail: v6Img,
    description:
      "रोजगार संधी, मुलाखत तंत्र आणि स्वयंरोजगारासाठी शासकीय योजनांची माहिती देणाऱ्या कार्यशाळेचे चित्रण.",
    youtubeUrl: "https://www.youtube.com/",
  },
];
