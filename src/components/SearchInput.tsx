import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { FormEvent, useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
  onSearch:(searchText:string) => void;
}

const SearchInput = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null)

  const onsubmit = (event:FormEvent)=>{
    event.preventDefault();
    if(ref.current) onSearch(ref.current?.value)
  }

  return (
    <form onSubmit={onsubmit}>
      <InputGroup>
      <InputLeftElement children={<BsSearch/>}/>
      <Input ref={ref} borderRadius={20} variant="filled" placeholder="Search games..."/>
      </InputGroup>
    </form>
  )
}

export default SearchInput