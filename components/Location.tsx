export default function Location() {
  return (
    <div id="location" className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2">
      <div className="overflow-hidden rounded-2xl border border-steel">
        <iframe
          title="The Gripiz Bali Map"
          src="https://www.google.com/maps?q=Badung,+Bali&output=embed"
          className="h-80 w-full md:h-full"
          loading="lazy"
        />
      </div>
      <div className="card-fire">
        <h2 className="font-heading text-6xl uppercase">Location</h2>
        <p className="mt-4 text-lg">The Gripiz</p>
        <p className="text-whiteSmoke/80">Badung, Bali</p>
        <p className="mt-6 font-subheading text-xl uppercase text-burntOrange">Opening Hours</p>
        <p>10:00 – 22:00</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a className="btn-primary" href="https://maps.google.com/?q=Badung,+Bali" target="_blank">
            Google Maps
          </a>
          <a className="btn-secondary" href="https://wa.me/6281234567890" target="_blank">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
