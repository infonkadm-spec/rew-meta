/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "@/components/Button";
import ConfettiEffect from "@/components/Confetti";
import { CirclePlay } from 'lucide-react';

export default function Page6({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {

  return (
    <>
      <div className="flex flex-col text-center text-base rounded-2xl gap-7 bg-gradient-to-t appear px-8 py-10 from-gray-50 to-gray-200">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-semibold">🎁 ¡Felicitaciones! 🎁</span>
          <span className="text-base font-normal">Su saldo está disponible para retiro inmediato! 🎉</span>
        </div>
        <div className="rounded-lg shadow-lg border p-5 bg-green-50">
          <span className="font-semibold text-base">¡Estas son tus ganancias por las 4 encuestas que acabas de completar</span>
        </div>
        <div className="text-sm">
          ¡Haga clic en el botón a continuación y vea la guía de retiro inmediato! 👇
        </div>
      </div>
      <Button onClick={() => setPage(page + 1)} className="!bg-green-600 !border-green-700 hover:!bg-green-500">
        <CirclePlay /> ¡Sí, retirar mi saldo ahora!
      </Button>
      <ConfettiEffect />
    </>
  );

};