import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowUpRight, Pencil, Flame, Wrench, Sparkles, Package, Check, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { h as hero } from "./router-BVhY1UU2.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
const about = "/assets/vats-kommune-DL3RtNjg.jpg";
const workshop = "/assets/workshop-BO1AeyGE.jpg";
const catMagnets = "/assets/cat-magnets-CCxAdwXi.jpg";
const catClocks = "/assets/cat-clocks-BFKmSXek.jpg";
const catFrames = "/assets/cat-frames-ByahnQLN.jpg";
const catLamps = "/assets/cat-lamps-xaEn6kWX.jpg";
const catKeychains = "/assets/cat-keychains-B0ccaXlw.jpg";
const catGifts = "/assets/cat-gifts-4gM-d1Os.jpg";
const catBusiness = "/assets/cat-business-ByqLZ7jh.jpg";
const g1 = "/assets/gallery-1-DlzwL8xy.jpg";
const g2 = "/assets/gallery-2-41WpPAdN.jpg";
const g3 = "/assets/gallery-3-D-gQS2ta.jpg";
const logoAsset = "/assets/logo-misto-Bia6khnP.png";
const g4 = "/assets/gallery-4---dcXAPF.jpg";
function Logo({
  light = false
}) {
  const color = light ? "text-bone" : "text-primary";
  return /* @__PURE__ */ jsxs("a", { href: "#top", className: `flex items-center gap-3 ${color}`, children: [
    /* @__PURE__ */ jsx("img", { src: logoAsset, alt: "MiSto Gravering logo", className: "h-10 w-10 rounded-full object-contain" }),
    /* @__PURE__ */ jsxs("span", { className: "font-display text-lg tracking-tight", children: [
      "MiSto",
      /* @__PURE__ */ jsx("span", { className: "opacity-60", children: " · Gravering" })
    ] })
  ] });
}
const navLinks = [{
  href: "#about",
  label: "About"
}, {
  href: "#work",
  label: "What We Create"
}, {
  href: "#process",
  label: "Process"
}, {
  href: "#business",
  label: "For Business"
}, {
  href: "#gallery",
  label: "Gallery"
}, {
  href: "#contact",
  label: "Contact"
}];
function Header() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 inset-x-0 z-50 border-b border-bone/15 bg-fjord-deep/70 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Logo, { light: true }),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-8", children: navLinks.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, className: "text-sm text-bone/80 hover:text-bone transition-colors", children: l.label }, l.href)) }),
      /* @__PURE__ */ jsxs("a", { href: "#contact", className: "hidden lg:inline-flex items-center gap-1.5 text-sm text-fjord-deep bg-bone px-4 py-2 rounded-sm hover:bg-wood hover:text-bone transition-colors", children: [
        "Start a project ",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: () => setOpen(!open), className: "lg:hidden text-bone p-2", "aria-label": "Menu", children: [
        /* @__PURE__ */ jsx("div", { className: "w-5 h-px bg-bone mb-1.5" }),
        /* @__PURE__ */ jsx("div", { className: "w-5 h-px bg-bone" })
      ] })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t border-bone/15 bg-fjord-deep px-6 py-4 space-y-3", children: navLinks.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, onClick: () => setOpen(false), className: "block text-bone/85 text-sm", children: l.label }, l.href)) })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen flex items-end overflow-hidden bg-fjord-deep", children: [
    /* @__PURE__ */ jsx("img", { src: hero, alt: "Norwegian fjord landscape with handcrafted wooden engraved products", width: 1920, height: 1280, className: "absolute inset-0 w-full h-full object-cover opacity-90" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-fjord-deep via-fjord-deep/50 to-fjord-deep/40" }),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-10 pb-20 pt-32 w-full", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl text-bone", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow text-bone/70 mb-6", children: "Workshop · Haugesund, Norway" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mb-8", children: [
        "Handmade wooden souvenirs",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-wood", children: "& custom creations" }),
        " from Norway"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-bone/80 max-w-xl mb-10 leading-relaxed", children: "We design and produce unique laser-engraved products inspired by Norwegian culture, nature and traditions — one piece at a time." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxs("a", { href: "#work", className: "inline-flex items-center gap-2 bg-bone text-fjord-deep px-6 py-3.5 rounded-sm text-sm font-medium hover:bg-wood hover:text-bone transition-colors", children: [
          "Explore our work ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "inline-flex items-center gap-2 border border-bone/40 text-bone px-6 py-3.5 rounded-sm text-sm font-medium hover:bg-bone/10 transition-colors", children: "Contact us" })
      ] })
    ] }) })
  ] });
}
function About() {
  const points = [{
    t: "Passion for craft",
    d: "Every piece is touched by hand — measured, sanded, finished with care."
  }, {
    t: "Local production",
    d: "Made in a small workshop near Haugesund on Norway's west coast."
  }, {
    t: "Laser precision",
    d: "Modern engraving technology for crisp detail on natural wood."
  }, {
    t: "Attention to detail",
    d: "Materials, lines, and finish are checked before anything ships."
  }];
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow mb-5", children: "About the workshop" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl mb-8 leading-tight", children: "A small workshop with a love for wood, light and Nordic stories." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-5", children: "MiSto Gravering is a family-run workshop based near Haugesund on Norway's western coast. We combine traditional craftsmanship with modern laser engraving to create wooden products that carry the spirit of fjords, forests and the old North." }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Every piece — from a single keychain to a full souvenir collection — is made locally, finished by hand, and built to last." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "relative aspect-[16/10] overflow-hidden rounded-sm", children: /* @__PURE__ */ jsx("img", { src: about, alt: "Aerial view of the Haugesund coastline", width: 1600, height: 1100, loading: "lazy", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-x-10 gap-y-6", children: points.map((p) => /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl mb-2", children: p.t }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.d })
      ] }, p.t)) })
    ] })
  ] }) });
}
function Work() {
  const cats = [{
    img: catMagnets,
    title: "Wooden Magnets",
    note: "Souvenir & series"
  }, {
    img: catClocks,
    title: "Wooden Clocks",
    note: "Wall & desk"
  }, {
    img: catFrames,
    title: "Photo Frames",
    note: "Engraved borders"
  }, {
    img: catLamps,
    title: "LED Lamps",
    note: "Warm ambient light"
  }, {
    img: catKeychains,
    title: "Keychains",
    note: "Runes & symbols"
  }, {
    img: catGifts,
    title: "Personalized Gifts",
    note: "Names & dates"
  }, {
    img: catBusiness,
    title: "Custom Business Products",
    note: "Logos & merch"
  }];
  return /* @__PURE__ */ jsx("section", { id: "work", className: "py-24 lg:py-32 bg-fjord-deep text-bone", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-bone/60 mb-5", children: "What we create" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl lg:text-5xl leading-tight", children: [
          "Seven collections, one workshop —",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic text-wood", children: "all carved in wood." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-bone/70 max-w-md text-sm leading-relaxed", children: "Each category can be customized with your own designs, names or branding. Small runs and one-of-a-kind orders are always welcome." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[320px]", children: cats.map((c, i) => /* @__PURE__ */ jsxs("a", { href: "#contact", className: `group relative overflow-hidden rounded-sm bg-fjord "lg:row-span-2 lg:aspect-auto" : "aspect-[4/5]"}`, children: [
      /* @__PURE__ */ jsx("img", { src: c.img, alt: c.title, width: 1200, height: 1200, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-fjord-deep/85 via-fjord-deep/10 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 flex items-end justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-bone/60 mb-1", children: c.note }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl text-bone", children: c.title })
        ] }),
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 20, className: "text-bone/80 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" })
      ] })
    ] }, c.title)) })
  ] }) });
}
function Process() {
  const steps = [{
    icon: Pencil,
    t: "Design",
    d: "We sketch and prepare the artwork — your file or our design."
  }, {
    icon: Flame,
    t: "Laser Engraving",
    d: "Precise burning on natural wood reveals the pattern."
  }, {
    icon: Wrench,
    t: "Assembly",
    d: "Parts are cut, fitted and joined by hand in the workshop."
  }, {
    icon: Sparkles,
    t: "Finishing",
    d: "Sanded, oiled and inspected piece by piece."
  }, {
    icon: Package,
    t: "Delivery",
    d: "Carefully packed and shipped wherever it needs to go."
  }];
  return /* @__PURE__ */ jsx("section", { id: "process", className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-20 items-start", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 lg:sticky lg:top-28", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow mb-5", children: "How we work" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl mb-8 leading-tight", children: "From rough idea to finished piece, made in five honest steps." }),
      /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/3] overflow-hidden rounded-sm", children: /* @__PURE__ */ jsx("img", { src: workshop, alt: "Laser engraving a Nordic pattern on birch wood", width: 1600, height: 1100, loading: "lazy", className: "w-full h-full object-cover" }) })
    ] }),
    /* @__PURE__ */ jsx("ol", { className: "lg:col-span-7 space-y-0", children: steps.map((s, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-6 py-8 border-t border-border last:border-b", children: [
      /* @__PURE__ */ jsxs("div", { className: "shrink-0", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-sm bg-fjord-deep text-bone flex items-center justify-center", children: /* @__PURE__ */ jsx(s.icon, { size: 18 }) }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-2 text-center", children: [
          "0",
          i + 1
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 pt-1", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl mb-2", children: s.t }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: s.d })
      ] })
    ] }, s.t)) })
  ] }) }) });
}
function Business() {
  const services = ["Souvenir collections", "Private label products", "Custom logo engraving", "Corporate gifts", "Wholesale orders", "Tourist attraction merchandise"];
  return /* @__PURE__ */ jsx("section", { id: "business", className: "py-24 lg:py-32 bg-wood/15 wood-grain", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow mb-5", children: "For business" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl leading-tight mb-8", children: "Looking for unique products for your shop or business?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-8 max-w-lg", children: "We work with souvenir shops, tourism operators, hotels and brands across Norway. From a small custom batch to a full private-label collection — we'll design and produce it locally." }),
      /* @__PURE__ */ jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 bg-fjord-deep text-bone px-6 py-3.5 rounded-sm text-sm font-medium hover:bg-wood-deep transition-colors", children: [
        "Discuss a partnership ",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
      ] })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "lg:col-span-6 grid sm:grid-cols-2 gap-x-8 gap-y-1 self-center", children: services.map((s) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 py-4 border-b border-fjord-deep/15", children: [
      /* @__PURE__ */ jsx(Check, { size: 16, className: "text-wood-deep" }),
      /* @__PURE__ */ jsx("span", { className: "font-display text-lg", children: s })
    ] }, s)) })
  ] }) });
}
function Gallery() {
  const items = [{
    img: g1,
    t: "Viking longship plaque",
    tag: "Vikings"
  }, {
    img: g2,
    t: "Wooden map of Norway",
    tag: "Fjords"
  }, {
    img: g3,
    t: "Forest troll figurine",
    tag: "Folklore"
  }, {
    img: g4,
    t: "Haugesund harbor coaster",
    tag: "Haugesund"
  }, {
    img: catLamps,
    t: "Mountain silhouette lamp",
    tag: "Mountains"
  }, {
    img: catClocks,
    t: "Nordic landscape clock",
    tag: "Landscapes"
  }];
  return /* @__PURE__ */ jsx("section", { id: "gallery", className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow mb-5", children: "Selected work" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl lg:text-5xl leading-tight max-w-2xl", children: [
          "A small gallery from ",
          /* @__PURE__ */ jsx("span", { className: "italic text-wood-deep", children: "fjords, runes and mountains." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-sm", children: "Pieces inspired by Haugesund landmarks, Norwegian landscapes, Vikings, Nordic symbols and the small trolls of the forest." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-4", children: items.map((it, i) => /* @__PURE__ */ jsxs("figure", { className: `group relative overflow-hidden rounded-sm bg-muted ${"relative overflow-hidden rounded-sm bg-muted"}`, children: [
      /* @__PURE__ */ jsx("img", { src: it.img, alt: it.t, width: 1200, height: 1500, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" }),
      /* @__PURE__ */ jsxs("figcaption", { className: "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-fjord-deep/85 to-transparent text-bone", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-widest uppercase text-bone/60 mb-1", children: it.tag }),
        /* @__PURE__ */ jsx("p", { className: "font-display text-base", children: it.t })
      ] })
    ] }, it.t)) })
  ] }) });
}
function WhyUs() {
  const items = [{
    n: "01",
    t: "Handmade in Norway",
    d: "Designed and produced in our own workshop — never outsourced."
  }, {
    n: "02",
    t: "Flexible production",
    d: "From a single personalized piece to recurring wholesale runs."
  }, {
    n: "03",
    t: "Custom designs",
    d: "We help shape your idea or work directly from your artwork."
  }, {
    n: "04",
    t: "Fast communication",
    d: "Talk directly to the people who make the products."
  }, {
    n: "05",
    t: "High-quality materials",
    d: "Carefully selected Nordic woods, finishes and components."
  }, {
    n: "06",
    t: "Any order size",
    d: "Small and large quantities welcome — same care, every time."
  }];
  return /* @__PURE__ */ jsx("section", { className: "py-24 lg:py-32 bg-fjord-deep text-bone", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-16", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow text-bone/60 mb-5", children: "Why work with us" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl lg:text-5xl leading-tight", children: [
        "Six reasons our partners come back, ",
        /* @__PURE__ */ jsx("span", { className: "italic text-wood", children: "season after season." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2", children: items.map((i) => /* @__PURE__ */ jsxs("div", { className: "border-t border-bone/15 py-7", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-wood text-sm mb-3", children: i.n }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl mb-2", children: i.t }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-bone/65 leading-relaxed", children: i.d })
    ] }, i.n)) })
  ] }) });
}
function Contact() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow mb-5", children: "Get in touch" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl lg:text-5xl leading-tight mb-8", children: [
        "Tell us about your idea —",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-wood-deep", children: "we'd love to make it." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-10 max-w-md", children: "Whether it's a single personalized gift, a souvenir line for your shop or a corporate collection — drop us a message and we'll get back to you within a day or two." }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-5 text-sm", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(Phone, { size: 18, className: "text-wood-deep mt-0.5" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow mb-1", children: "Phone" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+4745012059", className: "font-display text-lg text-foreground", children: "+47 450 12 059" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(Mail, { size: 18, className: "text-wood-deep mt-0.5" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow mb-1", children: "Email" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:misto.gravering@gmail.com", className: "font-display text-lg text-foreground", children: "misto.gravering@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 18, className: "text-wood-deep mt-0.5" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow mb-1", children: "Workshop" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-lg", children: "Haukelivegen 576 Øvre Vats, Norway" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-4 pt-2", children: [
          /* @__PURE__ */ jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noreferrer", "aria-label": "Instagram", className: "w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:bg-fjord-deep hover:text-bone hover:border-fjord-deep transition-colors", children: /* @__PURE__ */ jsx(Instagram, { size: 16 }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/profile.php?id=61578675510732", target: "_blank", rel: "noreferrer", "aria-label": "Facebook", className: "w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:bg-fjord-deep hover:text-bone hover:border-fjord-deep transition-colors", children: /* @__PURE__ */ jsx(Facebook, { size: 16 }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      setSent(true);
    }, className: "lg:col-span-7 bg-card border border-border rounded-sm p-8 lg:p-10 shadow-[var(--shadow-soft)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsx(Field, { label: "Your name", name: "name" }),
        /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email" }),
        /* @__PURE__ */ jsx(Field, { label: "Company (optional)", name: "company" }),
        /* @__PURE__ */ jsx(Field, { label: "Phone (optional)", name: "phone" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow block mb-2", children: "Tell us about your project" }),
        /* @__PURE__ */ jsx("textarea", { required: true, rows: 5, name: "message", className: "w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-fjord resize-none", placeholder: "Quantities, ideas, deadlines…" })
      ] }) }),
      /* @__PURE__ */ jsxs("button", { type: "submit", disabled: sent, className: "mt-6 inline-flex items-center gap-2 bg-fjord-deep text-bone px-6 py-3.5 rounded-sm text-sm font-medium hover:bg-wood-deep transition-colors disabled:opacity-70", children: [
        sent ? "Thank you — we'll be in touch" : "Send message",
        " ",
        !sent && /* @__PURE__ */ jsx(ArrowUpRight, { size: 16 })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "By sending you agree we may contact you about your inquiry." })
    ] })
  ] }) });
}
function Field({
  label,
  name,
  type = "text"
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "eyebrow block mb-2", children: label }),
    /* @__PURE__ */ jsx("input", { name, type, required: type !== "text" || name === "name", className: "w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-fjord" })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-fjord-deep text-bone/80 border-t border-bone/10", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx(Logo, { light: true }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-bone/60 mt-5 max-w-sm leading-relaxed", children: "A small Norwegian workshop crafting laser-engraved wooden products inspired by Nordic culture, nature and traditions." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-bone/50 mb-4", children: "Navigate" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: navLinks.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: l.href, className: "hover:text-bone", children: l.label }) }, l.href)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-bone/50 mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-bone/70", children: [
          /* @__PURE__ */ jsx("li", { children: "Haukelivegen 576 Øvre Vats, Norway" }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:misto.gravering@gmail.com", className: "hover:text-bone", children: "misto.gravering@gmail.com" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+4745012059", className: "hover:text-bone", children: "+47 450 12 059" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-5", children: [
          /* @__PURE__ */ jsx("a", { href: "https://instagram.com", "aria-label": "Instagram", className: "w-9 h-9 rounded-sm border border-bone/20 flex items-center justify-center hover:bg-bone hover:text-fjord-deep transition-colors", children: /* @__PURE__ */ jsx(Instagram, { size: 14 }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/profile.php?id=61578675510732", "aria-label": "Facebook", className: "w-9 h-9 rounded-sm border border-bone/20 flex items-center justify-center hover:bg-bone hover:text-fjord-deep transition-colors", children: /* @__PURE__ */ jsx(Facebook, { size: 14 }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-bone/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-bone/50", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " MiSto Gravering. Handmade in Norway."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Laser engraving · Wooden craftsmanship · Custom orders" })
    ] }) })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Work, {}),
    /* @__PURE__ */ jsx(Process, {}),
    /* @__PURE__ */ jsx(Business, {}),
    /* @__PURE__ */ jsx(Gallery, {}),
    /* @__PURE__ */ jsx(WhyUs, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as component
};
