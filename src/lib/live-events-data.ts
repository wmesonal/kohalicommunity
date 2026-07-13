import featuredImg from "@/assets/live-featured.jpg";
import v1Img from "@/assets/live-v1.jpg";
import v2Img from "@/assets/live-v2.jpg";
import v3Img from "@/assets/live-v3.jpg";
import v4Img from "@/assets/live-v4.jpg";
import v5Img from "@/assets/live-v5.jpg";
import v6Img from "@/assets/live-v6.jpg";

export type LiveVideo = {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  details?: string;
  location?: string;
};

// Current / featured live event shown at the top of the inner page
export const featuredLive: LiveVideo = {
  id: "featured",
  title: "कोहळी समाज वार्षिक अधिवेशन सभा",
  date: "१५ जून २०२६",
  image: featuredImg,
  location: "समाज भवन, नागपूर",
  description:
    "कोहळी समाज विकास मंडळ नागपूरच्या वार्षिक सर्वसाधारण सभेचे थेट प्रसारण — समाज भवन, नागपूर.",
  details:
    "या वार्षिक अधिवेशनात समाजातील मान्यवर, कार्यकारिणी सदस्य आणि हजारो समाजबांधव सहभागी होतात. वर्षभरातील कामकाजाचा आढावा, भावी नियोजन, शैक्षणिक व सामाजिक उपक्रमांचे सादरीकरण, तसेच मान्यवरांच्या मार्गदर्शनपर भाषणांचे थेट प्रसारण या कार्यक्रमात करण्यात येते.",
};

// Past live event recordings
export const liveVideos: LiveVideo[] = [
  {
    id: "v1",
    title: "समाज अधिवेशन उद्घाटन सोहळा",
    date: "१२ मे २०२६",
    image: v1Img,
    location: "समाज भवन, नागपूर",
    description: "अधिवेशनाच्या शानदार उद्घाटन सोहळ्याचे थेट प्रसारण.",
    details:
      "दीप प्रज्वलन, मान्यवरांचे स्वागत आणि प्रमुख पाहुण्यांच्या मार्गदर्शनपर भाषणासह अधिवेशनाची अधिकृत सुरुवात करण्यात आली. संपूर्ण समाजातील प्रतिनिधी या ऐतिहासिक क्षणाचे साक्षीदार होते.",
  },
  {
    id: "v2",
    title: "युवक मार्गदर्शन शिबिर",
    date: "२८ एप्रिल २०२६",
    image: v2Img,
    location: "युवा केंद्र, नागपूर",
    description: "समाजातील युवकांसाठी करिअर व स्पर्धा परीक्षा मार्गदर्शन.",
    details:
      "MPSC, UPSC व स्पर्धात्मक परीक्षांची तयारी, करिअर पर्याय, स्वयंरोजगार व कौशल्य विकास यावर तज्ज्ञांचे मार्गदर्शन देणारे शिबिर.",
  },
  {
    id: "v3",
    title: "महिला सक्षमीकरण परिषद",
    date: "१५ एप्रिल २०२६",
    image: v3Img,
    location: "समाज भवन, नागपूर",
    description: "समाजातील महिलांच्या सक्षमीकरणासाठी विशेष परिषद.",
    details:
      "बचत गट, महिला उद्योजकता, आरोग्य, कायदेविषयक साक्षरता आणि आत्मनिर्भरतेसाठी उपयुक्त मार्गदर्शन देणारी परिषद.",
  },
  {
    id: "v4",
    title: "शैक्षणिक शिष्यवृत्ती वितरण समारंभ",
    date: "०२ एप्रिल २०२६",
    image: v4Img,
    location: "समाज भवन, नागपूर",
    description: "गुणवंत विद्यार्थ्यांना शिष्यवृत्ती वितरण समारंभ.",
    details:
      "दहावी, बारावी व उच्च शिक्षणात उत्कृष्ट कामगिरी करणाऱ्या विद्यार्थ्यांचा सत्कार व शिष्यवृत्ती वितरणाचा भव्य कार्यक्रम.",
  },
  {
    id: "v5",
    title: "समाज सांस्कृतिक कार्यक्रम",
    date: "२० मार्च २०२६",
    image: v5Img,
    location: "समाज भवन, नागपूर",
    description: "पारंपरिक लोककला व सांस्कृतिक कार्यक्रमांचा सोहळा.",
    details:
      "मराठी लोकनृत्य, गायन, नाट्य व पारंपरिक सादरीकरणाद्वारे समाजाच्या समृद्ध सांस्कृतिक वारशाचे दर्शन घडविणारा रंगारंग कार्यक्रम.",
  },
  {
    id: "v6",
    title: "रोजगार मार्गदर्शन कार्यशाळा",
    date: "०५ मार्च २०२६",
    image: v6Img,
    location: "समाज भवन, नागपूर",
    description: "नोकरी व स्वयंरोजगार संधींबाबत मार्गदर्शन कार्यशाळा.",
    details:
      "विविध कंपन्यांचे प्रतिनिधी, HR तज्ज्ञ आणि उद्योजकांच्या उपस्थितीत रोजगार संधी, मुलाखत तंत्र आणि स्वयंरोजगारासाठी शासकीय योजनांची माहिती देणारी कार्यशाळा.",
  },
];

export function getLiveVideoById(id: string): LiveVideo | undefined {
  if (id === "featured") return featuredLive;
  return liveVideos.find((v) => v.id === id);
}

export const allLiveVideos: LiveVideo[] = [featuredLive, ...liveVideos];

// Social / external links used by the live events section
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/";
