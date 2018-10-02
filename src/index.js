// @flow

export function foo(x: ?string): string {
  const y:string = "hoge"
  if (x) {
    return `${x}-${y}`;
  }
  return "default string";
}
