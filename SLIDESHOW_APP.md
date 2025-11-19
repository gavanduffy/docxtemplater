# Document Template Processor Web Application

This repository now includes a Next.js web application for processing DOCX and PPTX templates with JSON data using docxtemplater.

## Location

The application is located in the `slideshow-app/` directory.

## Quick Start

```bash
cd slideshow-app
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## What is it?

A modern web application that allows users to:
- Upload DOCX or PPTX template files with placeholders
- Provide JSON data to fill the templates
- Generate and download processed documents
- Process both Word and PowerPoint templates

## Features

- 📄 File upload for .docx and .pptx files
- 📊 JSON input for template data
- 🔄 Template processing using docxtemplater
- 📥 Automatic file download
- 🎨 Modern UI with ShadCN components
- 📱 Responsive design
- 🌓 Dark mode support
- ✅ Error handling and validation

## Documentation

See [slideshow-app/README.md](slideshow-app/README.md) for detailed documentation.

## Technology

- Next.js 16
- TypeScript
- Tailwind CSS v4
- React
- ShadCN UI
- Docxtemplater
- PizZip
- file-saver

## Integration with docxtemplater

This application provides a user-friendly web interface for the docxtemplater library, making it easy to:
- Test templates without writing code
- Generate documents on-the-fly
- Demonstrate docxtemplater capabilities
- Quickly prototype template-based document generation
