import { getSession } from "next-auth/react";
import Router from "next/router";

function HomePage({ session }) {
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

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: {
            session,
        },
    };
};

export default HomePage;
