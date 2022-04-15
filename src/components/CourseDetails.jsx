import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import courseMathodoligyIcon from '../res/courseMathodologyIcon.png';
import chakrijibi from '../res/Coursti ki apnar jnno/firstPage_chakrijibi.png';
import dots from '../res/Coursti ki apnar jnno/firstPage_dots.png';
import houseWife from '../res/Coursti ki apnar jnno/firstPage_housewife.png';
import kivabeShikhben_Shape from '../res/Coursti ki apnar jnno/firstPage_kivabeShikhben_Shape2.png';
import probashi from '../res/Coursti ki apnar jnno/firstPage_probashi.png';
import shortaboli from '../res/Coursti ki apnar jnno/firstPage_shortaboli.png';
import student from '../res/Coursti ki apnar jnno/firstPage_Student.png';
import uddokta from '../res/Coursti ki apnar jnno/firstPage_uddokta.png';
import admission from '../res/Coursti ki apnar jnno/frontPage_admission.json';
import vorti_Houn from '../res/Coursti ki apnar jnno/frontPage_student2.json';
import head_texture from '../res/firstPage_headTexture.png';
// svg imports
import headBg from '../res/headTopBg.svg';
import helpAndSupportIcon from '../res/helpandsupportIcon.png';
import kivabeshikhbenIcon from '../res/kivabeshikhben/Kivabe Shikhben icon.png';
import kivabeshikhben1 from '../res/kivabeshikhben/Kivabe Shikhben pic1.png';
import kivabeshikhben2 from '../res/kivabeshikhben/Kivabe Shikhben pic2.png';
import kivabeshikhben3 from '../res/kivabeshikhben/Kivabe Shikhben pic3.png';
import kivabeshikhben4 from '../res/kivabeshikhben/Kivabe Shikhben pic4.png';
import kivabeshikhben5 from '../res/kivabeshikhben/Kivabe Shikhben pic5.png';
import kivabeshikhben6 from '../res/kivabeshikhben/Kivabe Shikhben pic6.png';
import kivabeshikhben7 from '../res/kivabeshikhben/Kivabe Shikhben pic7.png';
import kivabeshikhben8 from '../res/kivabeshikhben/Kivabe Shikhben pic8.png';
import localjob from '../res/localjob.png';
// png imports
import Logo from '../res/Logo.svg';
import remotejob from '../res/remotejob.png';
import Footer from './Footer';
import LottieMaking from './LottieMaking';
import NavBurger from './NavBurger';

// fonts import

