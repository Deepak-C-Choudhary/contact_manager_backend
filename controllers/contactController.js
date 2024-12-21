const Contact = require("../models/Contact");

const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

const addContact = async (req, res) => {
  const { name, email } = req.body;
  const newContact = new Contact({ name, email });
  await newContact.save();
  res.status(201).json(newContact);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updatedContact = await Contact.findByIdAndUpdate(
    id,
    { name, email },
    { new: true }
  );
  res.json(updatedContact);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  await Contact.findByIdAndDelete(id);
  res.json({ message: "Contact deleted" });
};

module.exports = { getContacts, addContact, updateContact, deleteContact };
