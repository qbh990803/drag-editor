/**
 * 生成一个随机UUID字符串
 * @returns 一个随机UUID字符串
 */
export function generateUUID() {
  return "xxxxxxxxxxxxxxxx".replace(/[x]/g, function () {
    return ((Math.random() * 16) | 0).toString(16);
  });
}
