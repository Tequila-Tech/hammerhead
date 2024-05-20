import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, d as addAttribute, e as createAstro } from '../astro_cnU6Fyo2.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './about_Cd89YsST.mjs';
import { $ as $$HeroImage } from './packages_B9c_LuRB.mjs';
import { d as $$MainCtaBtn, c as $$ReadyToBook, e as $$MiniLinks } from './index_B1ry3h91.mjs';
/* empty css                              */
import 'clsx';
import { $ as $$FormsToDownload } from './booking_LdsI7j3f.mjs';

const $$Astro$1 = createAstro();
const $$LionFishHunting = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LionFishHunting;
  const { title, content, content2 } = Astro2.props;
  const alt = "Photo of a reef with a clown fish coming out";
  return renderTemplate`${maybeRenderHead()}<div class="most-requested-wrapper" data-astro-cid-vmhmcgqm> <div class="wrapper" data-astro-cid-vmhmcgqm> <div class="content" data-astro-cid-vmhmcgqm> <h4 class="title" data-astro-cid-vmhmcgqm>${title}</h4> <p data-astro-cid-vmhmcgqm>${content}</p> <p data-astro-cid-vmhmcgqm>${content2}</p> <div class="CTA" data-astro-cid-vmhmcgqm> ${renderComponent($$result, "MainCtaBtn", $$MainCtaBtn, { "data-astro-cid-vmhmcgqm": true })} </div> </div> <div class="image" data-astro-cid-vmhmcgqm> <img class="image-item" src="/lionFish.jpg"${addAttribute(alt, "alt")} data-astro-cid-vmhmcgqm> </div> </div> </div> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/LionFishHunting.astro", void 0);

const $$Astro = createAstro();
const $$SpecialtyPriceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SpecialtyPriceCard;
  const { packageName, title, details, detailsBold } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<priceCard data-astro-cid-r5go72zx> <div class="main-card-wrapper" data-astro-cid-r5go72zx> <div class="title" data-astro-cid-r5go72zx> <h4 data-astro-cid-r5go72zx>${packageName}</h4> </div> <div class="content" data-astro-cid-r5go72zx> <div class="price" data-astro-cid-r5go72zx> <span data-astro-cid-r5go72zx>${title}</span> </div> <div class="description" data-astro-cid-r5go72zx> <p data-astro-cid-r5go72zx>${details}</p> <br data-astro-cid-r5go72zx> <p class="detailsBold" data-astro-cid-r5go72zx>${detailsBold}</p> </div> <div class="policy" data-astro-cid-r5go72zx> <p data-astro-cid-r5go72zx>Have any questions please let us know, we'd be happy to answer</p> </div> </div> <div class="cta" data-astro-cid-r5go72zx> <a href="/Booning" data-astro-cid-r5go72zx>Book Now</a> </div> </div> </priceCard> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/SpecialtyPriceCard.astro", void 0);

const $$Specialty = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hammer Head Cozumel | Dive Shop", "data-astro-cid-r22ikqu2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroImage", $$HeroImage, { "title": "SPECIALTY DIVES", "subtitle": "Explore vibrant reefs, ancient wrecks, and marine marvels with our expert guides, we are here to make your experience unforgettable.", "image": "/public/packageBg1.jpg", "alt": "diver looking at camera while diving in deep blue ocean", "data-astro-cid-r22ikqu2": true })} ${renderComponent($$result2, "LionFishHunting", $$LionFishHunting, { "title": "Lion Fish Hunting", "content": "Lion fish are beautiful yet non-native and invasive species in Caribbean waters. As a result, they have no natural predators to keep their population in balance. Their voracious appetite and rapid reproduction make them threats to our local marine species, and if left unchecked, they will cause irreparable damage. This is why we hunt them. Plus, they make for fabulous ceviche.", "content2": "In order to prevent damage to the environment or yourself, our expert guides will brief you on when to shoot and when not to shoot scenarios, as well as spear handling safety. Also, keep in mind that lion fish hunts can involve deep dives to depths of 100 feet or more, so dive experience and certification as a deep diver are advantageous.", "data-astro-cid-r22ikqu2": true })} ${maybeRenderHead()}<div class="specialty" data-astro-cid-r22ikqu2> <div class="image" data-astro-cid-r22ikqu2> <img class="image-item" src="/packageBg1.jpg" alt="foto de 3 busos en un arrefice con uchos peces" data-astro-cid-r22ikqu2> </div> <div class="content" data-astro-cid-r22ikqu2> ${renderComponent($$result2, "SpecialtyPriceCard", $$SpecialtyPriceCard, { "packageName": "Southern Reefs", "title": "What\u2019s Included", "details": `Colombia $8 USD extra
        
Punta sur $15 USD extra
        
Chan chucaab $15 USD extra
        
Maracaibo $20 USD extra`, "detailsBold": ``, "data-astro-cid-r22ikqu2": true })} ${renderComponent($$result2, "SpecialtyPriceCard", $$SpecialtyPriceCard, { "packageName": "Northern Reefs", "title": "What\u2019s Included", "details": `Barracuda $15 USD Extra
        
Cantarel (Eagle Rays Reef) $10 Usd Extra`, "detailsBold": `Experienced divers only, 50 dives minimum & 4 divers minimum`, "data-astro-cid-r22ikqu2": true })} ${renderComponent($$result2, "SpecialtyPriceCard", $$SpecialtyPriceCard, { "packageName": "Twilight/Night dive", "title": "What\u2019s Included", "details": `1 late afternoon dive 
        1 night dive, 
        2 tanks
        Weights, water & snacks included 
        
All for $99 USD`, "detailsBold": ``, "data-astro-cid-r22ikqu2": true })} </div> </div> ${renderComponent($$result2, "ReadyToBook", $$ReadyToBook, { "data-astro-cid-r22ikqu2": true })} ${renderComponent($$result2, "MiniLinks", $$MiniLinks, { "title1": "Life under water in Cozumel", "title2": "The Fascinating World of Bioluminescent Marine Life", "title3": "The Majestic Manta Ray", "text1": "Cozumel, Mexico, boasts vibrant coral reefs and diverse marine life, offering unforgettable diving and snorkeling experiences in crystal-clear waters.", "text2": "Dive into the enchanting phenomenon of bioluminescence in the ocean, where organisms emit light through chemical reactions, from tiny plankton to deep-sea fish", "text3": "Manta rays, massive yet gentle filter feeders, navigate oceans with grace, captivating observers worldwide. Threatened by habitat loss and targeted fishing, conservation efforts focus on safeguarding their habitats and regulating trade.", "link1": "/blog", "link2": "/blog", "link3": "/blog", "imageurl": "/image123.jpg", "data-astro-cid-r22ikqu2": true })} ${renderComponent($$result2, "FormsToDownload", $$FormsToDownload, { "data-astro-cid-r22ikqu2": true })} ` })} `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/specialty.astro", void 0);

const $$file = "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/specialty.astro";
const $$url = "/specialty";

export { $$Specialty as default, $$file as file, $$url as url };
