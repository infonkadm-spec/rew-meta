import Logo from "@/components/Logo";
import Balance from "@/components/Balance";
import ConfettiEffect from "@/components/Confetti";
import HotmartCheckout from "@/components/HotmartCheckout";
import { headers } from "next/headers";
import Image from "next/image";

export default async function Page() {
  // GET DOMAIN ID
  const hdrs = await headers();
  const domainId = hdrs.get("x-domain-id") || "1";

  const promoLinks: Record<string, string> = {
    "1": "https://global.frendz.com.br/seppu",
    "2": "https://global.frendz.com.br/seppu",
    "3": "https://global.frendz.com.br/seppu",
  };
  const promoLink = promoLinks[domainId] || "https://global.frendz.com.br/seppu";

  return (
    <div className="flex flex-col flex-auto items-center font-medium gap-2">
      <div className="flex w-full justify-center p-5 bg-green-600 text-white">
        <span className="text-base text-center font-semibold">🚨 WAIT! YOU JUST GOT A <u>SUPER DISCOUNT</u>!</span>
      </div>
      <div className="flex flex-col max-w-xl font-medium gap-5 p-5 pb-10 w-full">
        <div className="flex justify-between items-center">
         {/* <Logo /> */}
          {/* <Balance page={6} /> */}
        </div>
        <div className="w-full mb-4">
          <Image
            src="/banner-1.jpg"
            alt="Banner"
            width={600}
            height={300}
            className="w-full h-auto rounded-lg"
            unoptimized={true}
            priority={true}
          />
        </div>
        <HotmartCheckout offer="wbz5t6cu" locale="en" country="US" variant="black" />
      </div>
      <ConfettiEffect />
    </div>
  );

};


