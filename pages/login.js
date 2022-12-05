import React from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import {useEffect} from 'react';

function LoginPage() {
    const { data: session, status } = useSession();
    const Router = useRouter();

    useEffect(() => {
        (async () => {
            const providers = await getProviders();
            console.log(providers);
        })();
    }, []);

    if (status !== "loading" && status === "authenticated") {
        Router.push("/");
    }

    return (
        <button
            onClick={() => {
                signIn("github");
            }}
        >
            Sign in with Github
        </button>
    );
}

export default LoginPage;
