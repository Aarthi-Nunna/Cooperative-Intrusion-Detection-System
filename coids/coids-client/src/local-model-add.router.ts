import express, { Request, Response, Router } from 'express';

import { getGateway } from './gateway.js';
import { addLocalModel, getLocalModels, popLocalModels } from './local-model-add.js';

const gateway = await getGateway();

const network = gateway.getNetwork('mychannel');

const contract = network.getContract('basic', 'LocalModelAddContract');

export const localModelAddRouter: Router = express.Router();

localModelAddRouter.get('/', (_, response: Response) => {
    response.send('LocalModelAdd API works!');
});

localModelAddRouter.post('/add', async (request: Request, response: Response) => {
    const prevCID: string = request.body.prevCID;
    const CID: string = request.body.CID;
    await addLocalModel(contract, prevCID, CID);
    response.send('Added local model.');
});

localModelAddRouter.get('/get', async (_, response: Response) => {
    const localModels = await getLocalModels(contract);
    response.send(JSON.stringify(localModels));
});

localModelAddRouter.get('/pop', async (_, response: Response) => {
    const localModels = await popLocalModels(contract);
    response.send(JSON.stringify(localModels));
});

