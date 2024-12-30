import { classConfig } from "./class/config";
import { functionConfig } from "./function/config";
import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("class", classConfig);
  plop.setGenerator("function", functionConfig);
}
