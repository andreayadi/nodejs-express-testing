const User = require('../models/userModel');

exports.getAllUser = (req, res) =>
  res.status(200).json({
    status: 'Success',
    data: 'This is Data',
  });

exports.getUser = (req, res) =>
  res.status(200).json({
    status: 'Success',
    data: 'This is Data',
  });

exports.saveMessage = (req, res) => {
  const saveMessage = new User(req.body);
  saveMessage.save();
  res.status(200).json({
    status: 'Success',
    data: req.body,
  });
};

exports.getAllMessage = async (req, res) => {
  try {
    const messages = await User.find();
    res.status(200).json({
      data: messages,
    });
  } catch (error) {
    res.status(404).json({
      status: 'Failed',
      message: error,
    });
  }
};

// Another way to create data
// exports.createSomething = async (req, res) => {
// try {
//   const newSome = await Somemodel.create(req.body);
//   res.status(999).json({
//     status: 'success',
//     data: newSome,
//   });
// } catch (error) {
//   res.status(400).json({
//     status: 'fail',
//     message: error,
//   });
// }
// };
