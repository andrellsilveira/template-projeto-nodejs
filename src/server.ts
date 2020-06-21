import 'reflect-metadata';

import express from 'express';
/** A importação desse complemento deve ser realizada logo após a importação do Express */
import 'express-async-errors';
import './database';

import routes from './routes';
import handlerErrors from './middlewares/handlerErrors';

const porta = 3333;
const app = express();

app.use(express.json());
app.use(routes);

/** O middleware para tratamento dos erros deve ser executado após o middleware das rotas */
app.use(handlerErrors);

app.listen(porta, () => {
    console.log(`✅ Servidor iniciado na porta ${porta}`);
});
