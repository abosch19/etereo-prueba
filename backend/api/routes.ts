import express from 'express';
import { phonesGetterController } from "./controller"

export const registerRoutes = (app: express.Application) => {
	app.get('/phones', phonesGetterController);
}