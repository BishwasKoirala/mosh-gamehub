import React from 'react'

import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformiconList from './PlatformiconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'


interface Props{
  game : Game
}

const GameCard = ({game} : Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      {/* passing the cropped image with the image url to crop */}
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* destructuring and getting the prop of platform */}
        <HStack justifyContent="space-between">
        <PlatformiconList platforms={game.parent_platforms.map(p => p.platform)} />
        <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard