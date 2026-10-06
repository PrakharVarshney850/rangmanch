/**
 * Height in pixels that Google Drive's `/preview` player reserves for its own
 * chrome — the top bar and the controls strip — before it lays out the video.
 *
 * This is a fixed pixel cost, not a proportional one, which is why small
 * players suffer: in a 366x206 box (a 16:9 frame on a 390px phone) the chrome
 * takes 75px and leaves only ~132px of stage for a video that needs 206px, so
 * the picture gets cut. Measured against the real player; rounded up slightly
 * so any surplus simply letterboxes instead of cropping.
 */
export const DRIVE_CHROME_PX = 80;

type DrivePlayerProps = {
  src: string;
  title: string;
};

/**
 * A Drive video embed sized so the full 16:9 picture is always visible.
 *
 * The box is 16:9 *plus* `DRIVE_CHROME_PX`, using the percentage-padding
 * aspect-ratio technique (percentage padding resolves against width, which
 * `aspect-ratio` cannot combine with a fixed offset). Controls stay at their
 * native, tappable size at every screen width.
 */
export function DrivePlayer({ src, title }: DrivePlayerProps) {
  return (
    <div
      className="relative h-0 w-full overflow-hidden rounded-2xl border border-gold-500/25 bg-black sm:rounded-3xl"
      style={{ paddingBottom: `calc(56.25% + ${DRIVE_CHROME_PX}px)` }}
    >
      <iframe
        src={src}
        title={title}
        allow="autoplay; fullscreen"
        allowFullScreen
        /* `block` avoids the inline-element baseline gap under the player. */
        className="absolute inset-0 block size-full border-0"
      />
    </div>
  );
}