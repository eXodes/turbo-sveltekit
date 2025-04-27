import { PlopTypes } from "@turbo/gen";
import { getComponentConfig } from "turbo-utils/generator";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("ui:component", getComponentConfig("packages"));
}
