import express from 'express';
import { registerRoutes } from './routes';

export const start = () => {
	const app = express();

	registerRoutes(app);

	app.listen(process.env.PORT || 8080, () => {
		console.log('Server running at port 8080');
	});
}