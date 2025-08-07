import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, MessageCircle, Zap, Shield, History, AlertCircle, Trash2 } from 'lucide-react';
import { InputBox, MessageCard } from './components/UI';
import { interviewAPI, useLocalStorage } from './utils';

const Home = () => {
  const [messages, setMessages] = useLocalStorage('interview-messages', []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToMessages = () => {
    document.getElementById('interview-section').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message) => {
    const userMessage = {
      id: Date.now(),
      text: message,
      isUser: true,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await interviewAPI.sendMessage(message);
      
      const aiMessage = {
        id: Date.now() + 1,
        text: response.reply,
        isUser: false,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      setError(err.message);
      
      const errorMessage = {
        id: Date.now() + 1,
        text: `I apologize, but I'm having trouble connecting right now. ${err.message}`,
        isUser: false,
        timestamp: Date.now(),
        isError: true,
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    setMessages([]);
    setError(null);
  };

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Interactive Practice",
      description: "Engage in real-time conversation with our AI interview coach"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Feedback",
      description: "Get immediate, personalized feedback on your responses"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe Environment",
      description: "Practice in a judgment-free space to build confidence"
    },
    {
      icon: <History className="w-8 h-8" />,
      title: "Session History",
      description: "Review past conversations and track your improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 transition-colors">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Interview Coaching
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              AI Interview
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                {" "}Coach
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Practice smarter. Get AI-powered feedback on your interview questions.
            </p>
            
            <button
              onClick={scrollToMessages}
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Start Practicing
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-200 dark:bg-amber-800 rounded-full opacity-10 animate-pulse delay-500"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose AI Interview Coach?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our advanced AI technology provides personalized coaching to help you excel in any interview situation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Section */}
      <section id="interview-section" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Start Your Practice Session
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Ask any interview question and receive personalized feedback from our AI coach.
              </p>
            </div>

            {/* Error Display */}
            {error && (
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-red-800 dark:text-red-400">
                      Connection Error
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.length > 0 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Conversation History
                  </h3>
                  <button
                    onClick={clearHistory}
                    className="flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear History
                  </button>
                </div>
                
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {messages.map((message, index) => (
                    <MessageCard
                      key={message.id}
                      message={message.text}
                      isUser={message.isUser}
                      timestamp={message.timestamp}
                      animateIn={index === messages.length - 1}
                    />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>
            )}

            {/* Input Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <InputBox
                onSubmit={handleSendMessage}
                isLoading={isLoading}
                placeholder="Ask the AI Coach any interview question... (e.g., 'Tell me about yourself')"
              />
              
              {isLoading && (
                <div className="mt-4 flex items-center justify-center text-gray-600 dark:text-gray-400">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500 mr-3"></div>
                  <span className="text-sm">AI Coach is thinking...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;