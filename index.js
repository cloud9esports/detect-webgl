function detectWebGLContext() {
    // Create canvas element. The canvas is not added to the
    // document itself, so it is never displayed in the
    // browser window.
    let canvas = document.createElement("canvas");
    // Get WebGLRenderingContext from canvas element.
    let gl = canvas.getContext("webgl")
        || canvas.getContext("experimental-webgl");
    // Report the result.
    return gl && gl instanceof WebGLRenderingContext;
}
