/// <reference types="react" />
import { Properties } from 'csstype';
/**
 * Change a set of style rules from JavaScript style to CSS style.
 *
 * @param {(Properties<string|number>)} rules
 * @exports
 * @returns
 */
export declare const JSON2CSS: (rules: Properties<string | number>) => string[];
/**
 * Append new css rules.
 *
 * @param {string} id                           style id
 * @param {string} selector                     CSS selector, separated by ',' .
 * @param {(Properties<string | number>)} rules CSS styles object, in JavaScript style.
 * @param {number} [index=0]                    The newly inserted rule's position in CSSStyleSheet.cssRules.
 */
export declare const reactstyleinject: (id: string, selector: string, rules: Properties<string | number>, index?: number) => void;
/**
 * Append a new css animation.
 *
 * @param {string} id                           style id
 * @param {string} name                         CSS animation name.
 * @param {{[step: string]: Properties<string|number>;}} body  CSS animation content.
 */
export declare const reactanimationinject: (id: string, name: string, body: {
    [step: string]: Properties<import("react").ReactText, string & {}>;
}) => void;
