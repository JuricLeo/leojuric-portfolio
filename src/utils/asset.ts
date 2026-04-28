const srcAssetModules = import.meta.glob('/src/assets/**/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export function resolveSrcAsset(path: string): string {
  return srcAssetModules[path] ?? path;
}
