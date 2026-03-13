export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-fire.svg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-placeholder.mp4" type="video/mp4" />
      </video>
      <div className="smoke-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="font-subheading text-xl uppercase tracking-[0.18em] text-burntOrange">
          Smoked Grill • Pizza • Sandwich
        </p>
        <h1 className="mt-4 font-heading text-7xl uppercase leading-none text-whiteSmoke sm:text-8xl md:text-9xl">
          THE GRIPIZ
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-subheading text-2xl text-whiteSmoke/90">
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
