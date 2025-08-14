/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import MainPage from "./MainPage";
import { useState } from "react";
import Image from "next/image";

// ROUTES VERSION 1 (Comentado temporariamente)
// const RoutesV1: Record<number, any> = {
//   1: Page1,
//   2: Page2,
//   3: Page3,
//   4: Page4,
//   5: Page5,
//   6: Page6,
//   7: Page7,
// };

// Nova estrutura de rotas
const Routes: Record<number, any> = {
  0: MainPage,
  // 1: Page1,
  // 2: Page2,
  // 3: Page3,
  // 4: Page4,
  // 5: Page5,
  // 6: Page6,
  // 7: Page7,
};

export default function Home() {
  const [page, setPage] = useState(0); // Começando na página principal (0)
  const PageContent = Routes[page];

  return (
    <>
      <div className="min-h-screen bg-background">
        <PageContent
          page={page}
          setPage={setPage}
        />
        <footer className="w-full bg-slate-100 border-t border-slate-200 mt-8 py-8 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex justify-center mb-4">
              <Image src="/logo you.png" alt="Logo" width={48} height={48} className="h-12 w-auto" />
            </div>
            <p className="text-xs text-slate-500">
            This course does not guarantee financial results of any kind. The content shared here is for educational purposes only and seeks to teach digital skills related to digital platforms. Any financial results will depend solely and exclusively on individual application, personal effort, and external factors beyond one&apos;s control. We do not sell magic formulas or promise quick returns. Please use this material responsibly and with a critical eye.
            </p>
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-slate-600">
              <a href="/contact" className="hover:underline">Contact</a>
              <span>|</span>
              <a href="/terms" className="hover:underline">Terms of Use</a>
              <span>|</span>
              <a href="/disclaimer" className="hover:underline">Disclaimer</a>
              <span>|</span>
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="/refund" className="hover:underline">Refund Policy</a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}