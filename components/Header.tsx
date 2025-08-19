
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-graduation-cap-fill text-white text-xl"></i>
            </div>
            <h1 className="text-2xl font-['Pacifico'] text-blue-600">Fikr-e-Mustaqbil</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/profile-builder" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Profile Builder</Link>
            <Link href="/degree-matching" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Find Degrees</Link>
            <Link href="/university-finder" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Find Universities</Link>
            <Link href="/merit-calculator" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Merit Calculator</Link>
            <Link href="/chatbot" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">AI Counselor</Link>
            <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">Dashboard</Link>
          </nav>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <i className={`text-2xl text-gray-700 ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/profile-builder" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>Profile Builder</Link>
              <Link href="/degree-matching" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>Find Degrees</Link>
              <Link href="/university-finder" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>Find Universities</Link>
              <Link href="/merit-calculator" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>Merit Calculator</Link>
              <Link href="/chatbot" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>AI Counselor</Link>
              <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center whitespace-nowrap cursor-pointer" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
