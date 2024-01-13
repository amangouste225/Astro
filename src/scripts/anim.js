export const transition = { duration: 0.75, ease: [0.76, 0, 0.24, 1] };

export const menuAnim = {
  open: {
    width: 320,
    height: 400,
    transition,
  },
  exit: {
    width: 100,
    height: 40,
    transition,
  },
};

export const nav = {
  initial: {
    opacity: 0,
  },
  open: (i) => ({
    opacity: 1,
    transition: { delay: 0.2 + i * 0.15 },
  }),
  exit: (i) => ({
    opacity: 0,
    transition: { delay: 0.2 + i * 0.15 },
  }),
};
