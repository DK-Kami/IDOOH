import localFont from "next/font/local";

export const satoshiFont = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-LightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-BoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Black.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-BlackItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
});
