module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");

  // Copy `css/` to `_site/css`
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addLayoutAlias('form', 'layouts/form.njk');
  eleventyConfig.addLayoutAlias('chat', 'layouts/chat.njk');
  eleventyConfig.addLayoutAlias('plugin', 'layouts/plugin.njk')
};