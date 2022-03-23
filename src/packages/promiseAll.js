// ts-ignore
myPromise.myAll = (list) => {
  const result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    list.forEach((promise, index) => {
      promise.then(
        (r) => {
          result[index] = r;
          count++;
          if (count === result.length) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};

export default myPromise
