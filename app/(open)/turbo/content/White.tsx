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
      <div className="flex flex-col w-full max-w-xl gap-6 px-5 py-6 mx-auto bg-gray-50">
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-white appear border-t px-5 py-6 -mb-5 border-gray-200">
          <div className="font-bold uppercase text-gray-900">
            Access the exclusive value available only on this page!
          </div>
          <div className="flex flex-col gap-3 rounded-xl border-2 border-dashed shadow-lg p-5 bg-white border-green-500">
            <span className="font-semibold italic leading-none text-lg text-gray-900">Advanced Resources Activation</span>
            <span className="text-gray-700">Unlock templates, tools and exclusive resources to optimize your channel.
                                            Save hours of work and execute with more precision in each step.
                                            Access the best in digital productivity for anonymous creators. ⚙️🤖</span>
            <span className="text-xs italic opacity-80">👉 Click the button below and activate your virtual assistant now.</span>
            
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