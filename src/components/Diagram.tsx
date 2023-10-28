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
} from "@react-email/components";
import { Table } from "./Table";

interface DiagramProps {
  text: string;
}

export const Diagram: React.FC<Readonly<DiagramProps>> = ({ text }) => (
  <Html>
    <Head />

    <Tailwind>
      <Body>
        <Container className="bg-white ">
          <div className="flex flex-col items-center gap-4 ">
            <div className="">
              <Img
                src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698435097/dszzvmsffxn74czkvswv.png"
                alt="Diagram"
                width="200"
                height="200"
              />
            </div>
          </div>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
