import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as createAstro, d as addAttribute } from '../astro_cnU6Fyo2.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */
import { $ as $$PriceCard, a as $$MostRequested, b as $$LocationMap, c as $$ReadyToBook } from './index_B1ry3h91.mjs';
/* empty css                             */
import { $ as $$Layout } from './about_Cd89YsST.mjs';
import { $ as $$FormsToDownload } from './booking_LdsI7j3f.mjs';

const $$HeroCtaBtn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<mainCtaBtn class="main-btn-component" data-astro-cid-vjyltmmj> <a href="/booking" class="book-now" data-astro-cid-vjyltmmj>Book Now</a> <a target="_blank" href="https://www.google.com/search?q=hammer+head+cozumel&oq=hammer+head+cozumel&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGDwyBggDEEUYPNIBCDk4MzVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x8f4e57005df3a099:0xe7e5a151dc640a4a,1,,,," class="reviews" data-astro-cid-vjyltmmj>Reviews</a> </mainCtaBtn> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/HeroCtaBtn.astro", void 0);

const $$Astro$1 = createAstro();
const $$HeroImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroImage;
  const { subtitle, title, image, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-hero", "astro-hero", { "data-astro-cid-v6eggwfy": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="hero-wrapper" data-astro-cid-v6eggwfy> <img${addAttribute(image, "src")}${addAttribute(alt, "alt")} data-astro-cid-v6eggwfy> <div class="content" data-astro-cid-v6eggwfy> <h1 data-astro-cid-v6eggwfy>${title}</h1> <p data-astro-cid-v6eggwfy>${subtitle}</p> <br data-astro-cid-v6eggwfy> ${renderComponent($$result, "HeroCtaBtn", $$HeroCtaBtn, { "data-astro-cid-v6eggwfy": true })} </div> </div> ` })} `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/HeroImage.astro", void 0);

const $$Astro = createAstro();
const $$PriceCardCustom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PriceCardCustom;
  const { packageName, price } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<priceCard data-astro-cid-ehy657xn> <div class="main-card-wrapper" data-astro-cid-ehy657xn> <div class="title" data-astro-cid-ehy657xn> <h4 data-astro-cid-ehy657xn>${packageName}</h4> </div> <div class="content" data-astro-cid-ehy657xn> <div class="price" data-astro-cid-ehy657xn> <span data-astro-cid-ehy657xn>${price}</span> <p data-astro-cid-ehy657xn>Make your own!</p> </div> <div class="description" data-astro-cid-ehy657xn> <p data-astro-cid-ehy657xn> What's your dream vacation? We will make it happen. Contact us.</p> </div> <div class="policy" data-astro-cid-ehy657xn> <p data-astro-cid-ehy657xn>Have any questions please let us know, we'd be happy to answer</p> <p data-astro-cid-ehy657xn></p> </div> </div> <div class="cta" data-astro-cid-ehy657xn> <a href="/Booning" data-astro-cid-ehy657xn>Book Now</a> </div> </div> </priceCard> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/PriceCardCustom.astro", void 0);

const $$Packages = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hammer Head Cozumel | Dive Shop", "data-astro-cid-fryxnq6r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroImage", $$HeroImage, { "title": "Choose your package and let\u2019s dive!", "subtitle": "Explore vibrant reefs, ancient wrecks, and marine marvels with our expert guides, we are here to make your experience unforgettable.", "image": "/packageHero.jpg", "alt": "diver looking at camera while diving in deep blue ocean", "data-astro-cid-fryxnq6r": true })} ${maybeRenderHead()}<div class="package-per-day" data-astro-cid-fryxnq6r> <div class="wrapper" data-astro-cid-fryxnq6r> <h2 class="title" data-astro-cid-fryxnq6r> PACKAGE PER DAY</h2> <div class="content" data-astro-cid-fryxnq6r> ${renderComponent($$result2, "PriceCard", $$PriceCard, { "packageName": "1 DAY", "price": "$95", "dives": "2 DIVE TANKS", "data-astro-cid-fryxnq6r": true })} ${renderComponent($$result2, "PriceCard", $$PriceCard, { "packageName": "2 DAY", "price": "$190", "dives": "4 DIVE TANKS", "data-astro-cid-fryxnq6r": true })} ${renderComponent($$result2, "PriceCard", $$PriceCard, { "packageName": "3 DAY", "price": "$270", "dives": "6 DIVE TANKS", "data-astro-cid-fryxnq6r": true })} ${renderComponent($$result2, "PriceCard", $$PriceCard, { "packageName": "4 DAY", "price": "$360", "dives": "8 DIVE TANKS", "data-astro-cid-fryxnq6r": true })} ${renderComponent($$result2, "PriceCard", $$PriceCard, { "packageName": "5 DAY", "price": "$450", "dives": "10 DIVE TANKS", "data-astro-cid-fryxnq6r": true })} </div> </div> </div> <div class="other-p" data-astro-cid-fryxnq6r> <div class="wrapper" data-astro-cid-fryxnq6r> <h2 class="title" data-astro-cid-fryxnq6r> PACKAGE PER DAY</h2> <div class="content" data-astro-cid-fryxnq6r> ${renderComponent($$result2, "PriceCard", $$PriceCard, { "packageName": "Afternoon Dive 1", "price": "$75", "dives": "2 DIVE TANKS", "data-astro-cid-fryxnq6r": true })} ${renderComponent($$result2, "PriceCardCustom", $$PriceCardCustom, { "packageName": "Custom Packages", "price": "$???", "data-astro-cid-fryxnq6r": true })} ${renderComponent($$result2, "PriceCard", $$PriceCard, { "packageName": "Afternoon Dive 2", "price": "$95", "dives": "6 DIVE TANKS", "data-astro-cid-fryxnq6r": true })} </div> </div> </div> ${renderComponent($$result2, "MostRequested", $$MostRequested, { "title": "Colombia reef our most requested dive site", "content": "Whether you are a seasoned diver chasing the perfect reef or a beginner eager to find the wonders of the ocean, our expert instructors and vibrant team staff are here to make your experience unforgettable.", "data-astro-cid-fryxnq6r": true })} ${renderComponent($$result2, "LocationMap", $$LocationMap, { "data-astro-cid-fryxnq6r": true })} ${renderComponent($$result2, "FormsToDownload", $$FormsToDownload, { "data-astro-cid-fryxnq6r": true })} ${renderComponent($$result2, "ReadyToBook", $$ReadyToBook, { "data-astro-cid-fryxnq6r": true })}  ` })}`;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/packages.astro", void 0);

const $$file = "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/packages.astro";
const $$url = "/packages";

const packages = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Packages,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HeroImage as $, packages as p };
