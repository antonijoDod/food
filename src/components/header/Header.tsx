import React from "react";
import {
    Center,
    Container,
    HStack,
    List,
    ListItem,
    Spacer,
    Link,
    Circle,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { RiShoppingBasket2Line } from "react-icons/ri";

import { Logo } from "@components";

const Header: React.FC = () => {
    return (
        <Center data-testid="container">
            <Container maxW="container.xl">
                <HStack>
                    <Logo />
                    <Spacer />
                    <List display="flex">
                        <ListItem px="2">
                            <NextLink href="/">
                                <Link>Home</Link>
                            </NextLink>
                        </ListItem>
                        <ListItem px="2">
                            <NextLink href="/shop">
                                <Link>Shop</Link>
                            </NextLink>
                        </ListItem>
                    </List>
                    <Spacer />

                    <Circle
                        size="38px"
                        border="1px"
                        borderColor="gray.200"
                        color="gray.900"
                    >
                        <RiShoppingBasket2Line fontSize="1.3rem" />
                    </Circle>
                </HStack>
            </Container>
        </Center>
    );
};

export default Header;
