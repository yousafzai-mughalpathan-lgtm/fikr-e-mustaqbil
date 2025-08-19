'use client';

import { useState } from 'react';
import Header from '@/components/Header';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for dashboard
  const savedRecommendations = [
    {
      id: 1,
      degree: 'BS Computer Science',
      university: 'FAST University Lahore',
      merit: 'High (85%)',
      fee: 'PKR 180,000/year',
      deadline: '15 Jan 2024'
    },
    {
      id: 2,
      degree: 'BS Software Engineering',
      university: 'COMSATS Islamabad',
      merit: 'Medium (72%)',
      fee: 'PKR 120,000/year',
      deadline: '20 Jan 2024'
    },
    {
      id: 3,
      degree: 'BS Information Technology',
      university: 'Punjab University',
      merit: 'High (88%)',
      fee: 'PKR 45,000/year',
      deadline: '25 Jan 2024'
    }
  ];

  const profileData = {
    name: 'Ahmed Hassan',
    education: 'F.Sc Pre-Engineering',
    marks: '85%',
    subjects: 'Physics, Chemistry, Mathematics',
    interests: 'Programming, Technology, Problem Solving',
    location: 'Lahore',
    budget: 'PKR 150,000/year'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
          <p className="text-gray-600">Manage your academic journey and track recommendations</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'overview', label: 'Overview', icon: 'ri-dashboard-line' },
                { id: 'recommendations', label: 'My Recommendations', icon: 'ri-star-line' },
                { id: 'profile', label: 'Profile', icon: 'ri-user-line' },
                { id: 'deadlines', label: 'Deadlines', icon: 'ri-calendar-line' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <i className={`${tab.icon} text-lg`}></i>
                    <span>{tab.label}</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-sm">Saved Programs</p>
                        <p className="text-3xl font-bold">12</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
                        <i className="ri-book-line text-xl"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100 text-sm">Universities</p>
                        <p className="text-3xl font-bold">8</p>
                      </div>
                      <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
                        <i className="ri-building-line text-xl"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100 text-sm">Applications</p>
                        <p className="text-3xl font-bold">5</p>
                      </div>
                      <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
                        <i className="ri-file-paper-line text-xl"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100 text-sm">Deadlines</p>
                        <p className="text-3xl font-bold">3</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center">
                        <i className="ri-alarm-line text-xl"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <i className="ri-search-line text-blue-600"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Find More Degrees</h4>
                          <p className="text-sm text-gray-500">Discover new programs</p>
                        </div>
                      </div>
                    </button>
                    
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <i className="ri-calculator-line text-green-600"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Calculate Merit</h4>
                          <p className="text-sm text-gray-500">Check admission chances</p>
                        </div>
                      </div>
                    </button>
                    
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <i className="ri-chat-3-line text-purple-600"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">AI Counselor</h4>
                          <p className="text-sm text-gray-500">Get career guidance</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Recommendations Tab */}
            {activeTab === 'recommendations' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Your Saved Recommendations</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                    <i className="ri-download-line mr-2"></i>
                    Export PDF
                  </button>
                </div>
                
                <div className="space-y-4">
                  {savedRecommendations.map((rec) => (
                    <div key={rec.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{rec.degree}</h4>
                          <p className="text-gray-600 flex items-center mt-1">
                            <i className="ri-building-line mr-2"></i>
                            {rec.university}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                            <span className="flex items-center text-green-600">
                              <i className="ri-medal-line mr-1"></i>
                              {rec.merit}
                            </span>
                            <span className="flex items-center text-blue-600">
                              <i className="ri-money-dollar-circle-line mr-1"></i>
                              {rec.fee}
                            </span>
                            <span className="flex items-center text-orange-600">
                              <i className="ri-calendar-line mr-1"></i>
                              Deadline: {rec.deadline}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                            View Details
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                            <i className="ri-heart-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Your Profile</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                    <i className="ri-edit-line mr-2"></i>
                    Edit Profile
                  </button>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Personal Information</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-500">Name</label>
                          <p className="text-gray-900">{profileData.name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Education</label>
                          <p className="text-gray-900">{profileData.education}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Marks</label>
                          <p className="text-gray-900">{profileData.marks}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Location</label>
                          <p className="text-gray-900">{profileData.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Academic Details</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-500">Subjects</label>
                          <p className="text-gray-900">{profileData.subjects}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Interests</label>
                          <p className="text-gray-900">{profileData.interests}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Budget</label>
                          <p className="text-gray-900">{profileData.budget}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Deadlines Tab */}
            {activeTab === 'deadlines' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Upcoming Deadlines</h3>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-red-900">FAST University - BS CS</h4>
                        <p className="text-red-700 text-sm">Application deadline in 3 days</p>
                      </div>
                      <div className="text-red-600 font-bold">15 Jan</div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-yellow-900">COMSATS - Software Engineering</h4>
                        <p className="text-yellow-700 text-sm">Application deadline in 8 days</p>
                      </div>
                      <div className="text-yellow-600 font-bold">20 Jan</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-green-900">Punjab University - IT</h4>
                        <p className="text-green-700 text-sm">Application deadline in 13 days</p>
                      </div>
                      <div className="text-green-600 font-bold">25 Jan</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-notification-line text-2xl text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">Stay Updated</h4>
                  <p className="text-blue-700 text-sm mb-4">Get notifications about important deadlines and updates</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                    Enable Notifications
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}