"use client";

import React from "react";
import Script from "next/script";
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

            {/* FornPay One-Click Actions */}
            <div style={{ width: "auto", maxWidth: 400, margin: "0 auto" }}>
              <a href="javascript:void(0)" data-fornpay="0v3xlxvvgr" className="fornpay_btn">Yes, I want access!</a>
              <a href="javascript:void(0)" data-downsell="https://en.cashinyourwallet.app/casiladown" className="fornpay_downsell">No, thanks</a>
            </div>
            <style jsx global>{`
              .fornpay_btn {
                background:rgb(129, 246, 61);
                background-image: -webkit-linear-gradient(top,rgb(68, 195, 52),rgb(30, 208, 86));
                background-image: -moz-linear-gradient(top,rgb(68, 195, 52),rgb(30, 208, 86));
                background-image: -ms-linear-gradient(top,rgb(68, 195, 52),rgb(30, 208, 86));
                background-image: -o-linear-gradient(top,rgb(68, 195, 52),rgb(30, 208, 86));
                background-image: -webkit-gradient(to bottom,rgb(68, 195, 52),rgb(30, 208, 86));
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                border-radius: 10px;
                color: #fff;
                font-family: Arial;
                font-size: 18px;
                font-weight: 100;
                padding: 10px 20px;
                border: 1px solid rgb(83, 246, 61);
                text-decoration: none;
                display: block;
                cursor: pointer;
                text-align: center;
              }
              .fornpay_downsell {
                color: #004faa;
                font-family: Arial;
                margin-top: 10px;
                font-size: 16px !important;
                font-weight: 100;
                text-decoration: none;
                display: block;
                cursor: pointer;
                text-align: center;
              }
            `}</style>
          </div>
        </div>
      </div>
      <Script src="https://app.frendz.com.br/js/oneclick.js" strategy="afterInteractive" />
    </>
  );
} 