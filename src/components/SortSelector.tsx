import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";

interface Props {
  onselectPlatform: (platfrom: Platform) => void;
  selectedPlatfrom: Platform | null;
}

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by : relavence</MenuButton>
      <MenuList>
        <MenuItem>Relavance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
        
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
