import viewServices from '../views/notfound.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = viewServices;
  return divElement;
};
