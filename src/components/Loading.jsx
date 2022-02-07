import React from 'react';

export default function Loading() {
  return (
    <div>
      <div className="bg-yellow-500 text-white font-bold rounded-t px-4 py-2">
        Loading
      </div>
      <div
        className="border border-t-0 border-yellow-400 rounded-b
        bg-yellow-100 px-4 py-3 text-yellow-700"
      >
        <p>Requesting API in process</p>
      </div>
    </div>
  );
}
