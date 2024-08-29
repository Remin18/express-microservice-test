import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/users', (req: Request, res: Response) => {
  res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Tom Jelly' }]);
});

app.listen(port, () => {
  console.log(`User Server running at port:${port}`);
});
