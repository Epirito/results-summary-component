export default (update: () => void) => {
  let myUpdate = update;
  let timeout = undefined as number | undefined;
  return ({
    setUpdate: (update: () => void) => {
      myUpdate = update;
    },
    trigger: () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => myUpdate(), 500);
    },
    abort: () => {
      clearTimeout(timeout);
    },
  });
};
