import { Router } from 'express';
import { makeUniqueId } from '../utils';

const router = Router();

router.post('/', ({ body }, res) => {
  const orderSheet = {
    id: makeUniqueId(),
    ...body,
  };

  res.status(201).send({
    orderSheet,
  });
});

export default router;
