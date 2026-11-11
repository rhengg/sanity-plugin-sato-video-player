import { definePlugin } from "sanity";
import { satoPlayerVideoUrl } from "./schema";

/**
 * Sato Player plugin for Sanity Studio.
 *
 * Adds a Sato Player Video field type that renders
 * the Sato Player embed inside the Studio.
 *
 * @public
 */
export const satoVideoPlayer = definePlugin(() => ({
  name: "sanity-plugin-sato-video-player",
  schema: {
    types: [satoPlayerVideoUrl],
  },
}));
