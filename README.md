# MakerSpace Masters Clone & Modernized Edition

A modern, high-performance, responsive clone of [makerspacemasters.com](https://makerspacemasters.com/), rebuilt from scratch with clean web architecture, zero script bloat, fixed responsive bugs, and enhanced animations.

## Key Improvements & Fixes Over the Original

1. **Clean Modern Tech Stack**: Replaced 2 redundant versions of jQuery (1.9.1 & 3.7.1), Bootstrap bundle, Waypoints, Lenis, and AOS (~3MB of conflicting legacy CDNs) with React 19, Vite, and Tailwind CSS v4.
2. **Fixed Broken CSS & Class Names**: Repaired dozens of broken layout classes and typos from the original site (e.g., `conta iner`, `mt -5 pt -5`, `shado w`, `img-f luid`, `p- 0`, missing `px` units like `height: 460 !important`).
3. **Synchronized Video Carousel**: Smooth 5-slide HTML5 video player (Mechatronics, Robotics, Woodworking, Pottery, 3D Printing) with synced animated timer bars and fallback poster support.
4. **Interactive Floating Card Stack**: Click-to-expand card stack synchronized directly with the video carousel.
5. **Robust Mega Menu**: Accessible, flicker-free desktop mega menu with smooth hover transitions, and full-screen mobile slide drawer.
6. **18 Innovation Modules with Detail Popups**: Dynamic vertical selector with scroll navigation, plus-icon modal inspection detailing Tools & Equipment and Learning Outcomes for all disciplines.
7. **Interactive 3-Step Demo Booking Modal**: Complete multi-step consultation stepper (Personal Info, Organization Info, Solution Info) with client-side validation, error highlights, and instant submission feedback toast.
8. **Ultra-Smooth Infinite Marquee**: Hardware-accelerated CSS marquee with 40+ partner and client institution logos.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/devil6795/makerspace-masters.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
