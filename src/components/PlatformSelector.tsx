import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

interface  Props {
  onselectPlatform : (platfrom : Platform) => void
  selectedPlatfrom : Platform | null
}

const PlatformSelector = ({onselectPlatform , selectedPlatfrom} : Props) => {
  const {data , error} = usePlatforms();

  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatfrom?.name}</MenuButton>
      <MenuList>
        {data.map(platform => <MenuItem onClick={() => onselectPlatform(platform)} key={platform.id} >{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector