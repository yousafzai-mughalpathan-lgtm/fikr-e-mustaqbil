'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function MeritCalculator() {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [matricMarks, setMatricMarks] = useState('');
  const [fscMarks, setFscMarks] = useState('');
  const [testScore, setTestScore] = useState('');
  const [calculationResult, setCalculationResult] = useState(null);

  const universities = [
    { name: 'University of Punjab', programs: ['MBBS', 'BS CS', 'Engineering', 'BBA'] },
    { name: 'FAST-NUCES', programs: ['BS CS', 'BS SE', 'BS EE', 'MBA'] },
    { name: 'LUMS', programs: ['MBA', 'BBA', 'BS Economics', 'Engineering'] },
    { name: 'NUST', programs: ['Engineering', 'BS CS', 'Architecture', 'Management'] },
    { name: 'Aga Khan University', programs: ['MBBS', 'Nursing', 'Pharmacy'] },
    { name: 'University of Karachi', programs: ['Arts', 'Sciences', 'Commerce', 'Pharmacy'] }
  ];

  const meritFormulas = {
    'MBBS': { matric: 10, fsc: 40, test: 50 },
    'BS CS': { matric: 15, fsc: 45, test: 40 },
    'Engineering': { matric: 10, fsc: 40, test: 50 },
    'BBA': { matric: 20, fsc: 50, test: 30 },
    'MBA': { matric: 0, fsc: 20, test: 80 },
    'Default': { matric: 15, fsc: 45, test: 40 }
  };

  const previousYearData = {
    'University of Punjab': {
      'MBBS': { merit: 85.5, seats: 250 },
      'BS CS': { merit: 78.2, seats: 120 },
      'Engineering': { merit: 82.1, seats: 200 },
      'BBA': { merit: 72.5, seats: 150 }
    },
    'FAST-NUCES': {
      'BS CS': { merit: 82.5, seats: 80 },
      'BS SE': { merit: 80.2, seats: 60 },
      'MBA': { merit: 75.8, seats: 40 }
    },
    'LUMS': {
      'MBA': { merit: 88.5, seats: 100 },
      'BBA': { merit: 85.2, seats: 120 },
      'Engineering': { merit: 87.1, seats: 80 }
    },
    'NUST': {
      'Engineering': { merit: 84.8, seats: 300 },
      'BS CS': { merit: 83.2, seats: 150 }
    }
  };

  const calculateMerit = () => {
    if (!matricMarks || !fscMarks || !testScore || !selectedProgram) {
      alert('Please fill all required fields');
      return;
    }

    const formula = meritFormulas[selectedProgram] || meritFormulas['Default'];
    const merit = (
      (parseFloat(matricMarks) * formula.matric / 100) +
      (parseFloat(fscMarks) * formula.fsc / 100) +
      (parseFloat(testScore) * formula.test / 100)
    );

    const lastYearData = previousYearData[selectedUniversity]?.[selectedProgram];
    const lastYearMerit = lastYearData?.merit || 75;
    const totalSeats = lastYearData?.seats || 100;
    
    let admissionChance = 'Low';
    let chancePercentage = 20;
    
    if (merit >= lastYearMerit + 3) {
      admissionChance = 'Very High';
      chancePercentage = 90;
    } else if (merit >= lastYearMerit) {
      admissionChance = 'High';
      chancePercentage = 75;
    } else if (merit >= lastYearMerit - 2) {
      admissionChance = 'Medium';
      chancePercentage = 50;
    } else if (merit >= lastYearMerit - 5) {
      admissionChance = 'Low';
      chancePercentage = 25;
    } else {
      admissionChance = 'Very Low';
      chancePercentage = 10;
    }

    setCalculationResult({
      merit: merit.toFixed(2),
      lastYearMerit,
      admissionChance,
      chancePercentage,
      totalSeats,
      formula
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6">Merit Calculator</h1>
          <p className="text-xl text-purple-100 mb-8">
            Calculate your admission chances and aggregate score for top Pakistani universities
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-purple-100">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-purple-100">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-purple-100">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Merit</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">University</label>
                <select
                  value={selectedUniversity}
                  onChange={(e) => {
                    setSelectedUniversity(e.target.value);
                    setSelectedProgram('');
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8"
                >
                  <option value="">Select University</option>
                  {universities.map(uni => (
                    <option key={uni.name} value={uni.name}>{uni.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Program</label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  disabled={!selectedUniversity}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 pr-8"
                >
                  <option value="">Select Program</option>
                  {selectedUniversity && universities.find(uni => uni.name === selectedUniversity)?.programs.map(program => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Matric Marks (%)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="number"
                    value={matricMarks}
                    onChange={(e) => setMatricMarks(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 85"
                    min="0"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    FSc/A-Level Marks (%)
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="number"
                    value={fscMarks}
                    onChange={(e) => setFscMarks(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 78"
                    min="0"
                    max="100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Test Score (NET/MCAT/SAT) (%)
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  value={testScore}
                  onChange={(e) => setTestScore(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 82"
                  min="0"
                  max="100"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter your entrance test score as percentage
                </p>
              </div>

              <button
                onClick={calculateMerit}
                className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer"
              >
                <i className="ri-calculator-line mr-2"></i>
                Calculate Merit
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {calculationResult && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Results</h3>
                
                <div className="space-y-4">
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        {calculationResult.merit}%
                      </div>
                      <div className="text-purple-700 font-semibold">Your Calculated Merit</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">{calculationResult.lastYearMerit}%</div>
                      <div className="text-sm text-blue-700">Last Year Merit</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">{calculationResult.totalSeats}</div>
                      <div className="text-sm text-green-700">Total Seats</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-lg font-bold text-gray-900">Admission Chance</div>
                        <div className="text-sm text-gray-600">{calculationResult.admissionChance}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{calculationResult.chancePercentage}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${
                          calculationResult.chancePercentage >= 75 ? 'bg-green-500' :
                          calculationResult.chancePercentage >= 50 ? 'bg-yellow-500' :
                          calculationResult.chancePercentage >= 25 ? 'bg-orange-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${calculationResult.chancePercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">Merit Formula Breakdown:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Matric ({calculationResult.formula.matric}%)</span>
                        <span>{(matricMarks * calculationResult.formula.matric / 100).toFixed(1)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>FSc ({calculationResult.formula.fsc}%)</span>
                        <span>{(fscMarks * calculationResult.formula.fsc / 100).toFixed(1)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Test ({calculationResult.formula.test}%)</span>
                        <span>{(testScore * calculationResult.formula.test / 100).toFixed(1)}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Total Merit</span>
                        <span>{calculationResult.merit}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pro Tips</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mt-1"></i>
                  <p>Apply to multiple universities to increase your chances</p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mt-1"></i>
                  <p>Consider backup programs with lower merit requirements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mt-1"></i>
                  <p>Check for scholarships and financial aid options</p>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-600 mt-1"></i>
                  <p>Prepare well for entrance tests to boost your merit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Programs */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Consider These Alternatives</h2>
            <p className="text-xl text-gray-600">
              Similar programs that might match your profile
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                program: 'BS Information Technology',
                merit: '75-80%',
                scope: 'IT Specialist, System Admin',
                image: 'https://readdy.ai/api/search-image?query=information%20technology%20students%20working%20with%20computers%20and%20servers%2C%20modern%20IT%20lab%20environment%2C%20Pakistani%20university%20setting&width=300&height=200&seq=it1&orientation=landscape'
              },
              {
                program: 'DPT (Physical Therapy)',
                merit: '78-82%',
                scope: 'Physical Therapist, Rehabilitation',
                image: 'https://readdy.ai/api/search-image?query=physical%20therapy%20students%20learning%20rehabilitation%20techniques%2C%20healthcare%20training%20facility%2C%20medical%20education%20environment&width=300&height=200&seq=dpt2&orientation=landscape'
              },
              {
                program: 'BS Biotechnology',
                merit: '70-75%',
                scope: 'Research Scientist, Lab Technician',
                image: 'https://readdy.ai/api/search-image?query=biotechnology%20students%20in%20laboratory%20with%20microscopes%20and%20scientific%20equipment%2C%20modern%20research%20facility%2C%20educational%20environment&width=300&height=200&seq=biotech1&orientation=landscape'
              }
            ].map((alt, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={alt.image} alt={alt.program} className="w-full h-40 object-cover object-top" />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{alt.program}</h3>
                  <p className="text-gray-600 mb-3">Merit Range: {alt.merit}</p>
                  <p className="text-sm text-gray-600 mb-4">{alt.scope}</p>
                  <Link href={`/university-finder?program=${alt.program}`} className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                    Find Universities →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}