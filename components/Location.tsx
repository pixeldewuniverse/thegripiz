export default function Location() {
  return (
    <section id="location" className="bg-[#111111] py-24 px-6">

      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">

        {/* Info */}
        <div>

          <h2 className="font-heading text-5xl uppercase text-whiteSmoke">
            Location
          </h2>

          <p className="mt-6 text-whiteSmoke/80 text-lg">
            The Gripiz
          </p>

          <p className="text-whiteSmoke/70">
            Kuta, Badung, Bali, Indonesia
          </p>

          <div className="mt-6">

            <p className="text-burntOrange uppercase text-sm">
              Opening Hours
            </p>

            <p className="text-whiteSmoke">
              Daily — 10:00 AM – 11:00 PM
            </p>

          </div>

          <a
            href="https://maps.google.com/?q=The Gripiz Bali"
            target="_blank"
            className="btn-primary mt-8 inline-block"
          >
            Get Directions
          </a>

        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-2xl shadow-xl h-[420px]">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.752351308523!2d115.16546987526196!3d-8.715050791334306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23fa85de11235%3A0xff8e378dc21febd4!2sThe%20Gripiz!5e0!3m2!1sen!2sid!4v1773620728161!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />

        </div>

      </div>

    </section>
  )
}
