const baseUrl = 'http://localhost:8000/characters';
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    // console.log('getting all characters');
    return axios.get(`${this.BASE_URL}/characters`);
    
  }

  getOneRegister(id) {
    console.log('getting a character');
    return axios.get(`${this.BASE_URL}/characters/${id}`);
    //return data;
  }

  createOneRegister(character) {
    console.log('creating a character');
    return axios.post(`${this.BASE_URL}/characters`, character);
    //return data;
  }

  updateOneRegister(id, character) {
    console.log('updating a character');
    return axios.put(`${this.BASE_URL}/characters/${id}`, character);
    //return data;
  }

  deleteOneRegister(id) {
    console.log('deleting a character');
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
