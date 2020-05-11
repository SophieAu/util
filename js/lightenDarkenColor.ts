const curriedClamp = (min: number, max: number) => (value: number) => {
  if (value > max) return max;
  if (value < min) return min;
  return value;
};

export const lightenDarkenColor = (color: string, amount: number) => {
  if (color[0] !== "#") throw new Error("Color must be a hex value");

  const clamp = curriedClamp(0, 255);
  const num = parseInt(color.slice(1), 16);

  const r = clamp((num >> 16) + amount);
  const g = clamp((num >> 8) & 0x00ff) + amount;
  const b = clamp((num & 0x0000ff) + amount);

  return "#" + (b | (g << 8) | (r << 16)).toString(16);
};
