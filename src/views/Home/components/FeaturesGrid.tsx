import React from 'react';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const solutions = [
  { icon: <BiGlobeAlt />, title: "Custom AI-Powered Website", description: "Responsive websites tailored to healthcare providers.", color: "bg-blue-500" },
  { icon: <FaUserSecret />, title: "Enhanced Patient Conversion", description: "Tools to optimize conversion with personalized experiences.", color: "bg-purple-500" },
  { icon: <BiMessageSquare />, title: "Real-Time Query Handling", description: "AI-powered chat support for instant patient inquiries.", color: "bg-green-500" },
  { icon: <FiFileText />, title: "Medical Report Analysis", description: "AI-driven analysis for quick patient assessments.", color: "bg-orange-500" },
  { icon: <BiTrendingUp />, title: "Improved Lead Generation", description: "Data-driven strategies to attract and engage patients.", color: "bg-pink-500" },
  { icon: <BsDatabase />, title: "Comprehensive Healthcare Database", description: "Extensive medical database for accurate patient support.", color: "bg-indigo-500" },
  { icon: <LuLanguages />, title: "Multilingual Support", description: "Breaking language barriers with multilingual tools.", color: "bg-red-500" },
  { icon: <BiCreditCard />, title: "Seamless Payment Handling", description: "Secure payment processing for global services.", color: "bg-teal-500" },
  { icon: <BiSearch />, title: "Marketing And SEO Support", description: "Optimized digital presence with advanced SEO strategies.", color: "bg-cyan-500" },
];

const FeaturesGrid: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Solutions</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-6">
                <div className={`${solution.color} inline-flex p-3 rounded-lg text-white mb-4`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
              <div className={`h-1 w-full absolute bottom-0 ${solution.color} opacity-75`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
