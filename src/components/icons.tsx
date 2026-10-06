import type { ReactNode } from "react";

/* Shared 24px line-icon frame. */
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-full"
    >
      {children}
    </svg>
  );
}

export const icons = {
  handshake: (
    <Icon>
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a2 2 0 0 1 0-2.8l.9-.9" />
      <path d="M7 10 4.5 7.5a1 1 0 0 0-3 3L5 14" />
      <path d="m8.5 12.5 3 3a1 1 0 1 0 3-3l-3-3" />
      <path d="m2 7 3-3 4 2 3-2 3 2 4-2 3 3" />
    </Icon>
  ),
  campus: (
    <Icon>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
      <path d="M22 8v6" />
    </Icon>
  ),
  stage: (
    <Icon>
      <path d="M3 21V9l9-6 9 6v12" />
      <path d="M3 13h18" />
      <path d="M9 21v-5a3 3 0 1 1 6 0v5" />
    </Icon>
  ),
  spark: (
    <Icon>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" />
      <circle cx="12" cy="12" r="3.2" />
    </Icon>
  ),
  mic: (
    <Icon>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v4M8 22h8" />
    </Icon>
  ),
  camera: (
    <Icon>
      <path d="M3 8h3l1.5-2h9L18 8h3v12H3V8Z" />
      <circle cx="12" cy="13.5" r="3.8" />
    </Icon>
  ),
  masks: (
    <Icon>
      <path d="M4 4h7v8a3.5 3.5 0 0 1-7 0V4Z" />
      <path d="M13 7h7v8a3.5 3.5 0 0 1-7 0V7Z" />
      <path d="M6 8.5h.01M9 8.5h.01M15 11h.01M18 11h.01" />
    </Icon>
  ),
  dance: (
    <Icon>
      <circle cx="13" cy="4" r="2" />
      <path d="M13 6v5l4 3M13 11l-4 2-3 6M9 13l2 7M17 9l3-2" />
    </Icon>
  ),
  guitar: (
    <Icon>
      <path d="M20 3.5 16.5 7" />
      <path d="m18.5 2 3.5 3.5-2.5 2L16 4.5 18.5 2Z" />
      <path d="M15.5 8 14 9.5a4.5 4.5 0 0 0-5.6.6l-2.2 2.2a5 5 0 1 0 7.1 7.1l2.2-2.2a4.5 4.5 0 0 0 .6-5.6L17.5 10" />
      <circle cx="10.5" cy="14.5" r="1.6" />
    </Icon>
  ),
  palette: (
    <Icon>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-1 .8-1.7 1.8-1.7H16a5 5 0 0 0 5-5c0-4-4-7.3-9-7.3Z" />
      <circle cx="7.5" cy="11.5" r="1.1" />
      <circle cx="11" cy="7.5" r="1.1" />
      <circle cx="16" cy="9" r="1.1" />
    </Icon>
  ),
  target: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.3" />
    </Icon>
  ),
  chart: (
    <Icon>
      <path d="M3 21h18" />
      <path d="M6 21V11M11 21V5M16 21v-7M21 21v-4" />
    </Icon>
  ),
  compass: (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </Icon>
  ),
  layers: (
    <Icon>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </Icon>
  ),
  rocket: (
    <Icon>
      <path d="M5.5 14.5c-1.5 1.5-2 6-2 6s4.5-.5 6-2c.8-.8.8-2.2 0-3a2.1 2.1 0 0 0-4 0Z" />
      <path d="M14 15.5 8.5 10C9.5 5.5 13 2.5 19.5 3c.5 6.5-2.5 10-7 11Z" />
      <circle cx="15" cy="8" r="1.6" />
    </Icon>
  ),
  instagram: (
    <Icon>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7h.01" />
    </Icon>
  ),
  link: (
    <Icon>
      <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
    </Icon>
  ),
  phone: (
    <Icon>
      <path d="M5 3h3.5l1.8 4.4-2.2 1.6a12 12 0 0 0 5.9 5.9l1.6-2.2L20 14.5V18a2.5 2.5 0 0 1-2.7 2.5A16.5 16.5 0 0 1 3.5 6.7 2.5 2.5 0 0 1 6 4Z" />
    </Icon>
  ),
  mail: (
    <Icon>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Icon>
  ),
  arrow: (
    <Icon>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  ),
} as const;

export type IconName = keyof typeof icons;
