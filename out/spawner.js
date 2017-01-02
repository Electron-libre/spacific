var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

var spawner =  {
    spawn: function(creeps) {
        var harvesters = _.filter(creeps, { memory: {role: 'harvester'} });
        var upgraders = _.filter(creeps, {memory: {role: 'upgrader'}});
        var builders = _.filter(creeps, {memory: {role: 'builder'}});

        if (Object.keys(harvesters).length < 2) {
            roleHarvester.buildSmall(Game.spawns.SpawnA);
        }
        if (Object.keys(upgraders).length < 1) {
            roleUpgrader.buildSmall(Game.spawns.SpawnA);
        }
        if (Object.keys(builders).length < 1) {
            roleBuilder.buildSmall(Game.spawns.SpawnA);
        }
    }
};

module.exports = spawner;
