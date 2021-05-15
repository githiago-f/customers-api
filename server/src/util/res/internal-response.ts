export const InternalError = (res, e) =>
  res.status(500).json({
    message: e.message
  });
