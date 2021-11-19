# SubscriptionFlow Node Client Library - API v1


This is the [node.js](http://nodejs.org/) Library for integrating with SubscriptionFlow. Sign up for a SubscriptionFlow account [here](https://www.subscriptionflow.com).

## License

MIT

## Getting started

### Getting authentication information
This library is intended to interact with the Subscription Flow api, so first of all we need an account [there](https://www.subscriptionflow.com). Once you are logged in your account you can get the <strong>base url</strong> of your instance in the address bar, it should look like "https://example.subscriptionflow.com". Then you should go to Administration Settings > USERS AND CONTROL > OAuth Clients, there you can create the OAuth Client and copy the <strong>client id</strong> and <strong>client secret</strong>.

### Starting to code
Inside a node project you can install the library running: 
<br>

```
npm i @subscriptionflow-developer/subscriptionflow-node
```

<br>
Once the library is installed import  and instantiate it passing the base url, client id and client secret that we mentioned before.<br>

```JavaScript
const SFlow = require('@subscriptionflow-developer/subscriptionflow-node');
var sFlow = new SFlow(base_url, client_id, client_secret);
```

<br>
After that we can call the methods in the format &#60;Subscriptionflow object&#62;.&#60;module&#62;.&#60;method()&#62;. See examples of common methods below.

```JavaScript
//Get all the products
products = await sFlow.products.get();
```
```JavaScript
//Get a product by id
product = await sFlow.products.getById(recordId);
```
```JavaScript
let createRecordData = {
    "name": "Test product",
    "description": "Test product created using api",
    "type": "Base Products",
    "status": "Active"
}

//Create Record
product = await sFlow.products.create(createRecordData);
```
```JavaScript
let updateRecordData = {
    "name": "Edited Test product"
}

//Update record
product = await sFlow.products.updateById(recordId, updateRecordData);
```
```JavaScript
//Delete record
product = await sFlow.products.deleteById(recordId);

```
