"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { parseMarkdownToSlides } from "@/lib/markdown-parser";
import { SlidePreview } from "@/components/slide-preview";

export default function Home() {
  const [markdownInput, setMarkdownInput] = useState("");
  const [slides, setSlides] = useState<Array<{ title: string; content: string; imageUrl: string }>>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleGenerate = () => {
    const parsedSlides = parseMarkdownToSlides(markdownInput);
    setSlides(parsedSlides);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Markdown Slideshow Generator
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Create beautiful slideshows from markdown text with embedded images
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle>Markdown Input</CardTitle>
              <CardDescription>
                Enter your markdown content. Use --- to separate slides.
                Add images with ![alt](url) syntax.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder={`# Slide 1 Title
This is the content of slide 1

![Image description](https://example.com/image1.jpg)

---

# Slide 2 Title
This is the content of slide 2

![Another image](https://example.com/image2.jpg)`}
                className="min-h-[400px] font-mono text-sm"
                value={markdownInput}
                onChange={(e) => setMarkdownInput(e.target.value)}
              />
              <Button onClick={handleGenerate} className="w-full">
                Generate Slideshow
              </Button>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card>
            <CardHeader>
              <CardTitle>Slide Preview</CardTitle>
              <CardDescription>
                {slides.length > 0 
                  ? `Slide ${currentSlide + 1} of ${slides.length}`
                  : "Generate slides to see preview"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {slides.length > 0 ? (
                <div className="space-y-4">
                  <SlidePreview slide={slides[currentSlide]} />
                  <div className="flex justify-between items-center">
                    <Button
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      variant="outline"
                    >
                      Previous
                    </Button>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {currentSlide + 1} / {slides.length}
                    </span>
                    <Button
                      onClick={nextSlide}
                      disabled={currentSlide === slides.length - 1}
                      variant="outline"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-[400px] text-slate-400 dark:text-slate-600">
                  <p>No slides generated yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* All Slides Overview */}
        {slides.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>All Slides Overview</CardTitle>
              <CardDescription>
                Click on any slide to jump to it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                      currentSlide === index
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <div className="text-xs font-semibold text-slate-500 mb-1">
                      Slide {index + 1}
                    </div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white line-clamp-2">
                      {slide.title || "Untitled"}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
