export const Conflict = (res, e: Error) =>
  res.status(409).json({
    message: e.message
  });
