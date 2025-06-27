import React from "react";
import muzahid from "../assets/20231115_112839.jpg";
import libraryImg from "../assets/library.jpg";

const aboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Library</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering minds through knowledge, fostering learning through innovation, 
            and building communities through shared wisdom.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To provide comprehensive digital library services that connect students, faculty, 
              and researchers with the knowledge they need to excel in their academic pursuits 
              and contribute meaningfully to society.
            </p>
          </div>

          {/* Library Image Section */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={libraryImg}
                alt="Library"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="text-white p-8">
                  <h3 className="text-2xl font-bold mb-2">Modern Learning Environment</h3>
                  <p className="text-lg opacity-90">
                    A space designed for collaboration, innovation, and academic excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals committed to enhancing your learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <img
                  src={muzahid}
                  alt="Profile"
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Sarah Johnson</h3>
              <h4 className="text-lg text-blue-600 mb-4 font-semibold">Head Librarian</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                With over 15 years of experience in digital library systems, Dr. Johnson 
                leads our mission to revolutionize academic resource accessibility.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  Library Science
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Digital Systems
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-6">
                <img
                  src={muzahid}
                  alt="Profile"
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-500 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-500 w-8 h-8 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Michael Chen</h3>
              <h4 className="text-lg text-green-600 mb-4 font-semibold">Systems Administrator</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Michael ensures our digital infrastructure runs smoothly, implementing 
                cutting-edge technologies to enhance user experience and system reliability.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                  IT Systems
                </div>
                <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                  Database Management
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="relative mb-6">
                <img
                  src={muzahid}
                  alt="Profile"
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-purple-500 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-pink-500 w-8 h-8 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Emily Rodriguez</h3>
              <h4 className="text-lg text-purple-600 mb-4 font-semibold">Research Coordinator</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Emily assists students and faculty in navigating our extensive collection, 
                providing expert guidance for research projects and academic endeavors.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                  Research Support
                </div>
                <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                  Academic Guidance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-blue-100">
                Commitment to providing the highest quality resources and services.
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-blue-100">
                Building connections and fostering collaborative learning environments.
              </p>
            </div>
            
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-blue-100">
                Embracing new technologies to enhance learning experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or suggestions? We'd love to hear from you.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-gray-700 font-medium">library@university.edu</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-gray-700 font-medium">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
