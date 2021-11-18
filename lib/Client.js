const axios = require('axios');
const Repository = require('./Repository');

const apiEnabledModules = [
  'attachments',
  'contacts',
  'creditnotes',
  'deals',
  'events',
  'invoices',
  'leads',
  'notes',
  'pdftemplates',
  'pipelines',
  'plans',
  'planprice',
  'products',
  'subscriptions',
  'tasks',
  'transactions',
  'usages',
  'users',
  'customers',
  'orders'
];

class Client {
  constructor(baseUrl, client_id, client_secret) {
    this.baseUrl = baseUrl;
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.grant_type = "client_credentials";

    this.setDynamicPropsForEnabledModule(this);

    // console.log(this);
  }

  setDynamicPropsForEnabledModule(client) {
    apiEnabledModules.forEach((module) => {
      this[module] = new Repository(client, module);
    });
  }

  customModule(moduleName) {
    return new Repository(this, moduleName);
  }

  async authenticate() {
    if(!this.access_token) {
      const dataForOauthToken = { 'client_id': this.client_id, 'client_secret': this.client_secret, 'grant_type': this.grant_type };
      let bearerToken = await axios.post(this.baseUrl + '/oauth/token', dataForOauthToken)
      .catch((error) => {
        console.log(error);
        return false;
      });
      
      if(bearerToken.data.access_token) {
        this.access_token = bearerToken.data.access_token;
        return this.access_token;
      } else {
        console.log(bearerToken);
        return false;
      }
    }
    return this.access_token;
  }
  
  async apiRequest(options) {
    await this.authenticate();
    
    const AuthStr = 'Bearer ' + this.access_token;
    const url = this.baseUrl + options.path;
    console.log(url + "\n" + JSON.stringify(options) + "\n" + AuthStr);
    let request = await axios({
      method: options.method,
      url: url,
      data: options.data,
      headers: {
        Authorization: AuthStr
      }
    }).catch((error) => {
      console.log(error.response);
      return false;
    });

    return request.data;
  }
}
module.exports = Client;