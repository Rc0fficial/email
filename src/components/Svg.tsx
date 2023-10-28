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
          <div className="flex flex-col items-center ">
            <div>
              <Img
                src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698437434/vrqscjbkdyxaqwcpq8y8.png"
                alt="Svg"
              />
            </div>
            <div>
              <Text className="leading-[0rem]">{text}</Text>
            </div>
          </div>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
