import axios from 'axios';

const url = 'http://3.21.164.220';

const getRequests = {

  getProducts: () => {
    axios.get(url + '/products')
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err));
  },

  getProductWithId: (productId = 5) => {
    axios.get(url + `/products/${productId}`)
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err));
  },
  getProductStyles: (productId = 5) => {
    return axios.get(url + `/products/${productId}/styles`)
      // .then(({ data }) => res.send(data))
      .catch(err => console.log(err));
  }
};

// const getProducts = () => {
//   axios.get(url + '/products')
//     .then(({ data }) => console.log(data))
//     .catch(err => console.log(err));
// };

// const getProductWithId = (productId = 5) => {
//   axios.get(url + `/products/${productId}`)
//     .then(({ data }) => console.log(data))
//     .catch(err => console.log(err));
// };

// const getProductStyles = (productId = 5) => {
//   axios.get(url + `/products/${productId}/styles`)
//     .then(({ data }) => res.send(data))
//     .catch(err => console.log(err));
// };

export default getRequests;