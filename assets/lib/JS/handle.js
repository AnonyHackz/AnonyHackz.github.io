// handlers.js
const e_Handlers = {
    signup: () => window.sup(),
    login: () => window.lin()
};

// Export handlers for use in Node.js and the browser
if (typeof module !== "undefined" && module.exports) {
    module.exports = e_Handlers;
} else {
    window.e_Handlers = e_Handlers;
}
