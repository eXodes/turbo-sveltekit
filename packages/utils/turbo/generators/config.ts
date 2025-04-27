import { PlopTypes } from "@turbo/gen";
import {
  getClassConfig,
  getEnumConfig,
  getFunctionConfig,
  getInterfaceConfig,
  getSchemaConfig,
} from "turbo-utils/generator";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("utils:class", getClassConfig("packages"));
  plop.setGenerator("utils:enum", getEnumConfig("packages"));
  plop.setGenerator("utils:function", getFunctionConfig("packages"));
  plop.setGenerator("utils:schema", getSchemaConfig("packages"));
  plop.setGenerator("utils:interface", getInterfaceConfig("packages"));
}
