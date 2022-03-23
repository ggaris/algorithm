interface EventHub {
  queueMap: {
    [key: string]: Array<Function>;
  };
  on: (name: string, fn: Function) => void;
  off: (name: string, fn: Function) => void;
  emit: (name: string, data: any) => void;
}

const eventHub: EventHub = {
  queueMap: {},
  on: (name, fn) => {
    // 添加监听
    eventHub.queueMap[name] = eventHub.queueMap[name] || [];
    eventHub.queueMap[name].push(fn);
  },
  off: (name, fn) => {
    // 取消监听
    if (!eventHub.queueMap[name]) {
      return;
    }
    const index = eventHub.queueMap[name].indexOf(fn);
    if (index < 0) {
      return;
    }
    eventHub.queueMap[name].splice(index, 1);
  },
  emit: (name, data) => {
    // 触发监听
    eventHub.queueMap[name].forEach((item) => item.call(undefined, data));
  },
};

export default eventHub;
