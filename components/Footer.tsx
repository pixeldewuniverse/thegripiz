export default function Footer() {
  return (
    <footer id="contact" className="border-t border-steel bg-black/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-5xl uppercase">The Gripiz</h3>
          <p className="mt-2 text-whiteSmoke/75">
            Premium smokehouse in Bali serving smoked grill, pizza, sandwich, pasta, and crafted drinks.
          </p>
        </div>
        <div>
          <h4 className="font-subheading text-2xl uppercase text-burntOrange">Motto</h4>
          <p className="mt-2 text-whiteSmoke/75">“Good service and good food never go out of business.”</p>
        </div>
        <div>
          <h4 className="font-subheading text-2xl uppercase text-burntOrange">Follow Us</h4>
          <ul className="mt-3 space-y-2 text-whiteSmoke/80">
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-steel py-4 text-center text-sm text-whiteSmoke/65">© The Gripiz</p>
    </footer>
  );
}
