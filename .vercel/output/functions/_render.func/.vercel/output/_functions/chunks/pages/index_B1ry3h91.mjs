import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as createAstro, f as renderComponent } from '../astro_cnU6Fyo2.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './about_Cd89YsST.mjs';
/* empty css                          */
import 'clsx';
/* empty css                          */
/* empty css                              */
/* empty css                          */
import { $ as $$FormsToDownload } from './booking_LdsI7j3f.mjs';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$PriceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PriceCard;
  const captainAlt = "GUIDED BOAT DIVE";
  const sandwichAlt = "SANDWICHES";
  const weightAlt = "WEIGHTS";
  const waterAlt = "WATER";
  const fruitAlt = "FRUIT";
  const { packageName, price, dives } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<priceCard data-astro-cid-tyya4faj> <div class="main-card-wrapper" data-astro-cid-tyya4faj> <div class="title" data-astro-cid-tyya4faj> <h4 data-astro-cid-tyya4faj>${packageName}</h4> </div> <div class="content" data-astro-cid-tyya4faj> <div class="price" data-astro-cid-tyya4faj> <span data-astro-cid-tyya4faj>${price}</span> <p data-astro-cid-tyya4faj> What's Included</p> </div> <div class="description" data-astro-cid-tyya4faj> <div class="item" data-astro-cid-tyya4faj> <img class="icon" src="/captain.png"${addAttribute(captainAlt, "alt")} data-astro-cid-tyya4faj> <p data-astro-cid-tyya4faj>${captainAlt}</p> </div> <div class="item" data-astro-cid-tyya4faj> <img class="icon" src="/tank.png"${addAttribute(dives, "alt")} data-astro-cid-tyya4faj> <p data-astro-cid-tyya4faj>${dives}</p> </div> <div class="item" data-astro-cid-tyya4faj> <img class="icon" src="/sandwich.png"${addAttribute(sandwichAlt, "alt")} data-astro-cid-tyya4faj> <p data-astro-cid-tyya4faj>${sandwichAlt}</p> </div> <div class="item" data-astro-cid-tyya4faj> <img class="icon" src="/weight.png"${addAttribute(weightAlt, "alt")} data-astro-cid-tyya4faj> <p data-astro-cid-tyya4faj>${weightAlt}</p> </div> <div class="item" data-astro-cid-tyya4faj> <img class="icon" src="/water.png"${addAttribute(waterAlt, "alt")} data-astro-cid-tyya4faj> <p data-astro-cid-tyya4faj>${waterAlt}</p> </div> <div class="item" data-astro-cid-tyya4faj> <img class="icon" src="/fruit.png"${addAttribute(fruitAlt, "alt")} data-astro-cid-tyya4faj> <p data-astro-cid-tyya4faj>${fruitAlt}</p> </div> </div> <div class="policy" data-astro-cid-tyya4faj> <p data-astro-cid-tyya4faj>Have any questions please let us know, we'd be happy to answer</p> <p data-astro-cid-tyya4faj></p> </div> </div> <div class="cta" data-astro-cid-tyya4faj> <a href="/Booning" data-astro-cid-tyya4faj>Book Now</a> </div> </div> </priceCard> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/PriceCard.astro", void 0);

const $$MainCtaBtn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<mainCtaBtn class="main-btn-component" data-astro-cid-kvcxny5w> <a href="/booking" class="book-now" data-astro-cid-kvcxny5w>Book Now</a> <a target="_blank" href="https://www.google.com/search?q=hammer+head+cozumel&oq=hammer+head+cozumel&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGDwyBggDEEUYPNIBCDk4MzVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x8f4e57005df3a099:0xe7e5a151dc640a4a,1,,,," class="reviews" data-astro-cid-kvcxny5w>Reviews</a> </mainCtaBtn> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/MainCtaBtn.astro", void 0);

