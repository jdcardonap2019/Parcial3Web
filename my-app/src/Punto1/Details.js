import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import DetailsDevices from './DetailsDevices'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pie from './Pie';
import { FormattedMessage } from "react-intl";
function Details(props) {
    let [seeDevices, setDevices] = useState(false);
    let [devices, setDevicesXd] = useState([])
    function seeDevicesFunction(devices) {
        setDevices(true);
        setDevicesXd(devices);
    }
    function renderDetails(h) {
        return h.homeId === props.idSpace ? (
            <div>
                <Card style={{ width: '12rem' }}
                    onClick={() => seeDevicesFunction(h.devices)}>
                    <Card.Img variant="top" src={h.type === "kitcken" ? "https://i.pinimg.com/736x/14/0a/48/140a48cb80f0d13474322df06c8db418.jpg" :
                        "https://www.clipartmax.com/png/middle/216-2166186_the-tv-is-in-the-living-room-pixel-art-living-room.png"} alt="Foto" />
                    <Card.Body>
                        <Card.Title>{h.name}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        ) : null
    }
    function renderPie(){
        let infoPie = []
        for(let i=0 ; i<props.dataHabitaciones.length ; i++){
            if(props.dataHabitaciones[i].homeId === props.idSpace){
                infoPie.push({
                    "name": props.dataHabitaciones[i].name,
                    "power": props.dataHabitaciones[i].powerUsage.value,
                    "medida": props.dataHabitaciones[i].powerUsage.unit,
                })
            }
        }
        return(<div>
            <Pie pieData = {infoPie}/>
        </div>)
    }
    return (
        <div>
            <h1><FormattedMessage id="My Rooms"/></h1>
            <div className="row">
                <div className="col">
                    <CardGroup>
                        {props.dataHabitaciones.map((h) =>
                            renderDetails(h)
                        )}
                    </CardGroup>
                </div>
                <div className="col">
                    {seeDevices && <DetailsDevices devices={devices} />}
                </div>
            </div>
            <div className="row">
            {renderPie()}
            </div>
        </div>
    )
}
export default Details;