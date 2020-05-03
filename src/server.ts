import express from 'express';
import routes from './routes';

const porta = 3333;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(porta, () => {
  console.log(`✅ Servidor iniciado na porta ${porta}`);
});
