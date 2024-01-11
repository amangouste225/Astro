export const transition = { duration: 1, ease: [0.65, 0, 0.35, 1] };

export const menuAnim = {
  initial: {
    opacity: 1,
    transition,
  },
  open: {
    opacity: 0,
    transition,
  },
  exit: {
    opacity: 1,
    transition,
  },
};
