var creepRegistry = {
    ligthWorker: [WORK, MOVE, MOVE, CARRY],
    hardWorker: [WORK, WORK, WORK, CARRY, MOVE, MOVE],
    creepCrowd: {
        upgrader: {count: 1},
        harvester: {count: 2},
        builder: {count: 3}
    }
}

module.exports = creepRegistry;
