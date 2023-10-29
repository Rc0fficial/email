import * as React from "react";
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

interface SvgProps {
  text: string;
}

export const Svg: React.FC<Readonly<SvgProps>> = ({ text }) => (
  <Html>
    <Head />
    <Tailwind>
      <Body>
        <Container className="bg-white ">
          <Section className="mt-6">
            <Row>
              <Column align="center">
              <Img
                src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698437434/vrqscjbkdyxaqwcpq8y8.png"
                alt="Svg"
              />
              </Column>
            </Row>
            <Row>
            <Column align="center">
              <Text className="leading-[0rem] text-center">{text}</Text>
            </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
