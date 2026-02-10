import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const VSLBlackV2 = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && !playerRef.current.querySelector('vturb-smartplayer')) {
      const el = document.createElement('vturb-smartplayer');
      el.id = 'vid-698b874aaa8949c7cb356c19';
      el.style.display = 'block';
      el.style.margin = '0 auto';
      el.style.width = '100%';
      playerRef.current.appendChild(el);
    }
  }, []);

  return (
    <div className="w-full rounded-3xl overflow-hidden">
      <div ref={playerRef}></div>
      <Script id="vturb-vid-698b874aaa8949c7cb356c19" strategy="afterInteractive">
        {`
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/7811ed69-550c-4b89-9a28-8ab5dbe8db56/players/698b874aaa8949c7cb356c19/v4/player.js";
          s.async=!0;
          document.head.appendChild(s);
        `}
      </Script>
    </div>
  );
};

export default VSLBlackV2;