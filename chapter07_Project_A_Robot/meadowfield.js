/**
 * 1. MEADOWFIELD
 */

/**
 * The village of Meadowfield isn't very big. It consists of 11 places with 14 roads between them.
 * It can be described with this array of roads:
 */

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];
// -----------------------------------------------------------------------

/**
 * The network of roads in the vallage forms a graph.
 * A graph is a collection of points (places in the village) with line between them (roads).
 * This graph will be the word that our robot moves through
 *
 * The array of strings isn't very easy to work.
 * What we're interested in is the destinations that we can reach from a given place.
 * Let's convert the list of roads to a data structure that, for each place, tell us
 * what can be reached from there.
 */

function buildGraph(edges) {
  let graph = Object.create(null);

  function addEdge(from, to) {
    // if (graph[from] == null) {
    if (graph[from] === undefined) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of edges.map((r) => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

const roadGraph = buildGraph(roads);
// console.log(roadGraph);

// Alice's House: (3) ["Bob's House", "Cabin", "Post Office"]
// Bob's House: (2) ["Alice's House", "Town Hall"]
// Cabin: ["Alice's House"]
// Daria's House: (2) ["Ernie's House", "Town Hall"]
// Ernie's House: (2) ["Daria's House", "Grete's House"]
// Farm: (2) ["Grete's House", "Marketplace"]
// Grete's House: (3) ["Ernie's House", "Farm", "Shop"]
// Marketplace: (4) ["Farm", "Post Office", "Shop", "Town Hall"]
// Post Office: (2) ["Alice's House", "Marketplace"]
// Shop: (3) ["Grete's House", "Marketplace", "Town Hall"]
// Town Hall: (4) ["Bob's House", "Daria's House", "Marketplace", "Shop"]
// ----------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------

/**
 * 2. THE TASK
 */
