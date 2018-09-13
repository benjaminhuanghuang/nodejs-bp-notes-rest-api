import { Router } from 'express';
import * as BPRecordController from './controller';
import { requireJwtAuth } from '../../utils/requireJwtAuth';

const routes = new Router();
//requireJwtAuth, 
routes.post('/bprecords/new', BPRecordController.createBPRecord);
routes.delete('/bprecords/delete/:id', BPRecordController.deleteBPRecord);
routes.post('/bprecords', BPRecordController.getBPRecords);
routes.get('/bprecords/all', BPRecordController.getAllBPRecords);

export default routes;
