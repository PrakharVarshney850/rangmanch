import Image from "next/image";

import ayushmann from "@/assets/showreel/ayushmann-lady-irwin.webp";
import localTrain from "@/assets/showreel/local-train.webp";
import ccet from "@/assets/showreel/ccet-chandigarh.webp";

/**
 * Named proof beside the headline.
 *
 * A hero should earn trust with work, not with a blown-up logo. These are
 * real frames from the भारत Bass Festival stages Rangmanch partners on, each
 * credited so an unfamiliar visitor can verify the claim rather than read it
 * as stock atmosphere.
 */
const cards = [
  {
    src: ayushmann,
    artist: "Ayushmann Khurrana",
    venue: "Lady Irwin College, Delhi",
    className: "lg:col-span-2 aspect-[16/10]",
  },
  {
    src: localTrain,
    artist: "The Local Train",
    venue: "IIM Indore",
    className: "aspect-[4/3]",
  },
  {
    src: ccet,
    artist: "9XM BBF",
    venue: "CCET Chandigarh",
    className: "aspect-[4/3]",
  },
];

export function HeroProof() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {cards.map((card) => (
        <figure
          key={card.artist}
          className={`group relative overflow-hidden rounded-2xl border border-gold-500/15 ${card.className}`}
        >
          <Image
            src={card.src}
            alt={`${card.artist} at ${card.venue}`}
            fill
            sizes="(min-width: 1024px) 22vw, 45vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stage-950 via-stage-950/25 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-3.5">
            <span className="block text-[10px] font-semibold tracking-[0.16em] text-gold-300 uppercase">
              {card.artist}
            </span>
            <span className="mt-0.5 block text-[11px] text-muted">
              {card.venue}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
