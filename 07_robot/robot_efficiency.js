/**
 * https://eloquentjavascript.net/07_robot.html#i_VbBsQJ1lp6
 * 
 * Robot efficiency
 * Can you write a robot that finishes the delivery task faster than goalOrientedRobot? If you observe
 * that robot’s behavior, what obviously stupid things does it do? How could those be improved?
 * 
 * If you solved the previous exercise, you might want to use your compareRobots function to verify
 * whether you improved the robot.
 */

const { findRoute, roadGraph, goalOrientedRobot } = require('./a_robot');
const compareRobots = require('./measuring_a_robot');

const findShortestRoute = (from, to) => {
  let shortestRoute = null;

  for (let i = 0; i < to.length; i++) {
    const newRoute = findRoute(roadGraph, from, to[i].place);
    shortestRoute = !shortestRoute || (
        (shortestRoute.length > newRoute.length) ||
        (shortestRoute.length === newRoute.length && to[i].isPickup)
      ) ? newRoute : shortestRoute;
  }

  return shortestRoute;
};

const getPlaces = (parcels, from) => {
  const choices = [];

  parcels.forEach(p => {
    if (p.place !== from) {
      choices.push({ place: p.place, isPickup: true })
    }
  });

  return choices;
};

const getAddress = (parcels, from) => {
  const address = [];

  parcels.forEach(p => {
    if (p.place === from) {
      address.push({ place: p.address, isPickup: false });
    }
  });

  return address;
};

const getShortestRoute = (parcels, from) => {
  const choices = getPlaces(parcels, from).concat(getAddress(parcels, from));
  
  return findShortestRoute(from, choices);
};

const efficientRobot = ({ place, parcels }, route) => {
  if (route.length === 0) {
    route = getShortestRoute(parcels, place);
  }
  return { direction: route[0], memory: route.slice(1) };
};

compareRobots(goalOrientedRobot, [], efficientRobot, []);
