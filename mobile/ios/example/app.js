var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
win.open();

var GA = require('analytics.google');

GA.trackUncaughtExceptions = true;

var tracker = GA.getTracker("UA-XXXXXX-X");

// track a user sign on with some user identifier
tracker.setUser({
	userId: "123456",
	category: "UX",
	action: "User Sign In"
});

// track an event
tracker.trackEvent({
	category: "category",
	action: "test",
	label: "label",
	value: 1
});

// track a social action
tracker.trackSocial({
	network: "facebook",
	action: "action",
	target: "target"
});

// track timing info
tracker.trackTiming({
	category: "",
	time: 10,
	name: "",
	label: ""
});

// track a screen
tracker.trackScreen("Home");


// track a transaction
tracker.trackTransaction({
	transactionId: "123456",
	affiliation: "Store",
	revenue: 24.99 * 0.7,
	tax: 0.6,
	shipping: 0,
	currency: "CAD" // optional
});

// track a transaction item
tracker.trackTransactionItem({
	transactionId: "123456", // reference to above transaction
	name: "My Alphabet Book",
	sku: "ABC123",
	category: "product category", // optional
	price: 24.99,
	quantity: 1,
	currency: "CAD"
});

