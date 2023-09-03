// Golden and Wrath Cookie Clicker
// Automatically click golden cookies, wrath cookies and reindeers
// Based on RainSlide's Golden Cookie Clicker

// Cookie Clicker: https://orteil.dashnet.org/cookieclicker/

"use strict";

if (typeof Game !== "object" || Game === null || !Array.isArray(Game.shimmers)) {

	console.error(
		"Golden Cookie Clicker: Cookie Clicker API is not ready or invalid.\n" +
		"Please make sure you are running this script on a Cookie Clicker webpage, " +
		"and the page is fully loaded."
	);

} else if (typeof Proxy !== "function") {

	console.error(
		"Golden Cookie Clicker: JavaScript Proxy API is not available, "
	);

} else {

	const apply = (target, _this, args) => {
		var shimmer = args[0];
		if ((shimmer.type === "golden" || shimmer.wrath) || shimmer.type === "reindeer") {
			setTimeout(() => shimmer.pop(), 500);
		}
		return Reflect.apply(target, _this, args);
	};

	Object.defineProperty(Game.shimmers, "push", {
		value: new Proxy(Game.shimmers.push, { apply }),
		writable: true,
		enumerable: false,
		configurable: true
	});

	typeof Game.Win === "function" &&
	Game.Win("Third-party");


}