import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server';

export async function OAuthSignIn() {
    const supabase = await createClient();
  
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    });
  
    if(error){
        return redirect('/login?message=Could not authenticate');
    }
  
    redirect('/dashboard');
}

export async function LogOut() {
    const supabase = await createClient();
    let { error } = await supabase.auth.signOut();

    if(error){
        return redirect('/dashboard?message=Could not log out');
    }
    
    redirect('/login');
}

