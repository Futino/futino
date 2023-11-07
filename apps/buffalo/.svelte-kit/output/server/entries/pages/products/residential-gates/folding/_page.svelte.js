import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { C as Container } from "../../../../../chunks/Container.js";
import "crypto-js/sha256.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container, "Container").$$render($$result, { class: "flex flex-col gap-12 pt-44" }, {}, {
    default: () => {
      return `${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2 gap-6"
        },
        {},
        {
          default: () => {
            return `<img src="/products/residential-gates/folding/typical_fold.gif" alt="" class="object-contain object-center w-full h-full"> <div class="flex flex-col col-span-1" data-svelte-h="svelte-1lca436"><h3>Typical fold gate How does fold gate work</h3> <ul class="ulink"><li>2 panels are hinged to form a fold gate.</li> <li>The fold gate is supported by top and bottom bearing pivot.</li> <li>The roller and the channel constraint fold gate movement</li> <li>Automated by Tousek closed-circuit hydraulic arms for remte control
          access.</li> <li>(1) top bearing pivot; (2) hydraulic motor; (3) telescopic arm; (4)
          channel; (5) bottom bearing pivot; (6) roller.</li></ul></div>`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
