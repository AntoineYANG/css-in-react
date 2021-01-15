import { Properties } from 'csstype';
import React from 'react';
export declare type StyleInjection = {
    id: string;
};
export declare type StyledWrapperType = React.FC;
/**
 * Creates a reference of a stylesheet.
 * To be used when creating a StyledWrapper.
 * Use `useStyleWrapper()` then.
 *
 * @warning
 * ```
 * It's supposed to be used outside an RFC / RCC.
 * ```
 *
 * @exports
 * @param {({[selector: string]: Properties<string|number>;})} style    CSS rules
 * @returns {StyleInjection}
 */
export declare const createStyle: (style: {
    [selector: string]: Properties<React.ReactText, string & {}>;
}) => StyleInjection;
/**
 * Renders no additional elements but binds all the children in the first level with a className,
 * to apply style rules on them.
 *
 * Never forget to use a `createStyle` first.
 *
 * @exports
 * @param {StyleInjection} injection    The reference returned by `createStyle`
 * @returns {StyledWrapperType}
 */
export declare const useStyleWrapper: (injection: StyleInjection) => StyledWrapperType;
declare type AnimationTimingFunction = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | [
    number,
    number,
    number,
    number
];
declare type CSSAnimationConfig = {
    name: string;
    duration: string | number;
    timingFunction: AnimationTimingFunction;
    delay: string | number;
    iterationCount: number | "infinite";
    direction: "normal" | "alternate";
};
export declare type CSSAnimationProps = Exclude<Partial<CSSAnimationConfig>, "name">;
/**
 * Creates a CSS keyframes rule.
 *
 * @exports
 * @param {string} name name of the keyframes, CANNOT take a defined one
 * @param {({[step: string]: Properties<string|number>;})} body content of the keyframes
 * @returns
 */
export declare const createAnimation: (name: string, body: {
    [step: string]: Properties<React.ReactText, string & {}>;
}) => (props?: Partial<CSSAnimationConfig> | undefined) => string;
/**
 * Creates a container which renders no additional elements but binds all the children
 * in the first level with a className,
 * to apply style rules on them.
 *
 * @export
 * @class StyledWrapperCC
 * @extends {React.Component<StyleInjection>}
 */
export declare class StyledWrapperCC extends React.Component<StyleInjection> {
    private ref;
    render(): JSX.Element;
    componentDidMount(): void;
}
/**
 * Decorator of `React.Component["render"]`.
 * Creates a wrapper to apply CSS rules on the elements it returns.
 *
 * @exports
 * @decorator                           React.Component["render"]
 * @template T
 * @param {StyleInjection} injection    The reference returned by `createStyle`
 * @returns
 */
export declare const connectStyle: <T extends React.Component<{}, {}, any>>(injection: StyleInjection) => (target: T, _propertyKey: "render", descriptor: PropertyDescriptor) => void;
export {};
