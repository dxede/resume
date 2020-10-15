import DataSvc from "../services/data-svc/";

const ServiceCache = {};

export function loadServiceCache () {
  if (Object.keys(ServiceCache).length === 0) {
    ServiceCache.dataSvc = new DataSvc();
  }
}

export default function useAppServices () {
  loadServiceCache();
  return ServiceCache;
}