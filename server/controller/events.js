import data from '../event-data.json';
/** class represents an event controller */
class Events {
  static id = 0;

  /**
  * The function creates an event and returns created event
  *
  * @param  {obj} req request object
  * @param  {obj} res response object
  * @return {obj}    JSON response
  */
  static addEvent(req, res) {
    Events.id += 1;
    req.body.id = Events.id;
    data.Event.push(req.body);
    res.send({ message: 'Event created sucessfully', data: req.body });
  }

  /**
  * The function gets an event from the server and returns it
  *
  * @param  {obj} req request object
  * @param  {obj} res response object
  * @return {obj}    JSON response
  */
  static getEvent(req, res) {
    res.send(data.Event);
  }

  /**
  * The function gets an event from the server and returns the edited event
  *
  * @param  {obj} req request object
  * @param  {obj} res response object
  * @return {obj}    JSON response
  */
  static editEvent(req, res) {
    for (let event = 0; event < data.Event.length; event += 1) {
      if (data.Event[event].id === +req.params.eventId) {
        req.body.id = req.params.eventId;
        data.Event[event] = req.body;
        return res.status(200).send({ message: 'Event edited sucessfully', data: req.body });
      }
    }
    return res.status(404).send({ message: 'Event not found' });
  }
}


export default Events;
