import Logo from "../public/logo.svg";
import Link from "next/link";
import {
  Box,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Center,
} from "@chakra-ui/react";
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from "react-icons/md";
import Image from "next/image";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

// denne kan lages til èn komponent

const Sidebar = () => {
  return (
    <Box w="100%" h="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
      <Box paddingY="20px" h="100%">
        <Box w="120px" marginBottom="20px" paddingX="20px">
          <Image src={Logo} height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} color="white" marginRight="20px" />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <List spacing={2}>
            {musicMenu.map((item) => (
              <ListItem paddingX="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <Link href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={item.icon} color="white" marginRight="20px" />
                      {item.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider color="gray.800" />

        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlist.map((playlist) => (
              <ListItem paddingX="20px" key={playlist}>
                <LinkBox>
                  <Link href="/" passHref>
                    <LinkOverlay>{playlist}</LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
