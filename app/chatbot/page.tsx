'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Assalam-o-Alaikum! Main Taleem Advisor ka AI Career Counselor hun. Aap ka naam kya hai?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "MBBS ki guidance chahiye",
    "Computer Science ke bare mein batao",
    "Engineering admission process",
    "Private vs Public universities",
    "Scholarship ki information",
    "Merit calculator kaise use karu"
  ];

  const botResponses = {
    greeting: [
      "Bahut khushi hui! Main aap ki career guidance mein madad karunga.",
      "Great! Aap kya study karna chahte hain?"
    ],
    mbbs: [
      "MBBS ek excellent choice hai! Is ke liye aap ko Pre-Medical group chahiye, aur entrance test MDCAT dena hoga. Merit usually 85%+ hota hai top universities mein.",
      "MBBS ke alternatives bhi hain jaise DPT, Pharmacy, Nursing. Budget kya hai aap ka?"
    ],
    cs: [
      "Computer Science bohat demanding field hai Pakistan mein! ICS ya Pre-Engineering background chahiye. FAST, NUST, COMSATS achhe options hain.",
      "Coding seekhna start kar dein, Python aur JavaScript se. Job market excellent hai CS graduates ke liye."
    ],
    engineering: [
      "Engineering ke liye Pre-Engineering group mandatory hai. NUST, UET, GIKI top choices hain. NET test prepare karna hoga.",
      "Civil, Electrical, Mechanical - sab fields mein scope hai. Kaunsa engineering interest hai aap ko?"
    ],
    scholarship: [
      "HEC scholarships available hain - need-based aur merit-based dono. Ehsaas scholarship program bhi check karein.",
      "Private universities mein bhi scholarships milti hain. GPA maintain karna zaroori hai."
    ],
    default: [
      "Interesting question! Main detail mein answer deta hun...",
      "Acha sawal hai. Iske bare mein main aur information de sakta hun."
    ]
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('mbbs') || message.includes('doctor') || message.includes('medical')) {
      return botResponses.mbbs[Math.floor(Math.random() * botResponses.mbbs.length)];
    }
    
    if (message.includes('computer') || message.includes('cs') || message.includes('software')) {
      return botResponses.cs[Math.floor(Math.random() * botResponses.cs.length)];
    }
    
    if (message.includes('engineering') || message.includes('engineer')) {
      return botResponses.engineering[Math.floor(Math.random() * botResponses.engineering.length)];
    }
    
    if (message.includes('scholarship') || message.includes('financial aid')) {
      return botResponses.scholarship[Math.floor(Math.random() * botResponses.scholarship.length)];
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('salam')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    }
    
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">AI Career Counselor</h1>
          <p className="text-xl text-indigo-100">
            24/7 available AI assistant for all your career and education questions
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Chat Header */}
              <div className="bg-indigo-600 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                    <i className="ri-robot-fill text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Taleem AI Assistant</h3>
                    <p className="text-indigo-200">Online • Always here to help</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map(message => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.sender === 'user' 
                        ? 'bg-indigo-600 text-white rounded-br-sm' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                    }`}>
                      <p>{message.text}</p>
                      <p className={`text-xs mt-2 ${
                        message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="p-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Quick Questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-2 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors whitespace-nowrap cursor-pointer"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question in Urdu or English..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-send-plane-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI Features</h3>
              <div className="space-y-3">
                {[
                  { icon: 'ri-translate-2', text: 'Bilingual Support' },
                  { icon: 'ri-book-open-line', text: 'Career Guidance' },
                  { icon: 'ri-school-line', text: 'University Info' },
                  { icon: 'ri-calculator-line', text: 'Merit Help' },
                  { icon: 'ri-money-dollar-circle-line', text: 'Fee Guidance' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <i className={`${feature.icon} w-5 h-5 flex items-center justify-center text-indigo-600`}></i>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Questions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Sample Questions</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• "MBBS ke liye kya requirements hain?"</p>
                <p>• "Best CS universities in Lahore?"</p>
                <p>• "Private university fees kitni hai?"</p>
                <p>• "Engineering ke career options?"</p>
                <p>• "Scholarship kaise apply karu?"</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/profile-builder" className="block w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center whitespace-nowrap cursor-pointer">
                  Build Profile
                </Link>
                <Link href="/degree-matching" className="block w-full border border-indigo-600 text-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors text-center whitespace-nowrap cursor-pointer">
                  Find Degrees
                </Link>
                <Link href="/merit-calculator" className="block w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-center whitespace-nowrap cursor-pointer">
                  Calculate Merit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-indigo-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "AI kitni accurate hai?",
                a: "Hamare AI system ki accuracy 95%+ hai, latest data aur machine learning algorithms use karta hai."
              },
              {
                q: "Kya ye 24/7 available hai?",
                a: "Jee haan, aap kisi bhi waqt sawal pooch sakte hain. AI assistant hamesha online rahta hai."
              },
              {
                q: "English aur Urdu dono support karta hai?",
                a: "Bilkul! Aap English ya Urdu mein sawal kar sakte hain, AI dono languages samajhta hai."
              },
              {
                q: "Kya personal information safe hai?",
                a: "Haan, aap ki privacy hamari priority hai. Koi personal data share nahi kiya jata."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}