// Asset path utility for handling different deployment environments
declare global {
  interface ImportMeta {
    env: {
      VITE_BASE_PATH?: string;
    };
  }
}

// Asset path utility for handling different deployment environments
export const getAssetPath = (path: string): string => {
  const basePath = import.meta.env.VITE_BASE_PATH || '/';
  return `${basePath}${path.replace(/^\//, '')}`;
};

// Helper for image assets
export const getImagePath = (filename: string): string => {
  return getAssetPath(`assets/${filename}`);
};

// Helper for manifest paths
export const getManifestPath = (): string => {
  return getAssetPath('manifest.json');
};

// Helper for favicon paths
export const getFaviconPath = (): string => {
  return getAssetPath('favicon.ico');
};
