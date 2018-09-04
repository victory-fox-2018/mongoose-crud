module.exports = (res, status, err) => {
  res.status(status).json({
    message: err.message || err
  });
};