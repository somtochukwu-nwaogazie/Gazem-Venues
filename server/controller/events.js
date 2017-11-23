import data from '../event-data.json';
/** class represents an event controller */
class Events {
  /**
  * The function creates an event and returns created event
  *
  * @param  {obj} req request object
  * @param  {obj} res response object
  * @return {obj}    JSON response
  */
  static addEvents(req, res) {
    const {
      Name,
      EventName,
      EventDate,
      NoOfParticipants,
      ContactNumber,
      EventDetails
    } = req.body;
    data.Event.push(req.body);
    res.send("Event saved successfully");
  }
  /**
  * The function gets an event from the server and returns it
  *
  * @param  {obj} req request object
  * @param  {obj} res response object
  * @return {obj}    JSON response
  */
  static getEvents(req, res) {
    res.send(data.Event);
  }
}

export default Events;
