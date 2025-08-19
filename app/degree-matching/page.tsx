'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function DegreeMatching() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedField, setSelectedField] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const degreePrograms = [
    {
      id: 1,
      name: 'BS Computer Science',
      field: 'Technology',
      duration: '4 years',
      level: 'Bachelor',
      requirements: ['ICS', 'Pre-Engineering', 'Mathematics'],
      scope: 'Software Developer, Data Scientist, AI Engineer',
      avgSalary: '50,000 - 200,000 PKR',
      demandLevel: 'Very High',
      matchScore: 95,
      image: 'https://readdy.ai/api/search-image?query=modern%20computer%20science%20laboratory%20with%20students%20coding%20on%20laptops%2C%20bright%20and%20professional%20educational%20environment%2C%20Pakistan%20university%20setting&width=400&height=250&seq=cs1&orientation=landscape'
    },
    {
      id: 2,
      name: 'MBBS',
      field: 'Medicine',
      duration: '5 years',
      level: 'Bachelor',
      requirements: ['Pre-Medical', 'Biology', 'Chemistry'],
      scope: 'Doctor, Surgeon, Medical Researcher',
      avgSalary: '80,000 - 500,000 PKR',
      demandLevel: 'Very High',
      matchScore: 88,
      image: 'https://readdy.ai/api/search-image?query=medical%20students%20in%20white%20coats%20studying%20in%20modern%20medical%20college%20classroom%2C%20stethoscope%20and%20medical%20books%2C%20professional%20healthcare%20education%20environment&width=400&height=250&seq=mbbs1&orientation=landscape'
    },
    {
      id: 3,
      name: 'BS Software Engineering',
      field: 'Technology',
      duration: '4 years',
      level: 'Bachelor',
      requirements: ['ICS', 'Pre-Engineering', 'Mathematics'],
      scope: 'Software Engineer, Full Stack Developer, Tech Lead',
      avgSalary: '45,000 - 180,000 PKR',
      demandLevel: 'High',
      matchScore: 92,
      image: 'https://readdy.ai/api/search-image?query=software%20engineering%20students%20working%20on%20computers%20with%20code%20on%20screens%2C%20modern%20tech%20lab%20environment%2C%20collaborative%20learning%20space&width=400&height=250&seq=se1&orientation=landscape'
    },
    {
      id: 4,
      name: 'BBA (Business Administration)',
      field: 'Business',
      duration: '4 years',
      level: 'Bachelor',
      requirements: ['Commerce', 'Arts', 'ICS'],
      scope: 'Business Manager, Entrepreneur, Marketing Executive',
      avgSalary: '35,000 - 120,000 PKR',
      demandLevel: 'Medium',
      matchScore: 78,
      image: 'https://readdy.ai/api/search-image?query=business%20students%20in%20modern%20classroom%20discussing%20strategies%2C%20professional%20business%20education%20environment%2C%20presentation%20and%20teamwork&width=400&height=250&seq=bba1&orientation=landscape'
    },
    {
      id: 5,
      name: 'BS Civil Engineering',
      field: 'Engineering',
      duration: '4 years',
      level: 'Bachelor',
      requirements: ['Pre-Engineering', 'Physics', 'Mathematics'],
      scope: 'Civil Engineer, Project Manager, Construction Consultant',
      avgSalary: '40,000 - 150,000 PKR',
      demandLevel: 'Medium',
      matchScore: 85,
      image: 'https://readdy.ai/api/search-image?query=civil%20engineering%20students%20studying%20blueprints%20and%20construction%20models%2C%20engineering%20laboratory%20with%20tools%20and%20equipment%2C%20professional%20technical%20education&width=400&height=250&seq=civil1&orientation=landscape'
    },
    {
      id: 6,
      name: 'DPT (Doctor of Physical Therapy)',
      field: 'Healthcare',
      duration: '5 years',
      level: 'Doctorate',
      requirements: ['Pre-Medical', 'Biology', 'Chemistry'],
      scope: 'Physical Therapist, Rehabilitation Specialist, Sports Therapist',
      avgSalary: '60,000 - 200,000 PKR',
      demandLevel: 'High',
      matchScore: 82,
      image: 'https://readdy.ai/api/search-image?query=physical%20therapy%20students%20learning%20rehabilitation%20techniques%2C%20modern%20healthcare%20training%20facility%2C%20professional%20medical%20education%20environment&width=400&height=250&seq=dpt1&orientation=landscape'
    }
  ];

  const filteredDegrees = degreePrograms.filter(degree => {
    const matchesSearch = degree.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         degree.scope.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesField = selectedField === 'all' || degree.field === selectedField;
    const matchesLevel = selectedLevel === 'all' || degree.level === selectedLevel;
    return matchesSearch && matchesField && matchesLevel;
  });

  const fields = ['Technology', 'Medicine', 'Engineering', 'Business', 'Healthcare'];
  const levels = ['Bachelor', 'Master', 'Doctorate'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Perfect Degree</h1>
          <p className="text-xl text-blue-100 mb-8">
            AI-powered recommendations based on your profile and career goals
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex bg-white rounded-full p-2 shadow-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search degrees, careers, or subjects..."
                className="flex-1 px-6 py-3 text-gray-900 bg-transparent outline-none text-lg"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Field</label>
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                >
                  <option value="all">All Fields</option>
                  {fields.map(field => (
                    <option key={field} value={field}>{field}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                >
                  <option value="all">All Levels</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-gray-600">
              <span className="font-semibold">{filteredDegrees.length}</span> programs found
            </div>
          </div>
        </div>
      </section>

      {/* Degree Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDegrees.map(degree => (
              <div key={degree.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={degree.image} 
                  alt={degree.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                      {degree.field}
                    </span>
                    <div className="flex items-center">
                      <span className="text-green-600 font-bold text-lg">{degree.matchScore}%</span>
                      <span className="text-gray-500 text-sm ml-1">match</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{degree.name}</h3>
                  <p className="text-gray-600 mb-4">{degree.scope}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-2"></i>
                      <span>Duration: {degree.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-money-dollar-circle-line w-4 h-4 flex items-center justify-center mr-2"></i>
                      <span>Salary: {degree.avgSalary}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-trending-up-line w-4 h-4 flex items-center justify-center mr-2"></i>
                      <span>Demand: {degree.demandLevel}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Requirements:</p>
                    <div className="flex flex-wrap gap-1">
                      {degree.requirements.map(req => (
                        <span key={req} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link href={`/university-finder?degree=${degree.name}`} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm whitespace-nowrap cursor-pointer">
                      Find Universities
                    </Link>
                    <Link href={`/merit-calculator?degree=${degree.name}`} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
                      <i className="ri-calculator-line w-4 h-4 flex items-center justify-center"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Personalized Recommendations?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Complete your profile to get AI-powered degree recommendations tailored specifically for you
          </p>
          <Link href="/profile-builder" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold whitespace-nowrap cursor-pointer">
            Complete Your Profile
          </Link>
        </div>
      </section>
    </div>
  );
}