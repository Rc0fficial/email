import * as React from "react";
import { Test } from "./test";
import {
  Container,
  Heading,
  Button,
  Tailwind,
  Img,
  Row,
  Column,
  Text,
  Html,
  Head,
  Body,
  Section,
} from "@react-email/components";
import { Table } from "./Table";
import { Diagram } from "./Diagram";
import { Svg } from "./Svg";

const data = {
  title1: "Priority",
  title2: "Count",
  content: [
    { c1: "High", c2: 3 },
    { c1: "High", c2: 6 },
    { c1: "Medium", c2: 2 },
    { c1: "Low", c2: 1 },
  ],
};
const data2 = {
  title1: "Client",
  title2: "Count",
  content: [
    { c1: "Solaris", c2: 3 },
    { c1: "1937 Group", c2: 6 },
    { c1: "Final Bell", c2: 2 },
    { c1: "Garden Society", c2: 1 },
  ],
};
const data3 = {
  title1: "Tracker",
  title2: "Count",
  content: [
    { c1: "Technical Support", c2: 3 },
    { c1: "Maintenance Request", c2: 6 },
    { c1: "Customer Inquiry", c2: 2 },
  ],
};
const data4 = {
  title1: "Tracker",
  title2: "Count",
  content: [
    { c1: "Load Robot", c2: 3 },
    { c1: "Cone Pull", c2: 6 },
    { c1: "Weigh Station", c2: 0 },
    { c1: "Cone fill", c2: 3 },
    { c1: "Compaction", c2: 1 },
    { c1: "Twist", c2: 0 },
    { c1: "Clip & tamp", c2: 4 },
    { c1: "O!load robot", c2: 2 },
  ],
};
const data5 = {
  title1: "Tracker",
  title2: "Count",
  content: [
    { c1: "Allan", c2: 3 },
    { c1: "Jacob", c2: 6 },
    { c1: "Daniel", c2: 2 },
  ],
};
const data6 = {
  title1: "Tracker",
  title2: "Count",
  content: [
    { c1: "Open", c2: 3 },
    { c1: "In-progress", c2: 6 },
    { c1: "Closed", c2: 2 },
  ],
};

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[10px] w-[1005px] shadow-md">
          <Section className="mx-auto ">
            <Column align="center">
              <Heading className="mt-[15px]">Demo Heading</Heading>
              <Row align="center">
                <Column align="center" className="">
                  <Row align="center">
                    <Img
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698435097/dszzvmsffxn74czkvswv.png"
                      alt="Diagram"
                      width="200"
                      height="200"
                    />
                  </Row>
                  <Row className="ml-20 mt-5">
                    <Img
                      className="items-center"
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698437434/vrqscjbkdyxaqwcpq8y8.png"
                      alt="Svg"
                    />
                  </Row>
                  <Row align="center">
                    <Text className="leading-[0rem] text-center">
                      This is test text
                    </Text>
                  </Row>
                </Column>
                <Column>
                  <Row>
                    <Table data={data} />
                  </Row>
                </Column>
                <Column align="center" className="">
                  <Row>
                    <Img
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698435097/dszzvmsffxn74czkvswv.png"
                      alt="Diagram"
                      width="200"
                      height="200"
                    />
                  </Row>
                  <Row className="ml-20 mt-5">
                    <Img
                      className="items-center"
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698437434/vrqscjbkdyxaqwcpq8y8.png"
                      alt="Svg"
                    />
                  </Row>
                  <Row>
                    <Text className="leading-[0rem] text-center">
                      This is test text
                    </Text>
                  </Row>
                </Column>
                <Column>
                  <Row>
                    <Table data={data} />
                  </Row>
                </Column>
              </Row>
              <Row align="center" className="mt-[22px]">
                <Column align="center" className="">
                  <Row align="center">
                    <Img
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698435097/dszzvmsffxn74czkvswv.png"
                      alt="Diagram"
                      width="200"
                      height="200"
                    />
                  </Row>
                  <Row className="ml-20 mt-5">
                    <Img
                      className="items-center"
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698437434/vrqscjbkdyxaqwcpq8y8.png"
                      alt="Svg"
                    />
                  </Row>
                  <Row align="center">
                    <Text className="leading-[0rem] text-center">
                      This is test text
                    </Text>
                  </Row>
                </Column>
                <Column>
                  <Row>
                    <Table data={data} />
                  </Row>
                </Column>
                <Column align="center" className="">
                  <Row>
                    <Img
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698435097/dszzvmsffxn74czkvswv.png"
                      alt="Diagram"
                      width="200"
                      height="200"
                    />
                  </Row>
                  <Row className="ml-20 mt-5">
                    <Img
                      className="items-center"
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698437434/vrqscjbkdyxaqwcpq8y8.png"
                      alt="Svg"
                    />
                  </Row>
                  <Row>
                    <Text className="leading-[0rem] text-center">
                      This is test text
                    </Text>
                  </Row>
                </Column>
                <Column>
                  <Row>
                    <Table data={data} />
                  </Row>
                </Column>
              </Row>
              <Row align="center" className="mt-[22px]">
                <Column align="center" className="">
                  <Row align="center">
                    <Img
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698435097/dszzvmsffxn74czkvswv.png"
                      alt="Diagram"
                      width="200"
                      height="200"
                    />
                  </Row>
                  <Row className="ml-20 mt-5">
                    <Img
                      className="items-center"
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698437434/vrqscjbkdyxaqwcpq8y8.png"
                      alt="Svg"
                    />
                  </Row>
                  <Row align="center">
                    <Text className="leading-[0rem] text-center">
                      This is test text
                    </Text>
                  </Row>
                </Column>
                <Column>
                  <Row>
                    <Table data={data} />
                  </Row>
                </Column>
                <Column align="center" className="">
                  <Row>
                    <Img
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698435097/dszzvmsffxn74czkvswv.png"
                      alt="Diagram"
                      width="200"
                      height="200"
                    />
                  </Row>
                  <Row className="ml-20 mt-5">
                    <Img
                      className="items-center"
                      src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698437434/vrqscjbkdyxaqwcpq8y8.png"
                      alt="Svg"
                    />
                  </Row>
                  <Row>
                    <Text className="leading-[0rem] text-center">
                      This is test text
                    </Text>
                  </Row>
                </Column>
                <Column>
                  <Row>
                    <Table data={data} />
                  </Row>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Img
                    width="100%"
                    src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698444011/Accel_Email_Reports_1_.pdf_2_rrley7.png"
                  />
                </Column>
              </Row>
              <Heading className="mt-[15px]">Demo Heading</Heading>
            </Column>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
