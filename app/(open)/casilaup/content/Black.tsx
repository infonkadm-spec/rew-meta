import Progress from "@/components/Progress";
import HotmartUpsell from "@/components/HotmartUpsell";

export default function Black() {

  return (
    <>
      <div className="w-full bg-red-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 font-medium">
          <div className="text-sm font-semibold text-center">
          ¡Por favor, no cierre ni actualice esta página, ya que podrían ocurrir errores al pagar la tarifa!
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-xl gap-6 px-5 py-6 mx-auto">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-xs italic opacity-80">Estamos procesando el pago de su tarifa…</span>
          <Progress progress={67} />
        </div>
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-5 py-6 from-gray-100 to-white border-gray-300">
          <div className="font-bold uppercase">
            <span className="text-sm font-semibold text-center">🎉 ¡Felicidades! ¡Ganaste una sorpresa! 🎁</span>
            <br />
            <br />
            <span className="text-xs opacity-100">¡Haga clic en el botón verde a continuación y recíbela de inmediato!</span>
          </div>
          <HotmartUpsell black={true} />
        </div>
      </div>
    </>  
  );

};