import { CurtainIntro } from "@/components/curtain-intro";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SpotlightCursor } from "@/components/spotlight-cursor";
import { Hero } from "@/components/sections/hero";
import { PartnerMarquee } from "@/components/sections/partner-marquee";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Verticals } from "@/components/sections/verticals";
import { Work } from "@/components/sections/work";
import { Showreels } from "@/components/sections/showreel";
import { Partners } from "@/components/sections/partners";
import { WhyCampus } from "@/components/sections/why-campus";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <CurtainIntro />
      <SpotlightCursor />
      <SiteHeader />
      <main id="main">
        <Hero />
        <PartnerMarquee />
        <About />
        <Services />
        <Verticals />
        <Work />
        <Showreels />
        <Partners />
        <WhyCampus />
        <Process />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
