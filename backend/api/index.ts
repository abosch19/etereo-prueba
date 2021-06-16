import express from 'express';
import cors from 'cors';
import { registerRoutes } from './routes';

export const start = () => {
	const app = express();

	app.use(cors());
	registerRoutes(app);

	app.listen(process.env.PORT || 8080, () => {
		console.log('Server running at port 8080');
	});
}