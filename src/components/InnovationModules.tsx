import React, { useState, useRef } from 'react';
import { ChevronUp, ChevronDown, Plus } from 'lucide-react';
import { ModuleModal, type ModuleDetailData } from './ModuleModal';

interface SubModule {
  title: string;
  image: string;
  points: string[];
  tools: string[];
  outcomes: string[];
}

interface InnovationDomain {
  id: string;
  name: string;
  items: SubModule[];
}

const MODULE_DOMAINS: InnovationDomain[] = [
  {
    id: 'clay-art',
    name: 'Clay Art',
    items: [
      {
        title: 'Modeling',
        image: 'https://makerspacemasters.com/images/index/modules/clay/modeling.png',
        points: ['Hand Sculpting', 'Clay Wedging', 'Form Shaping'],
        tools: ['Sculpting Knives', 'Rolling Pins', 'Texture Stamps', 'Wire Cutters', 'Modeling Boards'],
        outcomes: ['Fine motor skill precision', 'Enhanced spatial thinking abilities', 'Creative problem solving skills'],
      },
      {
        title: 'Pottery',
        image: 'https://makerspacemasters.com/images/index/modules/clay/pottery.png',
        points: ['Wheel Throwing', 'Clay Trimming', 'Glaze Techniques'],
        tools: ["Potter's Wheel", 'Clay Ribs', 'Wire Tools', 'Sponges', 'Trimming Tools'],
        outcomes: ['Traditional crafting mastery', 'Patience and focus training', 'Functional art piece creation'],
      },
      {
        title: 'Sculpting',
        image: 'https://makerspacemasters.com/images/index/modules/clay/sculpting.png',
        points: ['3D Form Making', 'Tool Handling', 'Surface Texturing'],
        tools: ['Clay Wedges', 'Detail Brushes', 'Carving Knives', 'Smoothing Ribs'],
        outcomes: ['Three-dimensional thinking', 'Creative visualization ability', 'Significant manual dexterity'],
      },
      {
        title: 'Surface Decoration',
        image: 'https://makerspacemasters.com/images/index/modules/clay/surface.png',
        points: ['Pattern Design', 'Brush Techniques', 'Color Layering'],
        tools: ['Painting Brushes', 'Glazing Tools', 'Texture Rollers', 'Color Palettes'],
        outcomes: ['Color theory exploration', 'Pattern recognition skill', 'Artistic design thinking'],
      },
      {
        title: 'Glazing & Firing',
        image: 'https://makerspacemasters.com/images/index/modules/clay/glazing.png',
        points: ['Glaze Application', 'Kiln Operation', 'Temperature Control'],
        tools: ['Glaze Brushes', 'Kiln Tools', 'Safety Equipment', 'Temperature Gauges'],
        outcomes: ['Chemical transformation process', 'Safety protocol adherence', 'Precise timing mastery'],
      },
    ],
  },
  {
    id: 'building-blocks',
    name: 'Building Blocks',
    items: [
      {
        title: 'LEGO Engineering',
        image: 'https://makerspacemasters.com/images/index/modules/building/lego.png',
        points: ['Structural Build', 'Gear Mechanisms', 'System Planning'],
        tools: ['LEGO Kits', 'Technic Pieces', 'Motor Sets', 'Sensor Kits'],
        outcomes: ['Engineering design thinking', 'Systematic problem solving', 'Mechanical foundation'],
      },
      {
        title: 'Structural Design',
        image: 'https://makerspacemasters.com/images/index/modules/building/structural.png',
        points: ['Structural Build', 'Gear Mechanisms', 'System Planning'],
        tools: ['Block Sets', 'Measuring Tools', 'Blueprint Paper', 'Balance Scales'],
        outcomes: ['Architectural design principles', 'Structural stability concepts', 'Mathematical measurement'],
      },
      {
        title: 'Architecture Modeling',
        image: 'https://makerspacemasters.com/images/index/modules/building/modeling.png',
        points: ['Scale Modeling', 'Space Planning', 'Material Selection'],
        tools: ['Model Blocks', 'Scale Rulers', 'Drawing Paper', 'Planning Boards'],
        outcomes: ['Spatial planning ability', 'Scale understanding', 'Miniature replica creation'],
      },
      {
        title: 'Mechanical Joints',
        image: 'https://makerspacemasters.com/images/index/modules/building/mechanical.png',
        points: ['Linkage Systems', 'Motion Transfer', 'Assembly Methods'],
        tools: ['Connector Pieces', 'Gear Sets', 'Axle Rods', 'Assembly Tools'],
        outcomes: ['Mechanical engineering basics', 'Cause-effect reasoning', 'Functional mechanisms'],
      },
      {
        title: 'Kinetic Structures',
        image: 'https://makerspacemasters.com/images/index/modules/building/kinetic.png',
        points: ['Movement Control', 'Power Transmission', 'Dynamic Balance'],
        tools: ['Movement Pieces', 'Motor Components', 'Track Systems', 'Power Sources'],
        outcomes: ['Motion physics understanding', 'Engineering design skills', 'Interactive system creation'],
      },
    ],
  },
  {
    id: 'stop-motion',
    name: 'Stop Motion Animation',
    items: [
      {
        title: 'Claymation',
        image: 'https://makerspacemasters.com/images/index/modules/motion/claymation.png',
        points: ['Frame Sequencing', 'Character Rigging', 'Scene Lighting'],
        tools: ['Modeling Clay', 'Stop Motion Camera', 'Armatures', 'LED Studio Light'],
        outcomes: ['Storytelling and narrative', 'Frame pacing sensitivity', 'Patience & precision'],
      },
      {
        title: 'Paper Cut Animation',
        image: 'https://makerspacemasters.com/images/index/modules/motion/papercut.png',
        points: ['Layer Animation', 'Cutting Precision', 'Frame Timing'],
        tools: ['Craft Paper', 'Cutting Tools', 'Light Tables', 'Animation Software'],
        outcomes: ['Frame-by-frame technique', 'Artistic cutting skills', 'Sequential thinking'],
      },
      {
        title: 'Pixelation',
        image: 'https://makerspacemasters.com/images/index/modules/motion/pixilation.png',
        points: ['Motion Capture', 'Human Movement', 'Frame Blending'],
        tools: ['Digital Cameras', 'Tripod Stands', 'Props', 'Editing Software'],
        outcomes: ['Human motion capture', 'Digital filmmaking skills', 'Collaborative video creation'],
      },
      {
        title: 'Object Animation',
        image: 'https://makerspacemasters.com/images/index/modules/motion/object.png',
        points: ['Object Rigging', 'Stop Motion', 'Scene Composition'],
        tools: ['Everyday Objects', 'Camera Rig', 'Backdrops', 'Lighting Kits'],
        outcomes: ['Bringing inanimate objects alive', 'Visual narrative timing', 'Creative problem solving'],
      },
      {
        title: 'Motion Capture',
        image: 'https://makerspacemasters.com/images/index/modules/motion/motion.png',
        points: ['Data Recording', 'Movement Analysis', 'Digital Mapping'],
        tools: ['Sensors', 'Motion Software', 'Recording Tools', 'Display Displays'],
        outcomes: ['Animation technology', 'Digital production pipeline', 'Technical problem solving'],
      },
    ],
  },
  {
    id: 'papier-mache',
    name: 'Papier Mache',
    items: [
      {
        title: 'Traditional Papier',
        image: 'https://makerspacemasters.com/images/index/modules/papier/traditional.png',
        points: ['Paper Layering', 'Paste Mixing', 'Mold Making'],
        tools: ['Newspaper', 'Flour Paste', 'Water Bowls', 'Balloons', 'Paint'],
        outcomes: ['Sustainable art practice', 'Patience and precision', '3D art form creation'],
      },
      {
        title: 'Layering & Sculpting',
        image: 'https://makerspacemasters.com/images/index/modules/papier/layering.png',
        points: ['Systematic Layering', 'Reinforcement', 'Surface Finishing'],
        tools: ['Paper Strips', 'Adhesive Paste', 'Smoothing Tools', 'Drying Racks'],
        outcomes: ['Structural thinking skills', 'Methodical work habits', 'Strong lightweight builds'],
      },
    ],
  },
  {
    id: 'origami',
    name: 'Origami',
    items: [
      {
        title: 'Geometric Folding',
        image: 'https://makerspacemasters.com/images/index/modules/building/lego.png',
        points: ['Crease Patterns', 'Tessellations', 'Modular Units'],
        tools: ['Origami Paper', 'Bone Folders', 'Crease Rulers', 'Cutting Mats'],
        outcomes: ['Geometric intuition', 'Spatial memory development', 'Precision handling'],
      },
    ],
  },
  {
    id: 'audio-video',
    name: 'Audio-Video-Radio',
    items: [
      {
        title: 'Podcast & Audio Studio',
        image: 'https://makerspacemasters.com/images/index/modules/motion/motion.png',
        points: ['Microphone Technique', 'Audio Mixing', 'Story Production'],
        tools: ['Condenser Microphones', 'Audio Interface', 'Audacity', 'Pop Filters'],
        outcomes: ['Vocal confidence', 'Audio engineering basics', 'Scriptwriting skills'],
      },
    ],
  },
  {
    id: 'ar-vr',
    name: 'AR/VR',
    items: [
      {
        title: 'Virtual Space Creation',
        image: 'https://makerspacemasters.com/images/index/modules/building/modeling.png',
        points: ['Spatial Design', 'VR Navigation', 'Interactive Assets'],
        tools: ['VR Headset', 'Unity', 'Hatch XR', 'Blender'],
        outcomes: ['3D environment creation', 'Immersive tech fluency', 'Interactive logic'],
      },
    ],
  },
  {
    id: 'print-packaging',
    name: 'Print & Packaging',
    items: [
      {
        title: 'Die-cut & Box Design',
        image: 'https://makerspacemasters.com/images/index/modules/papier/traditional.png',
        points: ['Package Layout', 'Fold Engineering', 'Material Stress'],
        tools: ['Cutting Plotters', 'Cardboard Stocks', 'Creasing Wheels', 'Vector Software'],
        outcomes: ['Commercial packaging insights', 'Net design accuracy', 'Prototyping speed'],
      },
    ],
  },
  {
    id: 'laser-fab',
    name: 'Digital Fabrication - Laser',
    items: [
      {
        title: 'Laser Cutting & Engraving',
        image: 'https://makerspacemasters.com/images/index/modules/building/mechanical.png',
        points: ['Vector Laser Cutting', 'Raster Engraving', 'Kerf Compensation'],
        tools: ['CO2 Laser Cutter', 'Acrylic & MDF Sheets', 'LightBurn', 'Exhaust System'],
        outcomes: ['Precision manufacturing', 'Safety with high-energy tools', 'Rapid assembly'],
      },
    ],
  },
  {
    id: '3d-printing',
    name: '3D Printing',
    items: [
      {
        title: 'FDM Rapid Prototyping',
        image: 'https://makerspacemasters.com/images/index/cards/3d_printing.png',
        points: ['Slicing Settings', 'Infill Strategies', 'Support Placement'],
        tools: ['FDM 3D Printers', 'PLA/PETG Filament', 'Cura/PrusaSlicer', 'Calipers'],
        outcomes: ['Design-for-additive-manufacturing', 'Tolerances and fits', 'Material optimization'],
      },
    ],
  },
  {
    id: 'resin-art',
    name: 'Resin Art',
    items: [
      {
        title: 'Epoxy Pour & Curing',
        image: 'https://makerspacemasters.com/images/index/modules/clay/surface.png',
        points: ['Ratio Mixing', 'Pigment Swirls', 'Degassing & Heat'],
        tools: ['Epoxy Resin', 'Silicone Molds', 'Heat Guns', 'Protective Respirators'],
        outcomes: ['Chemical safety protocols', 'Polymer behavior', 'Color aesthetics'],
      },
    ],
  },
  {
    id: 'wood-work',
    name: 'Wood Work',
    items: [
      {
        title: 'Joinery & Woodcraft',
        image: 'https://makerspacemasters.com/images/index/cards/woodworking.png',
        points: ['Dovetail & Mortise', 'Hand Sawing', 'Sanding & Oil Finish'],
        tools: ['Japanese Pull Saws', 'Chisels', 'Clamps', 'Orbital Sanders'],
        outcomes: ['Grain direction awareness', 'Joinery structural strength', 'Craftsmanship discipline'],
      },
    ],
  },
  {
    id: 'metal-work',
    name: 'Metal Work',
    items: [
      {
        title: 'Sheet Metal & Wire Form',
        image: 'https://makerspacemasters.com/images/index/modules/building/structural.png',
        points: ['Bending & Snips', 'Rivet Joining', 'Deburring & Polishing'],
        tools: ['Metal Shears', 'Anvil & Mallet', 'Rivet Guns', 'Files'],
        outcomes: ['Metal ductility intuition', 'Mechanical fasteners', 'Workshop safety'],
      },
    ],
  },
  {
    id: 'reverse-engineering',
    name: 'Reverse Engineering',
    items: [
      {
        title: 'Teardown & Component Study',
        image: 'https://makerspacemasters.com/images/index/cards/mechatronics.png',
        points: ['Disassembly Mapping', 'Subsystem Analysis', 'Failure Modes'],
        tools: ['Precision Screwdrivers', 'Magnifiers', 'Multimeters', 'Inspection Trays'],
        outcomes: ['Understanding modern manufacturing', 'Repair culture', 'Schematic reconstruction'],
      },
    ],
  },
  {
    id: 'aero-modelling',
    name: 'Aero Modelling',
    items: [
      {
        title: 'RC Aircraft & Gliders',
        image: 'https://makerspacemasters.com/images/index/cards/robotics.png',
        points: ['Airfoil Aerodynamics', 'Center of Gravity Tuning', 'Servo Controls'],
        tools: ['Balsa Wood', 'Depron Foam', 'Brushless Motors', 'Radio Transmitters'],
        outcomes: ['Bernoulli principle in action', 'Flight control dynamics', 'Weight distribution'],
      },
    ],
  },
  {
    id: 'mechatronics',
    name: 'Mechatronics',
    items: [
      {
        title: 'Embedded Robotics',
        image: 'https://makerspacemasters.com/images/index/cards/mechatronics.png',
        points: ['Sensor Interfacing', 'PID Motor Control', 'Autonomous Navigation'],
        tools: ['Arduino/ESP32', 'Motor Drivers', 'Ultrasonic Sensors', 'Breadboards'],
        outcomes: ['Hardware-software integration', 'Circuit debugging', 'Algorithmic control'],
      },
    ],
  },
  {
    id: 'sublimation-printing',
    name: 'Sublimation Printing',
    items: [
      {
        title: 'Heat Press Transfer',
        image: 'https://makerspacemasters.com/images/index/modules/clay/surface.png',
        points: ['Sublimation Inks', 'Heat Press Calibration', 'Apparel Printing'],
        tools: ['Flat Heat Press', 'Sublimation Printer', 'Heat Resistant Tape'],
        outcomes: ['Digital graphics preparation', 'Heat transfer chemistry', 'Merchandise creation'],
      },
    ],
  },
  {
    id: 'vinyl-art',
    name: 'Vinyl Art',
    items: [
      {
        title: 'Vinyl Plotting & Decals',
        image: 'https://makerspacemasters.com/images/index/modules/motion/papercut.png',
        points: ['Vector Path Prep', 'Weeding Vinyl', 'Transfer Tape Application'],
        tools: ['Vinyl Plotter', 'Weeding Picks', 'Self-adhesive Vinyl', 'Squeegees'],
        outcomes: ['Signage design fundamentals', 'Precise vector cutting', 'Material layering'],
      },
    ],
  },
];

