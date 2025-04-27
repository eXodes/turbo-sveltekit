import { PlopTypes } from "@turbo/gen";
import {
  getApiConfig,
  getClassConfig,
  getComponentConfig,
  getFunctionConfig,
  getLayoutConfig,
  getPageConfig,
} from "turbo-utils/generator";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("web:api", getApiConfig());
  plop.setGenerator("web:class", getClassConfig("apps"));
  plop.setGenerator("web:component", getComponentConfig("apps"));
  plop.setGenerator("web:function", getFunctionConfig("apps"));
  plop.setGenerator("web:layout", getLayoutConfig());
  plop.setGenerator("web:page", getPageConfig());
}
