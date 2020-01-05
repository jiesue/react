const eventEmitter = require('events')

const Store = Object.assign({}, eventEmitter.prototype, {
    state: {
        number: 1
    },
    getState() {
        return this.state;
    },
    addNumber() {
        this.state.number++;
        this.emit('change')
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }

})

export default Store;