var creepRegistry = require('creep.registry');
function workerBuilder(creep) {
    if (creep.room.controller.level > 1) {
        creepRegistry.ligthWorker
    } else {
        creepRegistry.hardWorker
    }

}
var spawner =  {
    spawn: function(creeps) {
        _.each(creepRegistry.creepCrowd, function (conf, role) {
            if (_.keys(_.filter(creeps, {memory: {role: role}})) < conf.count) {
                Game.spawns.SpawnA.createCreep(workerBuilder(_.first(creeps)), null, {role: role});
            }
        });
    }
};

module.exports = spawner;
