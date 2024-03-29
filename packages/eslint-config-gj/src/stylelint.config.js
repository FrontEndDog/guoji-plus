module.exports = {
  root: true,
  extends: ['stylelint-config-standard-scss', 'stylelint-config-html', 'stylelint-config-recess-order'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'layer', 'apply', 'config'] }], //兼容tailwindcss
    'selector-class-pattern': /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^gj-.*$/, //类名命名为小写，短横线分割， gj- 开头的不报错
  },
}
