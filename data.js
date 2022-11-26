export const nodes = [];
export const links = [];

const MAIN_NODE_SIZE = 50;
const CHILD_NODE_SIZE = 20;
const LEAF_NODE_SIZE = 7;
const DEFAULT_DISTANCE = 150;
const LEAF_NODE_DISTANCE = 20;
export const MANY_BODY_STRENGTH = -50;

const addMainNode = (mainNode) => {
  mainNode.size = MAIN_NODE_SIZE;
  nodes.push(mainNode);
};

const addChileNode = (
  parentNode,
  childNode,
  size = CHILD_NODE_SIZE,
  distance = DEFAULT_DISTANCE
) => {
  childNode.size = size;
  nodes.push(childNode);
  links.push({ source: parentNode, target: childNode, distance });
};

const parentNode = { id: "Arts Web" };
addMainNode(parentNode);

const childNode = { id: "Community Vision" };
addChileNode(parentNode, childNode);

for (let i = 0; i < 20; i++) {
  addChileNode(childNode, { id: "" }, LEAF_NODE_SIZE, LEAF_NODE_DISTANCE);
}

addChileNode(parentNode, { id: "Silicon Valley Creates" });

// export const nodes = [
//   {
//     founder: "",
//     company: "",
//     founded_year: "",
//     multiplier_effect_type: "",
//     logo_url: "",
//   },
//   {
//     founder: "",
//     company: "",
//     founded_year: "",
//     multiplier_effect_type: "",
//     logo_url: "",
//   },
//   {
//     founder: "",
//     company: "",
//     founded_year: "",
//     multiplier_effect_type: "",
//     logo_url: "",
//   },
// ];
