import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
const URL = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
function Punto1(){

    let [data, setData] = useState([]);;
    useEffect(()=>{
        fetch(URL).then(res=>res.json()).then((res=>{
            console.log("fetch response", res)
            setData(res);
;        }))
    }, [])
  function renderizarSpaces(){
      return(
        <div>
        <CardGroup>
<Card>
<Card.Img variant="top" src="https://previews.123rf.com/images/keltt/keltt1206/keltt120600012/13913433-hermosa-casa-de-campo-aislada-con-%C3%A1tico-en-el-fondo-blanco.jpg"/>
<Card.Body>
  <Card.Title>{data[0].name}</Card.Title>
  <Card.Text>
  {data[0].address}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer>
</Card>
<Card>
<Card.Img variant="top" src="https://previews.123rf.com/images/keltt/keltt1206/keltt120600012/13913433-hermosa-casa-de-campo-aislada-con-%C3%A1tico-en-el-fondo-blanco.jpg"/>
<Card.Body>
  <Card.Title>{data[1].name}</Card.Title>
  <Card.Text>
  {data[1].address}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer>
</Card>
<Card>
<Card.Img variant="top" src="https://previews.123rf.com/images/keltt/keltt1206/keltt120600012/13913433-hermosa-casa-de-campo-aislada-con-%C3%A1tico-en-el-fondo-blanco.jpg"/>
<Card.Body>
  <Card.Title>{data[2].name}</Card.Title>
  <Card.Text>
  {data[2].address}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer>
</Card>
</CardGroup>
    </div>
      );
  }
  return(
   <div>
       <h1>My Spaces</h1>
       <div>
           {renderizarSpaces()}
        </div>
   </div> 
    )
}

export default Punto1;