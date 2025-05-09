import React from "react";
import libraryImg from "../assets/library.jpg";
import { FaCheckCircle } from "react-icons/fa";

const InfoCard = ({ title, description, color }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg text-white transform hover:scale-105 transition-transform duration-300 ${color}`}
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const AboutLibrary = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 ">
      <div className="w-11/12 mx-auto mt-10 mb-20">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={libraryImg}
            alt="Library Building"
            className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
          />
          <div>
            <h2 className="text-4xl font-bold text-green-700 mb-6">
              একুশে ফেব্রুয়ারি লাইব্রেরি
            </h2>
            <ul className="space-y-4 text-gray-800">
              {[
                "ঢাবি শিক্ষার্থীদের পাঠাভ্যাস বৃদ্ধির লক্ষ্যে প্রতিদিন সকাল ৯টা থেকে রাত ৮টা পর্যন্ত একুশে ফেব্রুয়ারি লাইব্রেরি খোলা থাকে।",
                "লাইব্রেরিটির সকল কার্যক্রম তত্ত্বাবধান করছেন ছাত্র শিক্ষক কেন্দ্রের পরিচালক।",
                "বিশ্ববিদ্যালয়ের ছাত্র-ছাত্রীদের চাহিদা অনুযায়ী গ্রন্থ সংগ্রহের ব্যবস্থা রয়েছে।",
                "বিভিন্ন ধরনের দৈনিক সংবাদপত্র, সাময়িকী, মাসিক, বৈজ্ঞানিক, গবেষণা, ধর্মীয়, সাহিত্য, ব্যবসায়িক পত্রিকা পাঠের ব্যবস্থা আছে।",
                "শীতাতপ নিয়ন্ত্রিত সুন্দর পরিবেশ।",
                "মুক্তিযুদ্ধ কর্নার রয়েছে।",
                "ছাত্র-ছাত্রীদের জন্য সেমিনার ওয়ার্কশপের ব্যবস্থা আছে।",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <InfoCard
            title="লাইব্রেরি ভবন"
            description="বর্তমান ভবনের আয়তন ১৩০০ বর্গমিটার"
            color="bg-green-500"
          />
          <InfoCard
            title="লাইব্রেরির সময়"
            description="সকাল ৯টা থেকে রাত ৮টা পর্যন্ত খোলা থাকে"
            color="bg-yellow-500"
          />
          <InfoCard
            title="নির্মাণ ব্যয়"
            description="২ কোটি ৪৬ লাখ ৪৮ হাজার টাকা"
            color="bg-blue-500"
          />
          <InfoCard
            title="উদ্বোধন"
            description="২১ ফেব্রুয়ারি ২০১৫"
            color="bg-red-500"
          />
          <InfoCard
            title="অবস্থান"
            description="ঢাবি ক্যাম্পাসের উত্তর পাশে অবস্থিত"
            color="bg-green-700"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutLibrary;
