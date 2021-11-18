class  Repository {
    constructor(client, module) {
      this.client = client;
      this.module = module;
    }
    get() {
      return this.client.apiRequest({
        method: 'GET',
        path: `/api/v1/${this.module}`,
      });
    }
    getById(id) {
      return this.client.apiRequest({
        method: 'GET',
        path: `/api/v1/${this.module}/${id}`,
      });
    }
  
    create(data) {
      return this.client.apiRequest({
        method: 'post',
        path: `/api/v1/${this.module}`,
        data: data
      });
    }
  
    updateById(id, data) {
      return this.client.apiRequest({
        method: "put",
        path: `/api/v1/${this.module}/${id}`,
        data: data
      });
    }

    deleteById(id) {
      return this.client.apiRequest({
        method: 'delete',
        path: `/api/v1/${this.module}/${id}`,
      });
    }

    getWithRelationsList() {
      return this.client.apiRequest({
        method: 'get',
        path: `/api/v1/${this.module}/with-relations`,
      });
    }

    getRelatedList(id, relationship) {
      return this.client.apiRequest({
        method: 'get',
        path: `/api/v1/${this.module}/${id}/link/${relationship}`,
      });
    }

    // Criteria sample string "name=John"
    getFilteredList(criteria) {
      return this.client.apiRequest({
        method: 'get',
        path: `/api/v1/${this.module}/search?${encodeURI(criteria)}`,
      });
    }

    //Criteria sample object {"name":{"$equals":"John"}}
    filter(criteria) { 
      return this.client.apiRequest({
        method: 'post',
        path: `/api/v1/${this.module}/filter`,
        data: {'filter':criteria}
      });
    }

  }
  
  module.exports = Repository;
  
  