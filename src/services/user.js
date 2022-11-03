import { dataUser } from "../mocks/user";

export const getDataUser = () => {
  return new Promise((resolve) => {
    return resolve(dataUser);
  });
};
