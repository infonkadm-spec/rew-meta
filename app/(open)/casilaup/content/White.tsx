"use client";

import React, { useEffect } from "react";
import Script from "next/script";

// Interface para o tipo do Hotmart
interface HotmartCheckoutElements {
  init: (type: string) => {
    mount: (selector: string) => void;
  };
}

declare global {
  interface Window {
    checkoutElements?: HotmartCheckoutElements;
  }
}

export default function White() {
  useEffect(() => {
    // Aguarda o script do Hotmart carregar e então inicializa o widget
    const initHotmartWidget = () => {
      if (typeof window !== 'undefined' && window.checkoutElements) {
        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };

    // Verifica se o script já foi carregado
    if (typeof window !== 'undefined' && window.checkoutElements) {
      initHotmartWidget();
    } else {
      // Se não foi carregado ainda, aguarda o evento de load
      window.addEventListener('load', initHotmartWidget);
      return () => window.removeEventListener('load', initHotmartWidget);
    }
  }, []);

  return (
    <>
      <div className="w-full text-sm bg-red-600 text-white">
        <div className="mx-auto px-4 py-4">
          <div className="text-center font-semibold">
            Please do not close or refresh this page, as errors may occur when paying the fee!
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-4xl gap-6 px-5 py-6 mx-auto bg-gray-50">
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-white appear border-t px-5 py-6 -mb-5 border-gray-200">
          <div className="space-y-4">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Content Flow Mastery™
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Strategy & Engagement
            </h1>
            <p className="text-lg text-gray-600 font-light">
              From &quot;posting just to post&quot; to creating with intent.
            </p>
            <p className="text-base text-gray-700">
              Design pieces that capture attention and encourage interaction — without aggressive tactics.
            </p>
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
            
            {/* HOTMART - Sales Funnel Widget */}
            <div id="hotmart-sales-funnel"></div>
          </div>
        </div>
      </div>

      {/* Script do Hotmart */}
      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.checkoutElements) {
            window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
          }
        }}
      />
    </>
  );
} 