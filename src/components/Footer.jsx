import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

// svg imports
import Logo from '../res/Logo.svg';
// import fb from "../res/footer_social/fb.svg"
// import yt from "../res/footer_social/yt.svg"
// import imo from "../res/footer_social/imo.svg"
// import ins from "../res/footer_social/ins.svg"
// import messenger from "../res/footer_social/messenger.svg"
// import tw from "../res/footer_social/tw.svg"
// import tw from "../res/footer_social/tw.svg"
import twitterLogo from '../res/twitterLogo.png';

function Footer() {
  const footerMedia = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYAXkAt0MQoJ1AbR1ByF9-96ckjcu1yg8-Q&usqp=CAU',
      borderColor: 'red',
      link: 'https://www.youtube.com/c/mayajaalbangla',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUR8eN66P70CwMZqJ4Mz02SiDU6TBver1IJ7d-FaLE5XS3RszewCO8ix3L2eQDCwXa18&usqp=CAU',
      borderColor: 'green',
      link: 'https://wa.me/qr/DTJYHUBRDPVWM1',
    },
    {
      src: 'https://thechatmogul.com/wp-content/uploads/2022/02/2021_Facebook_icon.svg.png',
      borderColor: 'blue',
      link: 'https://www.facebook.com/MayajaalBangla',
    },
    {
      src: 'https://i.redd.it/brxveobujys51.jpg',
      borderColor: 'blue',
      link: 'https://www.',
    },
    {
      src: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_imo-512.png',
      borderColor: 'blue',
      link: 'https://imo.onelink.me/1MBm?pid=QR_code&af_dp=imo%3A%2F%2Fprofile.user%2FAAAAAAAAAAAAAAAAAAAAAC-UNA3hCFYXBQAM2srGw6Lr7HTVLLz0IZ8Xemdt4OcN%2Fscene_qr_code',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
      borderColor: 'pink',
      link: 'https://instagram.com/_mayajaal_?igshid=YmMyMTA2M2Y=',
    },
    {
      src: twitterLogo,
      borderColor: 'skyblue',
      link: 'https://twitter.com/MayajaalBangla?t=Q_NRzaFTm9PmpdTSlOb9tA&s=09',
    },
  ];

  const footerJogagog = [
    {
      name: 'ম্যাসেঞ্জারঃ',
      href: 'https://m.me/mayajaalbangla',
      dlink: 'm.me/mayajaalbangla',
    },
    {
      name: 'ইমেইলঃ',
      href: 'mailto:mayajaalbangla.official@gmail.com',
      dlink: 'mayajaalbangla.official@gmail.com',
    },
    {
      name: 'স্কাইপঃ',
      href: 'https://cutt.ly/bFWnQo6',
      dlink: 'https://cutt.ly/bFWnQo6',
    },
    {
      name: 'হোয়াটসঅ্যাপঃ',
      href: 'https://cutt.ly/IFWnwrr',
      dlink: 'https://cutt.ly/IFWnwrr',
    },
    {
      name: 'ইমো/হোয়াটসঅ্যাপঃ',
      href: '',
      dlink: '01790003100',
    },
  ];
  return (
    <Flex
      flexFlow={'column'}
      w="100%"
      bg="#2D343A"
      justifyContent={'center'}
      alignItems="center"
      style={{
        clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0% 100%)',
      }}
      color="white"
    >
      <Box textAlign={'center'} mx={5} mt="30%">
        <Image src={Logo} w={36} h={12} />
        <Text w="90%" textAlign={'start'} my={3}>
          মায়াজাল বাংলাভাষায় সর্ববৃহত অনলাইন প্লাটফর্ম, যেখানে প্রতিদিন প্রায়
          ৩৫+ লক্ষ জ্ঞানপিপাসু মানুষ ইউটিউব, ফেসবুক ও ইন্সটাগ্রামের মাধ্যমে
          পৃথিবীর চমকপ্রদ সব তথ্যাবলি জানছে আনন্দের সাথে।
        </Text>

        <Flex my={8} px={2} justifyContent={'space-around'}>
          {footerMedia.map((el, i) => (
            <a href={el.link} rel="noreferrer" target={'_blank'}>
              <Image
                key={Math.random()}
                src={el.src}
                w={10}
                h={10}
                border="1px dashed"
                borderColor={el.color}
                p={1}
                fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
                rounded={'full'}
                objectFit={'cover'}
              />
            </a>
          ))}
        </Flex>

        <VStack mt={5} spacing={5}>
          <Text mr={2} textDecoration={'underline'}>
            যোগাযোগঃ
          </Text>
          <Grid templateColumns="1.5fr 2fr" justifyContent={'center'}>
            {footerJogagog.map((el, i) => (
              <>
                <GridItem textAlign={'right'} mr={3}>
                  {el.name}
                </GridItem>
                <GridItem
                  alignSelf={'end'}
                  textAlign={'left'}
                  fontFamily="arial"
                >
                  <a
                    href={el.href}
                    rel="noreferrer"
                    target={el.href ? '_blank' : ''}
                  >
                    {el.dlink}
                  </a>
                </GridItem>
              </>
            ))}
          </Grid>

          <SimpleGrid columns={2} pt={5} gap={1}>
            <Link to="/">
              <Text>টার্মস এ্যান্ড কন্ডিশনস</Text>
            </Link>
            <Link to="/">
              <Text>প্রাইভেসি পলিসি</Text>
            </Link>
            <Link to="/">
              <Text>সচরাচরন প্রশ্ন সমূহ</Text>
            </Link>
            <Link to="/">
              <Text>আমাদের সম্পর্কে</Text>
            </Link>
          </SimpleGrid>
        </VStack>

        <Text mt={20} mb={2} fontSize="sm">
          স্বত্ব &#169; ২০১৭-২০২২ মায়াজাল কতৃক সর্বস্বত্ব সংরক্ষিত
        </Text>
      </Box>
    </Flex>
  );
}

export default Footer;
