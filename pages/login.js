import React from "react";
import Router from "next/router";

function LoginPage() {
    return (
        <button
            onClick={() => {
                Router.push("/api/auth/signin/github");
            }}
        >
            Sign in with Github
        </button>
    );
}

export default LoginPage;
