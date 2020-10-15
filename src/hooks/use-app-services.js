import AssetSvc from "../services/asset-svc";
import DataSvc from "../services/data-svc";
import StyleSvc from "../services/style-svc";

const ServiceCache = {};

/**
 * Load the service cache with application services.
 * Nothing happens if the cache is already loaded.
 */
export function loadServiceCache () {
  if (Object.keys(ServiceCache).length === 0) {
    ServiceCache.dataSvc = new DataSvc();
    ServiceCache.assetSvc = new AssetSvc();
    ServiceCache.stylesSvc = new StyleSvc();
  }
}

/**
 * Get the available application services.
 */
export default function useAppServices () {
  loadServiceCache();
  return ServiceCache;
}