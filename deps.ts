/**
 * deps.ts
 *
 * This module re-exports the required methods from the dependant remote Ramda module.
 */
 export {
    Application,
    Router
} from "https://deno.land/x/oak@v10.6.0/mod.ts";

export type { DenonConfig } from "https://deno.land/x/denon@2.4.9/mod.ts";

export { config as env } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
