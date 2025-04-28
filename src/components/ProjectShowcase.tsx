// src/components/ProjectShowcase.tsx
import Image from 'next/image';
import React from 'react'; // Ensure React is imported if using types like React.FC

// Define the props the component will accept
interface ProjectShowcaseProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  title: string;
  description: string[]; // Array of strings for description lines
  imagePosition?: 'left' | 'right'; // Optional prop to control layout, defaults to 'left'
}

// Define the reusable component
const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  imageSrc, imageAlt, imageWidth, imageHeight,
  logoSrc, logoAlt, logoWidth, logoHeight,
  title, description,
  imagePosition = 'left' // Default to image on the left
}) => {
  // Determine if the image should be on the left based on the prop
  const isImageLeft = imagePosition === 'left';

  // **计算 sizes 属性值**
  // 示例：假设 md 断点是 768px。
  // 小于 768px 时，图片宽度可能是视口宽度 (100vw)。
  // 大于等于 768px 时，图片宽度是 imageWidth。
  // !!! 注意：你可能需要根据你的具体 CSS 布局来调整 '100vw' 或断点 '767px' !!!
  const imageSizes = `(max-width: 767px) 100vw, ${imageWidth}px`;

  return (
    // Main container section with conditional layout
    <section className={`
      mt-12 flex flex-col
      ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} /* Conditionally reverse row order on medium screens */
      items-center justify-between gap-8 w-full max-w-7xl px-4 /* Alignment, gap, width, padding */
    `}>

      {/* Image Column - Takes its actual width based on imageWidth */}
      <div className="flex-none"> {/* Prevents flex shrinking/growing */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}    // Used for aspect ratio & placeholder
          height={imageHeight}   // Used for aspect ratio & placeholder
          sizes={imageSizes}     // **<-- Added sizes prop here**
          priority={true}        // Optional: Consider adding priority if it's above the fold LCP element
          className="rounded-lg" // Image styling
        />
      </div>

      {/* Content Column - Takes remaining space with centered content */}
      <div className="
        flex-grow flex flex-col items-center justify-center /* Take remaining space, center content */
        w-full md:w-auto /* Full width on mobile, auto width on desktop */
      ">
        {/* Logo - centered on small screens, left/right aligned on medium+ */}
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
          className="mb-2" // Space below logo
        />

        {/* Wrapper for Title to apply transform and shadow */}
        <div
          className={`
            transform
            ${isImageLeft ? '-rotate-[4deg]' : 'rotate-[4deg]'} /* Conditional rotation */
            -mt-[30px] z-10 relative /* Positioning */
            [filter:drop-shadow(3px_3px_1px_rgba(0,0,0,0.2))] /* Shadow on wrapper */
          `}
        >
          {/* Title (Styled) */}
          <h2
            className="text-black font-extrabold text-2xl" /* Text styling */
            style={{
              WebkitTextStroke: '5px white', // Text stroke (reduced width)
              textStroke: '5px white',
              paintOrder: 'stroke fill'
            } as React.CSSProperties & { textStroke: string; paintOrder: string }} // Use specific type assertion
          >
            {title} {/* Display the title prop */}
          </h2>
        </div>

        {/* Description Text - always centered */}
        <div className="mt-4 text-center">
          <p className="text-black font-medium">
            {/* Map over the description array to create lines with breaks */}
            {description.map((line, index) => (
              <span key={index}>
                {line}
                {/* Add a line break after each line except the last */}
                {index < description.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; // Export the component