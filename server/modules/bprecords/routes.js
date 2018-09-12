import { Router } from 'express';
import * as BPRecordController from './controller';
import { requireJwtAuth } from '../../utils/requireJwtAuth';

const routes = new Router();

routes.post('/bprecords/new', requireJwtAuth, BPRecordController.createBPRecord);
routes.post('/bprecords', requireJwtAuth, BPRecordController.getBPRecords);

export default routes;
