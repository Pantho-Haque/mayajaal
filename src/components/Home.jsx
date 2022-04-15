import {
  Box,
  Button,
  Flex,
  FormControl,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiLockClosed } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import head_texture from '../res/firstPage_headTexture.png';
// svg imports
import headBg from '../res/headTopBg.svg';
import Logo from '../res/Logo.svg';
import Footer from './Footer';
import NavBurger from './NavBurger';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('ইমেইল এড্রেসটি ভুল , সঠিক ইমেইল এড্রেস লিখুন')
      .required('ইউজার আইডি/ইমেইল আবশ্যক'),
    password: yup.string().required('পাসওয়ার্ড আবশ্যক'),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = values => {
    setLoading(true);
    // Form submit function

    console.log(values);

    // After validation
    setLoading(false);
  };

  return (
    <Box>
      <Flex
        w="100%"
        h="200px"
        color={'white'}
        flexFlow="column"
        alignItems={'center'}
        position="relative"
        fontSize={20}
        fontWeight="semibold"
      >
        <Flex
          w="100%"
          h="300px"
          bg="black"
          zIndex={-1}
          bgImage={head_texture}
          bgPosition="center"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 43%, 0% 100%)',
            filter: 'brightness(0.25)',
          }}
          position="absolute"
        ></Flex>
        <Image src={headBg} position="absolute" top={0} left={0} zIndex={-1} />
        <Flex justifyContent={'space-between'} w="100%" color="white">
          <Link to="/">
            <Image src={Logo} w={32} h={12} pl={3} mt={1} />
          </Link>
          <NavBurger />
        </Flex>
        <Text mt={5}>দূঃখিত, আপনার এই পেইজের এ্যাকসেস নেই।</Text>
        <Text>এ্যাকসেস পেতে লগ ইন করুন।</Text>
      </Flex>

      <Box h="auto" w="70%" mx="auto" mt={40} mb={60}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <FormControl isInvalid={errors.email}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={MdEmail} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="ইউজার আইডি/ইমেইল"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('email')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.email ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.email
                ? errors.email.message
                : 'আপনার ইউজার আইডি/ইমেইল এড্রেস লিখুন'}
            </Text>
          </FormControl>

          {/* password */}

          <FormControl isInvalid={errors.password}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={HiLockClosed} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="password"
                name="password"
                placeholder="পাসওয়ার্ড"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('password')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.password ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.password
                ? errors.password.message
                : 'আপনার পাসওয়ার্ডটি দিন'}
            </Text>
          </FormControl>

          <Button
            size="sm"
            w="100%"
            type="submit"
            my={3}
            colorScheme={'green'}
            _hover={{ bg: 'green.600', transform: 'translateY(5px)' }}
          >
            লগইন
          </Button>
          <Flex justifyContent={'center'} my={3}>
            <Link to="/registration">
              <Text textDecoration={'underline'} color="blue.300">
                রেজিস্টার করুন
              </Text>
            </Link>
          </Flex>
        </form>
      </Box>
      <Footer />
    </Box>
  );
}
