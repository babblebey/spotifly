import { InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignIn = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const session = useSession();
    const router = useRouter();

    // On Session Status Change - Redirect back to Source Page If Status is 'authenticated'
    useEffect(() => {
        if (session.status === 'authenticated') {
            let { callbackUrl } = router.query;
            router.push(callbackUrl as string);
        }
    }, [session])

    return ( 
        <div className="h-screen bg-sdark-base">
            <Head>
                <title>Spotifly - Sign In</title>
            </Head>

            <main className="h-full flex flex-col items-center justify-center">
                {/* Logo */}
                <Image src={'/spotifly-w.svg'} width={600} height={70} className="object-contain p-5 animate-pulse" alt="Spotifly" />

                {/* Sign In Action */}
                {(!session || session.status === 'loading' || session.status === 'authenticated') ? (
                    // Loading 
                    <div className="mt-10">
                        <div className="w-10 h-10 rounded-full border-4 border-sgreen-100 border-b-sdark-base animate-spin" />
                    </div>
                ) : (
                    // Sign In Button
                    <div className="mt-10">
                        {Object.values(providers)?.map((provider) => (
                            <div key={provider.name}>
                                <button onClick={() => signIn(provider.id)} 
                                    className="bg-sgreen-200 hover:bg-sgreen-100 text-white font-bold rounded-full px-10 py-3 text-lg"
                                >
                                    Sign in with {provider.name}
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
 
export default SignIn;

export const getServerSideProps = async () => {
    const providers = await getProviders();

    return {
        props: { providers: providers ?? [] }
    }
}