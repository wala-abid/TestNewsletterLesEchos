import { UserType } from "@/types/type";

const BASE_USER = {
  id: "507f1f77bcf86cd799439011",
  firstName: "Jamie",
  lastName: "Doe",
  gender: "M",
  email: "jamie.doe@example.com",
};

export const USER_WITH_ONE_SUBSCRIPTION: UserType = {
  ...BASE_USER,
  subscriptions: ["RIGHT_1"],
};

export const USER_WITHOUT_SUBSCRIPTION: UserType = {
  ...BASE_USER,
  subscriptions: [],
};

export const USER_WITH_MULTIPLE_SUBSCRIPTION: UserType = {
  ...BASE_USER,
  subscriptions: ["RIGHT_1", "RIGHT_2"],
};
