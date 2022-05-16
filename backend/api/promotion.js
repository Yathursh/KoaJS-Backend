import { randomBytes } from "crypto";

const offers = new Map();

export const save = ({
  promoName,
  description,
  item,
  promoOff,
}) => {
  const offer = {
    id: randomBytes(16).toString("hex"),
    promoName,
    description,
    item,
    promoOff,
    postedDate: new Date(),
  };
  offers.set(offer.id, offer);
  return offer;
};

export const get = (id) => {
  const offer = offers.get(id);
  if (!offer) {
    throw new Error(`Not founded ${id}`);
  }
  return offer;
};

export const getAll = () => {
  return [...offers.values()];
};

export const update = (
  id,
  { promoName, description, item, promoOff }
) => {
  if (!offers.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  const offer = {
    id,
    promoName, 
    description,
    item,
    promoOff,
    postedDate: new Date(),
  };
  offers.set(offer.id, offer);
  return offer;
};

export const deletePost = (id) => {
  if (!offers.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  offers.delete(id);
};
