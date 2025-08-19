
'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProfileForm from './ProfileForm';
import Header from '../../components/Header';

export default function ProfileBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const steps = [
    'Academic Records',
    'Subjects & Interests', 
    'Location Preferences',
    'Financial Background',
    'Personal Preferences',
    'Review & Submit'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Smart Profile Builder</h1>
          <p className="text-xl text-blue-100">
            Tell us about yourself and get personalized career recommendations
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  index + 1 <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {index + 1}
                </div>
                <span className={`ml-2 text-sm font-medium hidden sm:block ${
                  index + 1 <= currentStep ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-1 mx-4 ${
                    index + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-gray-600">
            Step {currentStep} of {totalSteps}: {steps[currentStep - 1]}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <ProfileForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-blue-50 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-lightbulb-fill text-blue-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pro Tips</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                  <div className="space-y-2">
                    <p>• Be honest about your marks and interests</p>
                    <p>• Include all subjects you've studied</p>
                    <p>• Consider your family's financial situation</p>
                  </div>
                  <div className="space-y-2">
                    <p>• Think about where you want to study</p>
                    <p>• List all your skills and hobbies</p>
                    <p>• Your data is completely private and secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
