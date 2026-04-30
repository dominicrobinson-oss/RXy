import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("http")
    ? process.env.NEXT_PUBLIC_SUPABASE_URL
    : "http://localhost:54321";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY"
    ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    : "public-anon-key-placeholder";

export const supabase = createBrowserClient(
  supabaseUrl,
  supabaseAnonKey
);
