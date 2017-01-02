var creepRegistry = require('creep.registry');
function workerBuilder() {
    if (Game.spawns.SpawnA.energy < 350) {
        return creepRegistry.ligthWorker
    } else {
        return creepRegistry.hardWorker
    }

}
var spawner =  {
    spawn: function(creeps) {
        _.each(creepRegistry.creepCrowd, function (conf, role) {
            if (_.keys(_.filter(creeps, {memory: {role: role}})) < conf.count) {
                Game.spawns.SpawnA.createCreep(workerBuilder, null, {role: role});
            }
        });
    }
};

module.exports = spawner;
