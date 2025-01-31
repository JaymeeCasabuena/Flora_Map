"use client";

import { useState } from "react";
import Image from "next/image";

export default function FileUploadForm() {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const preview = URL.createObjectURL(selectedFile);
      setFilePreview(preview);
    }
  };

  const handleRemoveFile = () => {
    setFilePreview(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg">
      <label className="relative w-64 h-32 flex flex-col items-center justify-center bg-white text-blue-700 rounded-lg shadow-lg border border-green-500 cursor-pointer hover:bg-yellow-500">
        {filePreview ? (
          <>
            {/* Remove Button */}
            <button
              type="button"
              onClick={handleRemoveFile}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 shadow hover:bg-red-600"
              aria-label="Remove File"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* File Preview */}
            <Image
              src={filePreview}
              alt="File Preview"
              fill={true}
              className="w-56 h-24 object-cover object-cover rounded"
            />
          </>
        ) : (
          <>
            {/* Default Label Content */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#124E78"
              className="bi bi-paperclip w-8 h-8"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
            </svg>
            <span className="mt-2 text-sm text-gray-700">Select a file</span>
          </>
        )}
        <input
          type="file"
          className="hidden"
          name="file"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}
