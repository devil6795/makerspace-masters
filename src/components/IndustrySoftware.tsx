import React from 'react';

interface SoftwareItem {
  name: string;
  image: string;
}

interface SoftwareCategory {
  title: string;
  colSpan: string;
  items: SoftwareItem[];
}

const CATEGORIES: SoftwareCategory[] = [
  {
    title: 'Maker Tools',
    colSpan: 'lg:col-span-5',
    items: [
      { name: 'Tinkercad', image: 'https://makerspacemasters.com/images/makerspace/software/maker-tools/image-1.png' },
      { name: 'Arduino', image: 'https://makerspacemasters.com/images/makerspace/software/maker-tools/image-2.png' },
      { name: 'Microbit', image: 'https://makerspacemasters.com/images/makerspace/software/maker-tools/micro.png' },
      { name: 'Cuba', image: 'https://makerspacemasters.com/images/makerspace/software/maker-tools/cuba.png' },
      { name: 'Hatch XR', image: 'https://makerspacemasters.com/images/makerspace/software/maker-tools/wing.png' },
    ],
  },
  {
    title: 'Multimedia',
    colSpan: 'lg:col-span-2',
    items: [
      { name: 'Unity', image: 'https://makerspacemasters.com/images/makerspace/software/multimedia/image-1.png' },
      { name: 'Audacity', image: 'https://makerspacemasters.com/images/makerspace/software/multimedia/image-2.png' },
    ],
  },
  {
    title: 'Design',
    colSpan: 'lg:col-span-5',
    items: [
      { name: 'Blender', image: 'https://makerspacemasters.com/images/makerspace/software/design/blender.png' },
      { name: 'Tinkercad', image: 'https://makerspacemasters.com/images/makerspace/software/maker-tools/image-1.png' },
      { name: 'Photoshop', image: 'https://makerspacemasters.com/images/makerspace/software/design/image-2.png' },
      { name: 'Illustrator', image: 'https://makerspacemasters.com/images/makerspace/software/design/image-3.png' },
      { name: 'Maya', image: 'https://makerspacemasters.com/images/makerspace/software/design/maya.png' },
    ],
  },
  {
    title: 'Code',
    colSpan: 'lg:col-span-6',
    items: [
      { name: 'Python', image: 'https://makerspacemasters.com/images/makerspace/software/code/python.png' },
      { name: 'P5.js', image: 'https://makerspacemasters.com/images/makerspace/software/code/p5.png' },
      { name: 'HTML5', image: 'https://makerspacemasters.com/images/makerspace/software/code/html.png' },
      { name: 'CSS', image: 'https://makerspacemasters.com/images/makerspace/software/code/css.png' },
      { name: 'PHP', image: 'https://makerspacemasters.com/images/makerspace/software/code/php.png' },
      { name: 'React', image: 'https://makerspacemasters.com/images/makerspace/software/code/react.png' },
    ],
  },
  {
    title: 'Development',
    colSpan: 'lg:col-span-3',
    items: [
      { name: 'MIT App Inventor', image: 'https://makerspacemasters.com/images/makerspace/software/dev/inventor.png' },
      { name: 'Unity', image: 'https://makerspacemasters.com/images/makerspace/software/dev/unity.png' },
      { name: 'GDevelop', image: 'https://makerspacemasters.com/images/makerspace/software/dev/develop.png' },
    ],
  },
  {
    title: 'AI/ML',
    colSpan: 'lg:col-span-3',
    items: [
      { name: 'TensorFlow', image: 'https://makerspacemasters.com/images/makerspace/software/ml/image-1.png' },
      { name: 'PyTorch', image: 'https://makerspacemasters.com/images/makerspace/software/ml/image-2.png' },
      { name: 'ML Tools', image: 'https://makerspacemasters.com/images/makerspace/software/ml/image-3.png' },
    ],
  },
];

export const IndustrySoftware: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] text-[#131313] mb-3 tracking-tight">
            Industry Grade Software
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            Future-ready Software Skills
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className={`${category.colSpan} bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between`}
            >
              <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313] mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap items-center gap-6">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#F5F5F5] p-2.5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md border border-black/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-600 group-hover:text-[#022640] transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

