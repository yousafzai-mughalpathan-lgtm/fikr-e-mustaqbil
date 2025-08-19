'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function UniversityFinder() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedFee, setSelectedFee] = useState('all');

  const universities = [
    {
      id: 1,
      name: 'University of Punjab',
      type: 'Public',
      city: 'Lahore',
      province: 'Punjab',
      established: 1882,
      ranking: 'Top 5 in Pakistan',
      programs: ['MBBS', 'BS CS', 'Engineering', 'Business'],
      annualFee: '15,000 - 50,000 PKR',
      admissionRequirement: '70%+ FSc',
      facilities: ['Library', 'Hostels', 'Sports Complex', 'Research Labs'],
      website: 'pu.edu.pk',
      rating: 4.5,
      image: 'https://readdy.ai/api/search-image?query=prestigious%20Pakistani%20university%20campus%20with%20historic%20brick%20buildings%2C%20lush%20green%20lawns%2C%20students%20walking%2C%20academic%20atmosphere%2C%20University%20of%20Punjab%20style%20architecture&width=400&height=250&seq=pu1&orientation=landscape'
    },
    {
      id: 2,
      name: 'FAST-NUCES',
      type: 'Private',
      city: 'Karachi',
      province: 'Sindh',
      established: 2000,
      ranking: 'Top 3 for CS',
      programs: ['BS CS', 'BS SE', 'BS EE', 'MBA'],
      annualFee: '200,000 - 300,000 PKR',
      admissionRequirement: '80%+ FSc',
      facilities: ['Modern Labs', 'Industry Links', 'Placement Cell', 'Research Centers'],
      website: 'nu.edu.pk',
      rating: 4.7,
      image: 'https://readdy.ai/api/search-image?query=modern%20technology%20university%20campus%20with%20glass%20buildings%2C%20computer%20labs%20visible%2C%20students%20with%20laptops%2C%20contemporary%20Pakistani%20educational%20institution%2C%20FAST%20university%20style&width=400&height=250&seq=fast1&orientation=landscape'
    },
    {
      id: 3,
      name: 'LUMS',
      type: 'Private',
      city: 'Lahore',
      province: 'Punjab',
      established: 1985,
      ranking: 'Top 1 Business School',
      programs: ['MBA', 'BBA', 'BS Economics', 'Engineering'],
      annualFee: '500,000 - 800,000 PKR',
      admissionRequirement: '85%+ FSc + SAT',
      facilities: ['World-class Faculty', 'Research Centers', 'Industry Partnerships', 'Scholarships'],
      website: 'lums.edu.pk',
      rating: 4.8,
      image: 'https://readdy.ai/api/search-image?query=elite%20Pakistani%20business%20university%20with%20modern%20architecture%2C%20international%20standard%20campus%2C%20well-dressed%20students%2C%20premium%20educational%20facility%2C%20LUMS%20style%20buildings&width=400&height=250&seq=lums1&orientation=landscape'
    },
    {
      id: 4,
      name: 'NUST',
      type: 'Public',
      city: 'Islamabad',
      province: 'Islamabad',
      established: 1991,
      ranking: 'Top Engineering University',
      programs: ['Engineering', 'BS CS', 'Architecture', 'Management'],
      annualFee: '100,000 - 200,000 PKR',
      admissionRequirement: 'NET Test + 75% FSc',
      facilities: ['Research Labs', 'Industry Collaboration', 'Hostels', 'Sports'],
      website: 'nust.edu.pk',
      rating: 4.6,
      image: 'https://readdy.ai/api/search-image?query=top%20engineering%20university%20campus%20in%20Islamabad%20with%20modern%20buildings%2C%20engineering%20labs%2C%20students%20in%20technical%20environment%2C%20Pakistani%20national%20university%20setting&width=400&height=250&seq=nust1&orientation=landscape'
    },
    {
      id: 5,
      name: 'Aga Khan University',
      type: 'Private',
      city: 'Karachi',
      province: 'Sindh',
      established: 1983,
      ranking: 'Top Medical University',
      programs: ['MBBS', 'Nursing', 'Pharmacy', 'Public Health'],
      annualFee: '1,200,000 - 1,500,000 PKR',
      admissionRequirement: '90%+ FSc + MCAT',
      facilities: ['Teaching Hospital', 'Research Centers', 'International Faculty', 'Scholarships'],
      website: 'aku.edu',
      rating: 4.9,
      image: 'https://readdy.ai/api/search-image?query=world-class%20medical%20university%20campus%20with%20hospital%20buildings%2C%20medical%20students%20in%20white%20coats%2C%20modern%20healthcare%20education%20facility%2C%20Aga%20Khan%20University%20style&width=400&height=250&seq=aku1&orientation=landscape'
    },
    {
      id: 6,
      name: 'University of Karachi',
      type: 'Public',
      city: 'Karachi',
      province: 'Sindh',
      established: 1951,
      ranking: 'Largest University',
      programs: ['Arts', 'Sciences', 'Commerce', 'Pharmacy', 'Engineering'],
      annualFee: '8,000 - 30,000 PKR',
      admissionRequirement: '60%+ FSc',
      facilities: ['Multiple Faculties', 'Large Library', 'Sports Ground', 'Affordable Education'],
      website: 'uok.edu.pk',
      rating: 4.2,
      image: 'https://readdy.ai/api/search-image?query=large%20public%20university%20campus%20with%20traditional%20buildings%2C%20diverse%20group%20of%20students%2C%20affordable%20education%20setting%2C%20University%20of%20Karachi%20style%20architecture&width=400&height=250&seq=uok1&orientation=landscape'
    }
  ];

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         uni.programs.some(program => program.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCity = selectedCity === 'all' || uni.city === selectedCity;
    const matchesType = selectedType === 'all' || uni.type === selectedType;
    
    let matchesFee = true;
    if (selectedFee !== 'all') {
      const feeRange = uni.annualFee.toLowerCase();
      switch(selectedFee) {
        case 'low':
          matchesFee = feeRange.includes('8,000') || feeRange.includes('15,000') || feeRange.includes('30,000');
          break;
        case 'medium':
          matchesFee = feeRange.includes('100,000') || feeRange.includes('200,000') || feeRange.includes('300,000');
          break;
        case 'high':
          matchesFee = feeRange.includes('500,000') || feeRange.includes('800,000') || feeRange.includes('1,200,000');
          break;
      }
    }
    
    return matchesSearch && matchesCity && matchesType && matchesFee;
  });

  const cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 'Peshawar'];
  const types = ['Public', 'Private'];
  const feeRanges = [
    { value: 'low', label: 'Under 100,000 PKR' },
    { value: 'medium', label: '100,000 - 500,000 PKR' },
    { value: 'high', label: 'Above 500,000 PKR' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Dream University</h1>
          <p className="text-xl text-green-100 mb-8">
            Discover the best universities in Pakistan for your chosen degree program
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex bg-white rounded-full p-2 shadow-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search universities or programs..."
                className="flex-1 px-6 py-3 text-gray-900 bg-transparent outline-none text-lg"
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-search-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
                >
                  <option value="all">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
                >
                  <option value="all">All Types</option>
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Fee Range</label>
                <select
                  value={selectedFee}
                  onChange={(e) => setSelectedFee(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
                >
                  <option value="all">All Ranges</option>
                  {feeRanges.map(range => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-gray-600">
              <span className="font-semibold">{filteredUniversities.length}</span> universities found
            </div>
          </div>
        </div>
      </section>

      {/* University Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredUniversities.map(uni => (
              <div key={uni.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={uni.image} 
                  alt={uni.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{uni.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-1"></i>
                          {uni.city}, {uni.province}
                        </span>
                        <span className="flex items-center">
                          <i className="ri-calendar-line w-4 h-4 flex items-center justify-center mr-1"></i>
                          Est. {uni.established}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <div className="flex space-x-1 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`ri-star-fill text-sm ${i < Math.floor(uni.rating) ? 'text-yellow-500' : 'text-gray-300'}`}></i>
                          ))}
                        </div>
                        <span className="text-sm font-semibold">{uni.rating}</span>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        uni.type === 'Public' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {uni.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <i className="ri-trophy-line w-4 h-4 flex items-center justify-center mr-3 text-yellow-600"></i>
                      <span><strong>Ranking:</strong> {uni.ranking}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <i className="ri-money-dollar-circle-line w-4 h-4 flex items-center justify-center mr-3 text-green-600"></i>
                      <span><strong>Annual Fee:</strong> {uni.annualFee}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <i className="ri-bookmark-line w-4 h-4 flex items-center justify-center mr-3 text-blue-600"></i>
                      <span><strong>Admission:</strong> {uni.admissionRequirement}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Popular Programs:</p>
                    <div className="flex flex-wrap gap-2">
                      {uni.programs.map(program => (
                        <span key={program} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Facilities:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {uni.facilities.slice(0, 4).map(facility => (
                        <div key={facility} className="flex items-center text-sm text-gray-600">
                          <i className="ri-check-line w-3 h-3 flex items-center justify-center mr-2 text-green-600"></i>
                          <span>{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link href={`/merit-calculator?university=${uni.name}`} className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-center font-semibold whitespace-nowrap cursor-pointer">
                      Check Merit
                    </Link>
                    <a href={`https://${uni.website}`} target="_blank" rel="noopener noreferrer" className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
                      <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                    </a>
                    <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
                      <i className="ri-bookmark-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Universities Across Pakistan</h2>
          <div className="bg-gray-100 rounded-2xl p-4 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444583.203000559!2d67.5!3d30.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}