const { select, forceSimulation, forceManyBody, forceLink, forceCenter } = d3;

import { nodes, links, MANY_BODY_STRENGTH } from "./data.js";

const w = window.innerWidth;
const h = window.innerHeight;

const svg = select("#container").attr("width", w).attr("height", h);

const centerx = window.innerWidth;

const simulation = forceSimulation(nodes)
  .force("charge", forceManyBody().strength(MANY_BODY_STRENGTH))
  .force(
    "link",
    forceLink(links).distance((link) => link.distance)
  )
  .force("center", forceCenter(w / 2, h / 2));

const lines = svg
  .selectAll("lines")
  .data(links)
  .enter()
  .append("line")
  .attr("stroke", "black");

const circles = svg
  .selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("fill", "grey");

const text = svg
  .selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .attr("text-anchor", "middle")
  .attr("alignment-baseline", "middle")
  .text((node) => node.id);

simulation.on("tick", () => {
  circles
    .attr("cx", (node) => node.x)
    .attr("cy", (node) => node.y)
    .attr("r", (node) => node.size);
  text.attr("x", (node) => node.x).attr("y", (node) => node.y);
  lines
    .attr("x1", (link) => link.source.x)
    .attr("y1", (link) => link.source.y)
    .attr("x2", (link) => link.target.x)
    .attr("y2", (link) => link.target.y);
});
