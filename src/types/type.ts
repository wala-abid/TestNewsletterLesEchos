export type SubscriptionType = "RIGHT_1" | "RIGHT_2";

export type NewsletterItemType = {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: SubscriptionType[];
};

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  subscriptions: SubscriptionType[];
};
