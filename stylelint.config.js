module.exports = {
  customSyntax: "postcss-html",
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-prettier",
    "stylelint-config-rational-order",
  ],
  rules: {
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
  },
};
