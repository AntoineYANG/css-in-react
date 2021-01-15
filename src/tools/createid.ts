/*
 * @Author: Kanata You 
 * @Date: 2021-01-15 13:55:34 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-01-15 17:22:29
 */

import SHA256 from "./hash";


const createid = (obj: any) => {
    const id64 = SHA256(JSON.stringify(obj));
    let id8 = "";
    
    for (let i: number = 0; i < 64; i += 8) {
        let num = parseInt(id64.substr(i, 8), 16);
        if (num < 0) {
            num = Math.abs(parseInt(id64.substr(i + 1, 7), 16));
        }
        while (num >= 16) {
            num /= 2;
        }
        id8 += Math.floor(num).toString(16);
    }

    return "s" + id8;
};

export default createid;
