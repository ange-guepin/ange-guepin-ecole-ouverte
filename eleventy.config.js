import { DateTime } from "luxon";

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/medias");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).setLocale('fr').toLocaleString(DateTime.DATE_FULL);
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
}
