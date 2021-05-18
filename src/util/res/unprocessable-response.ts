export const Unprocessable = (res, e: Error) =>
  res.status(422)
    .json({
      name: e.name,
      message: e.message
    });
