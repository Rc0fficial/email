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
} from "@react-email/components";
import { Table } from "./Table";

interface SvgProps {
  text: string;
}

export const Svg: React.FC<Readonly<SvgProps>> = ({ text }) => (
  <Tailwind>
    <Container className="bg-white ">
      <div className="flex flex-col items-center ">
        <div>
          <Img
            src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698437434/vrqscjbkdyxaqwcpq8y8.png"
            alt="Svg"
          />
        </div>
        <div>
          <Text>{text}</Text>
        </div>
      </div>
    </Container>
  </Tailwind>
);