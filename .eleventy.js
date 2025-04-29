module.exports = function(eleventyConfig) {
  // Copy assets to the output directory
  eleventyConfig.addPassthroughCopy("_assets");
  
  // Add layout aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addLayoutAlias('plugin', 'layouts/plugin.njk');
  eleventyConfig.addLayoutAlias('chat', 'layouts/chat.njk');
  eleventyConfig.addLayoutAlias('form', 'layouts/form.njk');
  eleventyConfig.addLayoutAlias('intercom', 'layouts/intercom.njk');
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};

//# sourceMappingURL=.eleventy.js.map
