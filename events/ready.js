const setActivity = require("../modules/activity");

module.exports = {
    type: "ready",
    run: () => {
        setActivity();
    }
};