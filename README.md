# Adani Cyber - Threat Intelligence Landing Page

This is a Next.js website for Adani Cyber's Threat Intelligence Operationalisation Services, designed following Adani's design language.

## Project Overview

This landing page showcases Adani's Threat Intelligence services offered to partners and suppliers through the Adani Collaborate Portal. The design follows Adani's brand colors and design principles.

## Features

- Responsive design that works on all device sizes
- Modern UI with Adani's brand colors (blue, purple, maroon)
- Interactive components built with React
- Styled using Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
adani-website/
├── app/                  # Next.js app directory
│   ├── layout.js         # Root layout component
│   └── page.js           # Main page component
├── components/           # React components
│   ├── Navbar.js         # Navigation bar component
│   ├── Hero.js           # Hero section component
│   ├── Services.js       # Services section component
│   ├── Benefits.js       # Benefits section component
│   ├── Portal.js         # Portal section component
│   ├── Contact.js        # Contact section component
│   └── Footer.js         # Footer component
├── public/               # Static assets
├── styles/               # Global styles
│   └── globals.css       # Global CSS with Tailwind imports
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Project dependencies and scripts
```

## Design Language

The website follows Adani's design language with:

- **Color Palette**:
  - Adani Blue (#0B74B0)
  - Adani Purple (#75479C)
  - Adani Maroon (#BD3861)

- **Typography**:
  - Clean, modern sans-serif fonts (Inter)
  - Clear hierarchy with well-defined heading styles

- **UI Elements**:
  - Clean, minimal design
  - Card-based layout for services and benefits
  - Consistent spacing and alignment
  - Subtle animations and transitions

## Deployment

To build the website for production:

```bash
npm run build
# or
yarn build
```

Then, you can start the production server:

```bash
npm run start
# or
yarn start
```

## License

This project is private and confidential.
