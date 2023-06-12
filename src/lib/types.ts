export type Post = {
  id: number;
  inserted_at: string;
  post: string;
  title: string;
  updated_at: string;
};

export type Book = {
  author: string;
  id: number;
  inserted_at: string;
  rating: number;
  summary: string;
  title: string;
  updated_at: string;
};

export type User = {
  app_metadata: {
    provider: string;
    providers: string[];
  };
  aud: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  created_at: string;
  email: string;
  email_confirmed_at: string;
  id: string;
  identities: [{}];
  last_sign_in_at: string;
  phone: string;
  role: string;
  updated_at: string;
  user_metadata: {};
};
