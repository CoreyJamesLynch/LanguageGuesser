const franc = require('franc');
const langs = require('langs');

const myArgs = process.argv.slice(2).join(' ');

const languageCode = (input) => {
  const languageCode = langs.where('3', franc(input));
  if (languageCode !== undefined) {
    console.log(languageCode.name);
  } else console.log('Could not match a language. Please try again with a larger sample');
};

languageCode(myArgs);
