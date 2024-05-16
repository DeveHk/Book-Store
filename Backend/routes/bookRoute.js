import express from "express";
import { ObjectId } from "mongodb";
import Book from "../models/bookModels.js";
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.title || !req.body.auther || !req.body.publishYear)
      return res.status(400).send({ message: "[Some Data Missing]" });

    const newBook = {
      title: req.body.title,
      auther: req.body.auther,
      publishYear: req.body.publishYear,
    };
    const bookRes = await Book.create(newBook);
    return res.status(201).send(bookRes);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
//update book
router.put("/:id", async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.title || !req.body.auther || !req.body.publishYear)
      return res.status(400).send({ message: "[Some Data Missing]" });
    const { id } = req.params; //put takes data form params also
    const bookRes = await Book.findByIdAndUpdate(id, req.body);
    if (!bookRes) return res.status(404).json({ message: "No Book Exists" });
    return res.status(201).send(bookRes);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.params; //put takes data form params also
    const bookRes = await Book.findByIdAndDelete(id);
    if (!bookRes) return res.status(404).json({ message: "No Book Exists" });
    return res.status(201).send(bookRes);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
//get all books
router.get("/", async (req, res) => {
  try {
    const bookRes = await Book.find();
    return res.status(201).send(bookRes);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
//get by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const objectId = new ObjectId(id);
    const bookRes = await Book.find({ _id: objectId });
    return res.status(201).send(bookRes);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

export default router;
