var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var spawner = require('spawner');

module.exports.loop = function () {

    var tower = Game.getObjectById('TOWER_ID');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        var spawn = Game.spawns.SpawnA;
        if (creep.memory.renewing || creep.ticksToLive < 150) {
            creep.memory.renewing = true;
            switch (spawn.renewCreep(creep)) {
                case ERR_NOT_IN_RANGE:
                    creep.say('moving to renew');
                    creep.moveTo(spawn.pos);
                    break;
                case ERR_FULL:
                    creep.say('fully renewed');
                    creep.memory.renewing = undefined;
                    break;
                default:
                    creep.say('waiting');
                    break;
            }
        } else {
            if(creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            if(creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            if(creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
    }
    spawner.spawn(Game.creeps);
}
