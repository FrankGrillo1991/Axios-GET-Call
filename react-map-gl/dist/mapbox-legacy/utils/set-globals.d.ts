export type GlobalSettings = {
    /** The map's default API URL for requesting tiles, styles, sprites, and glyphs. */
    baseApiUrl?: string;
    /** The maximum number of images (raster tiles, sprites, icons) to load in parallel.
     * @default 16
     */
    maxParallelImageRequests?: number;
    /** The map's RTL text plugin. Necessary for supporting the Arabic and Hebrew languages, which are written right-to-left.  */
    RTLTextPlugin?: string | false;
    /** Provides an interface for external module bundlers such as Webpack or Rollup to package mapbox-gl's WebWorker into a separate class and integrate it with the library.
  Takes precedence over `workerUrl`. */
    workerClass?: any;
    /** The number of web workers instantiated on a page with mapbox-gl maps.
     * @default 2
     */
    workerCount?: number;
    /** Provides an interface for loading mapbox-gl's WebWorker bundle from a self-hosted URL.
     * This is useful if your site needs to operate in a strict CSP (Content Security Policy) environment
     * wherein you are not allowed to load JavaScript code from a Blob URL, which is default behavior. */
    workerUrl?: string;
};
export default function setGlobals(mapLib: any, props: GlobalSettings): void;
//# sourceMappingURL=set-globals.d.ts.map