import { randomBytes } from "crypto";

const items = new Map();

export const save = ({
  itemName,
  description,
  quantity,
  price,
}) => {
  const item = {
    id: randomBytes(16).toString("hex"),
    itemName,
    description,
    quantity,
    price,
    postedDate: new Date(),
  };
  items.set(item.id, item);
  return item;
};

export const get = (id) => {
  const item = items.get(id);
  if (!item) {
    throw new Error(`Not founded ${id}`);
  }
  return item;
};

export const getAll = () => {
  return [...items.values()];
};

export const update = (
  id,
  { itemName, description, quantity, price }
) => {
  if (!items.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  const item = {
    id,
    itemName,
    description,
    quantity,
    price,
    postedDate: new Date(),
  };
  items.set(item.id, item);
  return item;
};

export const deletePost = (id) => {
  if (!items.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  items.delete(id);
};
