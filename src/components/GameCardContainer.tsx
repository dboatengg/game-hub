import { ReactNode } from "react"
import { Box } from "@chakra-ui/react"

interface Props {
    children:ReactNode
}

const GameCardContainer = ({children}:Props) => {
  return (
    <Box borderRadius={8} overflow='hidden' width='100%'>
      {children}
    </Box>
  )
}

export default GameCardContainer
