import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}
const PlatformiconList = ({ platforms }: Props) => {
  const iconMap : {[key : string] : IconType} = {
    //name : playstation
    //slug : playstation
    pc : FaWindows,
    playstation : FaPlaystation,
    xbox : FaXbox ,
    nintendo : SiNintendo,
    mac : FaApple,
    linux : FaLinux,
    ios : MdPhoneIphone,
    android : FaAndroid,
    web : BsGlobe
  }
  return (
    <HStack marginY={1}> // margin is 倍数 of theme.space
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformiconList;
