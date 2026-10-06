import type { StaticImageData } from "next/image";

import seasonMovie from "@/assets/showreel/season-movie.webp";
import ayushmannLadyIrwin from "@/assets/showreel/ayushmann-lady-irwin.webp";
import lloydLaw from "@/assets/showreel/lloyd-law.webp";
import localTrain from "@/assets/showreel/local-train.webp";
import indeepGsMedical from "@/assets/showreel/indeep-gs-medical.webp";
import iitRopar from "@/assets/showreel/iit-ropar.webp";
import elinaVjInfinity from "@/assets/showreel/elina-vjinfinity.webp";
import atharvIimIndore from "@/assets/showreel/atharv-iim-indore.webp";
import spandanJipmer from "@/assets/showreel/spandan-jipmer.webp";
import tapmi from "@/assets/showreel/tapmi.webp";
import ccetChandigarh from "@/assets/showreel/ccet-chandigarh.webp";
import kiet from "@/assets/showreel/kiet.webp";
import shoolini from "@/assets/showreel/shoolini.webp";
import rheaIimIndore from "@/assets/showreel/rhea-iim-indore.webp";
import ladyIrwin from "@/assets/showreel/lady-irwin.webp";
import candiceGold from "@/assets/showreel/candice-gold.webp";
import juliaIimv from "@/assets/showreel/julia-iimv.webp";
import bimtech from "@/assets/showreel/bimtech.webp";
import johnnieIimv from "@/assets/showreel/johnnie-iimv.webp";
import nsutDelhi from "@/assets/showreel/nsut-delhi.webp";
import seeziIndore from "@/assets/showreel/seezi-indore.webp";
import ollyTour from "@/assets/showreel/olly-tour.webp";
import gurukulKangri from "@/assets/showreel/gurukul-kangri.webp";
import hannaShine from "@/assets/showreel/hanna-shine.webp";
import sabrinaIiit from "@/assets/showreel/sabrina-iiit.webp";
import maaTujheSalaam from "@/assets/showreel/maa-tujhe-salaam.webp";

/**
 * The complete भारत Bass Festival aftermovie archive — every video in the
 * festival's public Drive folder, including its subfolders.
 *
 * Posters are stored locally rather than hot-linked: Drive redirects its
 * thumbnail endpoint to lh3.googleusercontent.com, which browsers block
 * cross-origin (ERR_BLOCKED_BY_ORB). Local WebP copies also keep the page
 * fast and correct on unreliable venue wi-fi.
 *
 * Playback streams from Drive's own embed player, so no video is re-hosted.
 */

export type Showreel = {
  id: string;
  title: string;
  artist?: string;
  venue: string;
  year: string;
  poster: StaticImageData;
};

export const showreelFolder =
  "https://drive.google.com/drive/folders/1W945vDQtIaO_C-IjG8stBQuSeiG2hNZo";

/** The season film — the one to open with. */
export const featuredReel: Showreel = {
  id: "1WbT74P5vAD-UKWakJ0wwGjjIS8Z5OGFZ",
  title: "9XM BBF Campus Concerts — Season Movie",
  venue: "The full season, one reel",
  year: "2023",
  poster: seasonMovie,
};

