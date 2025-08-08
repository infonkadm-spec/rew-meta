import Comments from "@/components/Comments";
import VSLBlackV2 from "@/components/videos/VSLBlackV2";
import PixelV2 from "@/components/pixels/PixelV2";
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
  const videoId = "682a850baace17974e9f7905";
  const backLink = `https://${userHost}/promo`;

  // VIDEO VERIFY
  useEffect(() => {
    if (!visible) {
      const intervalId = setInterval(() => {
        const storedTime = localStorage.getItem(videoId);
        const storedVideoTime = storedTime ? Number(storedTime) : 0;
        if (storedVideoTime > 850) {
          setVisible(true);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [videoId, visible]);

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
      <PixelV2 />
      <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-4 py-6 from-gray-50 to-gray-200/50 border-gray-300">
        <span className="text-base sm:text-2xl font-semibold tracking-tight">
          🚨 ATTENTION! Watch the video to the end to understand how to withdraw your available balance. ⬇️
        </span>
        <PlacesAlert />
      </div>
      <div className="flex items-center flex-col gap-1 relative -mt-4">
        <VSLBlackV2 />
        <AlertBoxUrgente targetSeconds={885} />
      </div>
      {!visible && (
        <div className="text-sm text-center p-2">
          🔊 Check if your sound is activated
        </div>
      )}
      
      <Comments />
    </>
  );
}