const express = require("express");
const router = express.Router();
const CarsModel = require("../models").Cars;
const UserModel = require("../models").User;

// GET USERS PROFILE
router.get("/profile/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id, {
    include: CarsModel,
  });
  res.json({ user });
});

// GET ALL USERS WITH THEIR CARS
router.get("/", async (req, res) => {
  let users = await UserModel.findAll({
    include: CarsModel,
  });

  res.json({ users });
});

// CREATE A NEW USER
router.post("/", async (req, res) => {
  let user = await UserModel.create(req.body);
  res.json({ user });
});

// UPDATE A USER
router.put("/:id", async (req, res) => {
  let user = await UserModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ user });
});

// DELETE A USER
router.delete("/:id", async (req, res) => {
  await UserModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `User with id ${req.params.id} was deleted`,
  });
});

module.exports = router;
