type Mods = Record<string, string | boolean>;

export function classNames(
  mainClass: string,
  mods: Mods,
  additionalClasses: string[]
): string {
  return [
    mainClass,
    ...additionalClasses,
    ...Object.entries(mods)
      .filter(([_className, value]) => Boolean(value))
      .map(([className, _value]) => className),
  ].join(" ");
}
