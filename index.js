const { select, forceSimulation, forceManyBody, forceLink, forceCenter } = d3;

import { nodes, links } from "./data.js";

// const nodes = [{ id: "Alice" }, { id: "Bob" }, { id: "Carol" }];

// const links = [
//   { source: 0, target: 1 }, // Alice → Bob
//   { source: 1, target: 2 }, // Bob → Carol
// ];

const w = window.innerWidth;
const h = window.innerHeight;

const svg = select("#container").attr("width", w).attr("height", h);

const centerx = window.innerWidth;

const simulation = forceSimulation(nodes)
  .force("charge", forceManyBody())
  .force("link", forceLink(links))
  .force("center", forceCenter(w / 2, h / 2));

const circles = svg
  .selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("r", 10);

const lines = svg
  .selectAll("lines")
  .data(links)
  .enter()
  .append("line")
  .attr("stroke", "black");

simulation.on("tick", () => {
  circles.attr("cx", (node) => node.x).attr("cy", (node) => node.y);
  lines
    .attr("x1", (link) => link.source.x)
    .attr("y1", (link) => link.source.y)
    .attr("x2", (link) => link.target.x)
    .attr("y2", (link) => link.target.y);
});
