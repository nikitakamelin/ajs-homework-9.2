import jsonFunction from "./parser";
import read from "./reader";

export default class GameSavingLoader {
		// загружает данные (с помощью read), парсит их (с помощью json()) и создаёт объект типа GameSaving
		static async load() {
			try {
				const data = await read();
				return await jsonFunction(data);
			} 
			catch (e) {
				console.log('Error: ', e);
			}
		}
	}