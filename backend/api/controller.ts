import express from 'express';
import { phonesGetter } from './dependencies';

export const phonesGetterController = async (request: express.Request, response: express.Response) => {
	const phones = await phonesGetter.execute();

	return response.status(200).json(phones);
}