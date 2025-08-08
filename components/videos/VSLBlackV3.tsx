/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Script from "next/script";

export default function VSLBlackV3() {

  return (
    <>
      <div id="vid_67d8f701b5e657217ff951ec" style={{ position: "relative", width: "100%", padding: "84.375% 0 0" }}>
        <Image
          alt="Video"
          width={64}
          height={54}
          id="thumb_67d8f701b5e657217ff951ec" src="https://images.converteai.net/035cabae-3fc2-4fcc-9aa5-028eb511b2a2/players/67d8f701b5e657217ff951ec/thumbnail.jpg"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          unoptimized
        />
        <div id="backdrop_67d8f701b5e657217ff951ec"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)" }} />
      </div>
      <Script id="scr_67d8f701b5e657217ff951ec" strategy="afterInteractive">
        var s=document.createElement("script"); s.src="https://scripts.converteai.net/035cabae-3fc2-4fcc-9aa5-028eb511b2a2/ab-test/67d8f701b5e657217ff951ec/player.js", s.async=!0,document.head.appendChild(s);
      </Script>
    </>
  );
  
};