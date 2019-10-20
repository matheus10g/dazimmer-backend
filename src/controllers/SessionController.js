const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { device } = req.body;

        let user = User.findOne({ device });

        if (!user) {
            user = User.create({ device });
        }

        return res.json(user);
    }
};