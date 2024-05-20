import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_cnU6Fyo2.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$FormsToDownload } from './booking_LdsI7j3f.mjs';
import { $ as $$HeroImage } from './packages_B9c_LuRB.mjs';
import { d as $$MainCtaBtn, e as $$MiniLinks } from './index_B1ry3h91.mjs';
import 'clsx';
/* empty css                            */
import { $ as $$Layout } from './about_Cd89YsST.mjs';

const $$MiniGallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<miniGallery data-astro-cid-rn2nh6h4> <div class="wrapper" data-astro-cid-rn2nh6h4> <img class="image" src="/miniGallery/image1.jpeg" alt="boy and girl snorkeling at el cielo reef in cozumel" data-astro-cid-rn2nh6h4> <img class="image" src="/miniGallery/image2.jpg" alt="two people snorkeling but camera is also showing above water level" data-astro-cid-rn2nh6h4> <img class="image" src="/miniGallery/image3.webp" alt="girl snorkeling down to a reef in Cozumel Mexico's blue water" data-astro-cid-rn2nh6h4> <img class="image" src="/miniGallery/image4.jpeg" alt="Girl snorkeling next to a sea turtle in Cozumel's turtle reel" data-astro-cid-rn2nh6h4> <img class="image" src="/miniGallery/image5.jpeg" alt="Guy snorkels with large school of fish looks at camera and says hi" data-astro-cid-rn2nh6h4> </div> </miniGallery> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/MiniGallery.astro", void 0);

const $$Snorkel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hammer Head Cozumel | Dive Shop", "data-astro-cid-sgxljvpc": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroImage", $$HeroImage, { "title": "Snorkel Tours", "subtitle": "Explore vibrant reefs, ancient wrecks, and marine marvels with our expert guides, we are here to make your experience unforgettable.", "image": "/snorkel2.webp", "alt": "Girl snorkelink in a reef in Cozumel Mexico", "data-astro-cid-sgxljvpc": true })} ${maybeRenderHead()}<div class="info-container" data-astro-cid-sgxljvpc> <div class="wrapper" data-astro-cid-sgxljvpc> <h2 class="title" data-astro-cid-sgxljvpc>
Fun Snorkel Tour. We take to 4 Fabulous Snorkel sites:
</h2> <div class="content" data-astro-cid-sgxljvpc> <p data-astro-cid-sgxljvpc>Colombia Reef/Palancar Reef: They are some of the most famous reefs
          in the world and representative of the natural beauty of Cozumel.</p> <br data-astro-cid-sgxljvpc> <p data-astro-cid-sgxljvpc>El Cielito, crystal clear water, powdered white sand, shallow shore,
          commonly surrounded by Southern Sting Rays.</p> <br data-astro-cid-sgxljvpc> <p data-astro-cid-sgxljvpc>El Cielo, is a Gorgeous sandbar, you can see Starfish, and have up
          close encounters with marine life. And you also will enjoy the
          delicious refreshments we prepared for you in beautiful scenery!</p> <br data-astro-cid-sgxljvpc> <span class="price" data-astro-cid-sgxljvpc>$60 USD Person</span> <br data-astro-cid-sgxljvpc> <span class="price" data-astro-cid-sgxljvpc>$45 USD Kids</span> <br data-astro-cid-sgxljvpc> <span class="minimum" data-astro-cid-sgxljvpc>
Minimum of 4 Adults and one child (5-11) free per 4 adults & and kids
          from 12 years and on pay as an adult.
</span> <br data-astro-cid-sgxljvpc> <br data-astro-cid-sgxljvpc> <div class="cta" data-astro-cid-sgxljvpc> ${renderComponent($$result2, "MainCtaBtn", $$MainCtaBtn, { "data-astro-cid-sgxljvpc": true })} </div> </div> </div> </div> ${renderComponent($$result2, "MiniGallery", $$MiniGallery, { "data-astro-cid-sgxljvpc": true })} ${renderComponent($$result2, "MiniLinks", $$MiniLinks, { "title1": "Life under water in Cozumel", "title2": "The Fascinating World of Bioluminescent Marine Life", "title3": "The Majestic Manta Ray", "text1": "Cozumel, Mexico, boasts vibrant coral reefs and diverse marine life, offering unforgettable diving and snorkeling experiences in crystal-clear waters.", "text2": "Dive into the enchanting phenomenon of bioluminescence in the ocean, where organisms emit light through chemical reactions, from tiny plankton to deep-sea fish", "text3": "Manta rays, massive yet gentle filter feeders, navigate oceans with grace, captivating observers worldwide. Threatened by habitat loss and targeted fishing, conservation efforts focus on safeguarding their habitats and regulating trade.", "link1": "/blog", "link2": "/blog", "link3": "/blog", "imageurl": "/image123.jpg", "data-astro-cid-sgxljvpc": true })} ${renderComponent($$result2, "FormsToDownload", $$FormsToDownload, { "data-astro-cid-sgxljvpc": true })} ` })} `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/snorkel.astro", void 0);

const $$file = "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/snorkel.astro";
const $$url = "/snorkel";

export { $$Snorkel as default, $$file as file, $$url as url };
