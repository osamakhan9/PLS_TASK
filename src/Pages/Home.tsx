import React, { useEffect, useState } from "react";
import { Container, Box, Flex, Text, Button, Paper } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

interface DataEle {
  CI: {
    OC: string;
    CT: string;
    Lb: string;
  };
  address1: {
    type: string;
    state: string;
    city: string;
    country: string;
    zip: string;
    phone: number;
  };
  LI: {
    S: string;
    C: string;
    A: string;
  };
  CS: {
    newUserInvited: string;
    newUserAdded: string;
    paymentMethodChanged: string;
  };
}
function Home() {
  const [data, setData] = useState<DataEle[]>([]);

  const getData = async () => {
    try {
      const res = await fetch("https://pls-backend.onrender.com/data");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container
      m={0}
      w={"100%"}
      p="20px 0px 20px 20px"
      style={{
        textAlign: "left",
        background: "#EEEADC",
      }}
    >
      <Paper style={{ background: "white" }} radius="20px 0px 0px 20px">
        <Container p="20px 0px 40px 60px">
          <h1 style={{ fontSize: "25px", fontWeight: 700 }}>
            Company Information
          </h1>
          <Box>
            {data.map((e: DataEle, index: number) => (
              <Box>
                <Flex align="left" gap={100} mt={40}>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Operating Company
                    </Text>
                    <Text key={index} fw={700}>
                      {e.CI.OC}
                    </Text>
                  </Box>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Company type
                    </Text>
                    <Text key={index} fw={700}>
                      {e.CI.CT}
                    </Text>
                  </Box>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Law firm or business name
                    </Text>
                    <Text key={index} fw={700}>
                      {e.CI.Lb}
                    </Text>
                  </Box>
                </Flex>

                <Box w={"200px"} mt={20}>
                  <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                    Address 1
                  </Text>
                  <Text fw={700}>{e.address1.type}</Text>
                </Box>

                <Flex align="left" gap={100} mt={20}>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      State
                    </Text>
                    <Text key={index} fw={700}>
                      {e.address1.state}
                    </Text>
                  </Box>

                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      City
                    </Text>
                    <Text key={index} fw={700}>
                      {e.address1.city}
                    </Text>
                  </Box>

                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Country
                    </Text>
                    <Text key={index} fw={700}>
                      {e.address1.country}
                    </Text>
                  </Box>
                </Flex>

                <Flex align="left" gap={100} mt={20}>
                  <Box style={{ textAlign: "left" }} w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Zip code
                    </Text>
                    <Text key={index} fw={700}>
                      {e.address1.zip}
                    </Text>
                  </Box>

                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Phone number
                    </Text>
                    <Text key={index} fw={700}>
                      {e.address1.phone}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Box>
        </Container>

      

        <div
      style={{
        margin: "5px 40px",
        height: "1px",
        background:
          "repeating-linear-gradient(to right, transparent, transparent 10px, #ADADAD 10px, #ADADAD 20px)",
      }}
    ></div>


        <Container p="20px 0px 40px 60px">
          <h1 style={{ fontSize: "25px", fontWeight: 700 }}>
            Law Firm Information
          </h1>
          <Box>
            {data.map((e: DataEle, index: number) => (
              <Box>
                <Flex align="left" gap={100} mt={40}>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Firm S
                    </Text>
                    <Text key={index} fw={700}>
                      {e.LI.S}
                    </Text>
                  </Box>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      Case managment
                    </Text>
                    <Text key={index} fw={700}>
                      {e.LI.C}
                    </Text>
                  </Box>
                </Flex>
                <Box w={"200px"} mt={20}>
                  <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                    Account manager
                  </Text>
                  <Text key={index} fw={700}>
                    {e.LI.A}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>

      


        <div
      style={{
        margin: "5px 40px",
        height: "1px",
        background:
          "repeating-linear-gradient(to right, transparent, transparent 10px, #ADADAD 10px, #ADADAD 20px)",
      }}
    ></div>

        <Container p="20px 0px 40px 60px">
          <h1 style={{ fontSize: "25px", fontWeight: 700 }}>
            Company notification settings
          </h1>
          <Box>
            {data.map((e: DataEle, index: number) => (
              <Box>
                <Flex align="left" gap={100} mt={40}>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      New user invited
                    </Text>
                    <Text key={index} fw={700}>
                      {e.CS.newUserInvited}
                    </Text>
                  </Box>
                  <Box w={"200px"}>
                    <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                      New user added
                    </Text>
                    <Text key={index} fw={700}>
                      {e.CS.newUserAdded}
                    </Text>
                  </Box>

                <Box w={"400px"} mt={6}>
                  <Text fz="xs" tt="uppercase" fw={500} c="dimmed">
                    Payment method changed
                  </Text>
                  <Text key={index} fw={700}>
                    {e.CS.paymentMethodChanged}
                  </Text>
                </Box>
                </Flex>
              </Box>
            ))}
          </Box>
        </Container>


        <div
      style={{
        margin: "5px 40px",
        height: "1px",
        background:
          "repeating-linear-gradient(to right, transparent, transparent 10px, #ADADAD 10px, #ADADAD 20px)",
      }}
    ></div>

        <Flex mt={40} pb={40} justify={"end"} mr={40}>
          <Button bg={"#E4C441"} style={{ fontSize: "17px", color: "black" }}>
            Next
            <IconArrowRight size={15} />
          </Button>
        </Flex>
      </Paper>
    </Container>
  );
}

export default Home;