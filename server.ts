import * as http from 'http';

import * as express from 'express';
import * as cors from 'cors';
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!!!');
  });
/**
 * Start Express server.
 */
function startServer() {
  const httpServer = http.createServer(app);
  // const httpsServer = https.createServer(sslOptions, app);
  

  httpServer.listen(8000);
}
