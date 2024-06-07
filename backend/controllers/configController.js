const Config = require('../models/configModel');

exports.createConfig = async (req, res) => {
  try {
    const config = new Config(req.body);
    await config.save();
    res.status(201).send(config);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateConfig = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['email', 'youtube', 'tiktok', 'instagram', 'facebook', 'x', 'discord'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const config = await Config.findOne({ name: req.params.name });

    if (!config) {
      return res.status(404).send();
    }

    updates.forEach((update) => config[update] = req.body[update]);
    await config.save();

    res.send(config);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getConfig = async (req, res) => {
  try {
    const config = await Config.findOne({ name: req.params.name });

    if (!config) {
      return res.status(404).send();
    }

    res.send(config);
  } catch (error) {
    res.status(500).send(error);
  }
};