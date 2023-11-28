"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Fintoc from "./Fintoc.svg";
import FintocLight from "./FintocLight.svg";
import BancoEstado from "./banks/BancoEstado.svg";
import BancoSantander from "./banks/BancoSantander.svg";
import BancodeChile from "./banks/BancodeChile.svg";
import BancoFalabella from "./banks/BancoFalabella.svg";
import BCI from "./banks/BancoBCI.svg";
import BancoItau from "./banks/BancoItau.svg";
import BancoBice from "./banks/BancoBice.svg";
import Scotiabank from "./banks/Scotiabank.svg";

interface BankLogo {
  src: string;
  alt: string;
}

interface FintocButtonProps {
  action?: "buy" | "pay" | "donate";
  valueProp?: keyof typeof buttonConfig["valueProp"];
  valuePropColor?: "white" | "gray";
  buttonBackground?: keyof typeof buttonConfig["buttonBackground"];
  borderRadius?: keyof typeof buttonConfig["rounded"];
  banks?: BankLogo[];
  type?: string;
  style?: React.CSSProperties;
}

const buttonConfig = {
  buttonBackground: {
    default: "bg-primary-main text-white",
    white: "bg-white text-[#060235] focus:border-2 focus:border-primary-pressed",
    dark: "bg-gray-900 text-white",
    outline: "border-2 border-primary-main text-[#060235]",
  },
  action: {
    buy: "Compra con tu banco",
    pay: "Paga con tu banco",
    donate: "Dona con tu banco",
  },
  valueProp: {
    convenience_card: "No necesitas tener tu tarjeta a mano",
    convenience_fast: "Paga en pocos clicks",
    convenience_redirect: "Paga sin salir de acá",
    security_safety: "Paga de forma segura",
  },
  valuePropColor: {
    white: "text-white",
    gray: "text-gray-400",
  },
  rounded: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  },
};

function FintocButton({
  action,
  valueProp,
  valuePropColor,
  buttonBackground,
  borderRadius,
  type,
  style,
}: FintocButtonProps) {
  const text = buttonConfig.action?.[action ?? "pay"];

  const FintocLogo =
    buttonBackground === "white" || buttonBackground === "outline"
      ? Fintoc
      : FintocLight;
  const classConfig = ` ${
    type === "box"
      ? "font-sans font-semibold focus:border-2 focus-border-primary-pressed rounded-lg flex flex-col items-center px-4 py-4"
      : "whitespace-nowrap flex flex-row items-center font-['Inter var'] font-sans font-semibold justify-between px-4 py-3"
  }  ${
    buttonBackground
      ? buttonConfig.buttonBackground?.[
          buttonBackground as keyof typeof buttonConfig["buttonBackground"]
        ]
      : buttonConfig.buttonBackground?.default
  } ${
    borderRadius
      ? buttonConfig.rounded[borderRadius as keyof typeof buttonConfig["rounded"]]
      : buttonConfig.rounded.md
  }`;

  const valuePropConfig = `mt-2 text-center text-xs ${
    buttonConfig.valuePropColor?.[valuePropColor ?? "gray"]
  }`;
  const [rotatingImages, setRotatingImages] = useState<number>(3);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const svgImages: BankLogo[] = [
    {
      src: BancoEstado,
      alt: "Banco Estado",
    },
    {
      src: BancoSantander,
      alt: "Banco Santander",
    },
    {
      src: BancodeChile,
      alt: "Banco de Chile",
    },
    {
      src: BancoFalabella,
      alt: "Banco Falabella",
    },
    {
      src: BCI,
      alt: "BCI",
    },
    {
      src: BancoItau,
      alt: "Banco Itaú",
    },
    {
      src: BancoBice,
      alt: "Banco Bice",
    },
    {
      src: Scotiabank,
      alt: "Scotiabank",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === svgImages.slice(rotatingImages, svgImages.length).length - 1
          ? 0
          : prevIndex + 1
      );
    }, 2000); // Change the image every 2 seconds

    return () => clearInterval(interval);
  }, [rotatingImages]);

  useEffect(() => {
    if (type === "box") {
      setRotatingImages(5);
    }
  }, [type]);

  if (type === "box") {
    return (
      <button style={style} className={classConfig}>
        <div className="flex flex-row items-center justify-center">
          <Image src={FintocLogo} alt="Fintoc" className="max-h-4 w-auto mr-2" />
          {text}
        </div>

        <div className="grid mt-2 grid-cols-6 flex flex-row w-full gap-x-2 gap-y-2">
          {svgImages.slice(0, 5).map((bank, index) => (
            <Image
              key={index}
              priority
              src={bank.src}
              alt={bank.alt}
              className="max-h-3 w-auto md:max-h-4 lg:max-h-6"
            />
          ))}
          <div className="relative max-h-3 w-auto md:max-h-4 lg:max-h-6">
            {svgImages.slice(5).map((bank, index) => (
              <Image
                key={index}
                priority
                src={bank.src}
                alt={bank.alt}
                className={`h-full w-auto absolute transition-opacity duration-300 ease-in-out  ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <button className={classConfig}>
        <Image
          src={FintocLogo}
          alt="Fintoc"
          className="max-h-4 w-auto lg:max-h-6 mr-1 md:mr-2"
        />
        {text}
        <div className="hidden md:flex overflow-hidden md:ml-4 lg:ml-6 grid grid-cols-2 md:grid-cols-4 gap-x-2">
          {svgImages.slice(0, 2).map((bank, index) => (
            <Image
              key={index}
              priority
              src={bank.src}
              alt={bank.alt}
              className="max-h-4 w-auto"
            />
          ))}
          <div className="relative max-h-4 w-4">
            {svgImages.slice(2).map((bank, index) => (
              <Image
                key={index}
                priority
                src={bank.src}
                alt={bank.alt}
                className={`min-h-full w-4 absolute transition-opacity duration-300 ease-in-out  ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </button>
      {valueProp && (
        <p className={valuePropConfig}>{buttonConfig.valueProp[valueProp]}</p>
      )}
    </div>
  );
}

export default FintocButton;
