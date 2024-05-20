import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_cnU6Fyo2.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx } from 'react/jsx-runtime';
import 'react';
import 'clsx';
/* empty css                            */
import { $ as $$Layout } from './about_Cd89YsST.mjs';

function BookingComponent() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("script", { src: "https://embed.ycb.me", async: "true", "data-domain": "leolugo5" }) });
}

const $$FormsToDownload = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<formsToDownload data-astro-cid-tfngp4hm> <div class="forms-wrapper" data-astro-cid-tfngp4hm> <div class="image" data-astro-cid-tfngp4hm> <img class="image-item" src="/blogWrapper1.jpg" alt="foto de 3 busos en un arrefice con uchos peces" data-astro-cid-tfngp4hm> </div> <div class="main-content-wrapper" data-astro-cid-tfngp4hm> <div class="content-wrapper" data-astro-cid-tfngp4hm> <h3 class="title" data-astro-cid-tfngp4hm>Your safety is important for us</h3> <p class="content" data-astro-cid-tfngp4hm>Before jumping in the water, we want to make sure you are safe, so
          please fill the following forms before diving</p> </div> <div class="links" data-astro-cid-tfngp4hm> <div class="download-item" data-astro-cid-tfngp4hm> <span data-astro-cid-tfngp4hm>Guest Registration</span> <a href="/Guest-Registration-Espanol.pdf" download="Guest Registration Form" class="download-btn" data-astro-cid-tfngp4hm>Download</a> </div> <div class="download-item" data-astro-cid-tfngp4hm> <span data-astro-cid-tfngp4hm>Liability Release</span> <a href="Liability-Form.pdf" download="Liability Release Form" class="download-btn" data-astro-cid-tfngp4hm>Download</a> </div> <div class="download-item" data-astro-cid-tfngp4hm> <span data-astro-cid-tfngp4hm>Medical Form</span> <a href="Medical-Form.pdf" download="Medical Forms Form" class="download-btn" data-astro-cid-tfngp4hm>Download</a> </div> </div> </div> </div> </formsToDownload> `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/components/FormsToDownload.astro", void 0);

const $$Booking = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Booking | Hammer Head Cozumel" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormsToDownload", $$FormsToDownload, {})} ${renderComponent($$result2, "BookingComponent", BookingComponent, {})} ` })}`;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/booking.astro", void 0);

const $$file = "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/booking.astro";
const $$url = "/booking";

const booking = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Booking,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FormsToDownload as $, booking as b };