export default function CourseDetails() {
  // const [vidLoading, setVidLoading] = useState(true);
  // const [vidLoading2, setVidLoading2] = useState(true);

  const kivabeShikhbenArray = [
    {
      src: kivabeshikhben1,
      title: 'ভিডিও ক্লাস',
      description:
        'শেখার শুরুটা হাতেকলমে ইন্টার‌্যাক্টিভ ভিডিও ক্লাসের মাধ্যমে ',
    },
    {
      src: kivabeshikhben2,
      title: 'অনলাইন এক্সাম',
      description:
        'দক্ষতা বৃদ্ধির পাশাপাশি অনলাইনেই যাচাই করা হবে প্রত্যেকের দক্ষতা',
    },
    {
      src: kivabeshikhben3,
      title: 'নিয়মিত হোমওয়ার্ক ',
      description: 'প্রত্যেক লেসনের সাথে নিয়মিত হোমওয়ার্ক এবং প্রবলেম সল্ভিং',
    },
    {
      src: kivabeshikhben4,
      title: 'এসাইনমেন্ট রিভিউ',
      description:
        'এসাইনমেনন্টের মান এবং যাবতীয় সব খুঁটিনাটি যাচাই হবে পুংখানুপুঙ্খ ভাবে',
    },
    {
      src: kivabeshikhben5,
      title: 'লাইভ প্রশ্নোত্তর',
      description:
        'সরাসরি প্রশ্নোত্তর পর্ব নিশ্চিত করবে সঠিক শেখা এবং দক্ষতা অর্জন',
    },
    {
      src: kivabeshikhben6,
      title: 'লাইফটাইম সাপোর্ট',
      description:
        'কোর্স চলাকালীন সময়ে কিংবা কোর্সের শেষে সারাজীবনের জন্য সবকিছু ',
    },
    {
      src: kivabeshikhben7,
      title: 'টিম ওয়ার্ক',
      description: 'একা নয় বরং পুরো টিমের সাথে দলবদ্ধভাবে শেখা এবং অনুশীলন ',
    },
    {
      src: kivabeshikhben8,
      title: 'সফটওয়্যার সাপোর্ট',
      description:
        'প্রয়োজনীয় সব সফটওয়্যারের সম্পূর্ণ সাপোর্ট পাবেন আজীবনের জন্য',
    },
  ];

  const CourseSheshe = [
    {
      src: 'https://user-images.githubusercontent.com/70473461/92360592-5a3bb800-f0ed-11ea-8dce-dd95b72c7825.png',
      name: 'ফাইভার ডট কম',
    },
    {
      src: 'https://icon-library.com/images/freelancer-icon/freelancer-icon-10.jpg',
      name: 'ফ্রিল্যান্সার ডট কম',
    },
    {
      src: 'https://i.pinimg.com/favicons/c80dba81ff56decb3666350231f0e21ef5b76fccbeec6fe520ab1a9c.png?e7a8919ace385cf8a267b23006320618',
      name: 'আপওয়ার্ক',
    },
    {
      src: 'https://d1a29h5kxv3oc2.cloudfront.net/dist/img/pph-share.ced894418333eca244808771d4a24a87.png',
      name: 'পিপল পার আওয়ার',
    },
    {
      src: localjob,
      name: 'লোকাল জব',
    },
    {
      src: remotejob,
      name: 'রিমোট জব',
    },
  ];

  return (
    <Box position="relative" w="100%">
      {/* nav and head */}
      <Box w="100%" h="auto" overflow="hidden">
        <Flex
          flexFlow={'column'}
          justifyContent="center"
          alignItems="center"
          w="100%"
          position="relative"
        >
          <Flex
            w="100%"
            h="200px"
            bg="black"
            mx="auto"
            zIndex={-1}
            bgImage={head_texture}
            bgPosition="center"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0% 100%)',
              filter: 'brightness(0.25)',
            }}
            position="absolute"
            top={0}
            left={0}
          ></Flex>
          <Image
            src={headBg}
            position="absolute"
            top={0}
            left={0}
            zIndex={-1}
          />
          <Flex justifyContent={'space-between'} w="100%" color="white">
            <Link to="/">
              <Image src={Logo} w={32} h={12} pl={3} mt={1} mr="auto" />
            </Link>
            <NavBurger />
          </Flex>
          <Flex
            color="white"
            fontWeight={'semibold'}
            fontSize={24}
            w="100%"
            my={5}
            justifyContent="center"
            alignItems={{ base: 'start', md: 'center' }}
          >
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYAXkAt0MQoJ1AbR1ByF9-96ckjcu1yg8-Q&usqp=CAU"
              w={{ base: 8, md: 10 }}
              h={{ base: 8, md: 10 }}
              p={1}
              fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
              rounded={'full'}
              objectFit={'cover'}
            />
            <Text fontSize={{ base: 20, md: 24 }}>
              এ্যাডভান্স ভিডিও মার্কেটিং সিক্রেটস
            </Text>
          </Flex>
          {/* {vidLoading ? (
            <Flex
              justifyContent={'center'}
              cursor="pointer"
              alignItems="center"
              mb={10}
              w="80%"
              onClick={() => setVidLoading(false)}
            >
              <Image
                src={head_video_thumb}
                w="100%"
                fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
                rounded={'lg'}
                objectFit={'cover'}
              />
            </Flex>
          ) : ( */}
          <AspectRatio w="90%"  rounded="lg" overflow={'hidden'} px={14}>
            <iframe
              src="https://player.vimeo.com/video/698310824?h=243d23f8aa&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="1920"
              height="1080"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              title="Professional Video Marketing"
            ></iframe>
          </AspectRatio>
          {/* )} */}

          <Text w={'90%'} mt={2} mb={1} textAlign="justify">
            নিজের প্রতিভা লক্ষ কোটি মানুষের সামনে উপস্থাপনের মাধ্যমে লক্ষ লক্ষ
            টাকা উপার্জনের অন্যতম সেরা প্লাটফর্ম ইউটিউব এবং ফেসবুক ওয়াচ। এসব
            প্লাটফর্মে কন্টেন্ট ক্রিয়েশন সম্পর্কে অনেকে শেখালেও সফলতার সিক্রেটস
            কেউই শেয়ার করে না। যার ফলশ্রুতিতে অনেকে দীর্ঘদিন চেষ্টা করেও সফলতা
            থেকে অনেক দূরে। ২০২০ সালে করোনা মহামারির ভয়াবহ সময়টাতে, আপনাদের
            অনুরোধে আমি শত ব্যস্ততার মাঝেও আপনাদের কয়েকজনকে হাতে কলমে
            শিখিয়েছিলাম প্রফেশনাল ভিডিও মার্কেটিং, ইউটিউবিং এবং প্রিমিয়াম ভিডিও
            এডিটিং এর মাধ্যমে ফ্রিল্যান্সিং ক্যারিয়ার ডেভলপমেন্ট। সত্যি বলতে
            মায়াজাল কিংবা আমার অন্য চ্যানেলের গোল্ড প্লে বাটনগুলি হাতে পাওয়ার
            চেয়ে আপনাদের সিলভার প্লে বাটন কিংবা গোল্ড প্লে বাটনের ছবিগুলো আমাকে
            বেশী আনন্দ দেয়। আমার ক্ষুদ্রজ্ঞান থেকে আমি শুধু চেষ্টা করেছিলাম
            আপনাদের সঠিক রাস্তাটা দেখানোর, নিজেদের ঐকান্তিক চেষ্টা আর কঠোর
            পরিশ্রমের মাধ্যমে আপনারা যা করে দেখিয়েছেন তা নিসন্দেহে প্রশংসনীয়।
          </Text>
          <Text w="90%" textAlign="justify">
            ২০২০ পরবর্তী সময়ে আপনাদের অনেকের বহু অনুরোধ আর নিজের ইচ্ছা থাকা
            সত্ত্বেও ব্যস্ততার কারণে নতুন করে কাউকে শেখানোর সুযোগ হয়নি। তবে এই
            পবিত্র রমদ্বানে প্লান করেছি, রমাদ্বান ও রমাদ্বান পরবর্তী ৮০ দিনে
            আপনাদের মধ্য থেকে কেয়ারফুল ওয়ে তে যোগ্য কয়েকজন ব্যক্তিকে বেছে নিয়ে
            আগেরবারের মতো করে এবং গতো দেড় বছরে পরিবর্তীত সকল বিষয়াবলি নিয়ে ভিডিও
            মার্কেটিং ইন্ডাস্ট্রির পুরোটা শেখাব একটি কোর্সের আন্ডারে ইনশাআল্লাহ।
            তবে এই সবকিছু শুধুমাত্র এমন কয়েকজন যোগ্য শিক্ষার্থীর জন্য যারা শতভাগ
            গোপনীয়তার প্রতিশ্রুটি দিয়ে কঠোর পরিশ্রমের মাধ্যমে সফলতা ছিনিয়ে আনার
            ব্যাপারে দৃঢ়সংকল্পবদ্ধ।
          </Text>
        </Flex>
      </Box>

      {/* vorti houn */}
      <Flex
        w="100%"
        h="600px"
        px={3}
        position={'relative'}
        justifyContent={'center'}
        alignItems="start"
      >
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="#FAF5F2"
          top={0}
          left={0}
          zIndex={-1}
          style={{
            clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0% 100%)',
          }}
        ></Box>

        <Flex
          justifySelf={'center'}
          alignself={'center'}
          flexFlow={'column'}
          alignItems={'center'}
          pt={'110px'}
          style={{
            whiteSpace: 'pre-line',
          }}
          fontSize={{ base: 25, md: 30 }}
        >
          <Link to="/registration">
            <Text
              fontWeight={'bold'}
              bg="#23be43"
              px={5}
              py={2}
              mb={10}
              color="white"
              rounded="full"
              fontFamily="kongshoMJ"
            >
              ভর্তি হউন
            </Text>
          </Link>
          <Flex justifyContent={'center'} alignItems="center">
            <Icon as={AiOutlineCheck} color="green" fontSize={30} />
            <Text>কোর্স ডিউরেশনঃ ৮০ দিন</Text>
          </Flex>
          <Flex justifyContent={'center'} alignItems="center">
            <Icon as={AiOutlineCheck} color="green" fontSize={30} />
            <Text>কোর্স ফিঃ ১৫০০০ টাকা।</Text>
          </Flex>
        </Flex>
        <Box w="65%" position={'absolute'} bottom={0} right={0}>
          <LottieMaking animationData={vorti_Houn} w="100%" />
        </Box>

        <Image
          src={dots}
          zIndex={-1}
          position="absolute"
          w="120px"
          bottom="-20px"
          left="0"
        />
      </Flex>

      {/* kivabe shikhben */}
      <Box w="100%" mt={5} position="relative" overflow={'hidden'}>
        <Image
          src={kivabeShikhben_Shape}
          position="absolute"
          zIndex={-1}
          w="200px"
          top="50"
          right="-90px"
          className="circularRotate"
        />
        <Image
          src={kivabeShikhben_Shape}
          position="absolute"
          zIndex={-1}
          w="200px"
          top="550"
          left="-90px"
          className="circularRotate"
        />
        <Flex p={5} justifyContent={'start'} alignItems="center">
          <Image src={kivabeshikhbenIcon} w={12} />
          <Text ml={3} fontWeight="semibold" fontSize={20}>
            কিভাবে শিখবেন ?
          </Text>
        </Flex>
        <SimpleGrid
          columns={2}
          gap={3}
          justifyContent="center"
          alignItems={'center'}
          p={{ base: 3, md: 10 }}
        >
          {kivabeShikhbenArray.map((el, i) => (
            <Flex
              key={Math.random()}
              bg="white"
              flexFlow="column"
              h="250px"
              justifyContent={'center'}
              alignItems="center"
              boxShadow={'0 0 5px 2px #e6e1e1'}
              rounded="3xl"
              overflow="hidden"
              zIndex={2}
            >
              <Image src={el.src} w={40} mb={3} />
              <Text fontWeight="bold">{el.title}</Text>
              <Text fontSize={'xs'} pb={5} px={3} textAlign={'center'}>
                {el.description}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

      {/* course methodology */}
      <Box position={'relative'} mt={3} py={10} h="auto" minH="600px">
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="#FAF5F2"
          top={0}
          left={0}
          zIndex={-1}
          style={{
            clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0% 100%)',
          }}
        ></Box>
        <Flex
          pb={5}
          pl={5}
          pt={'15%'}
          justifyContent={'start'}
          alignItems="center"
        >
          <Image
            src={dots}
            w="120px"
            ml="auto"
            position={'absolute'}
            top={-10}
            right={0}
          />
          <Image src={courseMathodoligyIcon} w={12} />
          <Text
            ml={3}
            pr={1}
            bg="#FAF5F2"
            fontWeight="semibold"
            fontSize={{ base: 30, md: 40 }}
            zIndex={2}
          >
            কোর্স মেথডলজি
          </Text>
        </Flex>
        {/* mb={'19%'} */}

        <Text w="100%" px={5} mb="19%" textAlign={'justify'}>
          আমি সহ মার্কেটপ্লেসের সফল কয়েকজন প্রফেশনাল মার্কেটারের কাছ থেকে হাতে
          কলমে শিখবেন আপনারা ক’জন। সুনির্দিষ্ট তথ্যাবলী পর্যবেক্ষণ করে আপনার
          এডমিশন কনফার্ম হলে আপনার ইমেইলে স্টুডেন্ট আইডি, কোর্স প্লানিং, কোর্স
          আউটলাইন, অনলাইন ক্লাসরুম এ্যাক্সেস সহ অন্যান্য সকল তথ্য পেয়ে যাবেন।
          এরপর নির্দিষ্ট দিনে নির্দিষ্ট সময়ে আপনার ব্যাচের সাথে ক্লাস শুরু হবে।
          প্রথম ক্লাসে পরিচিতি পাশাপাশি যাবতীয় সব বিষয়গুলি সম্পর্কে সুস্পষ্ট
          ধারণা পাবেন ইনশাআল্লাহ। এরপর কোর্স আউটলাইন অনুযায়ী আপনার ক্লাস
          পরিচালিত হবে যেখানে আপনাদের রেগুলার ক্লাসের সাথে সাথে হোম ওয়ার্ক
          পর্যবেক্ষণ এবং সলভিং ক্লাসের মাধ্যমে শেখাটি নিশ্চিত হবে ইনশাআল্লাহ এবং
          আপনাকেও নিশ্চিত করতে হবে নিয়মিত ক্লাস এবং হোমওয়ার্ক। আপনি যদি
          নিয়মিত ক্লাস, প্র্যাকটিস এবং হোমওয়ার্ক করতে না পারেন তবে এখানে জয়েন
          না করাই শ্রেয় কারণ আমরা কোন আলাদিনের চেরাগ নিয়ে বসে নেই, আমরা আপনাকে
          সঠিক পথ এবং পদ্ধতি দেখাব হাঁটবেন কিন্তু আপনিই!
        </Text>
      </Box>

      {/* course ti ki apnar jnno */}
      <Flex position={'relative'} pb={40}>
        <Text
          w="100%"
          textAlign={'center'}
          fontWeight="semibold"
          color="green.900"
          fontSize="40"
        >
          কোর্সটি কি আপনার জন্য ?
        </Text>
        <Image
          src={dots}
          position="absolute"
          w="120px"
          bottom="-120px"
          left="0"
        />
      </Flex>

      {/* shikkharthi */}
      <Box position={'relative'} mt={3} py={40} h="auto">
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="#FAF5F2"
          top={0}
          left={0}
          zIndex={-1}
          style={{
            clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0% 100%)',
          }}
        ></Box>
        <Flex w="100%" alignItems="center">
          <Text ml={5} fontWeight="semibold" alignSelf={'end'} fontSize={28}>
            আপনি কি একজন শিক্ষার্থী ?
          </Text>
          <Image
            className="floating"
            position="absolute"
            top="-120"
            right="0"
            src={student}
            w="50%"
            maxW="300px"
            fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
            rounded={'lg'}
            objectFit={'cover'}
          />
        </Flex>
        <Text w="100%" px={5} textAlign="justify">
          পড়াশোনার পাশাপাশি কোনো সফট স্কিল না থাকলে বর্তমানে ভালো কোনো অবস্থানে
          যাওয়া প্রায় অসম্ভব, অন্যদিকে পড়াশোনার পাশাপাশি উপার্জনও প্রয়োজন। একজন
          শিক্ষার্থীর জন্য পড়াশোনার পাশাপাশি অনলাইন জগতে দক্ষতা অর্জন ও নিজের
          পরিচয় তৈরি,হতে পারে অনেক লাভজনক। এই পরিচয় তৈরির জন্য প্রফেশনাল ভিডিও
          মার্কেটিং একটি চমৎকার সেগমেন্ট। যা পরবর্তীতে হতে পারে পূর্ণাঙ্গ
          ক্যারিয়ার।
        </Text>
      </Box>

      {/* GRIHINI */}
      <Box mb={10}>
        <Flex w="100%" flexFlow={'column'}>
          <Box w="100%" mb={3}>
            <Image
              className="floating"
              src={houseWife}
              w="100%"
              fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
              rounded={'lg'}
              objectFit={'cover'}
            />
          </Box>
          <Text ml={5} fontWeight="semibold" alignSelf={'start'} fontSize={28}>
            আপনি কি একজন গৃহিনী?
          </Text>
        </Flex>
        <Text w="100%" px={5} textAlign="justify">
          শিক্ষিত ও রুচিশীল গৃহিণীদের অনেকেই প্রতিভা থাকা সত্ত্বেও নানাবিধ কারণে
          গৃহস্থালির কাজের পাশাপাশি বাইরে গিয়ে কোন চাকুরি বা ব্যবসা করতে পারেন
          না।তারা ঘরে বসে নিজের প্রতিভা গুলোকে লক্ষ কোটি মানুষের সামনে
          উপস্থাপনের মাধ্যমে গড়ে তুলতে পারেন নিজের পরিচয় এবং অর্থনৈতিক ভাবে
          অবদান রাখতে পারেন নিজের পরিবারে।
        </Text>
      </Box>

      {/* chakrijibi */}
      <Box position={'relative'} mt={3} py={40} h="auto">
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="#FAF5F2"
          top={0}
          left={0}
          zIndex={-1}
          style={{
            clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0% 100%)',
          }}
        ></Box>

        <Flex w="100%" flexFlow={'column'}>
          <Box w="100%" mb={3}>
            <Image
              className="floating"
              src={chakrijibi}
              w="100%"
              fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
              rounded={'lg'}
              objectFit={'cover'}
            />
          </Box>
          <Text ml={5} fontWeight="semibold" alignSelf={'start'} fontSize={28}>
            আপনি কি একজন চাকুরীজীবী ?
          </Text>
        </Flex>

        <Text w="100%" px={5} textAlign="justify">
          বর্তমান পৃথিবীর হাজারো প্রয়োজন মেটাতে হিমশিম খেতে হয় অধিকাংশ
          চাকুরিজীবীর। চাকুরির পাশাপাশি যে সময়টুকু হাতে থাকে তা কাজে লাগাতে
          চাইলেও বেশিরভাগ সময় সে সুযোগ হয়ে উঠে না। সেক্ষেত্রে চাকরির পাশাপাশি
          অবসর কাজে লাগানো এবং নিজের প্রতিভাগুলি সবার সামনে উপস্থাপনের মাধ্যমে
          বাড়তি উপার্জনের জন্য সবচেয়ে ভালো উপায় হতে পারে প্রফেশনাল ভিডিও
          মার্কেটিং।
        </Text>
      </Box>

      {/* probashi */}
      <Box mb={8}>
        <Flex w="100%" flexFlow={'column'} mb={3}>
          <Box w="100%">
            <Image
              className="floating"
              src={probashi}
              w="100%"
              fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
              rounded={'lg'}
              objectFit={'cover'}
            />
          </Box>
          <Text ml={5} fontWeight="semibold" alignSelf={'start'} fontSize={28}>
            আপনি কি একজন প্রবাসী?
          </Text>
        </Flex>
        <Text w="100%" px={5} textAlign="justify">
          যেকোনো মানুষেরই অন্য দেশ,সে দেশের সংস্কৃতি এবং মানুষের প্রতি থাকে একটা
          বাড়তি আগ্রহ। আর,প্রবাসীদের জন্য একটি বড় সুযোগ থাকে ভিন্ন দেশের বিভিন্ন
          বিষয়গুলো ভিডিও কন্টেন্ট এর মাধ্যমে লক্ষ কোটি মানুষের সামনে তুলে ধরার।
          যা তার জন্য তৈরি করে একটি সহজ আয়ের মাধ্যম।
        </Text>
      </Box>

      {/* uddokta */}
      <Box position={'relative'} mt={3} py={40} h="auto">
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="#FAF5F2"
          top={0}
          left={0}
          zIndex={-1}
          style={{
            clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0% 100%)',
          }}
        ></Box>
        <Flex w="100%" flexFlow={'column'}>
          <Box w="100%" mb={3}>
            <Image
              className="floating"
              src={uddokta}
              w="100%"
              fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
              rounded={'lg'}
              objectFit={'cover'}
            />
          </Box>
          <Text ml={5} fontWeight="semibold" alignSelf={'start'} fontSize={28}>
            আপনি কি একজন উদ্যোক্তা?
          </Text>
        </Flex>
        <Text w="100%" px={5} textAlign="justify">
          বর্তমান বিশ্বের পরিবর্তনশীল পরিস্থিতির সাথে তাল মিলিয়ে কোন ব্যবসা শুরু
          করা এবং তা সফলতার সাথে পরিচালনা করার জন্য অনলাইন জগতে অবস্থান অত্যন্ত
          গুরুত্বপূর্ণ। বিশেষ করে দেশে ই-কমার্স এর উত্থান এর পর থেকে ব্যবসার
          ধরণই পরিবর্তন হয়ে গিয়েছে। আর,এই পরিবর্তনের সাথে তাল মিলিয়ে আয় করতে হলে
          দক্ষ হতে হবে আনলাইনেও।
        </Text>
      </Box>

      {/* shikharthi der motamot er ekangsho */}
      <Flex flexFlow={'column'}>
        <Text
          w="100%"
          textAlign={'center'}
          fontWeight="semibold"
          color="green.900"
          fontSize="30"
        >
          শিক্ষার্থীদের মতামতের একাংশ
        </Text>
        {/* {vidLoading2 ? (
          <Flex
            justifyContent={'center'}
            cursor="pointer"
            alignItems="center"
            mb={10}
            w="100%"
            onClick={() => setVidLoading2(false)}
          >
            <Image
              src={head_video_thumb}
              w="100%"
              fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
              rounded={'lg'}
              objectFit={'cover'}
            />
          </Flex>
        ) : ( */}
        <AspectRatio w="100%" mx="auto">
          <iframe
            src="https://player.vimeo.com/video/698394250?h=95cbab693c&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="100%"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Success Stories of Mayajaal Students"
          ></iframe>
        </AspectRatio>
        {/* )} */}
      </Flex>

      {/* course seshe apni kothay kkaj korben  */}
      <Text
        my={5}
        w="100%"
        textAlign={'center'}
        fontWeight="semibold"
        fontSize={25}
      >
        কোর্স শেষে আপনি কোথায় কাজ করতে পারবেন ?
      </Text>
      <SimpleGrid columns={3} gap={3} px={1}>
        {CourseSheshe.map((el, i) => (
          <Flex
            flexFlow={'column'}
            justifyContent={'center'}
            alignItems="center"
          >
            <Image
              src={el.src}
              border="3px solid"
              borderColor={'white'}
              boxShadow={'0 0 5px 2px #e6e1e1'}
              w="100px"
              h="100px"
              fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
              rounded={'full'}
              objectFit={'cover'}
            />
            <Text textAlign={'center'}>{el.name}</Text>
          </Flex>
        ))}
      </SimpleGrid>

      <Flex p={3} mt={16} justifyContent={'start'} alignItems="center">
        <Image src={helpAndSupportIcon} w={12} />
        <Text ml={3} fontWeight="semibold" fontSize={20}>
          হেল্প এবং সাপোর্টঃ
        </Text>
      </Flex>
      <Text px={5} textAlign="justify">
        আমাদের এ কোর্সটি লঞ্চ করার প্রধান উদ্দেশ্য আপনাদের কয়েকজনকে সঠিকভাবে
        শেখানাে। কাজেই আপনি যদি মনে করে থাকেন আপনি আমাদের নির্দিষ্ট কোর্স ফি
        প্রদান করলেই আমরা আপনাকে কিছু ক্লাস করাবো আপনি শিখলে শিখবেন নইলে না
        শিখবেন তবে ভুল ভাবছেন। আমাদের এখানে শিখতে হলে সব নিয়ম কানুন মেনে আপনার
        স্কুলের মতাে করেই রেগুলার ক্লাস, হােমওয়ার্ক, এ্যাসাইনমেন্ট কমপ্লিট করতে
        হবে এবং কন্টিনিউয়াসলি শেখার চেষ্টা থাকতে হবে। আপনাদের যাবতীয় সমস্যা
        সমাধানের ব্যাপারে আপনার টিমমেইট এবং আমাদের সবসয়ই পাশে পাবেন ইনশাআল্লাহ।
      </Text>

      {/*ami kivabe vorti hobo */}
      <Box position={'relative'} mt={3} py={20} h="auto" mb={'20px'}>
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="#FAF5F2"
          top={0}
          left={0}
          zIndex={-1}
          style={{
            clipPath: 'polygon(0 15%, 100% 0, 100% 91%, 0% 100%)',
          }}
        ></Box>
        <Flex
          w="100%"
          flexFlow={'column'}
          justifyContent={'center'}
          alignItems="center"
        >
          <Box w="80%">
            <LottieMaking animationData={admission} w="100%" />
          </Box>
          <Link to="/registration">
            <VStack mb={15}>
              <Button
                colorScheme={'green'}
                fontSize={40}
                py={8}
                px={12}
                my={10}
                rounded="full"
              >
                ভর্তি হউন
              </Button>
            </VStack>
          </Link>
          <Text ml={5} fontWeight="semibold" alignSelf={'start'} fontSize={28}>
            আমি কিভাবে ভর্তি হব ?
          </Text>
        </Flex>
        <Text w="100%" px={5} textAlign="justify">
          আপনি ভর্তি হতে চাইলে প্রথমে আমাদের এই আর্টিকেলটি পড়বেন এবং ভিডিওটি
          ভালোভাবে দেখবেন। এরপর সিদ্ধান্ত নিবেন আপনি সপ্তাহে অন্তত ৪ দিন ২-৩
          ঘন্টা সময় দিতে পারবেন কি না। এছাড়া আমাদের শর্তাবলী ভালােভাবে পড়বেন
          এবং সিদ্ধান্ত নিবেন আপনি তা মানতে পারবেন কি না, কারন কোর্সে জয়েন করলে
          আপনার সাথে আমাদের সম্পর্ক হবে ছাত্র শিক্ষকের যা একই সাথে সম্মান ও
          ভালােবাসার। কাজেই আমরা চাই না ভর্তি হওয়ার পর আপনার কোন অসুবিধা হােক।
          যাবতীয় বিষয় গুলোর সাথে একমত হতে পারলে প্রথমে রেজিস্ট্রেশন সম্পূর্ণ
          করবেন এবং পরবর্তীতে আমাদের প্রতিনিধি আপনার সঙ্গে যোগাযোগ করে প্রথমে
          আপনার প্রাথমিক ইন্টারভিউ সম্পূর্ণ করবেন এবং পরবর্তীতে আপনি কোর্সের
          জন্য যোগ্য হিসাবে বিবেচিত হলে আপনার এডমিশন কনফার্ম করা হবে।
        </Text>
      </Box>

      <Text fontWeight={'thin'} textAlign="center" fontSize={20}>
        এর পরে কোনো প্রশ্ন থাকলে আমাদের সঙ্গে যোগাযোগ করতে পারেন
      </Text>
      <Box position={'relative'} textAlign="justify">
        <Flex justifyContent={'space-between'} alignItems="center">
          <Text
            ml={5}
            fontWeight="semibold"
            alignSelf={'end'}
            color="red"
            fontSize={20}
          >
            শর্তাবলিঃ
          </Text>
          <Box w="100%">
            <Image
              src={shortaboli}
              w="100%"
              fallbacksrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
              rounded={'lg'}
              objectFit={'cover'}
            />
          </Box>
        </Flex>
        <Text w="100%" px={5} mb={2}>
          ১. হোমওয়ার্ক যথাযথভাবে কমপ্লিট করতে হবে, কোথাও সমস্যা হলে ইন্সট্রাক্টর
          তা বুঝিয়ে দিবেন কিন্তু আপনাকে হোমওয়ার্ক প্রোপারলি শেষ করতে হবে।
        </Text>
        <Text w="100%" px={5} mb={2}>
          ২. কোন পার্টের হোমওয়ার্ক কমপ্লিট না করতে পারলে আপনি পরের পার্ট পাবেন
          না এবং আপনাকে আগের পার্টের ক্লাস আবার করতে হবে ও হোমওয়ার্ক কমপ্লিট করে
          দেন পরের পার্টে জয়েন করতে হবে।
        </Text>
        <Text w="100%" px={5} mb={2}>
          ৩. পুর্ব অনুমতি ছাড়া একটানা দুই সপ্তাহ ক্লাস না করলে তার জন্য
          পানিশমেন্ট পেতে হবে।
        </Text>
        <Text w="100%" px={5} mb={2}>
          ৪. ব্যাচমেটদের প্রতি হেল্পফুল হতে হবে ও টিম ওয়ার্কের মানুষিকতা থাকতে
          হবে।
        </Text>
        <Text w="100%" px={5}>
          ৫. প্র্যাকটিস এবং পরীক্ষা গুলোতে অবশ্যই কমপ্লিট করতে হবে। যদি কোন
          কারনে কমপ্লিট করতে না পারেন তাহলে আগের থেকে অবশ্যই অথরিটিকে জানিয়ে
          রাখতে হবে।
        </Text>
      </Box>

      <Footer />
    </Box>
  );
}
