import { Noto_Sans_JP } from "next/font/google";

export const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-noto-sans-jp",
    // weight: 'variable', // default なので不要。バリアブルフォントでなければ必要
    // display: 'swap', // default なので不要
    // preload: true, // default なので不要
    // adjustFontFallback: true, // next/font/google で default なので不要
    // fallback: ['system-ui', 'arial'], // local font fallback なので不要
  });