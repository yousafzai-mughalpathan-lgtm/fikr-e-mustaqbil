
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-graduation-cap-fill text-white text-xl"></i>
              </div>
              <h1 className="text-2xl font-[\'Pacifico\'] text-blue-600">Fikr-e-Mustaqbil</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/profile-builder" className="text-gray-700 hover:text-blue-600 transition-colors">Profile Builder</Link>
              <Link href="/degree-matching" className="text-gray-700 hover:text-blue-600 transition-colors">Find Degrees</Link>
              <Link href="/university-finder" className="text-gray-700 hover:text-blue-600 transition-colors">Find Universities</Link>
              <Link href="/merit-calculator" className="text-gray-700 hover:text-blue-600 transition-colors">Merit Calculator</Link>
              <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">Dashboard</Link>
            </nav>
            <button className="md:hidden w-8 h-8 flex items-center justify-center">
              <i className="ri-menu-line text-2xl text-gray-700"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Pakistani%20students%20studying%20in%20modern%20university%20library%20with%20books%20computers%20and%20bright%20natural%20lighting%2C%20diverse%20group%20of%20young%20people%20focused%20on%20learning%2C%20clean%20modern%20educational%20environment%20with%20warm%20lighting%20and%20academic%20atmosphere&width=1920&height=800&seq=taleem-hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Your AI Career Counselor for Pakistani Education
              </h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Get personalized degree and university recommendations based on your marks, interests, budget, and career goals. Make informed decisions about your future with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/profile-builder" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center whitespace-nowrap cursor-pointer">
                  Start Your Journey
                </Link>
                <Link href="/chatbot" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center whitespace-nowrap cursor-pointer">
                  Ask AI Counselor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Complete Career Guidance System</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From profile analysis to university admission - everything you need in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              icon: "ri-user-settings-fill",
              title: "Smart Profile Builder",
              description: "Enter your marks, subjects, interests, and preferences for personalized recommendations",
              link: "/profile-builder"
            },
            {
              icon: "ri-book-open-fill",
              title: "Degree Matching Engine",
              description: "AI recommends 3-5 perfect degree programs based on your profile and market demand",
              link: "/degree-matching"
            },
            {
              icon: "ri-building-fill",
              title: "University Recommender",
              description: "Find the best universities offering your recommended degrees with location and budget filters",
              link: "/university-finder"
            },
            {
              icon: "ri-calculator-fill",
              title: "Merit Calculator",
              description: "Calculate admission probability and aggregate scores for Pakistani universities",
              link: "/merit-calculator"
            },
            {
              icon: "ri-money-dollar-circle-fill",
              title: "Fee & Scholarship Advisor",
              description: "Get fee estimates and discover available scholarships and financial aid options",
              link: "/scholarships"
            },
            {
              icon: "ri-line-chart-fill",
              title: "Career Scope Analyzer",
              description: "See job market trends and future growth prospects for different fields in Pakistan",
              link: "/career-scope"
            }
            ].map((feature, index) => (
              <Link key={index} href={feature.link} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <i className={`${feature.icon} text-2xl text-blue-600 group-hover:text-white transition-colors`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-12 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-translate-2 text-3xl"></i>
            </div>
            <h3 className="text-3xl font-bold mb-4">Bilingual Support</h3>
            <p className="text-xl mb-8 text-blue-100">
              Complete platform available in English and Urdu with voice-to-text support for better accessibility
            </p>
            <div className="flex justify-center gap-4">
              <span className="bg-white/20 px-6 py-3 rounded-full text-lg font-semibold">English</span>
              <span className="bg-white/20 px-6 py-3 rounded-full text-lg font-semibold">اردو</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to Plan Your Future?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of Pakistani students who have found their perfect career path with Fikr-e-Mustaqbil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/profile-builder" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Build Your Profile Now
            </Link>
            <Link href="/chatbot" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Chat with AI Counselor
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <i className="ri-graduation-cap-fill text-white"></i>
                </div>
                <span className="text-xl font-[\'Pacifico\'] text-blue-400">Fikr-e-Mustaqbil</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                AI-powered career guidance for Pakistani students making informed education decisions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="/profile-builder" className="block hover:text-white transition-colors cursor-pointer">Profile Builder</Link>
                <Link href="/degree-matching" className="block hover:text-white transition-colors cursor-pointer">Degree Matching</Link>
                <Link href="/university-finder" className="block hover:text-white transition-colors cursor-pointer">University Finder</Link>
                <Link href="/merit-calculator" className="block hover:text-white transition-colors cursor-pointer">Merit Calculator</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="/scholarships" className="block hover:text-white transition-colors cursor-pointer">Scholarships</Link>
                <Link href="/career-scope" className="block hover:text-white transition-colors cursor-pointer">Career Scope</Link>
                <Link href="/chatbot" className="block hover:text-white transition-colors cursor-pointer">AI Counselor</Link>
                <Link href="/dashboard" className="block hover:text-white transition-colors cursor-pointer">Dashboard</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <span className="block">English & اردو</span>
                <span className="block">Voice Support</span>
                <span className="block">PDF Export</span>
                <span className="block">Mobile Friendly</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fikr-e-Mustaqbil. Empowering Pakistani students with AI-driven career guidance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
