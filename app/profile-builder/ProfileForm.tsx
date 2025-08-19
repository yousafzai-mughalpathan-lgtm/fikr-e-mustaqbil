
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProfileFormProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export default function ProfileForm({ currentStep, setCurrentStep }: ProfileFormProps) {
  const [formData, setFormData] = useState({
    // Academic Records
    matricMarks: '',
    matricSubjects: [],
    fscALevelMarks: '',
    educationLevel: '',
    subjects: [],
    
    // Interests & Skills
    interests: [],
    skills: [],
    careerGoals: '',
    
    // Location
    preferredCities: [],
    preferredProvinces: [],
    studyAbroad: false,
    
    // Financial
    monthlyIncome: '',
    budgetRange: '',
    scholarshipInterest: false,
    
    // Personal
    gender: '',
    languagePreference: 'english',
    studyMode: ''
  });

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Process form data and redirect to results
    console.log('Profile Data:', formData);
    // Redirect to degree matching with profile data
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Records</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Education Level</label>
                <div className="space-y-2">
                  {['Matric', 'FSc/FA', 'A-Level', 'ICS', 'Other'].map(level => (
                    <label key={level} className="flex items-center">
                      <input
                        type="radio"
                        name="educationLevel"
                        value={level}
                        checked={formData.educationLevel === level}
                        onChange={(e) => setFormData({...formData, educationLevel: e.target.value})}
                        className="mr-3"
                      />
                      <span>{level}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Matric Marks (%)</label>
                <input
                  type="number"
                  value={formData.matricMarks}
                  onChange={(e) => setFormData({...formData, matricMarks: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 85"
                  min="0"
                  max="100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">FSc/A-Level Marks (%)</label>
                <input
                  type="number"
                  value={formData.fscALevelMarks}
                  onChange={(e) => setFormData({...formData, fscALevelMarks: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 78"
                  min="0"
                  max="100"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject Group</label>
                <div className="space-y-2">
                  {['Pre-Medical', 'Pre-Engineering', 'ICS', 'Commerce', 'Arts', 'General Science'].map(subject => (
                    <label key={subject} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.subjects.includes(subject)}
                        onChange={(e) => {
                          const subjects = e.target.checked 
                            ? [...formData.subjects, subject]
                            : formData.subjects.filter(s => s !== subject);
                          setFormData({...formData, subjects});
                        }}
                        className="mr-3"
                      />
                      <span>{subject}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interests & Skills</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">What interests you most?</label>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    'Computers & Technology', 'Biology & Medicine', 'Engineering & Math',
                    'Business & Finance', 'Arts & Design', 'Teaching & Education',
                    'Law & Politics', 'Sports & Fitness', 'Writing & Literature',
                    'Social Work', 'Agriculture', 'Psychology'
                  ].map(interest => (
                    <label key={interest} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={(e) => {
                          const interests = e.target.checked 
                            ? [...formData.interests, interest]
                            : formData.interests.filter(i => i !== interest);
                          setFormData({...formData, interests});
                        }}
                        className="mr-3"
                      />
                      <span className="text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Skills you have</label>
                <div className="grid md:grid-cols-4 gap-3">
                  {[
                    'Programming', 'Drawing', 'Public Speaking', 'Leadership',
                    'Problem Solving', 'Communication', 'Research', 'Creativity',
                    'Analysis', 'Team Work', 'Language Skills', 'Technical Skills'
                  ].map(skill => (
                    <label key={skill} className="flex items-center p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.skills.includes(skill)}
                        onChange={(e) => {
                          const skills = e.target.checked 
                            ? [...formData.skills, skill]
                            : formData.skills.filter(s => s !== skill);
                          setFormData({...formData, skills});
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Career Goals</label>
                <textarea
                  value={formData.careerGoals}
                  onChange={(e) => setFormData({...formData, careerGoals: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Describe your career goals and what you want to achieve..."
                />
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Location Preferences</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Cities</label>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad',
                    'Multan', 'Peshawar', 'Quetta', 'Hyderabad', 'Gujranwala',
                    'Sialkot', 'Bahawalpur', 'Sargodha', 'Sukkur', 'Larkana'
                  ].map(city => (
                    <label key={city} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferredCities.includes(city)}
                        onChange={(e) => {
                          const cities = e.target.checked 
                            ? [...formData.preferredCities, city]
                            : formData.preferredCities.filter(c => c !== city);
                          setFormData({...formData, preferredCities: cities});
                        }}
                        className="mr-3"
                      />
                      <span>{city}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Provinces</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Islamabad'].map(province => (
                    <label key={province} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferredProvinces.includes(province)}
                        onChange={(e) => {
                          const provinces = e.target.checked 
                            ? [...formData.preferredProvinces, province]
                            : formData.preferredProvinces.filter(p => p !== province);
                          setFormData({...formData, preferredProvinces: provinces});
                        }}
                        className="mr-3"
                      />
                      <span>{province}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.studyAbroad}
                    onChange={(e) => setFormData({...formData, studyAbroad: e.target.checked})}
                    className="mr-3"
                  />
                  <span className="font-semibold">I'm interested in studying abroad</span>
                </label>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Background</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Monthly Family Income (Optional)</label>
                <div className="space-y-2">
                  {[
                    'Under 25,000 PKR',
                    '25,000 - 50,000 PKR',
                    '50,000 - 100,000 PKR',
                    '100,000 - 200,000 PKR',
                    'Above 200,000 PKR',
                    'Prefer not to say'
                  ].map(income => (
                    <label key={income} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="monthlyIncome"
                        value={income}
                        checked={formData.monthlyIncome === income}
                        onChange={(e) => setFormData({...formData, monthlyIncome: e.target.value})}
                        className="mr-3"
                      />
                      <span>{income}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Annual Education Budget</label>
                <div className="space-y-2">
                  {[
                    'Under 50,000 PKR',
                    '50,000 - 150,000 PKR',
                    '150,000 - 300,000 PKR',
                    '300,000 - 500,000 PKR',
                    'Above 500,000 PKR'
                  ].map(budget => (
                    <label key={budget} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="budgetRange"
                        value={budget}
                        checked={formData.budgetRange === budget}
                        onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}
                        className="mr-3"
                      />
                      <span>{budget}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.scholarshipInterest}
                    onChange={(e) => setFormData({...formData, scholarshipInterest: e.target.checked})}
                    className="mr-3"
                  />
                  <span className="font-semibold">I'm interested in scholarships and financial aid</span>
                </label>
              </div>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Preferences</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Gender</label>
                <div className="space-y-2">
                  {['Male', 'Female', 'Prefer not to say'].map(gender => (
                    <label key={gender} className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                        className="mr-3"
                      />
                      <span>{gender}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Language Preference</label>
                <div className="space-y-2">
                  {['English', 'Urdu', 'Both'].map(lang => (
                    <label key={lang} className="flex items-center">
                      <input
                        type="radio"
                        name="languagePreference"
                        value={lang.toLowerCase()}
                        checked={formData.languagePreference === lang.toLowerCase()}
                        onChange={(e) => setFormData({...formData, languagePreference: e.target.value})}
                        className="mr-3"
                      />
                      <span>{lang}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Study Mode</label>
                <div className="space-y-2">
                  {['On Campus', 'Online', 'Hybrid', 'Distance Learning'].map(mode => (
                    <label key={mode} className="flex items-center">
                      <input
                        type="radio"
                        name="studyMode"
                        value={mode}
                        checked={formData.studyMode === mode}
                        onChange={(e) => setFormData({...formData, studyMode: e.target.value})}
                        className="mr-3"
                      />
                      <span>{mode}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 6:
        return (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Profile</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Academic Background</h3>
                <p><strong>Education:</strong> {formData.educationLevel}</p>
                <p><strong>Matric Marks:</strong> {formData.matricMarks}%</p>
                <p><strong>FSc/A-Level:</strong> {formData.fscALevelMarks}%</p>
                <p><strong>Subjects:</strong> {formData.subjects.join(', ')}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Interests & Goals</h3>
                <p><strong>Interests:</strong> {formData.interests.join(', ')}</p>
                <p><strong>Skills:</strong> {formData.skills.join(', ')}</p>
                <p><strong>Career Goals:</strong> {formData.careerGoals}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Preferences</h3>
                <p><strong>Preferred Cities:</strong> {formData.preferredCities.join(', ')}</p>
                <p><strong>Budget Range:</strong> {formData.budgetRange}</p>
                <p><strong>Language:</strong> {formData.languagePreference}</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-3">
                  <i className="ri-shield-check-fill text-blue-600 text-xl mr-2"></i>
                  <span className="font-semibold text-blue-900">Privacy & Security</span>
                </div>
                <p className="text-blue-800 text-sm">
                  Your data is encrypted and used only for generating personalized recommendations. 
                  We never share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
      
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Previous
          </button>
        )}
        
        <div className="ml-auto">
          {currentStep < 6 ? (
            <button
              onClick={handleNext}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Next Step
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          ) : (
            <Link href="/degree-matching" className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
              Get My Recommendations
              <i className="ri-rocket-fill ml-2"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
