import React from 'react';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center bg-red-500 h-screen">
      <span
        className="text-5xl font-sans bg-red-800 h-80 w-80 flex grid
        text-white items-center text-center animate-bounce"
      >
        Error 404 - Page Not Found
      </span>
    </div>
  );
}
