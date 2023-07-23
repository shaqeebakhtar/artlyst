"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineLogin } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TbSettings2 } from "react-icons/tb";

const LoggedInOptions = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Tooltip label="Wishlist" bg="brand.700">
        <Button variant="icon-button" as="a" href="/wishlist">
          <Icon as={FaRegHeart} />
        </Button>
      </Tooltip>
      <Tooltip label="Cart" bg="brand.700">
        <Button variant="icon-button" as="a" href="/cart">
          <Icon as={RiShoppingCart2Line} fontSize={18} />
        </Button>
      </Tooltip>
      <Tooltip label="Account" bg="brand.700">
        <Menu>
          <MenuButton
            as={Button}
            variant="icon-button"
            pl={3}
            pr={3}
            rightIcon={<ChevronDownIcon />}
          >
            <Icon as={FaRegUser} />
          </MenuButton>
          <MenuList>
            <MenuItem as="a" href="/profile" icon={<BiUser fontSize={18} />}>
              Profile
            </MenuItem>
            <MenuItem
              as="a"
              href="/dashboard"
              icon={<RxDashboard fontSize={18} />}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              as="a"
              href="/orders"
              icon={<LiaShippingFastSolid fontSize={18} />}
            >
              Orders
            </MenuItem>
            <MenuItem
              as="a"
              href="/settings"
              icon={<TbSettings2 fontSize={18} />}
            >
              Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem icon={<MdOutlineLogin fontSize={18} />}>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </Tooltip>
    </Stack>
  );
};

export default LoggedInOptions;
