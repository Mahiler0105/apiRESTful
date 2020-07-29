module.exports = (req, res, next) => {
  res.status(404).send({ statatus: 404, message: "Resource not found" });
};
