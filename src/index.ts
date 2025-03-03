/*
 * eslint-plugin-sonarjs
 * Copyright (C) 2018 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { Linter } from "eslint";

const sonarjsRules: [string, Linter.RuleLevel][] = [
  ["cognitive-complexity", "error"],
  ["max-switch-cases", "error"],
  ["no-all-duplicated-branches", "error"],
  ["no-collapsible-if", "error"],
  ["no-duplicate-string", "error"],
  ["no-duplicated-branches", "error"],
  ["no-element-overwrite", "error"],
  ["no-extra-arguments", "error"],
  ["no-identical-conditions", "error"],
  ["no-identical-functions", "error"],
  ["no-identical-expressions", "error"],
  ["no-inverted-boolean-check", "error"],
  ["no-one-iteration-loop", "error"],
  ["no-redundant-boolean", "error"],
  ["no-small-switch", "error"],
  ["no-use-of-empty-return-value", "error"],
  ["no-useless-catch", "error"],
  ["prefer-immediate-return", "error"],
  ["prefer-object-literal", "error"],
  ["prefer-single-boolean-return", "error"],
  ["prefer-while", "error"],
];

const sonarjsRuleModules: any = {};

const configs: { recommended: Linter.Config } = {
  recommended: { rules: {} },
};

sonarjsRules.forEach(rule => (sonarjsRuleModules[rule[0]] = require(`./rules/${rule[0]}`)));
sonarjsRules.forEach(rule => (configs.recommended.rules![`sonarjs/${rule[0]}`] = rule[1]));

export { sonarjsRuleModules as rules, configs };
