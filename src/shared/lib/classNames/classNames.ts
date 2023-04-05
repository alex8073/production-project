type Mods = Record<string, string | boolean>;

export function classNames(
    mainClass: string,
    mods: Mods = {},
    additionalClasses: Array<string | undefined> = [],
): string {
    return [
        mainClass,
        ...additionalClasses.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
