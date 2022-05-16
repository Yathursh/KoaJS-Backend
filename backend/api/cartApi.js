import { randomBytes } from "crypto";

const carts = new Map();

export const save = ({ text }) => {
  const cart = {
    id: randomBytes(16).toString("hex"),
    text,
    postedDate: new Date(),
  };
  carts.set(cart.id, cart);
  return cart;
};

export const get = (id) => {
  const post = carts.get(id);
  if (!cart) {
    throw new Error(`Not founded  ${id}`);
  }
  return cart;
};

export const getAll = () => {
  return [...carts.values()];
};

export const update = (id, { text }) => {
  if (!carts.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  const cart = {
    id,
    text,
    postedDate: new Date(),
  };
  carts.set(post.id, cart);
  return cart;
};

export const deletePost = (id) => {
  if (!carts.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  carts.delete(id);
};
