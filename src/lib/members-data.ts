export type Member = {
  id: string;
  name: string;
  role: string;
  organization: string;
  photo?: string;
  bio?: string[];
  phone?: string;
  email?: string;
  area?: string;
};

import presidentAsset from "@/assets/member-president.png";
import presidentAvtar from "@/assets/member-placeholder.jpg";

// const president = presidentAsset.url;



export const members: Member[] = [
  {
    id: "prakash-balbudhe",
    name: "मा. श्री. प्रकाश ह. बाळबुधे",
    role: "अध्यक्ष",
    organization: "कोहळी समाज विकास मंडळ, नागपूर",
    photo: presidentAsset,
    area: "नागपूर",
    phone: "+91 98765 43210",
    email: "president@kohalisamaj.org",
    bio: [
      "कोहळी समाज विकास मंडळ नागपूरचे अध्यक्ष म्हणून समाजाच्या सर्वांगीण विकासासाठी गेली अनेक वर्षे कार्यरत.",
      "शैक्षणिक, सामाजिक व सांस्कृतिक उपक्रमांच्या माध्यमातून समाज बांधवांना एकत्र आणून प्रगतीच्या दिशेने मार्गक्रमण करण्यासाठी सतत प्रयत्नशील.",
    ],
  },
  {
    id: "amol-mungmode",
    name: "मा. श्री. अमोल श्री. मुंगमोडे",
    role: "उपाध्यक्ष",
    photo: presidentAvtar,
    organization: "कोहळी समाज विकास मंडळ, नागपूर",
    area: "नागपूर",
    phone: "+91 98765 43211",
    email: "vp@kohalisamaj.org",
    bio: [
      "उपाध्यक्ष पदाच्या माध्यमातून समाजातील युवक व महिला विकास उपक्रमांचे नेतृत्व.",
      "समाज बांधवांच्या शैक्षणिक व आर्थिक उन्नतीसाठी विशेष योगदान.",
    ],
  },
  {
    id: "manikrao-lothe",
    name: "मा. श्री. माणिकराव कि. लोथे",
    role: "सचिव",
    organization: "कोहळी समाज विकास मंडळ, नागपूर",
    photo: presidentAvtar,
    area: "नागपूर",
    phone: "+91 98765 43212",
    email: "secretary@kohalisamaj.org",
    bio: [
      "सचिव म्हणून मंडळाच्या दैनंदिन कामकाजाचे व्यवस्थापन आणि समन्वय.",
      "समाज कार्यक्रम, सभा व उपक्रमांचे नियोजन व अंमलबजावणी.",
    ],
  },
  {
    id: "member-treasurer",
    name: "मा. श्री. सुरेश ना. पाटील",
    role: "कोषाध्यक्ष",
    organization: "कोहळी समाज विकास मंडळ, नागपूर",
    photo: presidentAvtar,
    area: "नागपूर",
    phone: "+91 98765 43213",
    email: "treasurer@kohalisamaj.org",
    bio: [
      "मंडळाच्या आर्थिक व्यवहारांचे नियोजन आणि पारदर्शक व्यवस्थापन.",
      "समाज निधी संकलन व कल्याणकारी योजनांसाठी आर्थिक सहाय्य.",
    ],
  },
  {
    id: "member-joint-secretary",
    name: "मा. श्री. दिनेश रा. कोहळे",
    role: "सहसचिव",
    organization: "कोहळी समाज विकास मंडळ, नागपूर",
    photo: presidentAvtar,
    area: "नागपूर",
    phone: "+91 98765 43214",
    email: "jointsec@kohalisamaj.org",
    bio: [
      "सचिवांच्या सहकार्याने मंडळ कामकाजाचे व्यवस्थापन.",
      "युवक आघाडी व सामाजिक उपक्रमांमध्ये सक्रिय सहभाग.",
    ],
  },
  {
    id: "member-women-head",
    name: "मा. सौ. सुनीता वि. बाळबुधे",
    role: "महिला अध्यक्ष",
    organization: "कोहळी समाज विकास मंडळ, नागपूर",
    photo: presidentAvtar,
    area: "नागपूर",
    phone: "+91 98765 43215",
    email: "women@kohalisamaj.org",
    bio: [
      "महिला मंडळाचे नेतृत्व करून महिला सक्षमीकरण उपक्रमांचे आयोजन.",
      "बचत गट, गृह उद्योग व महिला शिक्षणासाठी विशेष योगदान.",
    ],
  },
  {
    id: "member-youth-head",
    name: "मा. श्री. रोहित प्र. पाटील",
    role: "युवक अध्यक्ष",
    organization: "कोहळी समाज विकास मंडळ, नागपूर",
    photo: presidentAvtar,
    area: "नागपूर",
    phone: "+91 98765 43216",
    email: "youth@kohalisamaj.org",
    bio: [
      "समाजातील युवकांना संघटित करून करिअर मार्गदर्शन व रोजगार संधी उपलब्ध करून देण्यासाठी कार्यरत.",
      "युवक शिबिरे व स्पर्धा परीक्षा मार्गदर्शन उपक्रमांचे संयोजन.",
    ],
  },
  {
    id: "member-cultural",
    name: "मा. श्री. विनोद ह. मुंगमोडे",
    role: "सांस्कृतिक प्रमुख",
    organization: "कोहळी समाज विकास मंडळ, नागपूर",
    photo: presidentAvtar,
    area: "नागपूर",
    phone: "+91 98765 43217",
    email: "cultural@kohalisamaj.org",
    bio: [
      "सांस्कृतिक कार्यक्रम, सण-उत्सव व परंपरा जोपासण्यासाठी विशेष जबाबदारी.",
      "समाज मेळावे व सांस्कृतिक स्पर्धांचे आयोजन.",
    ],
  },
  {
    id: "member-education",
    name: "मा. श्री. अनिल के. लोथे",
    role: "शिक्षण प्रमुख",
    organization: "कोहळी समाज विकास मंडळ, नागपूर",
    photo: presidentAvtar,
    area: "नागपूर",
    phone: "+91 98765 43218",
    email: "education@kohalisamaj.org",
    bio: [
      "समाजातील विद्यार्थ्यांसाठी शिष्यवृत्ती, मार्गदर्शन व शैक्षणिक सहाय्य उपक्रमांचे नियोजन.",
      "गुणवंत विद्यार्थ्यांचा सत्कार व प्रोत्साहन कार्यक्रम.",
    ],
  },
];
