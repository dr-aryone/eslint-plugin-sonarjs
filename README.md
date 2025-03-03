# eslint-plugin-sonarjs [![npm version](https://badge.fury.io/js/eslint-plugin-sonarjs.svg)](https://badge.fury.io/js/eslint-plugin-sonarjs) [![Build Status](https://travis-ci.org/SonarSource/eslint-plugin-sonarjs.svg?branch=master)](https://travis-ci.org/SonarSource/eslint-plugin-sonarjs) [![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=eslint-plugin-sonarjs&metric=alert_status)](https://sonarcloud.io/dashboard?id=eslint-plugin-sonarjs) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=eslint-plugin-sonarjs&metric=coverage)](https://sonarcloud.io/dashboard?id=eslint-plugin-sonarjs)

SonarJS rules for ESLint to detect bugs and suspicious patterns in your code.

_[We also have a plugin for TSLint](https://github.com/SonarSource/SonarTS)_

## Rules

### Bug Detection :bug:

Rules in this category aim to find places in code which have a high chance of being bugs, i.e. don't work as intended.

* All branches in a conditional structure should not have exactly the same implementation ([`no-all-duplicated-branches`])
* Collection elements should not be replaced unconditionally ([`no-element-overwrite`])
* Function calls should not pass extra arguments ([`no-extra-arguments`])
* Related "if/else if" statements should not have the same condition ([`no-identical-conditions`])
* Identical expressions should not be used on both sides of a binary operator ([`no-identical-expressions`])
* Loops with at most one iteration should be refactored ([`no-one-iteration-loop`])
* The output of functions that don't return anything should not be used ([`no-use-of-empty-return-value`])

### Code Smell Detection :pig:

Code Smells, or maintainability issues, are raised for places of code which might be costly to change in the future. These rules also help to keep the high code quality and readability. And finally some rules report issues on different suspicious code patters.

* Cognitive Complexity of functions should not be too high ([`cognitive-complexity`])
* "switch" statements should not have too many "case" clauses ([`max-switch-cases`])
* Collapsible "if" statements should be merged ([`no-collapsible-if`])
* String literals should not be duplicated ([`no-duplicate-string`])
* Two branches in a conditional structure should not have exactly the same implementation ([`no-duplicated-branches`])
* Functions should not have identical implementations ([`no-identical-functions`])
* Boolean checks should not be inverted ([`no-inverted-boolean-check`])
* Boolean literals should not be redundant ([`no-redundant-boolean`])
* "switch" statements should have at least 3 "case" clauses ([`no-small-switch`])
* "catch" clauses should do more than rethrow ([`no-useless-catch`])
* Local variables should not be declared and then immediately returned or thrown ([`prefer-immediate-return`]) (:wrench: *fixable*)
* Object literal syntax should be used ([`prefer-object-literal`])
* Return of boolean expressions should not be wrapped into an "if-then-else" statement ([`prefer-single-boolean-return`])
* A "while" loop should be used instead of a "for" loop ([`prefer-while`]) (:wrench: *fixable*) 

[`cognitive-complexity`]: ./docs/rules/cognitive-complexity.md
[`max-switch-cases`]: ./docs/rules/max-switch-cases.md
[`no-all-duplicated-branches`]: ./docs/rules/no-all-duplicated-branches.md
[`no-collapsible-if`]: ./docs/rules/no-collapsible-if.md
[`no-duplicate-string`]: ./docs/rules/no-duplicate-string.md
[`no-duplicated-branches`]: ./docs/rules/no-duplicated-branches.md
[`no-element-overwrite`]: ./docs/rules/no-element-overwrite.md
[`no-extra-arguments`]: ./docs/rules/no-extra-arguments.md
[`no-identical-conditions`]: ./docs/rules/no-identical-conditions.md
[`no-identical-expressions`]: ./docs/rules/no-identical-expressions.md
[`no-identical-functions`]: ./docs/rules/no-identical-functions.md
[`no-inverted-boolean-check`]: ./docs/rules/no-inverted-boolean-check.md
[`no-one-iteration-loop`]: ./docs/rules/no-one-iteration-loop.md
[`no-redundant-boolean`]: ./docs/rules/no-redundant-boolean.md
[`no-small-switch`]: ./docs/rules/no-small-switch.md
[`no-use-of-empty-return-value`]: ./docs/rules/no-use-of-empty-return-value.md
[`no-useless-catch`]: ./docs/rules/no-useless-catch.md
[`prefer-immediate-return`]: ./docs/rules/prefer-immediate-return.md
[`prefer-object-literal`]: ./docs/rules/prefer-object-literal.md
[`prefer-single-boolean-return`]: ./docs/rules/prefer-single-boolean-return.md
[`prefer-while`]: ./docs/rules/prefer-while.md

## Prerequisites

Node.js (>=6.x).

## Usage

* If you don't have ESLint yet configured for your project, follow [these instructions](https://github.com/eslint/eslint#installation-and-usage).
* Install `eslint-plugin-sonarjs` using `npm` (or `yarn`) for you project or globally:

```sh
npm install eslint-plugin-sonarjs --save-dev # install for your project
npm install eslint-plugin-sonarjs -g         # or install globally
```

* Add `eslint-plugin-sonarjs` to the `plugins` option of your `.eslintrc`:

```json
{
  "plugins": ["sonarjs"]
}
```

* Add `plugin:sonarjs/recommended` to the `extends` option to enable all recommended rules:

```json
{
  "extends": ["plugin:sonarjs/recommended"]
}
```

* or enable only some rules manually:

```json
{
  "rules": {
    "sonarjs/cognitive-complexity": "error",
    "sonarjs/no-identical-expressions": "error"
    // etc
  }
}
```

## Contributing

You want to participate in the development of the project? Have a look at our [contributing](./docs/CONTRIBUTING.md) guide!
