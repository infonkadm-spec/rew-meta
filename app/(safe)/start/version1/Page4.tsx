import Image from "next/image";
import Option from "@/components/Option";
import PixelV2 from "@/components/pixels/PixelV2";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function Page4({
  handleClick,
}:{
  handleClick: () => void,
}) {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && !playerRef.current.querySelector('vturb-smartplayer')) {
      const el = document.createElement('vturb-smartplayer');
      el.id = 'vid-68ff65e60b9ea1a1027ac967';
      el.style.display = 'block';
      el.style.margin = '0 auto';
      el.style.width = '100%';
      playerRef.current.appendChild(el);
    }
  }, []);

  return (
    <>
      <PixelV2 />
      <div className="flex flex-col gap-4 text-sm appear">
        {/* Video Player */}
        <div className="w-full rounded-3xl overflow-hidden">
          <div ref={playerRef}></div>
          <Script id="vturb-vid-68ff65e60b9ea1a1027ac967" strategy="afterInteractive">
            {`
              var s=document.createElement("script");
              s.src="https://scripts.converteai.net/9e5adb60-2a6e-4137-97bb-0eaa0f5632d0/players/68ff65e60b9ea1a1027ac967/v4/player.js";
              s.async=!0;
              document.head.appendChild(s);
            `}
          </Script>
        </div>

        {/* Video Info */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Losing is Hard</h2>
          <p className="text-sm text-gray-600">45K views - 2 days ago</p>
          <hr className="border-gray-200" />
          
          {/* Channel Info */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Image
                width="40"
                height="40"
                src="/logos/step-3.jpg"
                alt="Xumo"
                className="rounded-full"
              />
              <span className="font-bold text-gray-900">Xumo</span>
            </div>
            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
              <Image
                width="16"
                height="16"
                src="/steps/instagram-verify.png"
                alt="Verified"
              />
              <span className="text-xs font-medium text-green-700">Partner Verified</span>
            </div>
          </div>
        </div>

        {/* Question Box */}
        <div className="bg-[#E2E8F1] rounded-lg p-6">
          <p className="text-sm font-medium text-gray-800 mb-4 text-center">Answer the question:</p>
          <p className="text-base font-semibold text-center mb-6">Is this video relevant to you?</p>
          <div className="grid grid-cols-2 gap-3">
          <Option onClick={handleClick} className="active:!ring-red-500 flex items-center gap-2">
            <span className="text-sm font-medium">Not Relevant</span>
            <ThumbsDown size={16} className="text-red-500" />
          </Option>
          <Option onClick={handleClick} className="active:!ring-green-500 flex items-center gap-2">
            <span className="text-sm font-medium">Relevant</span>
            <ThumbsUp size={16} className="text-green-500" />
          </Option>
          </div>
        </div>
        {/* Steps Images */}
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            width={768}
            height={607}
            src="/steps/bc-4.png"
            alt="Step 1"
            className="rounded-lg w-full"
            quality={100}
            priority
          />
          <Image
            width={768}
            height={607}
            src="/steps/bc-4 (1).png"
            alt="Step 2"
            className="rounded-lg w-full"
            quality={100}
            priority
          />
          <Image
            width={768}
            height={607}
            src="/steps/bc-2.png"
            alt="Step 3"
            className="rounded-lg w-full"
            quality={100}
            priority
          />
        </div>
      </div>
    </>
  );

};