const base = require("./base.js");
module.exports = {
  ...base,
  extends: [...base.extends, "plugin:react-hooks/recommended"],
};
