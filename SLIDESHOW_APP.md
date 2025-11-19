# Slideshow Application

This repository now includes a Next.js web application for creating slideshows from markdown text.

## Location

The slideshow application is located in the `slideshow-app/` directory.

## Quick Start

```bash
cd slideshow-app
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## What is it?

A modern web application that allows users to:
- Input markdown text with titles, content, and images
- Generate beautiful slideshow presentations
- Navigate through multiple slides
- View all slides in an overview panel

## Features

- 📝 Markdown input with live preview
- 🖼️ Image support via URLs
- 🎨 Modern UI with ShadCN components
- 📱 Responsive design
- 🌓 Dark mode support
- 🧭 Easy navigation between slides

## Documentation

See [slideshow-app/README.md](slideshow-app/README.md) for detailed documentation.

## Technology

- Next.js 16
- TypeScript
- Tailwind CSS v4
- React
- ShadCN UI

## Integration with docxtemplater

While this application is built as a standalone Next.js app, it demonstrates how markdown content can be structured and parsed for template filling. Future enhancements could integrate with the docxtemplater library to generate actual PowerPoint or Word documents from the slideshow content.
