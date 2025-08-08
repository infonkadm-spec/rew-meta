import Progress from "@/components/Progress";
import HotmartUpsell from "@/components/HotmartUpsell";

export default function Black() {

  return (
    <>
      <div className="w-full bg-green-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 font-medium">
          <div className="text-sm font-semibold text-center">
            ¡Felicidades! Tu compra se completó exitosamente!
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-xl gap-6 px-5 py-6 mx-auto">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-xs italic opacity-60">Estamos procesando el pago de su tarifa…</span>
          <Progress progress={88} />
        </div>
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-5 py-6 from-gray-100 to-white border-gray-300">
          <div className="font-bold uppercase">
            ¡Haga clic en el botón verde a continuación para acceder a su producto y comenzar de inmediato!
          </div>
          <HotmartUpsell black={true} />
        </div>
      </div>
    </>  
  );

}; 