const BASE = 'GEIA od Akeso';

export function pageMetaTitle(...parts: string[]): string {
  return [...parts.reverse(), BASE].filter((s): s is string => !!s).join(' | ');
}
