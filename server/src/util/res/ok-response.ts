export const Ok = <T> (res, message: T) =>
  res.status(200).json(message);
