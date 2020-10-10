import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>NRC Data</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css"/>
        </Head>
        {props.children}
    </div>
);

export default Layout;
