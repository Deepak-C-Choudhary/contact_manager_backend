const express = require("express");
const {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

router.get("/", getContacts);
router.post("/", addContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
