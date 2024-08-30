import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/products', (req: Request, res: Response) => {
  res.json([{ id: 1, name: 'Product A' }, { id: 2, name: 'Product B' }]);
});

app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Product Server running at port:${port}`);
});
