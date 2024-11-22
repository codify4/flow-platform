import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { getURL } from '@/lib/helper';

export async function OAuthSignIn() {
    const supabase = await createClient();
    const redirectUrl = getURL('/auth/callback');
  
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl,
      },
    });
  
    if(error){
      return redirect('/login?message=Could not authenticate user');
    }
  
    return redirect(data.url);
  }