"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vertical space Google Drive's `/preview` player reserves for its own chrome
 * before it lays out the picture.
 *
 * This is a fixed pixel cost that does not scale with the player, so it must
 * be allowed for at every size — not just on phones. Measured from a real
 * phone screenshot: inside a 16:9 box on a 390px phone (366x206) the chrome
 * left only ~103px of stage for a picture needing 206px, so Drive clipped it
 * to roughly half its height.
 *
 * Overshooting is safe — surplus space letterboxes invisibly against the black
 * background — while undershooting crops, so this is deliberately generous.
 * Raise it if any device still clips the picture.
 */
const CHROME_PX = 140;

/** Drive's own file view, which handles small screens properly. */
export const driveFileUrl = (id: string) =>
  `https://drive.google.com/file/d/${id}/view`;

type DrivePlayerProps = {
  fileId: string;
  src: string;
  title: string;
};

export function DrivePlayer({ fileId, src, title }: DrivePlayerProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [canFullscreen, setCanFullscreen] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      setCanFullscreen(document.fullscreenEnabled === true),
    );
    return () => cancelAnimationFrame(frame);
  }, []);

  const goFullscreen = () => {
    const el = frameRef.current;
    if (!el) return;
    // Safari on iOS does not support fullscreen on an iframe, so fall back to
    // Drive's own view, which is full-screen by definition.
    if (typeof el.requestFullscreen === "function") {
      el.requestFullscreen().catch(() => window.open(driveFileUrl(fileId), "_blank"));
    } else {
      window.open(driveFileUrl(fileId), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div>
      <div
        className="relative h-0 w-full overflow-hidden rounded-2xl border border-gold-500/25 bg-black sm:rounded-3xl"
        style={{ paddingBottom: `calc(56.25% + ${CHROME_PX}px)` }}
      >
        <iframe
          ref={frameRef}
          src={src}
          title={title}
          allow="autoplay; fullscreen"
          allowFullScreen
          /* `block` avoids the inline-element baseline gap under the player. */
          className="absolute inset-0 block size-full border-0"
        />
      </div>

      <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {canFullscreen && (
          <button
            type="button"
            onClick={goFullscreen}
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] text-gold-400 uppercase transition hover:text-gold-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="size-3.5"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
            </svg>
            Full screen
          </button>
        )}

        <a
          href={driveFileUrl(fileId)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] text-faint uppercase transition hover:text-cream"
        >
          Open in Drive
          <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  );
}