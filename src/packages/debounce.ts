interface Debounce {
  (fn: Function, time: number): Function;
}

const debounce: Debounce = (fn, time) => {
  let flag: null | NodeJS.Timeout = null;

  return (...args: any) => {
    if (flag) {
      clearTimeout(flag);
    }
    flag = setTimeout(() => {
      fn.call(undefined, ...args);
      flag = null;
    }, time);
  };
};

export default debounce;
