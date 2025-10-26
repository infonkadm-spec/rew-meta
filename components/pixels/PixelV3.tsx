import Script from "next/script";

export default function PixelV3() {
  return (
    <Script id="pixel-v3" strategy="afterInteractive">
      {`
        window.googlePixelId = "68fea9557c7192211cb96caa";
        var a = document.createElement("script");
        a.setAttribute("async", "");
        a.setAttribute("defer", "");
        a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-google.js");
        document.head.appendChild(a);
      `}
    </Script>
  );
} 