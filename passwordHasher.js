const crypto = require("crypto");

module.exports = {hash: async function (txt) {
    let hash = crypto.createHash("sha256")
    .update(txt).digest('base64');  
    console.log(hash);
    return hash;
}};
