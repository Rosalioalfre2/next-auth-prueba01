import React from "react";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

function HomePage({ session }) {
    
    const { user } = session;
    
    // ! Si fuera por front end, es mejor ejecutarlo desde el back end (getServerSideProps)
    // const [user, setUser] = useState(null);
    // useEffect(() => {
    //     (async () => {
    //         const session = await getSession();
    //         setUser(session.user);
    //         console.log(session);
    //     })();
    // }, []);
    //! Fin

    return (
        <div>
            {JSON.stringify(user)}
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <img src={user.image} alt="Foto del usuario"></img>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    return {
        props: {
            title: "My first page",
            session: session,
        },
    };
};

export default HomePage;
