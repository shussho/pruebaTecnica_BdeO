const BusGroup = require("./lib/BusGroup");

const groups = [1, 2, 1, 1, 1, 2, 1, 3];

const busGroups = new BusGroup(groups);

const travelPlan = busGroups.getTravelPlan();

console.log({ sizes: travelPlan.toString() });

