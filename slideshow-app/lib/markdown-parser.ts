export interface Slide {
  title: string;
  content: string;
  imageUrl: string;
}

/**
 * Parses markdown text and extracts slides separated by ---
 * Each slide can have a title (# heading), content, and an image URL
 */
export function parseMarkdownToSlides(markdown: string): Slide[] {
  if (!markdown.trim()) {
    return [];
  }

  // Split by slide separator (---)
  const slideTexts = markdown.split(/\n---\n|\r\n---\r\n/).filter(text => text.trim());

  return slideTexts.map(slideText => {
    const slide: Slide = {
      title: "",
      content: "",
      imageUrl: ""
    };

    // Extract title (first # heading)
    const titleMatch = slideText.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      slide.title = titleMatch[1].trim();
    }

    // Extract image URL (first image)
    const imageMatch = slideText.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    if (imageMatch) {
      slide.imageUrl = imageMatch[2].trim();
    }

    // Extract content (everything that's not title or image markdown)
    let content = slideText;
    
    // Remove title line
    if (titleMatch) {
      content = content.replace(/^#\s+.+$/m, '');
    }
    
    // Remove image markdown
    if (imageMatch) {
      content = content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '');
    }

    // Clean up content
    slide.content = content
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('\n')
      .trim();

    return slide;
  });
}

/**
 * Converts slides array back to markdown format
 */
export function slidesToMarkdown(slides: Slide[]): string {
  return slides
    .map(slide => {
      let markdown = "";
      
      if (slide.title) {
        markdown += `# ${slide.title}\n\n`;
      }
      
      if (slide.content) {
        markdown += `${slide.content}\n\n`;
      }
      
      if (slide.imageUrl) {
        markdown += `![Slide Image](${slide.imageUrl})\n`;
      }
      
      return markdown.trim();
    })
    .join('\n\n---\n\n');
}
