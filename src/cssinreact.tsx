/*
 * @Author: Kanata You 
 * @Date: 2021-01-14 14:41:56 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-01-15 17:45:08
 */

import { Properties } from 'csstype';
import { reactstyleinject, reactanimationinject } from './reactstyleinject';
import React, { useLayoutEffect, createRef } from 'react';
import createid from './tools/createid';
import parseselector from './tools/parseselector';


export type StyleInjection = {
    id:         string;
};

export type StyledWrapperType = React.FC;

const StyledWrapperFC: React.FC<StyleInjection> = props => {
    let ref: React.RefObject<HTMLElement>[] = [];

    useLayoutEffect(() => {
        ref.forEach(r => {
            if (r.current) {
                if ((r.current as HTMLElement).classList) {
                    (r.current as HTMLElement).classList.add(props.id);
                }
            }
        });
    });

    if (props.children) {
        if ((props.children as any[]).length) {
            const children = props.children as (
                JSX.Element & { ref: null | React.RefObject<HTMLElement> }
            )[];
            return (
                <>
                {
                    children.map((n, i) => {
                        if (n.ref) {
                            ref.push(n.ref);
                            return {
                                ...n,
                                key: i
                            };
                        } else {
                            const r = createRef<HTMLElement>();
                            ref.push(r);
                            return {
                                ...n,
                                key: i,
                                ref: r
                            };
                        }
                    })
                }
                </>
            );
        } else {
            const childNode = props.children as (
                JSX.Element & { ref: null | React.RefObject<HTMLElement> }
            );
            if (childNode.ref) {
                ref.push(childNode.ref);
                return childNode;
            } else {
                const r = createRef<HTMLElement>();
                ref.push(r);
                return {
                    ...childNode,
                    ref: r
                };
            }
        }
    }

    return <></>;
};

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
export const createStyle = (style: {[selector: string]: Properties<string|number>;}): StyleInjection => {
    const id = createid(style);

    Object.entries<Properties<string|number>>(style).forEach(d => {
        const selector = parseselector(d[0], id);
        reactstyleinject(id, selector, d[1]);
    });
    
    return { id };
};

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
export const useStyleWrapper = (injection: StyleInjection): StyledWrapperType => {
    const StyledWrapper: StyledWrapperType = props => (
        <StyledWrapperFC { ...injection }>
            { props.children }
        </StyledWrapperFC>
    );

    return StyledWrapper;
};

type AnimationTimingFunction = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | [
    number, number, number, number
];

type CSSAnimationConfig = {
    name:           string;
    duration:       string | number;
    timingFunction: AnimationTimingFunction;
    delay:          string | number;
    iterationCount: number | "infinite";
    direction:      "normal" | "alternate";
};

export type CSSAnimationProps = Exclude<Partial<CSSAnimationConfig>, "name">;

class CSSAnimation {

    public readonly config: CSSAnimationConfig;

    public constructor(name: string, {
        duration='400ms',
        timingFunction="ease",
        delay=0,
        iterationCount=1,
        direction="normal"
    }: CSSAnimationProps) {
        this.config = {
            name, duration, timingFunction, delay, iterationCount, direction
        };
    }

    public static safeTime(time: number | string) {
        if (typeof time === "number") {
            return time + "s";
        } else {
            return time.endsWith("s") ? time : (time + "s");
        }
    }

    public toString(): string {
        return `${ this.config.name } ${ CSSAnimation.safeTime(this.config.duration) }`
            + ` ${ this.config.timingFunction } ${ CSSAnimation.safeTime(this.config.delay) }`
            + ` ${ this.config.iterationCount } ${ this.config.direction }`;
    }

};

/**
 * Creates a CSS keyframes rule.
 *
 * @exports
 * @param {string} name name of the keyframes, CANNOT take a defined one
 * @param {({[step: string]: Properties<string|number>;})} body content of the keyframes
 * @returns
 */
export const createAnimation = (name: string, body: {[step: string]: Properties<string|number>;}) => {
    const id = "ani_" + createid(name);

    if (!document.getElementById(id)) {
        reactanimationinject(id, name, body);
    }

    return (props?: CSSAnimationProps) => (new CSSAnimation(name, props ?? {})).toString();
};

/**
 * Creates a container which renders no additional elements but binds all the children
 * in the first level with a className,
 * to apply style rules on them.
 *
 * @export
 * @class StyledWrapperCC
 * @extends {React.Component<StyleInjection>}
 */
export class StyledWrapperCC extends React.Component<StyleInjection> {

    private ref: React.RefObject<HTMLElement>[] = [];

    public render(): JSX.Element {
        if (this.props.children) {
            if ((this.props.children as any[]).length) {
                const children = this.props.children as (
                    JSX.Element & { ref: null | React.RefObject<HTMLElement> }
                )[];
                return (
                    <>
                    {
                        children.map((n, i) => {
                            if (n.ref) {
                                this.ref.push(n.ref);
                                return {
                                    ...n,
                                    key: i
                                };
                            } else {
                                const r = createRef<HTMLElement>();
                                this.ref.push(r);
                                return {
                                    ...n,
                                    key: i,
                                    ref: r
                                };
                            }
                        })
                    }
                    </>
                );
            } else {
                const childNode = this.props.children as (
                    JSX.Element & { ref: null | React.RefObject<HTMLElement> }
                );
                if (childNode.ref) {
                    this.ref.push(childNode.ref);
                    return childNode;
                } else {
                    const r = createRef<HTMLElement>();
                    this.ref.push(r);
                    return {
                        ...childNode,
                        ref: r
                    } as (
                        JSX.Element & { ref: null | React.RefObject<HTMLElement> }
                    );
                }
            }
        }

        return <></>;
    }

    public componentDidMount(): void {
        this.ref.forEach(r => {
            if (r.current) {
                if ((r.current as HTMLElement).classList) {
                    (r.current as HTMLElement).classList.add(this.props.id);
                }
            }
        });
    }

};

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
export const connectStyle = function <T extends React.Component>(
    injection: StyleInjection
) {
    const decorator = (target: T, _propertyKey: "render", descriptor: PropertyDescriptor) => {
        const origin = target.render;
        descriptor.value = function (this: T): JSX.Element {
            return (
                <StyledWrapperCC { ...injection } >
                    { origin.bind(this)() }
                </StyledWrapperCC>
            );
        };
    };

    return decorator;
};
