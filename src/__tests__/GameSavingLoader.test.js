import GameSavingLoader from '../js/GameSavingLoader';

jest.setTimeout(10000);

test('GameSavingLoader test', async () => {
  const dataToTest = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };

  const receivedData = await GameSavingLoader.load();
  const result = JSON.parse(receivedData);

  expect(result).toEqual(dataToTest);
});
