import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight,
  Pencil, Flame, Wrench, Sparkles, Package, Check,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import about from "@/assets/vats-kommune.jpg";
import workshop from "@/assets/workshop.jpg";
import catMagnets from "@/assets/cat-magnets.jpg";
import catClocks from "@/assets/cat-clocks.jpg";
import catFrames from "@/assets/cat-frames.jpg";
import catLamps from "@/assets/cat-lamps.jpg";
import catKeychains from "@/assets/cat-keychains.jpg";
import catGifts from "@/assets/cat-gifts.jpg";
import catBusiness from "@/assets/cat-business.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import logoAsset from "@/assets/logo-misto.png";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MiSto Gravering — Handmade Wooden Souvenirs from Norway" },
      { name: "description", content: "Small Norwegian workshop near Haugesund crafting laser-engraved wooden souvenirs, clocks, LED lamps and corporate gifts inspired by Nordic culture." },
      { property: "og:title", content: "MiSto Gravering — Handmade Wooden Souvenirs from Norway" },
      { property: "og:description", content: "Laser-engraved wooden products inspired by Norwegian culture, nature and traditions." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

/* ------------------------------- helpers ------------------------------- */

function Logo({ light = false }: { light?: boolean }) {
  const color = light ? "text-bone" : "text-primary";
  return (
    <a href="#top" className={`flex items-center gap-3 ${color}`}>
      <img src={logoAsset} alt="MiSto Gravering logo" className="h-10 w-10 rounded-full object-contain" />
      <span className="font-display text-lg tracking-tight">MiSto<span className="opacity-60"> · Gravering</span></span>
    </a>
  );
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "What We Create" },
  { href: "#process", label: "Process" },
  { href: "#business", label: "For Business" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

/* ------------------------------- sections ------------------------------ */

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-bone/15 bg-fjord-deep/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Logo light />
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-bone/80 hover:text-bone transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden lg:inline-flex items-center gap-1.5 text-sm text-fjord-deep bg-bone px-4 py-2 rounded-sm hover:bg-wood hover:text-bone transition-colors">
          Start a project <ArrowUpRight size={14} />
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-bone p-2" aria-label="Menu">
          <div className="w-5 h-px bg-bone mb-1.5" />
          <div className="w-5 h-px bg-bone" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-bone/15 bg-fjord-deep px-6 py-4 space-y-3">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-bone/85 text-sm">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden bg-fjord-deep">
      <img
        src={hero}
        alt="Norwegian fjord landscape with handcrafted wooden engraved products"
        width={1920} height={1280}
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-fjord-deep via-fjord-deep/50 to-fjord-deep/40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-20 pt-32 w-full">
        <div className="max-w-3xl text-bone">
          <p className="eyebrow text-bone/70 mb-6">Workshop · Haugesund, Norway</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mb-8">
            Handmade wooden souvenirs<br />
            <span className="italic text-wood">& custom creations</span> from Norway
          </h1>
          <p className="text-lg text-bone/80 max-w-xl mb-10 leading-relaxed">
            We design and produce unique laser-engraved products inspired by Norwegian culture, nature and traditions — one piece at a time.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 bg-bone text-fjord-deep px-6 py-3.5 rounded-sm text-sm font-medium hover:bg-wood hover:text-bone transition-colors">
              Explore our work <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-bone/40 text-bone px-6 py-3.5 rounded-sm text-sm font-medium hover:bg-bone/10 transition-colors">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    { t: "Passion for craft", d: "Every piece is touched by hand — measured, sanded, finished with care." },
    { t: "Local production", d: "Made in a small workshop near Haugesund on Norway's west coast." },
    { t: "Laser precision", d: "Modern engraving technology for crisp detail on natural wood." },
    { t: "Attention to detail", d: "Materials, lines, and finish are checked before anything ships." },
  ];
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5">About the workshop</p>
          <h2 className="text-4xl lg:text-5xl mb-8 leading-tight">
            A small workshop with a love for wood, light and Nordic stories.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            MiSto Gravering is a family-run workshop based near Haugesund on Norway's western coast. We combine traditional craftsmanship with modern laser engraving to create wooden products that carry the spirit of fjords, forests and the old North.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every piece — from a single keychain to a full souvenir collection — is made locally, finished by hand, and built to last.
          </p>
        </div>
        <div className="lg:col-span-7 space-y-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
            <img src={about} alt="Aerial view of the Haugesund coastline" width={1600} height={1100} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {points.map(p => (
              <div key={p.t} className="border-t border-border pt-5">
                <h3 className="font-display text-xl mb-2">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const cats = [
    { img: catMagnets, title: "Wooden Magnets", note: "Souvenir & series" },
    { img: catClocks, title: "Wooden Clocks", note: "Wall & desk" },
    { img: catFrames, title: "Photo Frames", note: "Engraved borders" },
    { img: catLamps, title: "LED Lamps", note: "Warm ambient light" },
    { img: catKeychains, title: "Keychains", note: "Runes & symbols" },
    { img: catGifts, title: "Personalized Gifts", note: "Names & dates" },
    { img: catBusiness, title: "Custom Business Products", note: "Logos & merch" },
  ];
  return (
    <section id="work" className="py-24 lg:py-32 bg-fjord-deep text-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-bone/60 mb-5">What we create</p>
            <h2 className="text-4xl lg:text-5xl leading-tight">
              Seven collections, one workshop —<br />
              <span className="italic text-wood">all carved in wood.</span>
            </h2>
          </div>
          <p className="text-bone/70 max-w-md text-sm leading-relaxed">
            Each category can be customized with your own designs, names or branding. Small runs and one-of-a-kind orders are always welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[320px]">
          {cats.map((c, i) => (
            <a
              key={c.title}
              href="#contact"
              className={`group relative overflow-hidden rounded-sm bg-fjord "lg:row-span-2 lg:aspect-auto" : "aspect-[4/5]"}`}
            >
              <img
                src={c.img}
                alt={c.title}
                width={1200} height={1200} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fjord-deep/85 via-fjord-deep/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                <div>
                  <p className="text-xs text-bone/60 mb-1">{c.note}</p>
                  <h3 className="font-display text-2xl text-bone">{c.title}</h3>
                </div>
                <ArrowUpRight size={20} className="text-bone/80 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { icon: Pencil, t: "Design", d: "We sketch and prepare the artwork — your file or our design." },
    { icon: Flame, t: "Laser Engraving", d: "Precise burning on natural wood reveals the pattern." },
    { icon: Wrench, t: "Assembly", d: "Parts are cut, fitted and joined by hand in the workshop." },
    { icon: Sparkles, t: "Finishing", d: "Sanded, oiled and inspected piece by piece." },
    { icon: Package, t: "Delivery", d: "Carefully packed and shipped wherever it needs to go." },
  ];
  return (
    <section id="process" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow mb-5">How we work</p>
            <h2 className="text-4xl lg:text-5xl mb-8 leading-tight">
              From rough idea to finished piece, made in five honest steps.
            </h2>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img src={workshop} alt="Laser engraving a Nordic pattern on birch wood" width={1600} height={1100} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <ol className="lg:col-span-7 space-y-0">
            {steps.map((s, i) => (
              <li key={s.t} className="flex gap-6 py-8 border-t border-border last:border-b">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-sm bg-fjord-deep text-bone flex items-center justify-center">
                    <s.icon size={18} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">0{i + 1}</p>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-display text-2xl mb-2">{s.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Business() {
  const services = [
    "Souvenir collections", "Private label products", "Custom logo engraving",
    "Corporate gifts", "Wholesale orders", "Tourist attraction merchandise",
  ];
  return (
    <section id="business" className="py-24 lg:py-32 bg-wood/15 wood-grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-5">For business</p>
          <h2 className="text-4xl lg:text-5xl leading-tight mb-8">
            Looking for unique products for your shop or business?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            We work with souvenir shops, tourism operators, hotels and brands across Norway. From a small custom batch to a full private-label collection — we'll design and produce it locally.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-fjord-deep text-bone px-6 py-3.5 rounded-sm text-sm font-medium hover:bg-wood-deep transition-colors">
            Discuss a partnership <ArrowUpRight size={16} />
          </a>
        </div>
        <ul className="lg:col-span-6 grid sm:grid-cols-2 gap-x-8 gap-y-1 self-center">
          {services.map(s => (
            <li key={s} className="flex items-center gap-3 py-4 border-b border-fjord-deep/15">
              <Check size={16} className="text-wood-deep" />
              <span className="font-display text-lg">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { img: g1, t: "Viking longship plaque", tag: "Vikings" },
    { img: g2, t: "Wooden map of Norway", tag: "Fjords" },
    { img: g3, t: "Forest troll figurine", tag: "Folklore" },
    { img: g4, t: "Haugesund harbor coaster", tag: "Haugesund" },
    { img: catLamps, t: "Mountain silhouette lamp", tag: "Mountains" },
    { img: catClocks, t: "Nordic landscape clock", tag: "Landscapes" },
  ];
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-5">Selected work</p>
            <h2 className="text-4xl lg:text-5xl leading-tight max-w-2xl">
              A small gallery from <span className="italic text-wood-deep">fjords, runes and mountains.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Pieces inspired by Haugesund landmarks, Norwegian landscapes, Vikings, Nordic symbols and the small trolls of the forest.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <figure
              key={it.t}
              className={`group relative overflow-hidden rounded-sm bg-muted ${
                "relative overflow-hidden rounded-sm bg-muted"
              }`}
            >
              <img src={it.img} alt={it.t} width={1200} height={1500} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-fjord-deep/85 to-transparent text-bone">
                <p className="text-[10px] tracking-widest uppercase text-bone/60 mb-1">{it.tag}</p>
                <p className="font-display text-base">{it.t}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { n: "01", t: "Handmade in Norway", d: "Designed and produced in our own workshop — never outsourced." },
    { n: "02", t: "Flexible production", d: "From a single personalized piece to recurring wholesale runs." },
    { n: "03", t: "Custom designs", d: "We help shape your idea or work directly from your artwork." },
    { n: "04", t: "Fast communication", d: "Talk directly to the people who make the products." },
    { n: "05", t: "High-quality materials", d: "Carefully selected Nordic woods, finishes and components." },
    { n: "06", t: "Any order size", d: "Small and large quantities welcome — same care, every time." },
  ];
  return (
    <section className="py-24 lg:py-32 bg-fjord-deep text-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-bone/60 mb-5">Why work with us</p>
          <h2 className="text-4xl lg:text-5xl leading-tight">
            Six reasons our partners come back, <span className="italic text-wood">season after season.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2">
          {items.map(i => (
            <div key={i.n} className="border-t border-bone/15 py-7">
              <p className="font-display text-wood text-sm mb-3">{i.n}</p>
              <h3 className="font-display text-2xl mb-2">{i.t}</h3>
              <p className="text-sm text-bone/65 leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5">Get in touch</p>
          <h2 className="text-4xl lg:text-5xl leading-tight mb-8">
            Tell us about your idea —<br /><span className="italic text-wood-deep">we'd love to make it.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
            Whether it's a single personalized gift, a souvenir line for your shop or a corporate collection — drop us a message and we'll get back to you within a day or two.
          </p>

          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-4">
              <Phone size={18} className="text-wood-deep mt-0.5" />
              <div>
                <p className="eyebrow mb-1">Phone</p>
                <a href="tel:+4745012059" className="font-display text-lg text-foreground">+47 450 12 059</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail size={18} className="text-wood-deep mt-0.5" />
              <div>
                <p className="eyebrow mb-1">Email</p>
                <a href="mailto:misto.gravering@gmail.com" className="font-display text-lg text-foreground">misto.gravering@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin size={18} className="text-wood-deep mt-0.5" />
              <div>
                <p className="eyebrow mb-1">Workshop</p>
                <p className="font-display text-lg">Haukelivegen 576 Øvre Vats, Norway</p>
              </div>
            </li>
            <li className="flex items-center gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:bg-fjord-deep hover:text-bone hover:border-fjord-deep transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578675510732" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:bg-fjord-deep hover:text-bone hover:border-fjord-deep transition-colors">
                <Facebook size={16} />
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-7 bg-card border border-border rounded-sm p-8 lg:p-10 shadow-[var(--shadow-soft)]"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Company (optional)" name="company" />
            <Field label="Phone (optional)" name="phone" />
          </div>
          <div className="mt-5">
            <label className="block">
              <span className="eyebrow block mb-2">Tell us about your project</span>
              <textarea
                required
                rows={5}
                name="message"
                className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-fjord resize-none"
                placeholder="Quantities, ideas, deadlines…"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={sent}
            className="mt-6 inline-flex items-center gap-2 bg-fjord-deep text-bone px-6 py-3.5 rounded-sm text-sm font-medium hover:bg-wood-deep transition-colors disabled:opacity-70"
          >
            {sent ? "Thank you — we'll be in touch" : "Send message"} {!sent && <ArrowUpRight size={16} />}
          </button>
          <p className="text-xs text-muted-foreground mt-4">
            By sending you agree we may contact you about your inquiry.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}</span>
      <input
        name={name}
        type={type}
        required={type !== "text" || name === "name"}
        className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-fjord"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-fjord-deep text-bone/80 border-t border-bone/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo light />
          <p className="text-sm text-bone/60 mt-5 max-w-sm leading-relaxed">
            A small Norwegian workshop crafting laser-engraved wooden products inspired by Nordic culture, nature and traditions.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-bone/50 mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map(l => (
              <li key={l.href}><a href={l.href} className="hover:text-bone">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-bone/50 mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-bone/70">
            <li>Haukelivegen 576 Øvre Vats, Norway</li>
            <li><a href="mailto:misto.gravering@gmail.com" className="hover:text-bone">misto.gravering@gmail.com</a></li>
            <li><a href="tel:+4745012059" className="hover:text-bone">+47 450 12 059</a></li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="https://instagram.com" aria-label="Instagram" className="w-9 h-9 rounded-sm border border-bone/20 flex items-center justify-center hover:bg-bone hover:text-fjord-deep transition-colors"><Instagram size={14} /></a>
            <a href="https://www.facebook.com/profile.php?id=61578675510732" aria-label="Facebook" className="w-9 h-9 rounded-sm border border-bone/20 flex items-center justify-center hover:bg-bone hover:text-fjord-deep transition-colors"><Facebook size={14} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-bone/50">
          <p>© {new Date().getFullYear()} MiSto Gravering. Handmade in Norway.</p>
          <p>Laser engraving · Wooden craftsmanship · Custom orders</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Work />
      <Process />
      <Business />
      <Gallery />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
