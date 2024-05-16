import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(234).send("[RUNNNING]");
});

export default router;
