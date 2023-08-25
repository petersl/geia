export function classNames(...classes: (string | boolean | null | undefined)[]) {
  return classes.filter((s): s is string => typeof s === 'string').join(' ');
}
