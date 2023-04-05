export type IMods = Record<string, boolean | string | undefined>;

export function classNames(
    mainClass: string,
    mods: IMods = {},
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
