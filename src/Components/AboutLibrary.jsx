import React from "react";
import libraryImg from "../assets/library.jpg";
import {
  FaCheckCircle,
  FaClock,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDollarSign,
} from "react-icons/fa";

const InfoCard = ({ title, description, color }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${color}`}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
          <Icon className="text-xl" />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const AboutLibrary = () => {
  const libraryFeatures = [
    "শিক্ষার্থীদের পাঠাভ্যাস বৃদ্ধির লক্ষ্যে প্রতিদিন সকাল ৯টা থেকে রাত ৮টা পর্যন্ত একুশে ফেব্রুয়ারি লাইব্রেরি খোলা থাকে।",
    "লাইব্রেরিটির সকল কার্যক্রম তত্ত্বাবধান করছেন ছাত্র শিক্ষক কেন্দ্রের পরিচালক।",
    "বিশ্ববিদ্যালয়ের ছাত্র-ছাত্রীদের চাহিদা অনুযায়ী গ্রন্থ সংগ্রহের ব্যবস্থা রয়েছে।",
    "বিভিন্ন ধরনের দৈনিক সংবাদপত্র, সাময়িকী, মাসিক, বৈজ্ঞানিক, গবেষণা, ধর্মীয়, সাহিত্য, ব্যবসায়িক পত্রিকা পাঠের ব্যবস্থা আছে।",
    "শীতাতপ নিয়ন্ত্রিত সুন্দর পরিবেশ।",
    "মুক্তিযুদ্ধ কর্নার রয়েছে।",
    "ছাত্র-ছাত্রীদের জন্য সেমিনার ওয়ার্কশপের ব্যবস্থা আছে।",
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">অমর একুশে লাইব্রেরী</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            গোপালগঞ্জ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয বিশ্ববিদ্যালয়ের আধুনিক
            গ্রন্থাগার - জ্ঞান অর্জন ও গবেষণার কেন্দ্রবিন্দু
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-2xl transform rotate-3"></div>
            <img
              src={libraryImg}
              alt="Library Building"
              className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500 border-8 border-white"
            />
          </div>

          {/* Features Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                লাইব্রেরির বৈশিষ্ট্য
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            </div>

            <ul className="space-y-4">
              {libraryFeatures.map((text, index) => (
                <FeatureItem key={index} text={text} />
              ))}
            </ul>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              লাইব্রেরির তথ্য
            </h2>
            <p className="text-lg text-gray-600">
              গুরুত্বপূর্ণ পরিসংখ্যান ও তথ্যাবলী
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard
              title="লাইব্রেরি ভবন"
              description="বর্তমান ভবনের আয়তন ১১০০ বর্গমিটার। আধুনিক স্থাপত্য শৈলীতে নির্মিত এই ভবনে রয়েছে পর্যাপ্ত আলো-বাতাসের ব্যবস্থা।"
              color="bg-gradient-to-br from-green-500 to-green-600"
              icon={FaBuilding}
            />
            <InfoCard
              title="লাইব্রেরির সময়"
              description="সকাল ৯টা থেকে রাত ৮টা পর্যন্ত খোলা থাকে। সাপ্তাহিক ছুটির দিনেও সীমিত সময়ের জন্য সেবা প্রদান করা হয়।"
              color="bg-gradient-to-br from-blue-500 to-blue-600"
              icon={FaClock}
            />
            <InfoCard
              title="নির্মাণ ব্যয়"
              description="২ কোটি ৪৬ লাখ ৪৮ হাজার টাকা ব্যয়ে নির্মিত এই অত্যাধুনিক লাইব্রেরি বাংলাদেশের অন্যতম সেরা শিক্ষা প্রতিষ্ঠানের গ্রন্থাগার।"
              color="bg-gradient-to-br from-purple-500 to-purple-600"
              icon={FaDollarSign}
            />
            <InfoCard
              title="উদ্বোধন"
              description="২১ ফেব্রুয়ারি ২০১৫ সালে আন্তর্জাতিক মাতৃভাষা দিবসে এই গ্রন্থাগারের আনুষ্ঠানিক উদ্বোধন করা হয়।"
              color="bg-gradient-to-br from-red-500 to-red-600"
              icon={FaCalendarAlt}
            />
            <InfoCard
              title="অবস্থান"
              description="অত্র বিশ্ববিদ্যালয়ের উত্তর অংশে অবস্থিত।"
              color="bg-gradient-to-br from-teal-500 to-teal-600"
              icon={FaMapMarkerAlt}
            />
            <InfoCard
              title="বিশেষ সুবিধা"
              description="ডিজিটাল লাইব্রেরি, ই-বুক সংগ্রহ, গবেষণা সহায়তা এবং আন্তর্জাতিক মানের তথ্য সেবা প্রদান করা হয়।"
              color="bg-gradient-to-br from-orange-500 to-orange-600"
              icon={FaBuilding}
            />
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              অতিরিক্ত সেবাসমূহ
            </h2>
            <p className="text-lg text-gray-600">
              আমাদের লাইব্রেরি যেসব বিশেষ সেবা প্রদান করে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                ডিজিটাল সংগ্রহ
              </h3>
              <p className="text-gray-600 text-sm">
                হাজারো ই-বুক ও অনলাইন জার্নাল
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                গবেষণা সহায়তা
              </h3>
              <p className="text-gray-600 text-sm">
                থিসিস ও গবেষণা কাজে বিশেষ সহায়তা
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                কম্পিউটার সেবা
              </h3>
              <p className="text-gray-600 text-sm">
                ইন্টারনেট ও কম্পিউটার ব্যবহারের সুবিধা
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                মুক্তিযুদ্ধ কর্নার
              </h3>
              <p className="text-gray-600 text-sm">
                মুক্তিযুদ্ধের ইতিহাস ও তথ্য সংগ্রহ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLibrary;
