const Repository = require("./Repository");

class CustomersRepository extends Repository{
    constructor(client) {
        super(client, 'customers');
        this.client = client;
    }
    //Extra methods goes here(this is just an example of how to inherit the Repository and have a place to put extra methods for a module)
}

module.exports = CustomersRepository;