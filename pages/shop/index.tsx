import React from "react";
import { Layout, ProductItem } from "@components";
import {
    Box,
    Container,
    Grid,
    GridItem,
    Heading,
    List,
    ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { GiHamburger, GiFullPizza } from "react-icons/gi";
import { HStack } from "@chakra-ui/react";

const ShopPage = () => {
    return (
        <Layout>
            <Box as="section" bgColor="gray.100" position="relative">
                <Image
                    src="/images/breadcrumb1.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
                <Container
                    maxW="container.xl"
                    fontSize="sm"
                    position="relative"
                >
                    <Box py="4"> Home Shop</Box>
                </Container>
            </Box>
            <Box as="section">
                <Container maxW="container.xl">
                    <Grid my="2rem" templateColumns="repeat(4, 1fr)" gap={6}>
                        {/* Left sidebar */}
                        <GridItem>
                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                p={4}
                            >
                                <Heading as="h6" fontSize="xl">
                                    Categories
                                </Heading>
                                <List pt={2}>
                                    <ListItem
                                        py={2}
                                        display="flex"
                                        justifyContent="space-between"
                                        borderBottom="1px"
                                        borderColor="gray.100"
                                    >
                                        <HStack>
                                            <GiHamburger />
                                            <Box as="span">Burgers</Box>
                                        </HStack>
                                        (9)
                                    </ListItem>
                                    <ListItem
                                        py={2}
                                        display="flex"
                                        justifyContent="space-between"
                                        borderBottom="1px"
                                        borderColor="gray.100"
                                    >
                                        <HStack>
                                            <GiFullPizza />
                                            <Box as="span">Pizza</Box>
                                        </HStack>
                                        (9)
                                    </ListItem>
                                </List>
                            </Box>
                        </GridItem>
                        {/* Items container */}
                        <GridItem colSpan={3} w="100%" h="10">
                            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                                <ProductItem imageUrl="/images/1-1.png" />
                                <ProductItem imageUrl="/images/1-1.png" />
                                <ProductItem imageUrl="/images/8-1.png" />
                                <ProductItem imageUrl="/images/1-1.png" />
                                <ProductItem imageUrl="/images/8-1.png" />
                            </Grid>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    );
};

export default ShopPage;
