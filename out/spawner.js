var spawner =  {
    spawn: function(creeps) {
        var harvesters = _.filter(creeps, { memory: {role: 'harvester'} });
        var upgraders = _.filter(creeps, {memory: {role: 'upgrader'}});
        if (Object.keys(harvesters).length < 2) {
            Game.spawns.SpawnA.createCreep([WORK, CARRY, MOVE], null, { role: 'harvester'});
        }
        if (Object.keys(upgraders).length < 1) {
            Game.spawns.SpawnA.createCreep([WORK, CARRY, MOVE], null, { role: 'upgrader'});
        }
    }
};

module.exports = spawner;
