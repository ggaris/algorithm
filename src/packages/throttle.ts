interface Throttle {
  (fn: Function, time: number): Function;
}

/**
 * 节流函数实现
 * @param fn 需要包装的函数
 * @param time 间隔时间
 * @returns 放回被包装的函数
 */
const throttle: Throttle = (fn, time) => {
  let flag = false;
  return (...args: any) => {
    if (flag) return;
    fn.call(undefined, ...args);
    flag = true;

    setTimeout(() => {
      flag = false;
    }, time);
  };
};

export default throttle;
