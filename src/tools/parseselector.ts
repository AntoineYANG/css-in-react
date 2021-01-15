/*
 * @Author: Kanata You 
 * @Date: 2021-01-15 15:53:29 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-01-15 16:12:05
 */

const parseselector = (s: string, id: string) => {
    let selector = "";
    let level = 0;
    s = s.trim().split(/ {2,}/).join(" ").split(", ").join(",");
    s.split("").forEach(c => {
        if (c === " " || c === ">") {
            if (level === 0) {
                selector += "." + id;
            }
            level += 1;
        } else if (c === ",") {
            if (level === 0) {
                selector += "." + id;
            }
            level = 0;
        } else if (level === 0 && (c === "[" || c === "+" || c === ":")) {
            selector += "." + id;
            if (c === ":") {
                level += 1;
            }
        } else if (c === "]" || c === ")") {
            level += 1;
        }
        selector += c;
    });
    if (level === 0) {
        selector += "." + id;
    }
    return selector.replace("*.", ".") || `.${ id }`;
};

export default parseselector;
