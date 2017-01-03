var creepRegistry = {
    ligthWorker: [WORK, MOVE, MOVE, CARRY],
    hardWorker: [WORK, WORK, CARRY, MOVE, MOVE, MOVE],
    creepCrowd: {
        harvester: {count: 3},
        upgrader: {count: 6},
        builder: {count: 4}
    }
}

module.exports = creepRegistry;