/** Ordered strongest-first: headline names lead. */
export const showreels: Showreel[] = [
  {
    id: "1aU95gtHfql191_Nm9Fijm4hIiCXCGHX1",
    title: "EDM Night",
    artist: "Ayushmann Khurrana",
    venue: "Lady Irwin College, Delhi",
    year: "2021",
    poster: ayushmannLadyIrwin,
  },
  {
    id: "1LtdLDxtZuZdTAqUVVB4IWkVR9Ghxv4WM",
    title: "Catalyst",
    artist: "Jass Manak & Olly Esse",
    venue: "Lloyd Law College",
    year: "2023",
    poster: lloydLaw,
  },
  {
    id: "1xmpU8BhIcHvty1tqWn6SmWjLG1Jew7Y1",
    title: "Campus concert",
    artist: "The Local Train",
    venue: "IIM Indore",
    year: "2019",
    poster: localTrain,
  },
  {
    id: "1utw59MCpbBc0PXO5DWiqqvQIMnXNanuX",
    title: "Saturday Saturday",
    artist: "Indeep Bakshi",
    venue: "GS Medical College",
    year: "2022",
    poster: indeepGsMedical,
  },
  {
    id: "1S4CY0RwHo98kyPBOhYQlMpiHsk4n26zQ",
    title: "Zeitgeist '23",
    venue: "IIT Ropar",
    year: "2023",
    poster: iitRopar,
  },
  {
    id: "1H67MZsU5Rp-s0rQOtRCY1R8zgZrnnglZ",
    title: "Unique DJ Night Experience",
    artist: "DJ Elina Chauhann × VJ Infinity",
    venue: "Campus concert",
    year: "2024",
    poster: elinaVjInfinity,
  },
  {
    id: "1JkYuF2X_-jzx5K1vIPP7vVJZ_0rGVqyz",
    title: "Atharv '19",
    venue: "IIM Indore",
    year: "2019",
    poster: atharvIimIndore,
  },
  {
    id: "1_Z2g-SogKYZ1sVmlQ2z3_KB3C9ia-d03",
    title: "Spandan '19",
    venue: "JIPMER Pondicherry",
    year: "2019",
    poster: spandanJipmer,
  },
  {
    id: "1fhUJBv9yf1DiYKGJEdMS-z5V7jsKaUv1",
    title: "Campus concert",
    venue: "TAPMI Manipal",
    year: "2020",
    poster: tapmi,
  },
  {
    id: "1qcsV2HqD8LM7WlQ-AU0Su-2GB_7QSawL",
    title: "9XM BBF — Ola Ras",
    venue: "CCET Chandigarh",
    year: "2019",
    poster: ccetChandigarh,
  },
  {
    id: "11ga2PUs9Wyd163l1fb98O8cduE_e0hZZ",
    title: "9XM BBF Campus Concert",
    venue: "KIET Ghaziabad",
    year: "2021",
    poster: kiet,
  },
  {
    id: "1jO8yjFuo2EkH6BGOHClaV4NQNN4VaFvK",
    title: "Bharat Bass Festival",
    artist: "Myris",
    venue: "Shoolini University",
    year: "2022",
    poster: shoolini,
  },
  {
    id: "1DAivxRbW76-4AYkgxJwYh406iSJwHSq7",
    title: "BBF After Movie",
    artist: "Rhea — Female Bollywood DJ",
    venue: "IIM Indore",
    year: "2021",
    poster: rheaIimIndore,
  },
  {
    id: "1hnT9td24ckW-JWIJR9kIIbmySEZ5W0oq",
    title: "Bharat Bass Festival",
    artist: "Candice Redding",
    venue: "Lady Irwin College",
    year: "2022",
    poster: ladyIrwin,
  },
  {
    id: "1tALKVY-3X467qrog3hmExvzaVNx5TpIM",
    title: "BBF Memories ft. GOLD",
    artist: "Candice Redding",
    venue: "Artist promo",
    year: "2020",
    poster: candiceGold,
  },
  {
    id: "1h_NB5iHKtScXdCvHLi20pijvciHsB16F",
    title: "Bharat Bass Festival",
    artist: "Julia Bliss",
    venue: "IIM Visakhapatnam",
    year: "2019",
    poster: juliaIimv,
  },
  {
    id: "1MqeZsDhrkF6GpjzoMjR6DsgjiMpBsSsq",
    title: "Bharat Bass Festival",
    artist: "Shilpi Sharma",
    venue: "BIMTECH",
    year: "2019",
    poster: bimtech,
  },
  {
    id: "1u4ppzAxOoVc23jNxjYWtCSalYQnfdZ_Q",
    title: "Bharat Bass Festival",
    artist: "Johnnie Earnest",
    venue: "IIM Visakhapatnam",
    year: "2019",
    poster: johnnieIimv,
  },
  {
    id: "16uJQiPLb69dLSWDktsmnoVkhnvnpQhJq",
    title: "Bharat Bass Festival",
    artist: "Carnivore",
    venue: "NSUT Delhi",
    year: "2019",
    poster: nsutDelhi,
  },
  {
    id: "1JLxgvQHJHsTbhkFqmnsY7rhzo_E_yn29",
    title: "Bharat Bass Festival",
    artist: "Seezi",
    venue: "IIM Indore",
    year: "2019",
    poster: seeziIndore,
  },
  {
    id: "1J0RLFjUQqrTmBwmOx-Y6i8_vx-J2njbm",
    title: "BBF India Tour",
    artist: "Olly Esse",
    venue: "India Tour",
    year: "2019",
    poster: ollyTour,
  },
  {
    id: "1pvi9lCAt5Lxjd5tpw8XgVu8KHn0MXNt9",
    title: "Campus concert",
    venue: "Gurukul Kangri, Haridwar",
    year: "2019",
    poster: gurukulKangri,
  },
  {
    id: "1jXER-sNZS4N1jEsKts0XzXC1gJKPNlSY",
    title: "Bharat Bass Festival",
    artist: "Hanna Shine",
    venue: "Campus concert",
    year: "2020",
    poster: hannaShine,
  },
  {
    id: "1kYWq3LmsxXkYwT1WkYIWNMS5MBf8nJS-",
    title: "Instagram cut",
    artist: "Sabrina",
    venue: "IIIT",
    year: "2020",
    poster: sabrinaIiit,
  },
  {
    id: "1zO5MFkxne6wQi7V-mfbXpeKKZ4C0vF9d",
    title: "Maa Tujhe Salaam",
    venue: "Artist promo",
    year: "2020",
    poster: maaTujheSalaam,
  },
];

/** How many cards show before the grid is expanded. */
export const showreelPreviewCount = 12;

export const playerUrl = (id: string) =>
  `https://drive.google.com/file/d/${id}/preview`;
