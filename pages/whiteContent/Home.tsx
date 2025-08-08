/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import MainPage from "./MainPage";
import { useState } from "react";

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
              <img src="/logo you.png" alt="Logo" className="h-12 w-auto" />
            </div>
            <p className="text-xs text-slate-500">
              Este curso no garantiza resultados financieros de ningún tipo. El contenido aquí compartido tiene fines exclusivamente educativos y busca enseñar habilidades digitales relacionadas con plataformas digitales. Cualquier resultado económico dependerá única y exclusivamente de la aplicación individual, el esfuerzo personal y factores externos que no pueden ser controlados. No vendemos fórmulas mágicas ni prometemos ingresos rápidos. Por favor, utiliza este material con responsabilidad y sentido crítico.
            </p>
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-slate-600">
              <a href="/contacto" className="hover:underline">Contacto</a>
              <span>|</span>
              <a href="/terminos" className="hover:underline">Términos de Uso</a>
              <span>|</span>
              <a href="/descargo" className="hover:underline">Descargo de Responsabilidad</a>
              <span>|</span>
              <a href="/privacidad" className="hover:underline">Política de Privacidad</a>
              <span>|</span>
              <a href="/reembolso" className="hover:underline">Política de Reembolso</a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}