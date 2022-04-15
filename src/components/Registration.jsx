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
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
// import useReactIpLocation from 'react-ip-details';
import React, { useState } from 'react';
import { browserName, isMobile } from 'react-device-detect';
import { useForm } from 'react-hook-form';
import {
  AiFillFacebook,
  AiFillPhone,
  AiOutlineIdcard,
  AiOutlineMail,
} from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
import { GrUserFemale } from 'react-icons/gr';
import { ImLocation } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import head_texture from '../res/firstPage_headTexture.png';
// svg imports
import headBg from '../res/headTopBg.svg';
import Logo from '../res/Logo.svg';
import Footer from './Footer';
import NavBurger from './NavBurger';

function Registration() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   axios.get('https://geolocation-db.com/json/').then(userData => {
  //     console.log(userData);
  //   });
  // }, []);

  // converetion function for bangla date from english
  var finalEnglishToBanglaNumber = {
    0: '০',
    1: '১',
    2: '২',
    3: '৩',
    4: '৪',
    5: '৫',
    6: '৬',
    7: '৭',
    8: '৮',
    9: '৯',
  };

  function convertToBangla(str) {
    var retStr = str;
    for (var x in finalEnglishToBanglaNumber) {
      retStr = retStr.replace(
        new RegExp(x, 'g'),
        finalEnglishToBanglaNumber[x]
      );
    }
    return retStr;
  }

  const months = [
    'জানুয়ারি',
    'ফেব্রুয়ারী',
    'মার্চ',
    'এপ্রিল',
    'মে',
    'জুন',
    'জুলাই',
    'আগষ্ট',
    'সেপ্টেম্বর',
    'অক্টোবর',
    'নভেম্বর',
    'ডিসেম্বর',
  ];
  const validationSchema = yup.object().shape({
    name: yup.string().required('নাম আবশ্যক'),
    fathersname: yup.string().required('পিতার নাম আবশ্যক'),
    mothersname: yup.string().required('মায়ের নাম আবশ্যক'),
    presentAddress: yup.string().required('বর্তমান ঠিকানা আবশ্যক'),
    permanentAddress: yup.string().required('স্থায়ী ঠিকানা আবশ্যক'),
    nidOrPassport: yup.string().required('আবশ্যক'),
    birthDate: yup.string().required(),
    birthMonth: yup.string().required(),
    birthYear: yup.string().required(),
    merit: yup.string().required('শিক্ষাগত যোগ্যতা আবশ্যক'),
    currentjob: yup.string().required('বর্তমান পেশা আবশ্যক'),
    phone: yup.string().required('মোবাইল নাম্বার আবশ্যক'),
    imoOrWa: yup.string(),
    guardian: yup.string(),
    email: yup.string().required('ইমেইল এড্রেস আবশ্যক'),
    facebookLink: yup.string().required('ফেসবুক ইউআরএল/নাম আবশ্যক'),
    aboutYou: yup.string().required('আবশ্যক'),
  });

  const {
    handleSubmit,
    setError,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  // sending data to google sheet
  const SendData = mainData => {
    axios
      .post(
        'https://sheet.best/api/sheets/c0e62a9a-df28-41da-9a1c-41439f34e05f',
        mainData
      )
      .then(response => {
        if (response.status === 200) {
          navigate('/regconfirm', {
            replace: true,
          });
          setLoading(false);
        }
      });
  };

  const onSubmit = values => {
    setLoading(true);

    // Form submit function
    let mainData = {
      ...values,
      browser: browserName,
      RegDateandTime: new Date(),
      isMobile: JSON.stringify(isMobile),
    };

    axios
      .get('https://geolocation-db.com/json/')
      .then(userData => {
        if (userData.status === 200) {
          mainData = {
            ...mainData,
            country: userData.data.country_name,
            city: userData.data.city,
            postal: userData.data.postal,
            ip: userData.data.IPv4,
          };
        }
        SendData(mainData);
      })
      .catch(err => {
        SendData(mainData);
      });
  };

  return (
    <Box position="relative">
      <Flex
        w="100%"
        h="200px"
        color={'white'}
        flexFlow="column"
        alignItems={'center'}
        position="relative"
      >
        <Flex
          w="100%"
          h="200px"
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
        <Image src={headBg} position="absolute" top={0} left={0} />
        <Flex justifyContent={'space-between'} w="100%" color="white">
          <Link to="/">
            <Image src={Logo} w={32} h={12} pl={3} mt={1} />
          </Link>
          <NavBurger />
        </Flex>
        <Text fontSize={40} fontWeight="semibold" mt={2}>
          এ্যাডমিশন
        </Text>
      </Flex>

      <Box h="auto" w="85%" mx="auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <FormControl isInvalid={errors.name}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={BiUser} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="নাম"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('name')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.name ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.name ? errors.name.message : 'আপনার নাম লিখুন'}
            </Text>
          </FormControl>

          {/* fathers name */}
          <FormControl isInvalid={errors.fathersname}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={BiUser} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="fathersname"
                name="fathersname"
                placeholder="পিতার নাম"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('fathersname')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.fathersname ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.fathersname
                ? errors.fathersname.message
                : 'আপনার পিতার  নাম লিখুন'}
            </Text>
          </FormControl>

          {/* mothers name */}
          <FormControl isInvalid={errors.mothersname}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={GrUserFemale} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="mothersname"
                name="mothersname"
                placeholder="মায়ের নাম"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('mothersname')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.mothersname ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.mothersname
                ? errors.mothersname.message
                : 'আপনার মায়ের নাম লিখুন'}
            </Text>
          </FormControl>

          {/* present address */}
          <Flex my={2} alignItems="start">
            <Box bg="#EDF2F7" p={2} pointerEvents="none">
              <Icon as={ImLocation} w={6} h={6} />
            </Box>
            <FormControl isInvalid={errors.presentAddress}>
              <Textarea
                type="text"
                id="presentAddress"
                name="presentAddress"
                placeholder="বর্তমান ঠিকানা"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('presentAddress')}
              />

              <Text
                fontSize={'xs'}
                color={errors.presentAddress ? 'red.500' : 'text.medium'}
                mt={1}
              >
                {errors.presentAddress
                  ? errors.presentAddress.message
                  : 'আপনার বর্তমান ঠিকানা লিখুন'}
              </Text>
            </FormControl>
          </Flex>

          {/* permanent address */}
          <Flex my={2} alignItems="start">
            <Box bg="#EDF2F7" p={2} pointerEvents="none">
              <Icon as={ImLocation} w={6} h={6} />
            </Box>
            <FormControl isInvalid={errors.permanentAddress}>
              <Textarea
                type="text"
                id="permanentAddress"
                name="permanentAddress"
                placeholder="স্থায়ী ঠিকানা"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('permanentAddress')}
              />

              <Text
                fontSize={'xs'}
                color={errors.permanentAddress ? 'red.500' : 'text.medium'}
                mt={1}
              >
                {errors.permanentAddress
                  ? errors.permanentAddress.message
                  : 'আপনার স্থায়ী ঠিকানা লিখুন'}
              </Text>
            </FormControl>
          </Flex>

          {/* nid passport */}
          <FormControl isInvalid={errors.nidOrPassport}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={AiOutlineIdcard} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="nidOrPassport"
                name="nidOrPassport"
                placeholder="জাতীয় পরিচয়পত্র/জন্মনিবন্ধন সনদ/পাসপোর্ট নম্বর"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('nidOrPassport')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.nidOrPassport ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.nidOrPassport
                ? errors.nidOrPassport.message
                : 'আপনার জাতীয় পরিচয়পত্র নম্বর অথবা জন্মনিবন্ধন সনদ নম্বর অথবা পাসপোর্ট নম্বর লিখুন'}
            </Text>
          </FormControl>

          {/* date of birth  */}
          <Flex mb={3}>
            <Button pointerEvents={'none'}>জন্ম তারিখ</Button>
            <FormControl w="25%" isInvalid={errors.birthDate}>
              <Select
                id="birthDate"
                name="birthDate"
                {...register('birthDate')}
              >
                {[...Array(31)].map((el, i) => {
                  let numb = i + 1;
                  numb = numb.toString();
                  numb = convertToBangla(numb);
                  return (
                    <option key={Math.random()} value={numb}>
                      {numb}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl w="25%" isInvalid={errors.birthMonth}>
              <Select
                id="birthMonth"
                name="birthMonth"
                {...register('birthMonth')}
              >
                {[...Array(12)].map((el, i) => (
                  <option key={Math.random()} value={i}>
                    {months[i]}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl w="25%" isInvalid={errors.birthYear}>
              <Select
                id="birthYear"
                name="birthYear"
                {...register('birthYear')}
              >
                {[...Array(61)].map((el, i) => {
                  let numb = i + 1960;
                  numb = numb.toString();
                  numb = convertToBangla(numb);
                  return (
                    <option key={Math.random()} value={numb}>
                      {numb}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </Flex>

          {/* merit */}
          <FormControl isInvalid={errors.merit}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={AiOutlineIdcard} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="merit"
                name="merit"
                placeholder="শিক্ষাগত যোগ্যতা"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('merit')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.merit ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.merit
                ? errors.merit.message
                : 'আপনার শিক্ষাগত যোগ্যতা লিখুন'}
            </Text>
          </FormControl>

          {/* current job */}
          <FormControl isInvalid={errors.currentjob}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={BsBriefcase} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="currentjob"
                name="currentjob"
                placeholder="বর্তমান পেশা"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('currentjob')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.currentjob ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.currentjob
                ? errors.currentjob.message
                : 'আপনার বর্তমান পেশা লিখুন'}
            </Text>
          </FormControl>

          {/* phone */}
          <FormControl isInvalid={errors.phone}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={AiFillPhone} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="phone"
                name="phone"
                placeholder="মোবাইল নাম্বার Ex:01XXXXXXXXX"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('phone')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.phone ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.phone
                ? errors.phone.message
                : 'আপনার মোবাইল নাম্বার লিখুন'}
            </Text>
          </FormControl>

          {/* imo/wa */}
          <FormControl isInvalid={errors.imoOrWa}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={AiFillPhone} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="imoOrWa"
                name="imoOrWa"
                placeholder="ইমো / হোয়াটস অ্যাপ (যদি থাকে)"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('imoOrWa')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.imoOrWa ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.imoOrWa
                ? errors.imoOrWa.message
                : 'ইমো / হোয়াটস অ্যাপ নাম্বার লিখুন'}
            </Text>
          </FormControl>

          {/* guardian */}
          <FormControl isInvalid={errors.guardian}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={AiFillPhone} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="guardian"
                name="guardian"
                placeholder="অভিভাবক এর নাম্বার"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('guardian')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.guardian ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.guardian
                ? errors.guardian.message
                : 'আপনার অভিভাবক এর নাম্বার লিখুন'}
            </Text>
          </FormControl>

          {/* email */}
          <FormControl isInvalid={errors.email}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={AiOutlineMail} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="ইমেইল এড্রেস"
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
              {errors.email ? errors.email.message : 'আপনার ইমেইল এড্রেস লিখুন'}
            </Text>
          </FormControl>

          {/* facebook link */}
          <FormControl isInvalid={errors.facebookLink}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={AiFillFacebook} h={6} w={6} />
              </InputLeftAddon>
              <Input
                type="text"
                id="facebookLink"
                name="facebookLink"
                placeholder="ফেসবুক ইউআরএল"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('facebookLink')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.facebookLink ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.facebookLink
                ? errors.facebookLink.message
                : 'আপনার ফেসবুক ইউআরএল অর্থাৎ প্রোফাইলের লিংক অথবা প্রোফাইলের নাম লিখুন'}
            </Text>
          </FormControl>

          <Box
            my={2}
            rounded="md"
            border="1px solid"
            borderColor="blackAlpha.300"
          >
            <Text p={3}>শিক্ষার্থী সম্পর্কে</Text>
            <FormControl isInvalid={errors.aboutYou}>
              <Textarea
                type="text"
                id="aboutYou"
                name="aboutYou"
                rows={6}
                placeholder="(আপনার নিজের সম্পর্কে বিস্তারিত লিখবেন। আপনার অভিজ্ঞতা, কোন সফটওয়্যারের উপর দক্ষতা থাকলে সে সম্পর্কে জানাবেন। মোবাইল ব্যাবহার করেন নাকি কম্পিউটার ব্যাবহার করেন, কেন আপনি নিজেকে আমাদের স্টুডেন্ট হওয়ার জন্য যোগ্য বলে মনে করেন এগুলি বিস্তারিতভাবে লিখবেন।)"
                isDisabled={loading}
                autoComplete="new-password"
                {...register('aboutYou')}
              />
              <Text
                fontSize={'xs'}
                color={errors.aboutYou ? 'red.500' : 'text.medium'}
                mt={1}
                ml={3}
              >
                {errors.aboutYou
                  ? errors.aboutYou.message
                  : 'আপনার সম্পর্কে লিখুন'}
              </Text>
            </FormControl>
          </Box>

          <Button
            size="sm"
            w="100%"
            mt={8}
            isLoading={loading}
            type="submit"
            colorScheme={'green'}
            _hover={{ bg: 'green.600', transform: 'translateY(5px)' }}
          >
            Submit
          </Button>
        </form>
      </Box>
      <Footer />
    </Box>
  );
}

export default Registration;
