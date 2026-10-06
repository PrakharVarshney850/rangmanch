import Image from "next/image";

import iitRopar from "@/assets/showreel/iit-ropar.webp";

/**
 * A single wide crowd frame behind the hero, held well back.
 *
 * The named proof cards carry the visual weight, so this is atmosphere only —
 * one slow drift rather than the stack of blurred gradient blobs and competing
 * animation loops it replaced.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 stage-floor" />

      <div className="absolute inset-0 opacity-[0.3]">
        <Image
          src={iitRopar}
          alt=""
          fill
          sizes="100vw"
          priority
          className="animate-drift object-cover"
        />
      </div>

      {/* Anchors the type on the left and seats the section into the page. */}
      <div className="absolute inset-0 bg-gradient-to-r from-stage-950 via-stage-950/90 to-stage-950/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-stage-950 via-stage-950/45 to-stage-950/80" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-stage-950 to-transparent" />
    </div>
  );
}
