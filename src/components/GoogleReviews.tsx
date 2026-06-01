"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { REVIEWS } from "@/constants/data";

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // Default desktop count
  const sliderRef = useRef<HTMLDivElement>(null);

  // Colors for avatar backgrounds matching Google's style
  const avatarColors = [
    "bg-blue-600",
    "bg-red-500",
    "bg-green-600",
    "bg-yellow-500",
    "bg-purple-600",
    "bg-pink-600",
    "bg-cyan-600",
    "bg-orange-500",
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet
      } else if (window.innerWidth < 1280) {
        setVisibleCount(3); // Small Laptop
      } else {
        setVisibleCount(4); // Large Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - visibleCount);

  const slidePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const slideNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const jumpToPage = (index: number) => {
    setCurrentIndex(Math.min(maxIndex, index * visibleCount));
  };

  const totalPages = Math.ceil(REVIEWS.length / visibleCount);

  // Each card is 290px, gap is 20px. So shift is 310px.
  const translateAmount = currentIndex * 310;

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-24 overflow-hidden border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Summary */}
        <div className="text-center mb-12 flex flex-col items-center">
          {/* Google Logo & Title */}
          <div className="display-flex items-center gap-2 mb-4 flex">
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-xl font-bold text-gray-900 tracking-tight pl-1.5">
              Google Reviews
            </span>
          </div>

          {/* Rating aggregate details */}
          <div className="flex items-center gap-3">
            <span className="text-5xl font-extrabold text-gray-900 leading-none">4.9</span>
            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-xs text-gray-500 font-medium">Based on 180+ reviews</p>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="bg-white rounded-2xl border border-gray-200/80 p-7 md:py-8 md:px-0 relative max-w-[1240px] mx-auto"
          style={{
            boxShadow: "0 1px 6px rgba(60,64,67,0.08), 0 4px 20px rgba(60,64,67,0.04)",
          }}
        >
          {/* Navigation Prev Button */}
          <button
            onClick={slidePrev}
            disabled={currentIndex === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center transition-all duration-200 focus:outline-none ${
              currentIndex === 0
                ? "opacity-35 cursor-default"
                : "opacity-100 hover:shadow-md hover:border-gray-300 text-gray-700 cursor-pointer"
            }`}
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Slider viewport */}
          <div className="overflow-hidden mx-14">
            <div
              ref={sliderRef}
              className="flex gap-5 transition-transform duration-[450ms] cubic-bezier(0.4, 0, 0.2, 1) will-change-transform"
              style={{
                transform: `translateX(-${translateAmount}px)`,
              }}
            >
              {REVIEWS.map((rev, index) => {
                const colorClass = avatarColors[index % avatarColors.length];
                return (
                  <div
                    key={rev.id}
                    className="bg-white border border-gray-150 rounded-xl p-5 w-[290px] min-w-[290px] flex-shrink-0 flex flex-col gap-3 shadow-[0_1px_3px_rgba(60,64,67,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-shadow duration-200"
                  >
                    {/* User profile row */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center text-white font-bold text-sm tracking-wide shrink-0`}>
                          {rev.initials}
                        </div>
                        <div>
                          <p className="font-bold text-xs text-gray-900 leading-tight">
                            {rev.author}
                          </p>
                          <p className="text-[10px] text-gray-500 mt-0.5 leading-none">
                            {rev.reviewsCount ? `${rev.reviewsCount} review${rev.reviewsCount > 1 ? 's' : ''}` : "1 review"}
                          </p>
                        </div>
                      </div>

                      {/* Google G icon */}
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </div>

                    {/* Stars and timestamp */}
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-500 font-medium">
                        {rev.date}
                      </span>
                    </div>

                    {/* Review text content */}
                    <p className="text-gray-700 text-[13px] leading-relaxed line-clamp-5 italic">
                      &quot;{rev.content}&quot;
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Next Button */}
          <button
            onClick={slideNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center transition-all duration-200 focus:outline-none ${
              currentIndex >= maxIndex
                ? "opacity-35 cursor-default"
                : "opacity-100 hover:shadow-md hover:border-gray-300 text-gray-700 cursor-pointer"
            }`}
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Indicator dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {[...Array(totalPages)].map((_, i) => {
              const isActive = Math.floor(currentIndex / visibleCount) === i;
              return (
                <button
                  key={i}
                  onClick={() => jumpToPage(i)}
                  className={`height-2 rounded-full transition-all duration-300 focus:outline-none ${
                    isActive ? "w-5 h-2 bg-primary" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* See All CTA */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=RYTINWEB+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm transition-all duration-150 shadow-sm"
          >
            {/* Small G icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
