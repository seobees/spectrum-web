module.exports = {
  extends: ['@commitlint/config-conventional'],
  // parserPreset: {
  //   parserOpts: {
  //     headerPattern: /^(\w+)\:\s(ISSUE)\-(\d+)\:\s(.+)$/,
  //     headerCorrespondence: ['type', 'scope', 'ticket', 'subject']
  //   }
  // },
  rules: {
    'type-enum': [2, 'always', ['chg', 'new', 'fix']],
    'scope-case': [2, 'always', 'upper-case'],
  },
}
