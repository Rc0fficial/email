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

interface DiagramProps {
  text: string;
}

export const Diagram: React.FC<Readonly<DiagramProps>> = ({ text }) => (
  <Html>
    <Head />

    <Tailwind>
      <Body>
        <Container className="bg-white ">
            <Section className="">
              <Img
                src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698435097/dszzvmsffxn74czkvswv.png"
                alt="Diagram"
                width="200"
                height="200"
              />
            </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
