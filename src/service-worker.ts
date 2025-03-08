
import { precacheAndRoute } from "workbox-precaching";

declare let self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST: any[];
};

precacheAndRoute(self.__WB_MANIFEST || []);