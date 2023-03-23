import app from './app';
import 'dotenv/config';

const port = parseInt(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
