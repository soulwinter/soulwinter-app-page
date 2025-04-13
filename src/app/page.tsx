"use client"; 

import Image from "next/image";
import { useState, useRef, MouseEvent } from "react"; 
import ProjectShowcase from '@/components/ProjectShowcase'; 

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true); 
  };

  const handleMouseLeave = () => {
    setIsHovering(false); 
  };

  const imageSrc = "/images/title.png"; 
  const imageWidth = 700; 
  const imageHeight = 120; 

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-[#FFF3F3] bg-[radial-gradient(circle_at_3px_3px,_rgba(0,0,0,0.1)_3px,_transparent_0)] bg-[size:100px_100px]">
      <div
        ref={containerRef} 
        className="relative inline-block group" 
        onMouseMove={handleMouseMove} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      >
        <Image
          src={imageSrc}
          alt="Title Image"
          width={imageWidth}
          height={imageHeight}
          priority
          className="block align-top" 
          draggable="false" 
        />

        {isHovering && ( 
          <div
            className="absolute inset-0 pointer-events-none" 
            style={{
              background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.4), transparent 80%)`,
              WebkitMaskImage: `url(${imageSrc})`,
              maskImage: `url(${imageSrc})`,
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
            }}
          />
        )}
      </div>

      {/* --- 社交媒体链接按钮 --- */}
      <div className="flex gap-4 mt-8"> 
        
        <a
          href="https://unsplash.com/@soulwinter" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200" 
          aria-label="Unsplash Profile" 
        >
          <Image
            src="/Logo_of_Unsplash.svg" 
            alt="Unsplash" 
            width={24} 
            height={24} 
          />
        </a>

        
        <a
          href="https://x.com/soulwinter" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
          aria-label="X Profile"
        >
          <Image
            src="/X-logo.svg"
            alt="X" 
            width={24}
            height={24}
          />
        </a>

        <a
          href="https://www.instagram.com/onlyhcb/" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
          aria-label="Instagram Profile"
        >
          <Image
            src="/instagram-logo.svg"
            alt="Instagram" 
            width={25}
            height={25}
          />
        </a>

        <a
          href="https://www.xiaohongshu.com/user/profile/607bbd3c0000000001005a62" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
          aria-label="Rednote Profile"
        >
          <Image
            src="/rednote-logo.svg"
            alt="Rednote" 
            width={24}
            height={24}
          />
        </a>

        <a
          href="https://github.com/soulwinter" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
          aria-label="GitHub Profile"
        >
          <Image
            src="/github-logo.svg"
            alt="GitHub" 
            width={24}
            height={24}
          />
        </a>

        <a
          href="mailto:han_chubo@outlook.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
          aria-label="Email"
        >
          <Image
            src="/mail-logo.svg"
            alt="Email" 
            width={24}
            height={24}
          />
        </a>
      </div>

      <ProjectShowcase
        imageSrc="/images/gene_lab_ui.PNG"
        imageAlt="Genetics Lab UI Screenshot"
        imageWidth={700}
        imageHeight={420}
        logoSrc="/images/gene_lab_logo.PNG"
        logoAlt="Genetics Lab Logo"
        logoWidth={100}
        logoHeight={100}
        title="Genetics Lab"
        description={[
          "2022 Swift Student Challenge Winner",
          "Presented to Tim Cook"
        ]}
        imagePosition="left" 
      />

      <ProjectShowcase
        imageSrc="/images/diabeat_ui.PNG"
        imageAlt="Diabeat UI Screenshot"
        imageWidth={700}
        imageHeight={1166}
        logoSrc="/images/gene_lab_logo.PNG"
        logoAlt="Diabeat Logo"
        logoWidth={100}
        logoHeight={100}
        title="Diabeat"
        description={[
          "2025 Swift Student Challenge Winner"
        ]}
        imagePosition="right" 
      />

      <ProjectShowcase
        imageSrc="/images/keygulate_ui.PNG"
        imageAlt="Keygulate UI Screenshot"
        imageWidth={700}
        imageHeight={1166}
        logoSrc="/images/keygulate_logo.PNG"
        logoAlt="Keygulate Logo"
        logoWidth={100}
        logoHeight={100}
        title="Keygulate"
        description={[
          "macOS native API Key Manager",
          "Automatic API Provider Detection"
        ]}
        imagePosition="left" 
      />

      {/* 其他内容可以添加在这里 */}
    </main>
  );
}
