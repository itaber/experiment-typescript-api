import express from 'express';

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Hello world!');
});

if (require.main === module) { // true if file is executed
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`server started at http://localhost:${port}`);
  });
}

export default app;
