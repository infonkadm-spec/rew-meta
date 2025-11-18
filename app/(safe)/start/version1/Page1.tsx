import Button from "@/components/Button";
import ConfettiEffect from "@/components/Confetti";
import { LoaderCircle } from "lucide-react";
import PixelV2 from "@/components/pixels/PixelV2";
import Image from "next/image";

export default function Page1({
  active,
  handleClick,
}:{
  active: boolean,
  handleClick: () => void,
}) {

  return (
    <>
      <PixelV2 />
      <div className="flex flex-col items-center text-center text-sm rounded-3xl gap-7 appear px-8 py-8 pt-16">
        <div className="flex gap-3 items-center">
          <Image
            width="80"
            height="56"
            src="/youtube.svg"
            alt="YouTube Rewards"
            priority
          />
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold leading-none text-gray-900">YouTube</span>
            <span className="text-sm font-semibold leading-none tracking-wide text-gray-400">Rewards</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold">Earn money by rating videos</span>
          <div className="flex flex-col gap-2">
            <span>Congratulations! You&apos;ve just won a free license to evaluate ads in our app.</span>
            <span>Click the button below to start watching videos and claim your bonus!</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Button
          onClick={handleClick}
          disabled={active}
          className="flex flex-row justify-center items-center !bg-[#165DFF] !border-[#0048e5] hover:!bg-[#165DFF]/90 active:!bg-[#165DFF]/90 w-1/2 whitespace-nowrap"
        >
        {active ? <LoaderCircle className="flex-none animate-spin" /> : "Start Now"}
        </Button>
      </div>
      <ConfettiEffect />
    </>
  );

};