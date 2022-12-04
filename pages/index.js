import { useSession } from "next-auth/react";
import Router from "next/router";

function HomePage() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>loading...</p>;
    }

    if (status === "unauthenticated") {
        Router.push("/login");
    }

    return (
        <div>
            {session ? (
                <div>
                    <h1>{session.user.name}</h1>
                    <p>{session.user.email}</p>
                    <img src={session.user.image}></img>
                </div>
            ) : (
                <p>Skeleton</p>
            )}
        </div>
    );
}

export default HomePage;
