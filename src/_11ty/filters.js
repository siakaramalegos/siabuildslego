const { DateTime } = require("luxon");
const CleanCSS = require('clean-css');
// const rootUrl = require('../_data/metadata.json').url

function readableDate(dateObj) {
  return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
}

module.exports = {
  cssmin: code => {
    return new CleanCSS({}).minify(code).styles;
  },
  // generateShareLink: (url, text) => {
  //   const shareText = `${text} by @TheGreenGreek`
  //   // const shareUrl = `${rootUrl}${url}`
  //   return `https://twitter.com/intent/tweet/?text=${encodeURI(shareText)}&url=${encodeURI(shareUrl)}`
  // },
  getSelect: posts => posts.filter(post => post.data.isSelect),
  // Get the first `n` elements of a collection.
  head: (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  },
  htmlDateString: (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  },
  readableDate,
  readableDateFromISO: (dateStr, formatStr = "dd LLL yyyy") => {
    return DateTime.fromISO(dateStr).toFormat(formatStr);
  },
  readableDateTimeFromISO: (dateStr, formatStr = "dd LLL yyyy 'at' hh:mma") => {
    return DateTime.fromISO(dateStr).toFormat(formatStr);
  },

}
