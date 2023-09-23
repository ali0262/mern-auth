const test = (req, res, next) => {
  res.status(200).json({ message: "hello from server" });
};

export default test;
