/**
* Any code used inside this helper is ignored by Handlebars. Use it if your email service provider uses a Handlebars-like syntax.
* @example
* {{{{default}}}}
* {{ this }} code won't be parsed.
* {{{{/default}}}}
*/
module.exports = function(defaultValue, newValue, content) {
    const finalValue = newValue ? newValue : defaultValue;

    return finalValue;
}
