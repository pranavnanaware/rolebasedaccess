// server/roles.js
const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {
    ac.grant("basic")
        .readOwn("profile")
        .updateOwn("profile")

    ac.grant("editor")
        .extend("basic")
        .readAny("profile")
        .updateAny('profile')

    ac.grant("admin")
        .extend("basic")
        .extend("editor")
        .deleteAny("profile")

    return ac;
})();