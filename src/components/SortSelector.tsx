import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectSortOrder : (sortOrder : string) => void,
  sortedOrder : string

}

const SortSelector = ({onSelectSortOrder , sortedOrder} : Props) => {
  const sortOrder = [
    // reverse the sorting order with hyphen -
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-rating", label: "Average rating" },
    { value: "-metacritic", label: "Average rating" },
  ];

  const currentSortOrder = sortOrder.find(order => order.value === sortedOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder ? currentSortOrder.label : 'Relavance'}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
