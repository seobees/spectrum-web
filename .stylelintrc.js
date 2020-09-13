module.exports = {
  plugins: ["stylelint-order"],
  rules: {
    "order/order": ["custom-properties", "declarations", "at-rules", "rules"],
    "order/properties-alphabetical-order": true,
    "string-quotes": "double",
    "comment-no-empty": true,
    "color-no-invalid-hex": true,
    "block-no-empty": true,
    "rule-empty-line-before": "always-multi-line",
    "at-rule-empty-line-before": ["always", {"except": ["blockless-after-same-name-blockless", "first-nested"]}],
    "declaration-empty-line-before": ["always", {"except": ["after-declaration", "first-nested"]}],
    "no-duplicate-selectors": true,
    "declaration-block-no-duplicate-properties": true,
    indentation: [ 2, { "baseIndentLevel": 1 } ],
    "declaration-colon-newline-after": "always-multi-line"
  }
}
