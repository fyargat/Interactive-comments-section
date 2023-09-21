import { type DirectiveBinding, type ObjectDirective } from "@vue/runtime-core";

type ClickOutside = (event: MouseEvent) => void;

interface ExtendedHTMLElement extends HTMLElement {
  clickOutside: ClickOutside;
}

function clickOutsideHandler(
  this: ExtendedHTMLElement,
  bind: DirectiveBinding<Function>
): ClickOutside {
  return (event) => {
    if (event.target instanceof Element) {
      if (!(this === event.target || this.contains(event.target))) {
        bind.value(event);
      }
    }
  };
}

export const clickOutside: ObjectDirective<ExtendedHTMLElement, Function> = {
  beforeMount(element, bind, vn): void {
    const isDirectiveValueFunction =
      bind?.value?.constructor.name === "Function";

    if (!isDirectiveValueFunction) {
      throw Error(
        "[v-click-outside-element] Function should be provided in the directive"
      );
    }

    element.clickOutside = clickOutsideHandler.bind(element)(bind);

    window.addEventListener("click", element.clickOutside);
  },
  beforeUnmount(element): void {
    window.removeEventListener("click", element.clickOutside);
  },
};
