import { c as createAstro, a as createComponent, r as renderComponent, b as renderHead, f as renderTemplate } from '../chunks/astro/server_BktJkQJo.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_CmTd-dHx.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_BUCA18RE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <h1>🧑‍🚀 Hello, Astronaut!</h1> <h3> ${(/* @__PURE__ */ new Date()).getTime()} </h3> <p>
Welcome to the official <a href="https://astro.build/">Astro</a> blog starter template. This
				template serves as a lightweight, minimally-styled starting point for anyone looking to build
				a personal website, blog, or portfolio with Astro.
</p> <p>
This template comes with a few integrations already configured in your
<code>astro.config.mjs</code> file. You can customize your setup with
<a href="https://astro.build/integrations">Astro Integrations</a> to add tools like Tailwind,
				React, or Vue to your project.
</p> <p>Here are a few ideas on how to get started with the template:</p> <ul> <li>Edit this page in <code>src/pages/index.astro</code></li> <li>Edit the site header items in <code>src/components/Header.astro</code></li> <li>Add your name to the footer in <code>src/components/Footer.astro</code></li> <li>Check out the included blog posts in <code>src/content/blog/</code></li> <li>Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code></li> </ul> <p>
Have fun! If you get stuck, remember to <a href="https://docs.astro.build/">read the docs
</a> or <a href="https://astro.build/chat">join us on Discord</a> to ask questions.
</p> <p>
Looking for a blog template with a bit more personality? Check out <a href="https://github.com/Charca/astro-blog-template">astro-blog-template
</a> by <a href="https://twitter.com/Charca">Maxi Ferreira</a>.
</p> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Usuario/Desktop/ari/cursos/astro/05-astro-http/src/pages/index.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/ari/cursos/astro/05-astro-http/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
