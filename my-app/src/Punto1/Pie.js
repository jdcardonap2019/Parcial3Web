import * as d3 from "d3";
import React from "react";
import { useRef } from "react";
import { FormattedMessage } from "react-intl";

function Pie(props) {
    const pieChart = useRef()
    const pieData = d3.pie().value(d => d.power)(props.pieData)
    const arc = d3.arc().innerRadius(0).outerRadius(200)
    const colors = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])
    const svg = d3.select(pieChart.current)
        .attr('width', 600)
        .attr('height', 600)
        .append('g')
        .attr("transform", "translate(300,300)")
    //Add tooltip
    const toolDiv = d3.select('#chartArea')
        .append('div')
        .style('visibility', 'hidden')
        .style('position', 'absolute')
        .style('background-color', 'red')
    //Draw pie
    svg.append('g')
        .selectAll('path')
        .data(pieData)
        .join('path')
        .attr('d', arc)
        .attr('fill', (d, i) => colors(i))
        .attr('stroke', 'white')
        .on('mouseover', (e, d) => {
            toolDiv.style('visibility', 'visible')
                .text(`${d.data.name}:` + ` ${d.data.power}` + ` ${d.data.medida}`)
        }).on('mousemove', (e, d) => {
            toolDiv.style('top', (e.pageY - 50) + 'px')
                .style('left', (e.pageX - 50) + 'px')
        })
        .on('mouseout', () => {
            toolDiv.style('visibility', 'hidden')
        })

    return (
        <div className="container">
            <h1><FormattedMessage id="Stats"/></h1>
            <h4 ><FormattedMessage id="Power Usage (kwH) - Today"/></h4>
            <div id='chartArea'>
                <svg ref={pieChart}></svg>
            </div>
        </div>
    )
}
export default Pie;