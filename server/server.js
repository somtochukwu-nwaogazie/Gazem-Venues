import express from 'express';
import bodyParser from 'body-parser';
import Events from './controller/events';
import Center from './controller/centers';

const app = express();

app.use(bodyParser.json());
app.post('/events/', Events.addEvents);
app.get('/events/', Events.getEvents);
app.post('/center/', Center.addCenter);
app.get('/center/', Center.getCenter);

app.listen(5000, () => console.log('Example app listening on port 3000!'));

