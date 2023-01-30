import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const BeautyProfile = () => {
  return (
    <Box display={"grid"} rowGap={"4em"}>
      <Stack>
        <Container maxW={"5xl"}>
          <Text>Describe your complexion (Choose any one)</Text>
          <Flex
            my={"1.5em"}
            flexWrap={"wrap"}
            gap={"2em"}
            justifyContent={"center"}
          >
            {arr1.map((item, index) => {
              return (
                <SimpleGrid
                  key={index}
                  minChildWidth={"6.5em"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Avatar name={item.label} src={item.icon} size={"xl"}>
                    <AvatarBadge />
                  </Avatar>
                  <Text textAlign={"center"}>{item.label}</Text>
                </SimpleGrid>
              );
            })}
          </Flex>
          <Button
            px={"1.2rem"}
            colorScheme={"purple"}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            Update & Procced
          </Button>
        </Container>
      </Stack>

      <Stack>
        <Container maxW={"5xl"}>
          <Text>How Would You Classify Your Hair ? (Choose any one)</Text>
          <Flex
            my={"1.5em"}
            flexWrap={"wrap"}
            gap={"2em"}
            justifyContent={"center"}
          >
            {arr2.map((item, index) => {
              return (
                <SimpleGrid
                  key={index}
                  minChildWidth={"6.5em"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Avatar name={item.label} src={item.icon} size={"xl"}>
                    <AvatarBadge />
                  </Avatar>
                  <Text textAlign={"center"}>{item.label}</Text>
                </SimpleGrid>
              );
            })}
          </Flex>
          <Button
            px={"1.2rem"}
            colorScheme={"purple"}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            Update & Procced
          </Button>
        </Container>
      </Stack>

      <Stack>
        <Container maxW={"5xl"}>
          <Text>Describe Your Hair (Choose any one)</Text>
          <Flex
            my={"1.5em"}
            flexWrap={"wrap"}
            gap={"2em"}
            justifyContent={"center"}
          >
            {arr3.map((item, index) => {
              return (
                <SimpleGrid
                  key={index}
                  minChildWidth={"6.5em"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Avatar name={item.label} src={item.icon} size={"xl"}>
                    <AvatarBadge />
                  </Avatar>
                  <Text display={"flex"} flexWrap={"wrap"} textAlign={"center"}>
                    {item.label}
                  </Text>
                </SimpleGrid>
              );
            })}
          </Flex>
          <Button
            px={"1.2rem"}
            colorScheme={"purple"}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            Update & Procced
          </Button>
        </Container>
      </Stack>

      <Stack>
        <Container maxW={"5xl"}>
          <Text>
            Which Hair Issues Would You Like To Conquer? (Choose all that apply)
          </Text>
          <Flex
            my={"1.5em"}
            flexWrap={"wrap"}
            gap={"2em"}
            justifyContent={"center"}
          >
            {arr4.map((item, index) => {
              return (
                <SimpleGrid
                  key={index}
                  minChildWidth={"6.5em"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Avatar name={item.label} src={item.icon} size={"xl"}>
                    <AvatarBadge />
                  </Avatar>
                  <Text display={"flex"} flexWrap={"wrap"} textAlign={"center"}>
                    {item.label}
                  </Text>
                </SimpleGrid>
              );
            })}
          </Flex>
          <Button
            px={"1.2rem"}
            colorScheme={"purple"}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            Update & Procced
          </Button>
        </Container>
      </Stack>

      <Stack>
        <Container maxW={"5xl"}>
          <Text>Your Scalp Concern. (Choose all that apply)</Text>
          <Flex
            my={"1.5em"}
            flexWrap={"wrap"}
            gap={"2em"}
            justifyContent={"center"}
          >
            {arr5.map((item, index) => {
              return (
                <SimpleGrid
                  key={index}
                  minChildWidth={"6.5em"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Avatar name={item.label} src={item.icon} size={"xl"}>
                    <AvatarBadge />
                  </Avatar>
                  <Text display={"flex"} flexWrap={"wrap"} textAlign={"center"}>
                    {item.label}
                  </Text>
                </SimpleGrid>
              );
            })}
          </Flex>
          <Button
            px={"1.2rem"}
            colorScheme={"purple"}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            Update & Procced
          </Button>
        </Container>
      </Stack>

      <Stack>
        <Container maxW={"5xl"}>
          <Text>How Would You Classify Your Skin ? (Choose any one)</Text>
          <Flex
            my={"1.5em"}
            flexWrap={"wrap"}
            gap={"2em"}
            justifyContent={"center"}
          >
            {arr6.map((item, index) => {
              return (
                <SimpleGrid
                  key={index}
                  minChildWidth={"6.5em"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Avatar name={item.label} src={item.icon} size={"xl"}>
                    <AvatarBadge />
                  </Avatar>
                  <Text display={"flex"} flexWrap={"wrap"} textAlign={"center"}>
                    {item.label}
                  </Text>
                </SimpleGrid>
              );
            })}
          </Flex>
          <Button
            px={"1.2rem"}
            colorScheme={"purple"}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            Update & Procced
          </Button>
        </Container>
      </Stack>

      <Stack>
        <Container maxW={"5xl"}>
          <Text>
            Which skin issues would you like to conquer? (Choose all that apply)
          </Text>
          <Flex
            my={"1.5em"}
            flexWrap={"wrap"}
            gap={"2em"}
            justifyContent={"center"}
          >
            {arr7.map((item, index) => {
              return (
                <SimpleGrid
                  key={index}
                  minChildWidth={"6.5em"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Avatar name={item.label} src={item.icon} size={"xl"}>
                    <AvatarBadge />
                  </Avatar>
                  <Text display={"flex"} flexWrap={"wrap"} textAlign={"center"}>
                    {item.label}
                  </Text>
                </SimpleGrid>
              );
            })}
          </Flex>
          <Button
            px={"1.2rem"}
            colorScheme={"purple"}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            Update & Procced
          </Button>
        </Container>
      </Stack>

      <Stack>
        <Container maxW={"5xl"}>
          <Text>Your Style Preference (Choose any one.)</Text>
          <Flex
            my={"1.5em"}
            flexWrap={"wrap"}
            gap={"2em"}
            justifyContent={"center"}
          >
            {arr8.map((item, index) => {
              return (
                <SimpleGrid
                  key={index}
                  minChildWidth={"6.5em"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Avatar name={item.label} src={item.icon} size={"xl"}>
                    <AvatarBadge />
                  </Avatar>
                  <Text display={"flex"} flexWrap={"wrap"} textAlign={"center"}>
                    {item.label}
                  </Text>
                </SimpleGrid>
              );
            })}
          </Flex>
          <Button
            px={"1.2rem"}
            colorScheme={"purple"}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            Update & Procced
          </Button>
        </Container>
      </Stack>
    </Box>
  );
};

export default BeautyProfile;

const arr1 = [
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1524661599_fair.png",
    label: "Fair Skin",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1524661602_wheatish.png",
    label: "Wheatish Skin",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1524661597_dusky.png",
    label: "Dusky Skin",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/misc/1524661596_dark.png",
    label: "Dark Skin",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/promo/1524484531_light.png",
    label: "Light Skin",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/mobile/1488958120_dont-know.png",
    label: "",
  },
];

const arr2 = [
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/promo/1479451333_normal.jpg",
    label: "Normal Hair",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/promo/1479451343_oily.jpg",
    label: "Oily Hair",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/promo/1479451323_dry.jpg",
    label: "Dry Hair",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/mobile/1488958120_dont-know.png",
    label: "",
  },
];

const arr3 = [
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/promo/1479451353_straight.jpg",
    label: "Straight Hair",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/promo/1479451364_wavy.jpg",
    label: "Wavy Hair",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/promo/1479451313_curly.jpg",
    label: "Curly Hari",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/promo/1479451302_coloured.jpg",
    label: "Coloured Hair",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/promo/1479451290_chemically-treated.jpg",
    label: "Chemically Treated Hair",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/mobile/1488958120_dont-know.png",
    label: "",
  },
];

const arr4 = [
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351893_dandruff.png",
    label: "Dandruff",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351973_hairfall.png",
    label: "hairfall",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351962_hair-breakage.png",
    label: "Hari Breakage",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351916_dull-hair.png",
    label: "Dull Hair",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351951_grey-hair.png",
    label: "Grey Hair",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351985_limp-hair.png",
    label: "Limp Hair",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351939_frizzy-hair.png",
    label: "Frizzy Hair",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488352042_split-ends.png",
    label: "Split Ends",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488352054_thin-hair.png",
    label: "Thin Hair",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/mobile/1488958120_dont-know.png",
    label: "",
  },
];

const arr5 = [
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488462664_dry-scalp.png",
    label: "Dry Scalp",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488462699_inflamed-scalp.png",
    label: "Inflamed Scalp",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488462710_itchy-scalp-2.png",
    label: "Itchy Scalp",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488462549_oily-scalp.png",
    label: "Oily Scalp",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488462576_sensitive-scalp.png",
    label: "Sensitive Scalp",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/mobile/1488958100_none.png",
    label: "",
  },
];

const arr6 = [
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/mobile/1471873301_normal.png",
    label: "Normal Skin",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/mobile/1471873283_dry.png",
    label: "Dry Skin",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/mobile/1471873314_oily.png",
    label: "Oily Skin",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/mobile/1471873273_combination.png",
    label: "Combination Skin",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/mobile/1471873260_sensitive.png",
    label: "Sensitive Skin",
  },
];

const arr7 = [
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351859_acne-pimples.png",
    label: "Acne & Pimples",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488352031_signs-of-aging.png",
    label: "Signs Of Aging",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351870_blackheads.png",
    label: "Blackheads",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351904_dark-circles.png",
    label: "Dark Cirlcles",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351882_blemishes.png",
    label: "Blemishes",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488352008_pigmentation.png",
    label: "Pigmentation",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351928_dullness.png",
    label: "Dullness",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351848_wrinkles.png",
    label: "Wrinkles",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488351996_loss-of-firmness-elasticity.png",
    label: "Loss Of Firmness Elasticity",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488352019_roughness.png",
    label: "Roughness",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/home/1538111283_dark-spots.png",
    label: "Dark Spots",
  },
  {
    icon: "https://media6.ppl-media.com/mediafiles/ecomm/home/1538111283_uneven-skin-tone.png",
    label: "Uneven Skintone",
  },
];

const arr8 = [
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488462722_natural.png",
    label: "Natural",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488462621_chic.png",
    label: "Chic",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488463315_feminine.png",
    label: "Feminine",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488462589_trendy.png",
    label: "Trendy",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488462675_edgy.png",
    label: "Edgy",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/promo/1488462652_dramatic.png",
    label: "Dramatic",
  },
  {
    icon: "https://media5.ppl-media.com/mediafiles/ecomm/mobile/1488958100_none.png",
    label: "",
  },
];
