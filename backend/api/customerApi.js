import { randomBytes } from "crypto";

const customers = new Map();

export const save =({
    firstName,
    lastName,
    email,
    password,
    isTrader,
}) => {
    const customer = {
    
        id: randomBytes(16).toString("hex"),
        firstName,
        lastName,
        email,
        password,
        isTrader,

    };
    customers.set(customer.id, customer);
    return customer;
};

export const get = (id) => {
    const customer = customers.get(id);
    if (!customer) {
      throw new Error(`Not founded ${id}`);
    }
    return customer;
  };
  
  export const getAll = () => {
    return [...customers.values()];
  };
  
  export const update = (id, { firstName, lastName, email, password, istrader }) => {
    if (!customers.has(id)) {
      throw new Error(`Not founded ${id}`);
    }
    const customer = {
        id,
        firstName,
        lastName,
        email,
        password,
        istrader,
        postedDate: new Date(),
    };
    customers.set(customer.id, customer);
    return customer;
  };
  
  export const deletePost = (id) => {
    if (!customers.has(id)) {
      throw new Error(`Not founded ${id}`);
    }
    customers.delete(id);
  };