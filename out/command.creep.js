var commandCreep = {
    recycleNoRole: function() {
        var noRoleCreeps = _.filter(Game.creeps, {memory: {}});
        _.each(noRoleCreeps, function(creep) {
            var spawn = creep.room.find(FIND_STRUCTURES, {
                filter: (stucture) => { return structure.structureType == STRUCTURE_SPAWN }
            });
            if (spawn[0].recycleCreep(creep) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn[0]);
            }
        });
    }
};

module.exports = commandCreep;
