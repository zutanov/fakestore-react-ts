import React from 'react';
import { SFooter, SFooterDesc, SFooterWrapper } from './footer';
import { Container, Logo } from '../header/header';

const Footer = () => {
    return (
        <SFooter>
            <Container>
                <SFooterWrapper>
                    <Logo>FakeApi</Logo>
                    <SFooterDesc>Just a footer</SFooterDesc>
                </SFooterWrapper>
            </Container>
        </SFooter>
    );
};

export default Footer;
