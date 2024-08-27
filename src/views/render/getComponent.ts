import componentsMap from "./componentMap";

/**
 * 获取指定名称的组件。
 *
 * @param name - 要获取的组件的名称。
 * @returns 返回指定名称的组件，如果找不到则返回 null。
 */
export function getComponent(name: keyof typeof componentsMap) {
  return componentsMap[name] || null;
}

export default getComponent;
