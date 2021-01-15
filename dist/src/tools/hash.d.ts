declare const SHA256: (s: string) => string;
export default SHA256;
export declare function b64_sha256(s: string): string;
export declare function any_sha256(s: string, e: string): string;
export declare function hex_hmac_sha256(k: string, d: string): string;
export declare function b64_hmac_sha256(k: string, d: string): string;
export declare function any_hmac_sha256(k: string, d: string, e: string): string;
export declare function sha256_vm_test(): boolean;
export declare function str2rstr_utf16le(input: string): string;
export declare function str2rstr_utf16be(input: string): string;
export declare function rstr2binb(input: string): any[];
export declare function sha256_Sigma0512(x: any): number;
export declare function sha256_Sigma1512(x: any): number;
export declare function sha256_Gamma0512(x: any): number;
export declare function sha256_Gamma1512(x: any): number;