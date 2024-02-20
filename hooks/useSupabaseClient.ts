import { useContext } from 'react';


export const useSupabaseClient = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error('useSupabaseClient must be used within a SupabaseProvider');
  }
  return context.supabaseClient;
};