import React from 'react'

import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'


interface Props{
  game : Game
}

const GameCard = ({game} : Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* destructuring and getting the prop of platform */}
        {game.parent_platforms.map(({platform}) => <Text key={platform.id}>{platform.name}</Text> )}
      </CardBody>
    </Card>
  )
}

export default GameCard