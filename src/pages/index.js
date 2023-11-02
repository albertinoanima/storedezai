import Head from 'next/head';

// ServerSide code
export const getServerSideProps = () => {
    return {
        redirect: {
            destination: '/index.html',
            permanent: false
        }
    }
}


const Home = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no" />
                <meta name="description" content="Loyalty Engine Admin - Web." />
                <meta name="keywords" content="Fidelização, VOID" />
                <meta name="author" content="VOID" />
                <title>Loyalty Engine Admin | Clientes</title>
            </Head>
        </>
    );
}

export default Home;
