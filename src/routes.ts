import express, { Request, Response } from 'express';

const routes = express.Router();

routes.get('/', (_ignore: Request, res: Response) => res.json({ message: 'sucess' }));

export default routes;
