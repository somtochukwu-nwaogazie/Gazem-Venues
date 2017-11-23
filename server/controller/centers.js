import centerData from '../center-data.json';
/** class represents an center controller */
class Center {
  /**
  * The function creates a center and returns created center
  *
  * @param  {obj} req request object
  * @param  {obj} res response object
  * @return {obj}    JSON response
  */
  static addCenter(req, res) {
    const {
      VenueName,
      Capacity,
      Location,
      Cost
    } = req.body;
    centerData.Center.push(req.body);
    res.send('Center saved successfully');
  }
  /**
  * The function gets a created center from the server and returns it
  *
  * @param  {obj} req request object
  * @param  {obj} res response object
  * @return {obj}    JSON response
  */
  static getCenter(req, res) {
    res.send(centerData.Center);
  }
}

export default Center;
