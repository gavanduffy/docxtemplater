# Document Template Processor

A Next.js application that allows users to upload DOCX or PPTX template files and fill them with JSON data using the docxtemplater library.

## Features

- 📄 **File Upload**: Upload .docx or .pptx template files
- 📊 **JSON Input**: Provide data in JSON format to replace placeholders
- 🔄 **Template Processing**: Uses docxtemplater to fill templates with data
- 📥 **Download Output**: Automatically downloads the generated document
- 🎨 **Beautiful UI**: Modern, responsive design using ShadCN UI components
- 🌓 **Dark Mode**: Automatic dark mode support
- ✅ **Error Handling**: Clear error messages for invalid inputs

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

1. **Create a Template**: Create a .docx or .pptx file with placeholders
   - Simple placeholders: `{name}`, `{title}`, `{company}`
   - Loops: `{#items}...{/items}`
   - Conditions: Use angular expressions with a custom parser

2. **Upload Template**: Click "Choose File" and select your template

3. **Enter JSON Data**: Provide the data in JSON format
   ```json
   {
     "name": "John Doe",
     "title": "Software Engineer",
     "company": "Tech Corp",
     "items": [
       { "description": "Item 1" },
       { "description": "Item 2" }
     ]
   }
   ```

4. **Generate Document**: Click "Generate Document" to process and download

### Example Template (Word/PowerPoint)

In your document, use placeholders like:
- Hello {name}!
- Your title is {title} at {company}
- Loop example: {#items}{description}{/items}

## Technology Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Modern utility-first CSS
- **ShadCN UI**: High-quality component library
- **Docxtemplater**: Template engine for DOCX/PPTX files
- **PizZip**: ZIP file handling for Office documents
- **file-saver**: File download functionality

## Project Structure

```
slideshow-app/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main application page
├── components/
│   └── ui/                  # ShadCN UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## Features in Detail

### File Upload

- Accepts .docx and .pptx files
- Validates file types
- Shows file name and size after upload

### Template Processing

Uses docxtemplater to:
- Parse template placeholders
- Replace placeholders with JSON data
- Support loops and nested data structures
- Maintain document formatting

### JSON Input

- Accepts any valid JSON structure
- Supports nested objects and arrays
- Real-time validation
- Clear error messages for invalid JSON

### Document Generation

- Processes template with provided data
- Generates output file
- Automatically downloads result
- Preserves original file format (.docx or .pptx)

## Customization

### Styling

Modify `app/globals.css` to customize the theme colors and design system variables.

### Components

All UI components are in `components/ui/` and can be customized to match your brand.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
