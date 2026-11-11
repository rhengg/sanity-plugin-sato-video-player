import { defineType } from "sanity";
import { SatoPlayerInput } from "./components/SatoPlayerInput";

export const satoPlayerVideoUrl = defineType({
  name: "satoPlayerVideoUrl",
  title: "Sato Player Video Embed URL",
  type: "string",
  components: {
    input: SatoPlayerInput,
  },
});
