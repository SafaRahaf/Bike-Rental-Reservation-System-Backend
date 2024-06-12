import { ROLE } from "./user.constant";

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: number;
  address: string;
  role: keyof typeof ROLE;
};
