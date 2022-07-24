/**
 * https://eloquentjavascript.net/07_robot.html#i_JrK0ADjuHH
 * 
 * Measuring a robot
 * It’s hard to objectively compare robots by just letting them solve a few scenarios. Maybe one robot
 * just happened to get easier tasks or the kind of tasks that it is good at, whereas the other didn’t.
 * 
 * Write a function compareRobots that takes two robots (and their starting memory). It should generate
 * 100 tasks and let each of the robots solve each of these tasks. When done, it should output the
 * average number of steps each robot took per task.
 * 
 * For the sake of fairness, make sure you give each task to both robots, rather than generating different
 * tasks per robot.
 */

const { VillageState, routeRobot, goalOrientedRobot, runRobot } = require('./a_robot');

const compareRobots = (robot1, memory1, robot2, memory2) => {
  const numOfTasks = 100;
  const turns1 = [];
  const turns2 = [];

  for (let task = 1; task <= numOfTasks; task++) {
    const villageTask = VillageState.random();
    turns1.push(runRobot(villageTask, robot1, memory1));
    turns2.push(runRobot(villageTask, robot2, memory2));
  }

  console.log('Average number of steps')
  console.log(`${robot1.name}: ${turns1.reduce((a, b) => a + b) / numOfTasks}`);
  console.log(`${robot2.name}: ${turns2.reduce((a, b) => a + b) / numOfTasks}`);
};

compareRobots(routeRobot, [], goalOrientedRobot, []);

module.exports = compareRobots;
