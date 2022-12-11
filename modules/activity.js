const { client } = require("./global");
const { ActivityType } = require("discord.js");

const setActivity = () => client.user.setActivity(`InstanceX updates`, {
    type: ActivityType.Watching
});

module.exports = setActivity;