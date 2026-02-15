/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.JPG' {
  const src: ImageMetadata;
  export default src;
}
