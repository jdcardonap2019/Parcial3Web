import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from "react-intl";

function DetailsDevices(props) {
    let id=1;
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col"><FormattedMessage id="Device"/></th>
                        <th scope="col"><FormattedMessage id="Value"/></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.devices.map((d)=>
                         <tr>
                         <th scope="row">{id++}</th>
                         <th>{d.id}</th>
                         <td>{d.name}</td>
                         <td>{d.desired.value}</td>
                     </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default DetailsDevices;