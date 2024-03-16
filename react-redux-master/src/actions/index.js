// src/action/index.js

const increment = (val) => {
    return {
        type: 'INCREMENT',
        inc: val
    }
}

export default increment;
