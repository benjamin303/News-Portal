import Message from "../models/MessageModel.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.json(message);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveMessage = async (req, res) => {
  const message = new Message(req.body);
  try {
    const insertedmessage = await message.save();
    res.status(201).json(insertedmessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMessage = async (req, res) => {
  try {
    const updatedmessage = await Message.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedmessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const deletedmessage = await Message.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedmessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
