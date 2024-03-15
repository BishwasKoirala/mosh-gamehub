import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSearch : (searchText : string) => void
}

const SearchInput = ({ onSearch }:Props) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current)
      onSearch(ref.current.value)
    }}>

    <InputGroup>
    <InputLeftAddon children={<BsSearch/>}/>
    <Input ref={ref} border={20} borderRadius={20} placeholder='Search games ...' variant='filled' />
    </InputGroup>
    </form>
  )
}

export default SearchInput