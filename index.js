const BusGroup = require("./lib/BusGroup");

exports.handler = async (event) => {
    // TODO implement
    const postObject = JSON.parse(event.body);
    
    // Recibe los valores desde el request
    let groups = postObject.groups.split(',').map(function (x) { 
      return parseInt(x, 10); 
    });
    

    const busGroups = new BusGroup(groups);
    
    const travelPlan = busGroups.getTravelPlan();
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({sizes: travelPlan.toString()}),
    };
    return response;
};