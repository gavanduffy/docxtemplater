# Markdown Slideshow Generator

A Next.js application with ShadCN UI that allows users to input markdown text and automatically generate beautiful slideshow presentations with text and images.

## Features

- 📝 **Markdown Input**: Write your slides in simple markdown format
- 🖼️ **Image Support**: Embed images using standard markdown image syntax
- 🎨 **Beautiful UI**: Modern, responsive design using ShadCN UI components
- 🔄 **Multiple Slides**: Create full slideshows with multiple slides separated by `---`
- 🎯 **Live Preview**: See your slides in real-time as you create them
- 🧭 **Easy Navigation**: Navigate between slides with Previous/Next buttons
- 📱 **Overview Panel**: Quick access to all slides with thumbnail overview
- 🌓 **Dark Mode**: Automatic dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the slideshow-app directory:
```bash
cd slideshow-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## How to Use

### Markdown Syntax

1. **Create a Slide Title**: Use a heading with `#`
   ```markdown
   # My Slide Title
   ```

2. **Add Content**: Write regular text after the title
   ```markdown
   # My Slide Title
   This is the content of my slide.
   It can have multiple lines.
   ```

3. **Add Images**: Use standard markdown image syntax
   ```markdown
   ![Image Description](https://example.com/image.jpg)
   ```

4. **Separate Slides**: Use `---` on its own line
   ```markdown
   # Slide 1
   Content for slide 1

   ---

   # Slide 2
   Content for slide 2
   ```

### Example Input

```markdown
# Welcome to Our Presentation
This is the first slide with an introduction to our topic.

![Team Photo](https://example.com/team.jpg)

---

# Key Features
- Easy to use
- Beautiful design
- Supports images
- Multiple slides

![Features Diagram](https://example.com/features.jpg)

---

# Thank You
Questions? Feel free to reach out!

![Contact](https://example.com/contact.jpg)
```

## Technology Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Modern utility-first CSS
- **ShadCN UI**: High-quality component library
- **React**: UI library

## Project Structure

```
slideshow-app/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main application page
├── components/
│   ├── ui/                  # ShadCN UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── textarea.tsx
│   └── slide-preview.tsx    # Slide preview component
├── lib/
│   ├── markdown-parser.ts   # Markdown parsing logic
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## Features in Detail

### Markdown Parser

The application includes a custom markdown parser (`lib/markdown-parser.ts`) that:
- Splits content by slide separators (`---`)
- Extracts titles from `#` headings
- Finds and extracts image URLs from `![alt](url)` syntax
- Cleans up and formats slide content

### Slide Preview

Each slide displays:
- Title (from markdown heading)
- Content (regular text)
- Image (if provided)
- Fallback UI for missing or broken images

### Navigation

- **Previous/Next Buttons**: Navigate sequentially through slides
- **Slide Overview**: Click any slide thumbnail to jump directly to it
- **Current Position**: Always visible counter showing "Slide X of Y"

## Customization

### Styling

Modify `app/globals.css` to customize the theme colors and design system variables.

### Components

All UI components are in `components/ui/` and can be customized to match your brand.

### Parser Logic

Extend `lib/markdown-parser.ts` to support additional markdown features like:
- Bold/italic text
- Lists
- Code blocks
- Links

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
