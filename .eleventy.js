module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("/assets/img");
  eleventyConfig.addWatchTarget("/assets/img");

  // Copy `css/` to `_site/css`
  eleventyConfig.addPassthroughCopy("/assets/css");
  eleventyConfig.addWatchTarget("/assets/css");

  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addLayoutAlias('form', 'layouts/form.njk');
  eleventyConfig.addLayoutAlias('chat', 'layouts/chat.njk');
  eleventyConfig.addLayoutAlias('plugin', 'layouts/plugin.njk');
  eleventyConfig.addLayoutAlias('intercom', 'layouts/intercom.njk');
};