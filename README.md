# Google Analytics Module

## Description

Connects to Google Analytics for app event tracking. The 2.x release of this module is targeted for the [Google Analytics SDK for iOS v3](https://developers.google.com/analytics/devguides/collection/ios/v3/) and [Google Analytics SDK v4 for Android](https://developers.google.com/analytics/devguides/collection/android/v4/).

## Set up Google Analytics

First step: you have to create a new app property in your Google Analytics-account. Refer to [this page](http://support.google.com/analytics/bin/answer.py?hl=en&answer=2587086&topic=2587085&ctx=topic) for more information.


## Usage

To access this module from JavaScript, you need to do the following:

```javascript
var GA = require("analytics.google");
```

The GA variable is a reference to the Module object. To interact with the tracker, create a tracker instance using the `getTracker` method.

```javascript
var tracker = GA.getTracker("UA-1234567-8");
tracker.trackEvent({
  category: "Loading",
  action: "cancelled"
});
```

## Reference

### Module.trackUncaughtExceptions

Set this property on the module to true when you want to enable exception tracking. iOS only.

```javascript
var GA = require("analytics.google");
GA.trackUncaughtExceptions = true; // ios only
```

### Module.optOut

Set this property to true if you want to disable analytics across the entire app.

```javascript
var GA = require("analytics.google");
GA.optOut = false;
````

### Module.dryRun

Set this property to true if you want to enable debug mode. This will prevent sending data to Google Analytics.

```javascript
var GA = require("analytics.google");
GA.dryRun = true;
```

### Module.dispatchInterval

Data collected using the Google Analytics SDK for Android is stored locally before being dispatched on a separate thread to Google Analytics. By default, data is dispatched from the Google Analytics SDK for Android every 30 minutes. By default, data is dispatched from the Google Analytics SDK for iOS every 2 minutes. Set this property if you would like to change the interval.

```javascript
var GA = require("analytics.google");
GA.dispatchInterval = 900; // seconds
```


### Module.getTracker(id)

Retrieve an analytics tracker object. Must pass the "UA-XXXXXXX-X" id string that you get from Google Analytics.

### Tracker.setUser(params)

Tracks a user sign in with an 'anonymous' identifier. You will be breaking Google's terms of service if you use any of the user's personal information (including email address).

| Property | Type   | Description | Required |
| -------- |:------:| ----------- |:--------:|
| userId   | String | Unique identifier | Yes |
| category | String | The event category | Yes |
| action   | String | The event action | Yes |


### Tracker.trackEvent(params)

Tracks an event taking the following parameters:

| Property | Type   | Description | Required |
| -------- |:------:| ----------- |:--------:|
| category | String | The event category | Yes |
| action   | String | The event action | Yes |
| label    | String | The event label | No |
| value    | String | The event value | No |

### Tracker.trackSocial(params)

Tracks social interactions taking the following parameters:

| Property | Type   | Description | Required |
| -------- |:------:| ----------- |:--------:|
| network  | String | e.g. facebook, pinterest, twitter | Yes |
| action   | String | The event action | Yes |
| target   | String | The event target | No |

### Tracker.trackTiming(params)

Tracks a timing taking the following parameters:

| Property | Type   | Description | Required |
| -------- |:------:| ----------- |:--------:|
| category | String | The event category | Yes |
| time     | Number | In milliseconds | Yes |
| name     | String | The event name | No |
| label    | String | The event label | No |

### Tracker.trackScreen(params)

Tracks a screen change using the screen's name.

| Property | Type   | Description | Required |
| -------- |:------:| ----------- |:--------:|
| screenName | String | The name of the screen you want to record | Yes |

### Tracker.trackTransaction(params)

Tracks an ecommerce transaction.

| Property | Type   | Description | Required |
| -------- |:------:| ----------- |:--------:|
| transactionId | String | A unique identifier | Yes |
| affiliation   | String | A category for the transaction. e.g. StoreFront | Yes |
| revenue       | Number | The total revenue including tax and shipping | Yes |
| tax           | Number | The amount of tax in the transaction | Yes |
| shipping      | Number | The amount of shipping in the transaction | Yes |
| currency      | String | The currency code. e.g. USD, CAD, etc. | No |

### Tracker.trackTransactionItem(params)

Tracks an ecommerce transaction's item.

| Property | Type   | Description | Required |
| -------- |:------:| ----------- |:--------:|
| transactionId | String | A unique identifier that matches the identifier used in `trackTransaction` | Yes |
| name          | String | The name of the item | Yes |
| sku           | String | A reference number for the item | Yes |
| category      | String | A category for the item | No |
| price         | Number | The price of the item | Yes |
| quantity      | Number | The number of items purchased | Yes |
| currency      | String | The currency code. e.g. USD, CAD, etc. | No |



## Authors

* [Matt Tuttle](https://github.com/MattTuttle "Matt Tuttle")
* [Adam St. John](https://github.com/astjohn "Adam St. John")

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
