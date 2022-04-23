// next.js automatically creates a visitable page for all components under pages folder
// this layout.js file creates components that are reused on each page. you don't want to 
// visit the header page or footer page 

//Campaign List should be a child of Layout

import React from "react";
import { Container } from "semantic-ui-react";
import MyHeader from './Header';
import Head from 'next/head'

const Layout = (props) => {
    return (
        <Container>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                />
            </Head>
            <MyHeader />
            {props.children}
        </Container>
    )
};

export default Layout;