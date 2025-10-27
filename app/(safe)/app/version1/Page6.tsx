import Comments from "@/components/Comments";
import VSLBlackV3 from "@/components/videos/VSLBlackV3";
import PixelV3 from "@/components/pixels/PixelV3";
//import PlacesAlert from '@/components/PlacesAlert';
//import AlertBoxUrgente from "@/components/AlertBoxUrgente";
import { useLayer } from '@/context/LayerProvider';
import { useEffect, useState } from 'react';

export default function Page6() {
  // COMPONENT STATES
  const [visible] = useState<boolean>(false);

  // IMPORT CONTEXT DATA
  const userLayer = useLayer();

  // USER LAYER DATA
  const userHost = userLayer.host;

  // SET CONTENT DATA (A/B IDs)
  // const videoIdA = "68c35f645dfbf05254f3a8a1"; // A
  // const videoIdB = "68c35f645dfbf05254f3a8a1"; // B
  const backLink = `https://${userHost}/promo`;

  // VIDEO VERIFY (A=573s, B=702s)
  useEffect(() => {
    // Removida a lógica duplicada de verificação de tempo
    // O AlertBoxUrgente agora controla isso através do hook useVturbAbVideoTime
  }, []);

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
      <div className="flex items-center flex-col gap-1 relative">
        <VSLBlackV3 />
        <div className="flex flex-col gap-2 px-4 py-6">
          <h2 className="text-lg font-semibold">🚨 ATTENTION! Watch the video to the end to understand how to withdraw your available balance. ⬆️</h2>
        </div>
        {/*<AlertBoxUrgente
          videoIdA={videoIdA}
          videoIdB={videoIdB}
          thresholdASeconds={573}
          thresholdBSeconds={702}
        />*/}
      </div>
      
      <Comments />
    </>
  );
}