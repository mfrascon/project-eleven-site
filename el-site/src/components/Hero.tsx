// src/components/Hero.tsx
import React from "react";

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink = "#",
  backgroundImage,
}) => {
  return (
    <section className="w-full min-h-[90vh] bg-[#292B3A] flex items-center justify-center text-white">
      <div className="w-full max-w-[1700px] px-4">
        
        {/* Image container */}
        <div className="relative w-full h-[520px] md:h-[650px] overflow-hidden shadow-2xl">
          
          {/* Background image */}
          {backgroundImage && (
            <img
              src={backgroundImage}
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* Text content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-4xl">
                {subtitle}
              </p>
            )}

            {ctaText && (
              <a
                href={ctaLink}
                className="inline-block bg-[#3652a5] px-10 py-4 rounded-md text-white font-semibold hover:bg-[#2185e3] transition w-fit"
              >
                {ctaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
