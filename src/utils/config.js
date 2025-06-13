const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const avatarBucket = import.meta.env.VITE_SUPABASE_AVTAR_BUCKET;

const config = {
  supabaseUrl,
  supabaseKey,
  avatarBucket,
};

export default config;
