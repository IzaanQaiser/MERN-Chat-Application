export const sendMessage = async (req, res) => {
  try {
    const {message} = req.body;
    const {id} = req.params;

    const senderId = 0

  } catch (error) {
    console.log("Error in sendMessage Controller: ", error.message)
    res.status(500).json({error: "Internal Server Error" })
  }
};
