import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, f as renderTemplate } from './astro/server_BMn6c_xN.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/Usuario/Desktop/ari/cursos/astro/05-astro-http/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
