export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const trackCatalogDownload = (name: string) => {
  (window as any).dataLayer.push({
    event: 'catalog_downloaded',
    catalog: name,
  });
};
