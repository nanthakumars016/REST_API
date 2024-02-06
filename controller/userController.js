const user = require("../model/registermodel");

//Create User

exports.postUser = async (req, res) => {
  try {
    const { name, age, city, email, phone } = req.body;

    const existingUser = await user.findOne({ email: email });

    if (!existingUser) {
      var new_User = new user({ name, age, city, email, phone });
      await new_User.save();
      res.send(new_User);
    } else {
      res.send("User alredy exist");
    }
  } catch (err) {
    res.send({ message: err });
  }
};

//Get All User

exports.getUser = async (req, res) => {
  const existingAllUser = await user.find();
  try {
    res.send(existingAllUser);
  } catch (err) {
    res.send({ message: err });
  }
};

//Get Single User

exports.getSingleUser = async (req, res) => {
  const existingSingleUser = await user.findById(req.params.id);
  try {
    res.send(existingSingleUser);
  } catch (err) {
    res.send({ message: err });
  }
};

//Update User

exports.updateUser = async (req, res) => {
  const { name, age, city, phone } = req.body;
  const updateUser = await user.findByIdAndUpdate(req.params.id, {
    name,
    age,
    city,
    phone,
  });

  try {
    res.send(updateUser);
  } catch (err) {
    res.send({ message: err });
  }
};

//Delet user

exports.deleteUser = async (req, res) => {
  const deleteuser = await user.findByIdAndDelete(req.params.id);
  try {
    res.send("User deleted Successfully...");
  } catch (err) {
    res.send({ message: err });
  }
};
