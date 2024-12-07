const User = require("../../models/User.js");

async function deletedUser(req, res) {
  try {
    const id = req.params.id;
    const removeuser = await User.findByIdAndDelete(id);
    if (!removeuser) {
      return res
        .status(400)
        .json({ message: "user is not deleted successfully" });
    }
    return res.status(200).json({ message: "user is deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { deletedUser };
