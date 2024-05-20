import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as createAstro, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_cnU6Fyo2.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-wrapper" data-astro-cid-sz7xmlte> <div class="menu" data-astro-cid-sz7xmlte> <div class="logo" data-astro-cid-sz7xmlte> <img class="img" src="/mainLogo.jpeg" alt="Logo" decoding="async" loading="lazy" loading="eager" data-astro-cid-sz7xmlte> </div> <div class="menu-list" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a class="text-red" href="#" data-astro-cid-sz7xmlte>Home</a></li> <li data-astro-cid-sz7xmlte><a href="/packages" data-astro-cid-sz7xmlte>Packages</a></li> <li data-astro-cid-sz7xmlte><a href="/specialty" data-astro-cid-sz7xmlte>Specialty Dives</a></li> <li data-astro-cid-sz7xmlte><a href="/snorkel" data-astro-cid-sz7xmlte>Snorkel Tours</a></li> <li data-astro-cid-sz7xmlte><a href="/about" data-astro-cid-sz7xmlte>About Us</a></li> <li data-astro-cid-sz7xmlte><a href="https://www.google.com/search?q=hammerhead+scuba+diving+cozumel&oq=hammer&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIOCAAQRRg5GEMYgAQYigUyBwgBEC4YgAQyBggCECMYJzIMCAMQABhDGIAEGIoFMgwIBBAAGEMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0NDAzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x8f4e57005df3a099:0xe7e5a151dc640a4a,1,,,," target="_blank" data-astro-cid-sz7xmlte>Reviews</a></li> <li data-astro-cid-sz7xmlte><a href="/blog" data-astro-cid-sz7xmlte>Blog</a></li> </div> </div> <span class="line" data-astro-cid-sz7xmlte></span> <span class="derechos" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte> © 2021 Hammer Head Cozumel. Todos los derechos reservados</p> </span> <div class="social-media" data-astro-cid-sz7xmlte> <div class="social-media-content" data-astro-cid-sz7xmlte> <a href="https://www.google.com/search?q=hammerhead+scuba+diving+cozumel&oq=hammer&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIOCAAQRRg5GEMYgAQYigUyBwgBEC4YgAQyBggCECMYJzIMCAMQABhDGIAEGIoFMgwIBBAAGEMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0NDAzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x8f4e57005df3a099:0xe7e5a151dc640a4a,1,,,," target="_blank" data-astro-cid-sz7xmlte>Instagram</a> <a href="https://www.google.com/search?q=hammerhead+scuba+diving+cozumel&oq=hammer&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIOCAAQRRg5GEMYgAQYigUyBwgBEC4YgAQyBggCECMYJzIMCAMQABhDGIAEGIoFMgwIBBAAGEMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0NDAzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x8f4e57005df3a099:0xe7e5a151dc640a4a,1,,,," target="_blank" data-astro-cid-sz7xmlte>Facebook</a> <a href="https://www.google.com/search?q=hammerhead+scuba+diving+cozumel&oq=hammer&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIOCAAQRRg5GEMYgAQYigUyBwgBEC4YgAQyBggCECMYJzIMCAMQABhDGIAEGIoFMgwIBBAAGEMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0NDAzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x8f4e57005df3a099:0xe7e5a151dc640a4a,1,,,," target="_blank" data-astro-cid-sz7xmlte>YouTube</a> </div> </div> </div> </footer> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/Footer.astro", void 0);

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return /* @__PURE__ */ jsxs("nav", { className: `main-wrapper ${isActive ? "active" : ""}`, children: [
    /* @__PURE__ */ jsx("div", { className: "logo", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "img",
        src: "/mainLogo.jpeg",
        alt: "Logo",
        decoding: "async",
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsxs("ul", { className: `nav-list ${isActive ? "active" : ""}`, children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "text-red", href: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/packages", children: "Packages" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/specialty", children: "Specialty Dives" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/snorkel", children: "Snorkel Tours" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/about", children: "About Us" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.google.com/search?q=hammerhead+scuba+diving+cozumel&oq=hammer&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIOCAAQRRg5GEMYgAQYigUyBwgBEC4YgAQyBggCECMYJzIMCAMQABhDGIAEGIoFMgwIBBAAGEMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0NDAzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x8f4e57005df3a099:0xe7e5a151dc640a4a,1,,,,",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Reviews"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/blog", children: "Blog" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "cta", children: /* @__PURE__ */ jsx("a", { className: "primary-cta", href: "/booking", children: "Book Now" }) }),
    /* @__PURE__ */ jsx("div", { className: "toggle", id: "tgt", onClick: handleToggle, children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "50",
        height: "50",
        fill: "currentColor",
        className: "bi bi-list",
        viewBox: "0 0 16 16",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          }
        )
      }
    ) })
  ] });
};

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body> <div class="body-wrapper"> ${renderComponent($$result, "Nav", NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/Nav.jsx", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div>  </body></html>`;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/layouts/Layout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About us | Hammer Head Cozumel" }, { "default": ($$result2) => renderTemplate`y
` })}`;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/about.astro", void 0);

const $$file = "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, about as a };
