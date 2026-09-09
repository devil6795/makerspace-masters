import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Article {
  title: string;
  desc: string;
  image: string;
  url: string;
}

const ARTICLES: Article[] = [
  {
    title: 'Beyond Atal Tinkering Labs',
    desc: 'Why Indian Schools Need Premium Makerspaces to prepare students for the next generation of creative leadership.',
    image: 'https://makerspacemasters.com/images/blog/blog-1.png',
    url: 'https://makerspacemasters.com/blogs/beyond-atal-tinkering',
  },
  {
    title: 'The Third Digital Revolution',
    desc: 'How Digital Fabrication is Transforming Education, moving beyond passive screen time into hands-on innovation.',
    image: 'https://makerspacemasters.com/images/blog/blog-2.png',
    url: 'https://makerspacemasters.com/blogs/third-digital-revolution',
  },
  {
    title: 'The Startup School Revolution',
    desc: 'How Student Companies Are Disrupting Traditional rote learning models through real entrepreneurial ventures.',
    image: 'https://makerspacemasters.com/images/blog/blog-3.png',
    url: 'https://makerspacemasters.com/blogs/startup-school-revolution',
  },
  {
    title: 'The Innovation Advantage',
    desc: "How Early Makerspace Exposure Creates Tomorrow's engineering geniuses, designers, and problem solvers.",
    image: 'https://makerspacemasters.com/images/blog/blog-4.png',
    url: 'https://makerspacemasters.com/blogs/the-innovation-advantage',
  },
];

export const NewsInsights: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] text-[#131313] mb-3 tracking-tight">
            News &amp; Insights
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            Perspectives on education, design, and innovation
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="group bg-[#F5F5F5] rounded-3xl p-4 overflow-hidden flex flex-col justify-between border border-black/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="h-56 w-full rounded-2xl overflow-hidden mb-4 bg-gray-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <h5 className="font-bold text-base md:text-lg text-[#131313] font-['Montserrat'] mb-2 leading-snug">
                  {article.title}
                </h5>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {article.desc}
                </p>
              </div>

              {/* Arrow button */}
              <div className="pt-4 flex justify-end">
                <div className="w-11 h-11 rounded-full bg-[#131313] text-white flex items-center justify-center group-hover:bg-[#022640] transition-colors">
                  <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

