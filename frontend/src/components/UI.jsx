import React, { useState, useEffect } from "react";
import {
  User,
  Brain,
  Clock,
  Send,
  Loader,
  Sun,
  Moon,
  Heart,
  Github,
  Twitter,
  Linkedin,
  Menu,
} from "lucide-react";
import ReactMarkdown from "react-markdown"; // ✅ NEW IMPORT

// Dark Mode Toggle Component
export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDark}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
};

// Header Component
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                AI Interview Coach
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
                Practice Smarter
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors sm:hidden">
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              AI Interview Coach
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Empowering job seekers with AI-powered interview practice and
              personalized feedback. Practice smarter, interview better.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">
              Features
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• AI-Powered Feedback</li>
              <li>• Interview Question Practice</li>
              <li>• Session History</li>
              <li>• Dark Mode Support</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for job
              seekers everywhere
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 sm:mt-0">
              © 2025 AI Interview Coach. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Input Box Component
export const InputBox = ({ onSubmit, isLoading, placeholder }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSubmit(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const exampleQuestions = [
    "Tell me about yourself",
    "Why should we hire you?",
    "What are your strengths and weaknesses?",
    "Where do you see yourself in 5 years?",
    "Why do you want to work here?",
  ];

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              placeholder || "Ask the AI Coach any interview question..."
            }
            className="w-full p-4 pr-14 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[120px] shadow-sm hover:shadow-md"
            disabled={isLoading}
            rows={4}
          />
          <button
            type="submit"
            disabled={!message.trim() || isLoading}
            className="absolute bottom-4 right-4 p-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg hover:from-blue-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-md hover:shadow-lg"
            aria-label="Send message"
          >
            {isLoading ? (
              <Loader className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>

      <div className="mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Need inspiration? Try these questions:
        </p>
        <div className="flex flex-wrap gap-2">
          {exampleQuestions.slice(0, 3).map((question, index) => (
            <button
              key={index}
              onClick={() => setMessage(question)}
              className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              "{question}"
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Message Card Component with Markdown
export const MessageCard = ({
  message,
  isUser,
  timestamp,
  animateIn = false,
}) => {
  const [isVisible, setIsVisible] = useState(!animateIn);
  const [isTyping, setIsTyping] = useState(!isUser && animateIn);
  const [displayedText, setDisplayedText] = useState(isUser ? message : "");

  useEffect(() => {
    if (animateIn) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [animateIn]);

  useEffect(() => {
    if (!isUser && isTyping && message) {
      let currentIndex = 0;
      const typingSpeed = 30;

      const typeText = () => {
        if (currentIndex <= message.length) {
          setDisplayedText(message.slice(0, currentIndex));
          currentIndex++;
          setTimeout(typeText, typingSpeed);
        } else {
          setIsTyping(false);
        }
      };

      const startTyping = setTimeout(typeText, 500);
      return () => clearTimeout(startTyping);
    }
  }, [message, isUser, isTyping]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`transform transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
        <div
          className={`max-w-3xl w-full ${
            isUser
              ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white"
              : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
          } rounded-2xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-200`}
        >
          <div className="flex items-start space-x-3">
            <div
              className={`flex-shrink-0 p-2 rounded-lg ${
                isUser
                  ? "bg-white/20"
                  : "bg-gradient-to-r from-blue-500 to-emerald-500"
              }`}
            >
              {isUser ? (
                <User className="w-5 h-5" />
              ) : (
                <Brain className="w-5 h-5 text-white" />
              )}
            </div>

            <div className="flex-grow min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span
                  className={`text-sm font-medium ${
                    isUser ? "text-white/90" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {isUser ? "You" : "AI Coach"}
                </span>
                {timestamp && (
                  <div
                    className={`flex items-center space-x-1 ${
                      isUser
                        ? "text-white/70"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">{formatTime(timestamp)}</span>
                  </div>
                )}
              </div>

              <div
                className={`text-sm leading-relaxed ${
                  isUser
                    ? "text-white"
                    : "text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none"
                }`}
              >
                {isUser ? (
                  message
                ) : isTyping ? (
                  <>
                    {displayedText}
                    <span className="inline-block w-2 h-4 ml-1 bg-blue-500 animate-pulse rounded-sm" />
                  </>
                ) : (
                  <ReactMarkdown>{message}</ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