const $$Astro$2 = createAstro();
const $$MostRequested = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MostRequested;
  const { title, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="most-requested-wrapper" data-astro-cid-dsrcotui> <div class="wrapper" data-astro-cid-dsrcotui> <div class="content" data-astro-cid-dsrcotui> <h4 class="title" data-astro-cid-dsrcotui>${title}</h4> <p data-astro-cid-dsrcotui>${content}</p> <div class="CTA" data-astro-cid-dsrcotui> ${renderComponent($$result, "MainCtaBtn", $$MainCtaBtn, { "data-astro-cid-dsrcotui": true })} </div> </div> <div class="image" data-astro-cid-dsrcotui> <img class="image-item" src="/mostRequestedReef.jpg" alt="Photo of a reef with a clown fish coming out" data-astro-cid-dsrcotui> </div> </div> </div> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/MostRequested.astro", void 0);

const $$LocationMap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div style="max-width:100%;overflow:hidden;color:red;width:100%;min-height:500px;height:85vh;" data-astro-cid-ccpjk3rk><div id="embedded-map-display" style="height:100%; width:100%;max-width:100%;" data-astro-cid-ccpjk3rk><iframe style="height:100%;width:100%;border:none;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=hammerhead+cozumel+dive+and+snorkel&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" data-astro-cid-ccpjk3rk></iframe></div><a class="google-maps-html" href="https://www.bootstrapskins.com/themes" id="grab-map-info" data-astro-cid-ccpjk3rk>premium bootstrap themes</a></div>`;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/LocationMap.astro", void 0);

const $$ReadyToBook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<readyToBook data-astro-cid-2mj3cpuu> <div class="wrapper" data-astro-cid-2mj3cpuu> <div class="title" data-astro-cid-2mj3cpuu>Ready to book?</div> ${renderComponent($$result, "MainCtaBtn", $$MainCtaBtn, { "data-astro-cid-2mj3cpuu": true })} </div> </readyToBook> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/ReadyToBook.astro", void 0);

const $$Astro$1 = createAstro();
const $$MiniLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MiniLinks;
  const { title1, text1, link1, title2, text2, link2, title3, text3, link3, imageurl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<miniLinks data-astro-cid-ibzektib> <img class="image"${addAttribute(imageurl, "src")} alt="Life Savers on a rack insde the boat" data-astro-cid-ibzektib> <div class="wrapper" data-astro-cid-ibzektib> <div class="link-item" data-astro-cid-ibzektib> <h4 data-astro-cid-ibzektib>${title1}</h4> <p data-astro-cid-ibzektib>${text1}</p> <a${addAttribute(link1, "href")} data-astro-cid-ibzektib>Learn More</a> </div> <div class="link-item" data-astro-cid-ibzektib> <h4 data-astro-cid-ibzektib>${title2}</h4> <p data-astro-cid-ibzektib>${text2}</p> <a${addAttribute(link2, "href")} data-astro-cid-ibzektib>Learn More</a> </div> <div class="link-item" data-astro-cid-ibzektib> <h4 data-astro-cid-ibzektib>${title3}</h4> <p data-astro-cid-ibzektib>${text3}</p> <a${addAttribute(link3, "href")} data-astro-cid-ibzektib>Learn More</a> </div> </div> </miniLinks> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/MiniLinks.astro", void 0);

const $$Astro = createAstro();
const $$HeroVideo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroVideo;
  const { subtitle, title, image } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-hero", "astro-hero", { "data-astro-cid-n24p5ogk": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="hero-wrapper" data-astro-cid-n24p5ogk> <video${addAttribute(image, "src")} autoplay loop muted playsinline data-astro-cid-n24p5ogk></video> <div class="content" data-astro-cid-n24p5ogk> <h1 data-astro-cid-n24p5ogk>${title}</h1> <p data-astro-cid-n24p5ogk>${subtitle}</p> </div> </div> ` })} `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/HeroVideo.astro", void 0);

const $$BlogCta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<blogCta data-astro-cid-k4rf3b63> <div class="content-wrapper-row" data-astro-cid-k4rf3b63> <div class="video-wrapper" data-astro-cid-k4rf3b63> <video src="/video-1.mp4" loop controls playsinline data-astro-cid-k4rf3b63></video> </div> <div class="blog-cta-wrapper" data-astro-cid-k4rf3b63> <div class="image" data-astro-cid-k4rf3b63> <img class="image-item" src="/blogWrapper1.jpg" alt="foto de 3 busos en un arrefice con uchos peces" data-astro-cid-k4rf3b63> </div> <div class="content" data-astro-cid-k4rf3b63> <h2 data-astro-cid-k4rf3b63>Explore the wonders of Cozumel's marine ecosystems</h2> <p data-astro-cid-k4rf3b63>Cozumel's reefs are vibrant underwater ecosystems filled with
          colorful corals, diverse fish species, and captivating marine life.
          From the shallow coral gardens to the dramatic drop-offs, each dive
          site offers a unique adventure, where you can encounter eagle rays,
          sea turtles, and explore intricate coral formations</p> <span data-astro-cid-k4rf3b63>Explore our blog to learn more</span> </div> </div> </div> <div class="divers-spacer" data-astro-cid-k4rf3b63> <div class="divers-wrapper" data-astro-cid-k4rf3b63> <div class="divers-content" data-astro-cid-k4rf3b63> <div class="number" data-astro-cid-k4rf3b63>900+</div> <p data-astro-cid-k4rf3b63>Happy Divers</p> </div> <div class="divers-content" data-astro-cid-k4rf3b63> <div class="number" data-astro-cid-k4rf3b63>12</div> <p data-astro-cid-k4rf3b63>Different Reefs</p> </div> <div class="divers-content" data-astro-cid-k4rf3b63> <div class="number" data-astro-cid-k4rf3b63>24+</div> <p data-astro-cid-k4rf3b63>Years of Experience</p> </div> </div> </div> </blogCta> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/BlogCta.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hammer Head Cozumel | Dive Shop", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroVideo", $$HeroVideo, { "title": "Dive into Adventure with Hammer Head in Cozumel, Mexico!", "subtitle": "Explore vibrant reefs, ancient wrecks, and marine marvels with our expert guides, we are here to make your experience unforgettable.", "image": "/homeHeroVideo.mp4", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "BlogCta", $$BlogCta, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "MiniLinks", $$MiniLinks, { "title1": "Specialty Dives", "title2": "Dive Packages", "title3": "Our Blog", "text1": "Learn more about pecial dive sites thier challenges and prices", "text2": "We have a variety of different packages for you", "text3": "Visit our blog to learn more about the reefs, the sea life in cozumel and much more", "link1": "/divespecials", "link2": "/packages", "link3": "/blog", "imageurl": "/LifeSaver.jpg", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "MostRequested", $$MostRequested, { "title": "Colombia reef our most requested dive site", "content": "Whether you are a seasoned diver chasing the perfect reef or a beginner eager to find the wonders of the ocean, our expert instructors and vibrant team staff are here to make your experience unforgettable.", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="top-packages" data-astro-cid-j7pv25f6> <div class="top-wrapper" data-astro-cid-j7pv25f6> <div class="top-title" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Top Packages</h3> <p data-astro-cid-j7pv25f6>Explore our packages and what they include, book your next dice now!</p> </div> <div class="section-top-content" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "PriceCard", $$PriceCard, { "packageName": "4 DAY", "price": "$350", "dives": "8 DIVE TANKS", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "PriceCard", $$PriceCard, { "packageName": "Twilight Dive", "price": "$99", "dives": "2 DIVE TANKS (1 LATE AFTERNOON DIVE & 1 NIGHT DIVE)", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "PriceCard", $$PriceCard, { "packageName": "1 DAY", "price": "$95", "dives": "2 DIVE TANKS", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> ${renderComponent($$result2, "FormsToDownload", $$FormsToDownload, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ReadyToBook", $$ReadyToBook, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "LocationMap", $$LocationMap, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/index.astro", void 0);

const $$file = "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PriceCard as $, $$MostRequested as a, $$LocationMap as b, $$ReadyToBook as c, $$MainCtaBtn as d, $$MiniLinks as e, index as i };
