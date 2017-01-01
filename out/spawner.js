var spawner =  {
    spawn: function(creeps) {
        var harvesters = _.filter(creeps, { memory: {role: 'harvester'} });
        var upgraders = _.filter(creeps, {memory: {role: 'upgrader'}});
        if (harvesters.size < 2) {
            Game.spawns.SpawnA.createCreep([WORK, CARRY, MOVE], null, {memory: { role: 'havester'}});
        }
        if (upgraders.size < 1) {
            Game.spawns.SpawnA.createCreep([WORK, CARRY, MOVE], null, {memory: { role: 'upgrader'}});
        }
    }
};

module.exports = spawner;
