import { Button, Flex, Stack } from "@/app/lib/chakraui";
import Image from "next/image";
import Link from "next/link";

import LoggedInOptions from "./LoggedInOptions";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const isLoggedIn = false;

  return (
    <Flex padding="16px 32px" align="center" justify="space-between">
      <Link href="/">
        <Image src="/images/artlyst-logo.png" alt="" width="80" height="32" />
      </Link>

      <Stack direction="row" spacing={4}>
        <Searchbar />
        {isLoggedIn ? (
          <LoggedInOptions />
        ) : (
          <Button variant="dark" pl={6} pr={6}>
            Join
          </Button>
        )}
      </Stack>
    </Flex>
  );
};

export default Navbar;
