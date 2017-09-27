/// <reference types="js-cookie" />
import * as cookies from 'js-cookie';
export declare function find(name: string, options: cookies.CookieAttributes): string | undefined;
export declare function save(name: string, value: string | object, options: cookies.CookieAttributes): string | undefined;
