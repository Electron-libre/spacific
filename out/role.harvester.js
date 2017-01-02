var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            var currentHarvestSource = roleHarvester.getHarvestedSource(creep);
            if (currentHarvestSource) {
                roleHarvester.harvestOrMove(creep, currentHarvestSource);
            } else {
                creep.memory.harvestedSource = selectHarvestSource(creep);
                roleHarvester.harvestOrMove(creep, roleHarvester.getHarvestedSource(creep));
            }
        } else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    },

    selectHarvestSource: function(creep) {
        var sources = _.map(creep.room.find(FIND_SOURCES), {id} );
        var harvestedSources = _.countBy(creep.room.creeps, function (creep) { creep.memory.harvestedSource });
        _.difference(sources, harvestedSources.key)[0] || _.min(_.pairs(harvestedSources, function(source) { return source[1]}))[0]
    },

    harvestOrMove: function(creep, source) {
        if (creep.harverst(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    },

    /** Return harvested source for given creep **/
    getHarvestedSource: function(creep) {
        return Game.getObjectById(creep.memory.harvestedSource);
    }
};

module.exports = roleHarvester;
