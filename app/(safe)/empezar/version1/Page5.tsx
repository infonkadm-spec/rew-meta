import Button from "@/components/Button";
import ConfettiEffect from "@/components/Confetti";
import { CirclePlay, LoaderCircle } from 'lucide-react';
import PixelV2 from "@/components/pixels/PixelV2";

export default function Page5({
  active,
  handleClick,
}:{
  active: boolean,
  handleClick: () => void,
}) {

  return (
    <>
      <PixelV2 />
      <div className="flex flex-col text-center text-sm rounded-3xl gap-7 appear px-8 py-8">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold">🎁 Congratulations! 🎁</span>
          <span>Your balance is available for immediate withdrawal! 🎉</span>
        </div>
        <div className="flex flex-col gap-3 rounded-lg p-5 bg-[#cadef9]">
            <span className="font-bold uppercase">✅ You have already won US$ 213!</span>
          <span>These are your earnings for the 3 surveys you just completed.</span>
        </div>
        <div>
          <span>Click the button below and see the withdrawal guide! 👇</span>
        </div>
      </div>
      <Button
        onClick={handleClick}
        disabled={active}
        className="!bg-[#165DFF] !border-[#0048e5] hover:!bg-[#165DFF]/90 active:!bg-[#165DFF]/90"
      >
        {active ? (
          <LoaderCircle className="flex-none animate-spin" />
        ):(
          <>
            <CirclePlay className="flex-none" />
            <span>Yes, withdraw my balance now!</span>
          </>
        )}
      </Button>
      <ConfettiEffect />
    </>
  );

};