"use client";

import React from "react";
import VSLWhiteUP, { useVturbWhiteUpLoader } from "@/components/videos/VSLWhiteUP";

export default function White() {
  useVturbWhiteUpLoader();
  return (
    <>
      <div className="w-full text-sm bg-red-600 text-white">
        <div className="mx-auto px-4 py-4">
          <div className="text-center font-semibold">
            Please do not close or refresh this page, as payment errors may occur!
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-4xl gap-6 px-5 py-6 mx-auto bg-gray-50">
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-white appear border-t px-5 py-6 -mb-5 border-gray-200">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Strategy & Engagement
            </h1>
            <p className="text-lg text-gray-600 font-light">
              From &quot;posting just to post&quot; to creating with intent.
            </p>
            <p className="text-base text-gray-700">
              Design pieces that capture attention and encourage interaction — without aggressive tactics.
            </p>
            <div className="max-w-md mx-auto rounded-2xl overflow-hidden">
              <VSLWhiteUP/>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 rounded-xl border-2 border-dashed shadow-lg p-5 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-500">
            <span className="font-semibold text-lg text-gray-900">Includes:</span>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Selecting relevant topics and idea mapping.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Outlines that hold attention.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Visual cues and calls-to-action without clickbait.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Best practices to encourage comments and saves.</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 font-medium">
                Educational training. No specific metrics promised.
              </p>
            </div>

            {/* Upsell Actions */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
                onClick={() => window.open("https://pay.hotmart.com/K101259508B?off=di9rzt2l&checkoutMode=10", "_blank")}
              >
                Yes, I want to buy
              </button>
              <button
                className="inline-flex items-center justify-center rounded-lg bg-gray-200 px-6 py-3 text-gray-800 font-medium shadow-sm hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition"
                onClick={() => { window.location.href = "/casiladown"; }}
              >
                No, thanks
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 