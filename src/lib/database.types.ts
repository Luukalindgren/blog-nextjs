export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: number;
          inserted_at: string;
          post: string | null;
          title: string | null;
          updated_at: string;
        };
        Insert: {
          id?: number;
          inserted_at?: string;
          post?: string | null;
          title?: string | null;
          updated_at?: string;
        };
        Update: {
          id?: number;
          inserted_at?: string;
          post?: string | null;
          title?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      book_summaries: {
        Row: {
          author: string | null;
          id: number;
          inserted_at: string;
          rating: number | null;
          summary: string | null;
          title: string | null;
          updated_at: string;
        };
        Insert: {
          author?: string | null;
          id?: number;
          inserted_at?: string;
          rating?: number | null;
          summary?: string | null;
          title?: string | null;
          updated_at?: string;
        };
        Update: {
          author?: string | null;
          id?: number;
          inserted_at?: string;
          rating?: number | null;
          summary?: string | null;
          title?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
