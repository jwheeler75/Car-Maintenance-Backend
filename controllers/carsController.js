const express = require("express");
const router = express.Router();
const CarsModel = require("../models").Cars;
const UserModel = require("../models").User;

// GET CAR PROFILE

router.get("/profile/:id", async (req, res) => {
  let car = await CarsModel.findByPk(req.params.id, {
    include: [
      {
        model: UserModel,

        attributes: ["id", "name"],
      },
    ],
  });
  res.json({ car });
});

// GET ALL CARS WITH THEIR USERS
router.get("/", async (req, res) => {
  let cars = await CarsModel.findAll({
    include: UserModel,
  });

  res.json({ cars });
});

// CREATE A NEW CAR
router.post("/", async (req, res) => {
  let car = await CarsModel.create(req.body);
  res.json({ car });
});

// UPDATE A CAR
router.put("/:id", async (req, res) => {
  console.log("this is the stuff", req.body, req.params);
  let car = await CarsModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ car });
});

// DELETE A CAR
router.delete("/:id", async (req, res) => {
  await CarsModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `Car with id ${req.params.id} was deleted`,
  });
});

module.exports = router;
