"use client";

import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <InputGroup width="250px">
      <InputLeftElement pointerEvents="none">
        <Icon as={FiSearch} color="gray.500" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search"
        bg="brand.300"
        pl={9}
        _focusVisible={{
          borderColor: "brand.700",
          boxShadow: "0 0 0 1px #1d242d",
        }}
      />
    </InputGroup>
  );
};

export default Searchbar;
