import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import moment from "moment-timezone";
import axios from "axios";
import "./App.css";

function App() {
  const [timesList, setTimesList] = useState(undefined);

  useEffect(() => {
    axios.get("http://localhost:3001/").then((result) => {
      setTimesList(result.data);
    });
  }, []);

  const getTimeInCurrentTZ = (item) => 
  {
    const currentTimeZone = moment.tz.guess();
    const dateTime = moment.tz(item.datetime,item.region)
    return dateTime.tz(currentTimeZone).format();
  }

  return (
    <div className="app-container">
      <h1>The Time Zone Converter</h1>
      <div className="row row-width">
          <div className="col-2">
            <ListGroup className="p-1">
              <ListGroup.Item className="text-dark">Country</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-2">
            <ListGroup className="p-1">
              <ListGroup.Item className="text-dark">Time</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-3">
            <ListGroup className="p-1">
              <ListGroup.Item className="text-dark">Local Time</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-5">
            <ListGroup className="p-1">
              <ListGroup.Item className="text-dark">Details</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      {timesList ? timesList.map((item) => (
        <div className="row row-width">
          <div className="col-2">
            <ListGroup key={item.region} className=" p-1 ">
              <ListGroup.Item className="text-dark">{item.region}</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-2">
            <ListGroup key={item.region} className="p-1">
              <ListGroup.Item className="text-dark">{item.datetime}</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-3">
            <ListGroup key={item.region} className="p-1">
              <ListGroup.Item className="text-dark">{getTimeInCurrentTZ(item)}</ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col-5">
            <ListGroup key={item.region} className="p-1">
              <ListGroup.Item className="text-dark">
                {`${item.datetime} after conversion ${getTimeInCurrentTZ(item)}`}
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      )) : (
        <div className="display-4">Loading...</div>
      )}
    </div>
  );
}

export default App;
