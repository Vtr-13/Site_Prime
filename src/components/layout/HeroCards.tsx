"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef } from "react";

const cards = [
  {
    images: [
      "/images/herocards/seguros.png",
      "/images/herocards/seguros2.png",
      "/images/herocards/seguros3.png",
    ],
    title: "SEGUROS",
    desc: "Proteção completa para sua família, patrimônio e empresa.",
    href: "/seguros",
  },
  {
    images: [
      "/images/herocards/investimentos.png",
      "/images/herocards/investimentos2.png",
      "/images/herocards/investimentos3.png",
    ],
    title: "INVESTIMENTOS",
    desc: "Cresça seu patrimônio com as melhores estratégias do mercado.",
    href: "/investimentos",
  },
  {
    images: [
      "/images/herocards/planos-saude.png",
      "/images/herocards/planos-saude2.png",
      "/images/herocards/planos-saude3.png",
    ],
    title: "PLANOS DE SAÚDE",
    desc: "Cuide do que importa com planos de saúde personalizados.",
    href: "/saude",
  },
  {
    images: [
      "/images/herocards/financiamentos.png",
      "/images/herocards/financiamentos2.png",
      "/images/herocards/financiamentos3.png",
    ],
    title: "FINANCIAMENTOS",
    desc: "As melhores condições para financiar seus projetos.",
    href: "/financiamentos",
  },
  {
    images: [
      "/images/herocards/consorcios.png",
      "/images/herocards/consorcios2.png",
      "/images/herocards/consorcios3.png",
    ],
    title: "CONSÓRCIOS",
    desc: "Planejamento inteligente para conquistar seus bens.",
    href: "/consorcios",
  },
];

export default function HeroCards() {
  return (
    <section className="pt-32 pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
          {cards.map((card) => (
            <CardItem key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardItem({ card }: { card: typeof cards[0] }) {
  return (
    <a
      href={card.href}
     className="group bg-white bg-opacity-70 rounded-lg overflow-hidden border-2 border-accent w-[400px] max-w-full shadow-xl transform transition-transform duration-500 hover:scale-105 hover:z-20 hover:shadow-[0_15px_30px_rgba(192,142,0,0.5)] flex flex-col mx-auto"
>
     <div className="w-full">
  <CardCarousel imagens={card.images} />
</div>

      <div className="h-[40%] w-full">
        <div className="h-full p-4 flex flex-col justify-start bg-white/30 backdrop-blur-sm">
          <h3 className="text-xl md:text-2xl font-bold text-[#070D17]">
            {card.title}
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-2 mb-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {card.desc}
          </p>
          <span className="inline-block px-4 py-2 text-sm rounded-md border-2 border-[#070D17] text-[#070D17] opacity-0 translate-y-2 transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
            Saiba mais
          </span>
        </div>
      </div>
    </a>
  );
}

function CardCarousel({ imagens }: { imagens: string[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const autoplay = useCallback(() => {
    if (!embla) return;
    autoplayRef.current = setInterval(() => {
      if (!embla.canScrollNext()) {
        embla.scrollTo(0);
      } else {
        embla.scrollNext();
      }
    }, 3000);
  }, [embla]);

  const stop = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    if (embla) autoplay();
    return () => stop();
  }, [embla, autoplay, stop]);

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex w-full">
        {imagens.map((src, index) => (
          <div key={index} className="flex-[0_0_100%] w-full">
            <div className="w-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={400}
                height={300}
                layout="responsive"
                className="rounded-t-lg object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
