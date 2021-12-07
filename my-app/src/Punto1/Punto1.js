import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Details from './Details'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from "react-intl";

const URL = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
const URL2 = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
function Punto1() {
  let [mostrar, setMostrar] = useState(false);
  let [data, setData] = useState([{}]);
  let [id, setIdActual] = useState(0);
  let [habitaciones, setHabitaciones] = useState([]);
  //Con PWA
  useEffect(() => {
    if(localStorage.getItem("Dona")===null && navigator.onLine){
      fetch(URL2).then(res => res.json()).then((res) => {
        setHabitaciones(res);
        localStorage.setItem("Dona", JSON.stringify(res))
      }).catch((e) => console.warn(e));
    }
    else{
      console.log("Error 1")
      let res2 = JSON.parse(localStorage.getItem("Dona"));
      console.log(res2)
      setHabitaciones(res2);
    }
  }, [])
  useEffect(() => {
    if(localStorage.getItem("Dona2")===null && navigator.onLine){
    fetch(URL).then(res => res.json()).then((res) => {
      setData(res);
      localStorage.setItem("Dona2", JSON.stringify(res))
    }).catch((e) => console.warn(e));
  }
  else {
    let res2 = JSON.parse(localStorage.getItem("Dona2"));
    console.log(res2)
    setData(res2);
    }
  }, [])
  function seeDetails(idActual) {
    setIdActual(idActual)
    setMostrar(true);
  }
  return (
    <div className="container">
      <h1><FormattedMessage id="My Spaces"/></h1>
      <div>
        <CardGroup>
          {data.map((d) =>
            <Card style={{ width: '300', height:'300'}}
              onClick={() => seeDetails(d.id)}>
              <Card.Img height="300" width="300" variant="top" src={d.type === "house" ? "https://i.pinimg.com/originals/81/90/64/819064cf7227eb76028da77584c4c4c3.jpg"
                : "https://w7.pngwing.com/pngs/360/663/png-transparent-new-york-city-animation-footage-4k-resolution-delivery-material-pattern-government-building-municipal-building-building-condominium-city.png"} />
              <Card.Body>
                <Card.Title>{d.name}</Card.Title>
                <Card.Text>
                  {d.address}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </CardGroup>
      </div>
      <div>
        {mostrar && <Details dataHabitaciones={habitaciones} idSpace={id} />}
      </div>
    </div>
  )
}

export default Punto1;