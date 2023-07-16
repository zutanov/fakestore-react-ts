import React from 'react';
import { Container, SHeader, SHeaderAuth, SHeaderImg, Logo, SHeaderWrapper } from './header';
import Cart from '../../assets/icons/basket.svg';
import User from '../../assets/icons/user.svg';

const Header = () => {
    return (
        <SHeader>
            <Container>
                <SHeaderWrapper>
                    <Logo>FakeApi</Logo>
                    <SHeaderWrapper>
                        <SHeaderAuth>
                            <SHeaderImg src={User}></SHeaderImg>
                            <SHeaderImg src={Cart}></SHeaderImg>
                        </SHeaderAuth>
                    </SHeaderWrapper>
                </SHeaderWrapper>
            </Container>
        </SHeader>
    );
};

export default Header;
