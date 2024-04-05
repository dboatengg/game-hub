import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const SortSelector = () => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Actions
    </MenuButton>
    <MenuList>
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
        <MenuItem>Option 3</MenuItem>
    </MenuList>
    </Menu>
  )
}

export default SortSelector
