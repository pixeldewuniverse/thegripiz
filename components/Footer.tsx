export default function Footer() {
  return (
    <footer id="contact" className="border-t border-steel bg-black/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-whiteSmoke text-5xl uppercase">The Gripiz</h3>
          <p className="mt-2 text-whiteSmoke/75">
            Premium smokehouse in Bali serving smoked grill, pizza, sandwich, pasta, and crafted drinks.
          </p>
        </div>
        <div>
          <h4 className="font-accent text-2xl uppercase text-burntOrange">Motto</h4>
          <p className="mt-2 text-whiteSmoke/75">“WOOD FIRE. SMOKED. UNFORGETTABLE.”</p>
        </div>
        <div>
          <h4 className="font-accent text-2xl uppercase text-burntOrange">Follow Us</h4>
          <div className="mt-6 flex items-center gap-6">
            <a
              href="https://www.instagram.com/thegripiz?igsh=d2tuZTJoeG1oa2Zk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wide text-whiteSmoke/70 transition hover:text-burntOrange"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@thegripiz?_r=1&_t=ZS-95EwBxrYuIu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wide text-whiteSmoke/70 transition hover:text-burntOrange"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-steel py-4 text-center text-sm text-whiteSmoke/65">© The Gripiz</p>
    </footer>
  );
}
