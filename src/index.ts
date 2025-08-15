import express, { type Request, type Response } from 'express';
import { useEmailHelper } from './helper/useEmailHelper.js';

const app = express();

// app.use(ipMiddleware)
app.set('trust proxy', true)

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.send("Hello!.");
});
app.get('/send-email', (req: Request, res: Response) => {
  useEmailHelper().send();
  res.send("Done!.");
});

app.get('/ipv4', (req, res) => {
  const ipAddress = req.ip;
  return res.json({ message: `Hello! Your IP address is: ${ipAddress}` });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
