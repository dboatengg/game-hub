import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

interface Props {
  height: string
}

const GenreSkeleton = ({height}:Props) => {
  return (
    <Card>
      <Skeleton height={height}/>
      <CardBody>
        <SkeletonText/>
      </CardBody>
    </Card>
  )
}

export default GenreSkeleton
