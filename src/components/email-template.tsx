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
} from "@react-email/components";
import { Table } from "./Table";
import { Diagram } from "./Diagram";

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

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Tailwind>
    <Container className="bg-white py-10">
      <div className="flex items-center">
        <Diagram text={"Issue worked on by priorty"} />
        <Table data={data} />
      </div>
    </Container>
  </Tailwind>
);
