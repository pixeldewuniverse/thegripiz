import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-fire.svg"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/wood fire.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">

        <p className="font-accent text-base uppercase tracking-[0.18em] text-burntOrange sm:text-xl">
          WOOD FIRE. SMOKED. UNFORGETTABLE.
        </p>

        {/* Logo */}
        <div className="mt-6">
          <Image
            src="/images/logo/logo_primary.jpg"
            alt="The Gripiz"
            width={500}
            height={250}
            priority
             className="mx-auto w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px]"
          />
        </div>

        <p className="mx-auto mt-6 max-w-2xl font-body text-xl text-whiteSmoke/90 sm:text-2xl">
          Real Fire. Real Smoke. Real Flavor.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a href="#menu" className="btn-primary animate-pulseGlow">
            View Menu
          </a>
          <a href="#location" className="btn-secondary">
            Visit Us
          </a>
        </div>

      </div>
    </section>
  );
}
