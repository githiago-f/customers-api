export const Created = <T> (res, createdEntity: T) =>
  res.status(201).json({
    message: 'Success creation!',
    data: createdEntity
  });
