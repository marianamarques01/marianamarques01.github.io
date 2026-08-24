"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import SiteHeader from "@/components/chrome/SiteHeader";
import SplashScreen from "@/components/chrome/SplashScreen";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import ProofBar from "@/components/home/ProofBar";
import WorkSection from "@/components/home/WorkSection";
import { useContent } from "@/lib/language";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HomeView() {
  const { hero, nav, site } = useContent();
  const reduced = useReducedMotion();
  const [heroReady, setHeroReady] = useState(false);
  const [firstName, ...lastParts] = site.name.split(" ");
  const lastName = lastParts.join(" ");

  useEffect(() => {
    document.documentElement.classList.add("home-snap");
    return () => document.documentElement.classList.remove("home-snap");
  }, []);

  useEffect(() => {
    if (reduced) setHeroReady(true);
  }, [reduced]);

  const showHero = heroReady || reduced;

  return (
    <>
      <SplashScreen
        wordmark={nav.wordmark}
        role={site.role}
        onComplete={() => setHeroReady(true)}
      />
      <SiteHeader />
      <main id="main" className="home-scroll" tabIndex={-1}>
        <section className="home-snap-section hero container" aria-labelledby="hero-title">
          <div className="hero-stack">
            <h1 id="hero-title" className="hero-name" aria-label={site.name}>
              <span className="hero-name-line-clip">
                {reduced ? (
                  <span className="hero-name-line">{firstName}</span>
                ) : (
                  <motion.span
                    className="hero-name-line"
                    initial={{ y: "110%" }}
                    animate={showHero ? { y: 0 } : { y: "110%" }}
                    transition={{ duration: 0.75, delay: 0.05, ease: EASE }}
                  >
                    {firstName}
                  </motion.span>
                )}
              </span>
              <span className="hero-name-line-clip">
                {reduced ? (
                  <span className="hero-name-line">{lastName}</span>
                ) : (
                  <motion.span
                    className="hero-name-line"
                    initial={{ y: "110%" }}
                    animate={showHero ? { y: 0 } : { y: "110%" }}
                    transition={{ duration: 0.75, delay: 0.14, ease: EASE }}
                  >
                    {lastName}
                  </motion.span>
                )}
              </span>
            </h1>

            {reduced ? (
              <>
                <p className="hero-role">
                  {site.role} · {site.location}
                </p>
                <p className="hero-inquiry">{hero.inquiry}</p>
                <a href={`mailto:${site.email}`} className="hero-email link-slide">
                  {site.email}
                </a>
              </>
            ) : (
              <>
                <motion.p
                  className="hero-role"
                  initial={{ opacity: 0, y: 16 }}
                  animate={showHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
                >
                  {site.role} · {site.location}
                </motion.p>
                <motion.p
                  className="hero-inquiry"
                  initial={{ opacity: 0, y: 16 }}
                  animate={showHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
                >
                  {hero.inquiry}
                </motion.p>
                <motion.a
                  href={`mailto:${site.email}`}
                  className="hero-email link-slide"
                  initial={{ opacity: 0, y: 16 }}
                  animate={showHero ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.6, delay: 0.48, ease: EASE }}
                >
                  {site.email}
                </motion.a>
              </>
            )}
          </div>
        </section>

        <ProofBar />

        <div className="home-snap-section home-snap-section--content home-lower">
          <WorkSection />
        </div>

        <div className="home-snap-section home-snap-section--content home-lower">
          <AboutSection />
        </div>

        <div className="home-snap-section home-snap-section--content home-lower">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
