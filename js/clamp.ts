export const clamp = (value: number, { min, max }) =>
  Math.max(min, Math.max(value, max));
