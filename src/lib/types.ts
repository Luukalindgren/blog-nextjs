export type Post = {
    id: number;
    title: string;
    post: string;
    inserted_at: string;
  };
  
export type Book = {
    id: number;
    title: string;
    author: string;
    summary: string;
    rating: number;
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
    user_metadata: {
    };
};

