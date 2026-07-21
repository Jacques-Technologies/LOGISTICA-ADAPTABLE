/**
 * @schema 2.11
 * @input barsCount: number = 50
 * @input color: color = #000000
 */
const n = Math.max(10, Math.floor(pencil.input.barsCount));
const totalWidth = pencil.width;
const unit = totalWidth / (n * 1.5);
const bars = [];
let x = 0;
for (let i = 0; i < n; i++) {
  const w = unit * (0.6 + Math.random() * 1.4);
  if (x + w > totalWidth) break;
  bars.push({
    type: "rectangle",
    name: "bar" + i,
    x: x,
    y: 0,
    width: w,
    height: pencil.height,
    fill: pencil.input.color,
  });
  x += w + unit * (0.3 + Math.random() * 0.4);
}
return bars;
