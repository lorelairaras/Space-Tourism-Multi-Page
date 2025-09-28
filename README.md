# Space Tourism Website

A multi-page space tourism website featuring destinations, crew members, and technology used for space travel.

## Project Structure

Space-Tourism-Multi-Page/
├── index.html # Home page
├── destination-moon.html # Moon destination page
├── destination-mars.html # Mars destination page
├── destination-europa.html # Europa destination page
├── destination-titan.html # Titan destination page
├── crew-commander.html # Commander Douglas Hurley
├── crew-pilot.html # Pilot Victor Glover
├── crew-specialist.html # Mission Specialist Mark Shuttleworth
├── crew-engineer.html # Flight Engineer Anousheh Ansari
├── technology-vehicle.html # Launch vehicle technology
├── technology-spaceport.html # Spaceport technology
├── technology-capsule.html # Space capsule technology
├── public/
│ ├── assets/
│ ├── crew/
│ ├── destination/
│ ├── technology/
│ └── shared/
└── tailwind.config.js

## Features

### Home Page (`index.html`)

- Hero section with space exploration theme
- Interactive "EXPLORE" button with hover effects
- Responsive navigation menu
- Background images for different screen sizes

### Destination Pages

- **Moon, Mars, Europa, Titan** destination information
- Tab-based navigation between destinations
- Distance and travel time details
- High-quality planet images
- Responsive grid layout

### Crew Pages

- Four crew member profiles with bios
- Dot-based navigation between crew members
- Large portrait images optimized for display
- Role and name highlighting
- No-scroll, single-screen design

### Technology Pages

- Three technology categories: Launch Vehicle, Spaceport, Space Capsule
- Numbered circle navigation
- Technology descriptions and specifications
- Portrait-oriented technology images
- Unique left-aligned layout

## Design System

### Colors

- `space-blue`: #0B0D17 (background)
- `space-lavender`: #D0D6F9 (accent text)
- `space-white`: #FFFFFF (primary text)

### Typography

- **Bellefair**: Serif font for headings
- **Barlow Condensed**: Sans-serif for navigation and labels
- **Barlow**: Regular sans-serif for body text

### Responsive Design

- Mobile-first approach
- Tablet and desktop breakpoints
- Adaptive background images
- Flexible grid layouts

## Technologies Used

- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Bellefair, Barlow, and Barlow Condensed
- **Responsive Images**: Optimized for different screen sizes

## Navigation

The website features consistent navigation across all pages:

- **00 HOME**: Returns to home page
- **01 DESTINATION**: Links to destination pages (Moon as default)
- **02 CREW**: Links to crew pages (Commander as default)
- **03 TECHNOLOGY**: Links to technology pages (Launch Vehicle as default)

## File Organization

All assets are organized in the `public/` directory:

- `crew/`: Crew member images and backgrounds
- `destination/`: Planet images and destination backgrounds
- `technology/`: Technology images and backgrounds
- `shared/`: Logo and navigation icons
