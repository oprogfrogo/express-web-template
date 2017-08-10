const db = require('../config/db');

exports.getSite = (si_idx, callback) => {

    db.from('process.SiteInfo')
    .where('si_idx', si_idx)
    .asCallback(callback);
};
