//! Default Compute template program.

/// <reference types="@fastly/js-compute" />

addEventListener("fetch", (event) => event.respondWith(handleRequest(event)));

async function handleRequest(event: FetchEvent) {
    return new Response(JSON.stringify({ time: Date.now() }), {
        status: 200,
        headers: new Headers({ "Content-Type": "application/json" }),
    });
}
