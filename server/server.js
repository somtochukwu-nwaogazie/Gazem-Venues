import express from 'express';
import bodyParser from 'body-parser';
import Events from './controller/events';
import Center from './controller/centers';

const app = express();

app.use(bodyParser.json());
app.post('/events/', Events.addEvent);
app.get('/events/', Events.getEvent);
app.post('/center/', Center.addCenter);
app.get('/center/', Center.getCenter);
app.put('/events/:eventId', Events.editEvent);

app.listen(5000, () => console.log('Example app listening on port 5000!'));

