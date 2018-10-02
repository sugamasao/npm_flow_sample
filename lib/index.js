export function foo(x) {
  const y = "hoge";
  if (x) {
    return `${x}-${y}`;
  }
  return "default string";
}