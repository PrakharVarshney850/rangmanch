/**
 * A velvet curtain that parts over the hero on load.
 *
 * Deliberately CSS-only — the animation, the dismissal and the
 * reduced-motion opt-out all live in globals.css, so there is no React
 * state, no hydration mismatch and nothing that can leave an invisible
 * overlay sitting on top of the page.
 */
export function CurtainIntro() {
  return (
    <div aria-hidden className="curtain-intro">
      <div className="curtain-intro__panel curtain-intro__panel--left" />
      <div className="curtain-intro__panel curtain-intro__panel--right" />
      <div className="curtain-intro__label">
        <span className="font-display text-xs tracking-[0.5em] text-gold-300/90 uppercase">
          Rangmanch
        </span>
      </div>
    </div>
  );
}