export const InnovationModules: React.FC = () => {
  const [activeDomainIdx, setActiveDomainIdx] = useState(0);
  const [selectedModalData, setSelectedModalData] = useState<ModuleDetailData | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const activeDomain = MODULE_DOMAINS[activeDomainIdx];

  const scrollUp = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ top: -140, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ top: 140, behavior: 'smooth' });
    }
  };

  return (
    <section id="modules" className="py-20 md:py-28 px-4 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] text-[#131313] mb-3 tracking-tight">
            Our Innovation Modules
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            Build ideas into real-world skills
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Modules Navigation (18 Items) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-black/5 flex flex-col h-[520px]">
            <div className="flex items-center justify-between pb-4 mb-2 border-b border-gray-100">
              <h3 className="font-bold text-xl font-['Montserrat'] text-[#131313]">
                Modules :
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                {MODULE_DOMAINS.length} Disciplines
              </span>
            </div>

            {/* Scrollable list */}
            <div
              ref={listRef}
              className="flex-1 overflow-y-auto pr-2 space-y-1.5 no-scrollbar scroll-smooth"
            >
              {MODULE_DOMAINS.map((domain, idx) => {
                const isActive = idx === activeDomainIdx;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setActiveDomainIdx(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? 'bg-gradient-to-r from-[#022640] to-[#5786AB] text-white font-semibold shadow-md translate-x-1'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#131313]'
                    }`}
                  >
                    <span>{domain.name}</span>
                    <span
                      className={`text-xs ${
                        isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                      }`}
                    >
                      ▶
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Scroll Up / Down Controls */}
            <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 mt-2">
              <button
                onClick={scrollUp}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#022640] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                title="Scroll Up"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
              <button
                onClick={scrollDown}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#022640] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                title="Scroll Down"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Sub-Modules Grid & Interactive Cards */}
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="font-bold text-xl font-['Montserrat'] text-[#131313]">
                {activeDomain.name} Modules
              </h4>
              <span className="text-xs text-gray-500 font-medium">
                Click (+) to view tools & outcomes
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {activeDomain.items.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                    <img
                      src={sub.image}
                      alt={sub.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <button
                      onClick={() =>
                        setSelectedModalData({
                          title: sub.title,
                          image: sub.image,
                          tools: sub.tools,
                          outcomes: sub.outcomes,
                        })
                      }
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#022640] flex items-center justify-center shadow-md transition-all hover:scale-110"
                      title="View Tools & Outcomes"
                    >
                      <Plus className="w-5 h-5 font-bold" />
                    </button>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-base text-[#131313] font-['Montserrat'] mb-2">
                        {sub.title}
                      </h5>
                      <ul className="space-y-1 text-xs text-gray-600">
                        {sub.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5786AB]" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#5786AB]">
                        {sub.tools.length} Tools Included
                      </span>
                      <button
                        onClick={() =>
                          setSelectedModalData({
                            title: sub.title,
                            image: sub.image,
                            tools: sub.tools,
                            outcomes: sub.outcomes,
                          })
                        }
                        className="text-xs font-semibold text-[#131313] hover:text-[#022640] underline"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <ModuleModal
        data={selectedModalData}
        onClose={() => setSelectedModalData(null)}
      />
    </section>
  );
};
