import express from 'express';
import cors from 'cors';

import restaurants from './restaurants';
import orders from './orders';

export default (app: express.Express) => {
  app.use(cors());
  app.use(express.json());

  app.use('/restaurants', restaurants);
  app.use('/orders', orders);
};
