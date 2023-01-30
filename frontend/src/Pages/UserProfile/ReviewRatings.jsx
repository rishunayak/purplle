import {
  Box,
  Button,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NoReviewRating from "./reviews-ratings-page.webp";

const ReviewRatings = () => {
  return (
    <Box>
      <Tabs>
        <TabList border={0}>
          <Tab
            fontWeight={600}
            textTransform={"uppercase"}
            _selected={{ color: "#e40980" }}
          >
            Contribute
          </Tab>
          <Tab
            fontWeight={600}
            textTransform={"uppercase"}
            _selected={{ color: "#e40980" }}
          >
            Your Reviews
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box>
              <Image src={NoReviewRating} />
              <Heading fontWeight={"normal"} fontSize={"0.8rem"}>
                You Have't written any reviews yet.
              </Heading>
              <Text my={"0.8rem"} fontSize={"0.8rem"}>
                Add your first review now.
              </Text>
              <Button
                px={"2rem"}
                py={"1rem"}
                borderRadius={"0.2rem"}
                colorScheme={"purple"}
                textTransform={"uppercase"}
              >
                Continue Shopping
              </Button>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <Image src={NoReviewRating} />
              <Heading fontWeight={"normal"} fontSize={"0.8rem"}>
                You Have't written any reviews yet.
              </Heading>
              <Text my={"0.8rem"} fontSize={"0.8rem"}>
                Add your first review now.
              </Text>
              <Button
                px={"2rem"}
                py={"1rem"}
                borderRadius={"0.2rem"}
                colorScheme={"purple"}
                textTransform={"uppercase"}
              >
                Continue Shopping
              </Button>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ReviewRatings;
