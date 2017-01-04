/** Source management utilities **/
var roomSources = {
    /** @return [Object{source_id => count}] **/
    harvestersCount: function(room) {
        return _.countBy(room.creeps, (creep) => { creep.memory.harvesting });
    },

    /** @return [Array(sources)] **/
    freeSources: function(room) {
        return _.omit(this.activeSources(room), _.keys(this.harvestersCount(room)));
    },

    /** @return [Array(sources)]**/
    activeSources: function(room) {
        return room.find(FIND_SOURCES_ACTIVE);
    },

    /** Which node should I harvest **/
    selectHarvestSource: function(room) {
        return (_.first(_.shuffle(this.freeSources(room)))
                || _.last(_.sortBy(_.pairs(this.harvestersCount(room)), (p) => { p[1] }))
                || _.first(_.shuffle(this.activeSources(room)))
               );
    },
}

module.exports = roomSources;
