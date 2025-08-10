import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const VSLBlackV2 = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && !playerRef.current.querySelector('vturb-smartplayer')) {
      const el = document.createElement('vturb-smartplayer');
      el.id = 'ab-6897f162d7302addde0997dd';
      el.style.display = 'block';
      el.style.margin = '0 auto';
      el.style.width = '100%';
      playerRef.current.appendChild(el);
    }
  }, []);

  return (
    <div className="w-full rounded-3xl overflow-hidden">
      <div ref={playerRef}></div>
      <Script id="vturb-ab-6897f162d7302addde0997dd" strategy="afterInteractive">
        {`
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/ab-test/6897f162d7302addde0997dd/player.js";
          s.async=!0;
          document.head.appendChild(s);
        `}
      </Script>
    </div>
  );
};

export default VSLBlackV2;