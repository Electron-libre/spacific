var roomSources = require('room.sources');
var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            var currentHarvestSource = roleHarvester.getHarvestedSource(creep);
            if (currentHarvestSource) {
                roleHarvester.harvestOrMove(creep, currentHarvestSource);
            } else {
                creep.memory.harvesting = roomSources.selectHarvestSource(creep.room);
                roleHarvester.harvestOrMove(creep, roleHarvester.getHarvestedSource(creep));
            }
        } else {
            creep.memory.harvestedSource = undefined;
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return _.includes([
                            STRUCTURE_EXTENSION,
                            STRUCTURE_SPAWN,
                            STRUCTURE_TOWER,
                            STRUCTURE_CONTAINER
                            ], structure.structureType) && structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    },

    /** Harvest or move to the given source **/
    harvestOrMove: function(creep, source) {
        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    },

    /** Return harvested source for given creep **/
    getHarvestedSource: function(creep) {
        return Game.getObjectById(creep.memory.harvesting);
    },
};


module.exports = roleHarvester;
