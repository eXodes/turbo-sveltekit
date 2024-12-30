import { pageConfig } from "./page/config";
import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("page", pageConfig);
}
