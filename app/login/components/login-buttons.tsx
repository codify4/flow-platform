import { OAuthSignIn } from "@/actions/auth"
import MainButton from "@/components/main-button"
import { Chrome } from "lucide-react"
import Form from 'next/form'

const LoginButton = () => {
    return (
        <Form 
            action={async () => {
                'use server'
                await OAuthSignIn()
            }}
        >
            <MainButton className="bg-primary hover:bg-secondary w-full py-5">
                <Chrome size={20} className="mr-2" />
                Sign in with Google
            </MainButton>
        </Form>
    )
}
export default LoginButton