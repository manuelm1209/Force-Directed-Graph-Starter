import { colors } from "./colors.js";

export const nodes = [];
export const links = [];

const MAIN_NODE_SIZE = 40;
const CHILD_NODE_SIZE = 15;
const LEAF_NODE_SIZE = 7;
const DEFAULT_DISTANCE = 100;
const MAIN_NODE_DISTANCE = 200;
const LEAF_NODE_DISTANCE = 30;
export const MANY_BODY_STRENGTH = -5;

let i = 0;
const addMainNode = (mainNode) => {
  mainNode.size = MAIN_NODE_SIZE;
  mainNode.color = colors[i++][1];
  nodes.push(mainNode);
};

const addChildNode = (
  parentNode,
  childNode,
  size = CHILD_NODE_SIZE,
  distance = DEFAULT_DISTANCE
) => {
  childNode.size = size;
  childNode.color = parentNode.color;
  nodes.push(childNode);
  links.push({
    source: parentNode,
    target: childNode,
    distance,
    color: parentNode.color,
  });
};

const assambleChildNode = (parentNode, id, nodes = 20) => {
  const childNode = { id };
  addChildNode(parentNode, childNode);

  for (let i = 0; i < nodes; i++) {
    addChildNode(childNode, { id: "" }, LEAF_NODE_SIZE, LEAF_NODE_DISTANCE);
  }
};

const connectMainNodes = (source, target) => {
  links.push({
    source,
    // // Same as next line:
    // source: source,
    target,
    // Same as next line:
    target: target,
    distance: MAIN_NODE_DISTANCE,
    color: source.color,
  });
};

const artsWeb = { id: "Arts Web" };
addMainNode(artsWeb);
assambleChildNode(artsWeb, "Community Vision");
assambleChildNode(artsWeb, "Silicon Valley Creates");

const socialImpactCommons = { id: "Social Impact Commons" };
addMainNode(socialImpactCommons);
assambleChildNode(socialImpactCommons, "Theatre Bay Ares");
assambleChildNode(socialImpactCommons, "EastSide Arts Alliance");
assambleChildNode(socialImpactCommons, "Local Color");

const communityArtsStabilizationTrust = {
  id: "Community Arts Stabilization Trust",
};
addMainNode(communityArtsStabilizationTrust);
assambleChildNode(communityArtsStabilizationTrust, "CounterPulse");
assambleChildNode(communityArtsStabilizationTrust, "Luggage Store Gallery");
assambleChildNode(communityArtsStabilizationTrust, "Performing Arts Workshop");
assambleChildNode(communityArtsStabilizationTrust, "447 Minna St.", 5);
assambleChildNode(communityArtsStabilizationTrust, "Keeping Space Oakland");

const ambitioUS = {
  id: "AmbitioUS",
};
addMainNode(ambitioUS);
assambleChildNode(ambitioUS, "EBPREC", 3);
assambleChildNode(ambitioUS, "SELC", 3);
assambleChildNode(ambitioUS, "The Runway Project", 3);
assambleChildNode(ambitioUS, "Common Future", 3);
assambleChildNode(ambitioUS, "Freelance Union", 3);
assambleChildNode(ambitioUS, "US Federation of Worker Cooperatives", 3);

connectMainNodes(artsWeb, socialImpactCommons);
connectMainNodes(artsWeb, communityArtsStabilizationTrust);
connectMainNodes(socialImpactCommons, communityArtsStabilizationTrust);
connectMainNodes(ambitioUS, socialImpactCommons);
connectMainNodes(ambitioUS, communityArtsStabilizationTrust);
connectMainNodes(ambitioUS, artsWeb);

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
