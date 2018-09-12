import { Router } from 'express';
import * as BPRecordController from './controller';
import { requireJwtAuth } from '../../utils/requireJwtAuth';

const routes = new Router();
//requireJwtAuth, 
routes.post('/bprecords/new', BPRecordController.createBPRecord);
routes.post('/bprecords', BPRecordController.getBPRecords);

export default routes;
