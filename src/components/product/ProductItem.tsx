import React from "react";
import {
    Box,
    Container,
    Grid,
    GridItem,
    HStack,
    Spacer,
    Circle,
} from "@chakra-ui/react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import Image from "next/image";

const ProductItem = ({ imageUrl }) => {
    return (
        <GridItem
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
        >
            <Box height={200} position="relative">
                <Image
                    src={imageUrl}
                    layout="fill"
                    objectPosition="center"
                    objectFit="contain"
                />
            </Box>
            <Box p={6}>
                <Box mb="1rem" fontWeight="bold" fontSize="lg">
                    Apricot Chicken
                </Box>
                <Box mb="1rem" fontSize="sm">
                    Crispy bacon, tasty ham, pineapple, onion and stretchy
                    mozzarella, finished
                </Box>
                <HStack>
                    <Box fontWeight="bold" fontSize="2xl" color="orange.500">
                        199.99 €
                    </Box>
                    <Spacer />
                    <Circle size="38px" bg="orange.500" color="white">
                        <RiShoppingBasket2Line fontSize="1.3rem" />
                    </Circle>
                </HStack>
            </Box>
        </GridItem>
    );
};

export default ProductItem;
