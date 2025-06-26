import { MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">youtube scraper</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium">Home</a>
              <a href="#about" className="text-teal-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 font-medium">Contact</a>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-teal-900 mb-8 text-center">
              Unlock the Power of YouTube Data
            </h1>
            <p className="text-xl text-gray-600 mb-12 text-center leading-relaxed">
              Discover top-performing videos and influential channels effortlessly
            </p>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 leading-relaxed mb-8">
                YouTube Scraper is your go-to solution for extracting valuable insights from the world's largest video platform. Whether you're a marketer, researcher, or content creator, our service allows you to seamlessly scrape YouTube for top videos and channels, providing you with the competitive edge you need. Our advanced algorithms analyze trends in real-time, helping you make data-driven decisions with ease. With a user-friendly interface and a robust DM system, connecting with creators and assembling a data-driven strategy has never been simpler.
              </p>
              <div className="grid md:grid-cols-3 gap-8 my-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-teal-900 mb-2">Comprehensive Video and Channel Analytics: Gain access to detailed metrics on trending videos and popular channels, including views, likes, comments, and subscriber counts.</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-teal-900 mb-2">Real-time Data Extraction: Stay ahead of the curve with instant updates and real-time scraping capabilities that ensure you have the latest information at your fingertips.</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-teal-900 mb-2">Seamless Integration and Communication: Utilize our direct messaging system to connect with influencers and creators directly, fostering collaboration and partnership opportunities.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}