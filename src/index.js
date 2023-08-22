import GameSavingLoader from './js/GameSavingLoader';

console.log('script started!');

const receivedData = await GameSavingLoader.load()
  .then((data) => data)
  .catch((err) => console.log('Error: ', err));

console.log(JSON.parse(receivedData));
