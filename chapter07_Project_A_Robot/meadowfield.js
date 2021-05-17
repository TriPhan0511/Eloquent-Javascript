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

/**
 * Let's convert the list of roads to a data structure that, for each place, tells us what can be
 * reached from there.
 */

function buildGraph(edges) {
  let graph = Object.create(null);

  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  // for (let [from, to] of edges)
}