import {delay} from "https://deno.land/std@0.167.0/async/delay.ts";

globalThis.addEventListener("unhandledrejection", (e) => {
    console.error('unhandledRejection', e);
    e.preventDefault();
});

(async () => {
    throw 'failed';
})();


await delay(5_000);
console.log('success');