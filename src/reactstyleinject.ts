/*
 * @Author: Kanata You 
 * @Date: 2021-01-14 14:52:52 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-01-15 16:54:19
 */

import { Properties } from 'csstype';


type StyleElement = HTMLStyleElement & { sheet: CSSStyleSheet; };

let styleMap: {[id: string]: StyleElement;} = {};

/**
 * Change a set of style rules from JavaScript style to CSS style.
 *
 * @param {(Properties<string|number>)} rules
 * @exports
 * @returns
 */
export const JSON2CSS = (rules: Properties<string|number>) => {
    let ruleList: string[] = [];

    for (const key in rules) {
        if (rules.hasOwnProperty(key)) {
            let name: string = key;
            let flag: number = name.search(/[A-Z]/);
            while (flag !== -1) {
                name = name.slice(0, flag)
                        + "-" + name.charAt(flag).toLowerCase() + name.slice(flag + 1);
                flag = name.search(/[A-Z]/);
            }
            const value = rules[key as keyof Properties<string|number>];
            ruleList.push(`${ name }: ${ value };`);
        }
    }

    return ruleList;
};

/**
 * Append new css rules.
 *
 * @param {string} id                           style id
 * @param {string} selector                     CSS selector, separated by ',' .
 * @param {(Properties<string | number>)} rules CSS styles object, in JavaScript style.
 * @param {number} [index=0]                    The newly inserted rule's position in CSSStyleSheet.cssRules.
 */
export const reactstyleinject = (
    id: string,
    selector: string,
    rules: Properties<string|number>,
    index: number=0
) => {
    if (styleMap.hasOwnProperty(id)) {
        const style = styleMap[id];
        for (let i: number = 0; i < style.sheet.cssRules.length; i++) {
            const rule = style.sheet.cssRules[i] as CSSStyleRule;
            if (rule.selectorText === selector) {
                return;
            }
        }
    } else {
        // Initialize
        const style = document.createElement("style") as StyleElement;
        style.type = "text/css";
        style.id = id;
        styleMap[id] = style;
        document.head.appendChild(style);
    }

    const style = styleMap[id];

    // Append rules
    style.sheet.insertRule(
        `${ selector } { ${
            JSON2CSS(rules).join("\n")
        } }`, Math.min(index, style.sheet.rules.length)
    );
};

/**
 * Append a new css animation.
 *
 * @param {string} id                           style id
 * @param {string} name                         CSS animation name.
 * @param {{[step: string]: Properties<string|number>;}} body  CSS animation content.
 */
export const reactanimationinject = (
    id: string,
    name: string,
    body: {[step: string]: Properties<string|number>;}
) => {
    if (styleMap.hasOwnProperty(id)) {
        return;
    } else {
        // Initialize
        const style = document.createElement("style") as StyleElement;
        style.type = "text/css";
        style.id = id;
        styleMap[id] = style;
        document.head.appendChild(style);
    }

    const style = styleMap[id];
    const content = Object.entries<Properties<string|number>>(
        body as unknown as {[id: string]: Properties<string|number>;}
    );

    // Append rules
    style.sheet.insertRule(
        `@keyframes ${ name } { ${
            content.map(step => {
                return `${ step[0] } { ${ JSON2CSS(step[1]).join(" ") } }`;
            }).join("\n")
        } }`
    );
};
