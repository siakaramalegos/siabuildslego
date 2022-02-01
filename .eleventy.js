module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("home", "layouts/home.njk");

  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addWatchTarget("./src/style.css");

  eleventyConfig.setDataDeepMerge(true);

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
