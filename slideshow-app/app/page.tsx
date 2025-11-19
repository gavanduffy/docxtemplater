"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { saveAs } from "file-saver";

export default function Home() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [jsonInput, setJsonInput] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validTypes = [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ];
      if (validTypes.includes(file.type) || file.name.endsWith('.docx') || file.name.endsWith('.pptx')) {
        setUploadedFile(file);
        setError("");
        setStatus(`File "${file.name}" uploaded successfully`);
      } else {
        setError("Please upload a valid .docx or .pptx file");
        setUploadedFile(null);
      }
    }
  };

  const handleGenerate = async () => {
    if (!uploadedFile) {
      setError("Please upload a file first");
      return;
    }

    if (!jsonInput.trim()) {
      setError("Please provide JSON data");
      return;
    }

    try {
      setStatus("Processing...");
      setError("");

      // Parse JSON input
      const data = JSON.parse(jsonInput);

      // Read the uploaded file
      const arrayBuffer = await uploadedFile.arrayBuffer();
      const zip = new PizZip(arrayBuffer);

      // Create docxtemplater instance
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      // Set the template data
      doc.render(data);

      // Generate the output file
      const output = doc.getZip().generate({
        type: "blob",
        mimeType: uploadedFile.type,
      });

      // Determine output filename
      const fileExtension = uploadedFile.name.split('.').pop();
      const baseName = uploadedFile.name.replace(/\.[^/.]+$/, "");
      const outputFileName = `${baseName}_output.${fileExtension}`;

      // Download the file
      saveAs(output, outputFileName);
      
      setStatus(`File generated successfully: ${outputFileName}`);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Error: ${err.message}`);
      } else {
        setError("An error occurred while processing the file");
      }
      setStatus("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Document Template Processor
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Upload a DOCX or PPTX template and fill it with your JSON data
          </p>
        </div>

        <div className="space-y-6">
          {/* File Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Template</CardTitle>
              <CardDescription>
                Upload a .docx or .pptx file with template placeholders (e.g., {`{name}`}, {`{title}`})
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  accept=".docx,.pptx"
                  onChange={handleFileUpload}
                  className="cursor-pointer"
                />
              </div>
              {uploadedFile && (
                <div className="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    ✓ {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(2)} KB)
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* JSON Input Section */}
          <Card>
            <CardHeader>
              <CardTitle>JSON Data</CardTitle>
              <CardDescription>
                Enter the JSON data to replace placeholders in your template
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder={`{
  "name": "John Doe",
  "title": "Software Engineer",
  "company": "Tech Corp",
  "items": [
    { "description": "Item 1" },
    { "description": "Item 2" }
  ]
}`}
                className="min-h-[300px] font-mono text-sm"
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
              />
              <Button 
                onClick={handleGenerate} 
                className="w-full"
                disabled={!uploadedFile || !jsonInput.trim()}
              >
                Generate Document
              </Button>
            </CardContent>
          </Card>

          {/* Status Messages */}
          {status && (
            <Card>
              <CardContent className="pt-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    {status}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {error && (
            <Card>
              <CardContent className="pt-6">
                <div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-md">
                  <p className="text-sm text-red-800 dark:text-red-200">
                    {error}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>Create a template document (.docx or .pptx) with placeholders like {`{name}`}, {`{title}`}, etc.</li>
                <li>For loops, use {`{#items}`}...{`{/items}`} syntax</li>
                <li>Upload your template file using the file input above</li>
                <li>Enter your JSON data in the textarea</li>
                <li>Click &quot;Generate Document&quot; to process and download the result</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
