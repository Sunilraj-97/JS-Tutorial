// Immediatly Invoked Function Expression (IIFE)

// After completing one function ; is important

(function school() {
    // named iife
    console.log("Government School");
})();

(() => {
    // iife
    console.log("Government High School");
})();

((name) => {
    // iife
    console.log(`Government High School at ${name}`);
})("Doddaballapur")

