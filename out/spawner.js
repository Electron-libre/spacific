var creepRegistry = require('creep.registry');
var spawner =  {
    spawn: function(creeps) {
        _.each(creepRegistry.creepCrowd, function (conf, role) {
            if (_.keys(_.filter(creeps, {memory: {role: role}})) < conf.count) {
                Game.spawns.SpawnA.createCreep(creepRegistry.ligthWorker, null, {role: role});
            }
        });
    }
};

module.exports = spawner;
