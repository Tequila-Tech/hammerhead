import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_cnU6Fyo2.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './about_Cd89YsST.mjs';
/* empty css                         */

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Green Text Color #022c23 -->${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Newest", "data-astro-cid-ijnerlr2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="blog-container" data-astro-cid-ijnerlr2> <div class="sidebar" data-astro-cid-ijnerlr2> <h3 data-astro-cid-ijnerlr2>Previous Posts</h3> <ul class="post-list" data-astro-cid-ijnerlr2> <li data-astro-cid-ijnerlr2><a href="#" data-astro-cid-ijnerlr2>Post Title 1</a></li> <li data-astro-cid-ijnerlr2><a href="#" data-astro-cid-ijnerlr2>Post Title 2</a></li> <!-- Add more links to previous posts as needed --> </ul> </div> <div class="blog-posts" data-astro-cid-ijnerlr2> <div class="blog-post" data-astro-cid-ijnerlr2> <h2 data-astro-cid-ijnerlr2>Post Title 1</h2> <p data-astro-cid-ijnerlr2>Content of the first blog post...</p> </div> <div class="blog-post" data-astro-cid-ijnerlr2> <h2 data-astro-cid-ijnerlr2>Post Title 2</h2> <p data-astro-cid-ijnerlr2>Content of the second blog post...</p> </div> <div class="blog-post" data-astro-cid-ijnerlr2> <h2 data-astro-cid-ijnerlr2>Post Title 3</h2> <p data-astro-cid-ijnerlr2>Content of the second blog post...</p> </div> <div class="blog-post" data-astro-cid-ijnerlr2> <h2 data-astro-cid-ijnerlr2>Post Title 4</h2> <p data-astro-cid-ijnerlr2>Content of the second blog post...</p> </div> <!-- Add more blog posts as needed --> </div> </div> ` })} `;
}, "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/blog.astro", void 0);

const $$file = "/Users/jafetlugo/Documents/DEV/CLIENTS/Hammer Head /Code/hammerhead/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
