const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;
    const user = await User.findByPk(user_id);

    console.log(user);

    if (!user) return res.status(400).json({ error: 'user not found' });

    const [ tech ] = await Tech.findOrCreate({
      where: { name }
    });

    await user.addTech(tech);

    res.json(tech);
  }
}
