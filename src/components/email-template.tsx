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

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Tailwind>
    <Container className="bg-white py-10">
      <div className="flex flex-col gap-10">
        <div className="flex gap-20">
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
                <Diagram text={"Issue worked on by priorty"} />
                <Svg  text={"testing text"} />
            </div>
            <div className="mt-4">
              <Table data={data} />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
                <Diagram text={"Issue worked on by priorty"} />
                <Svg  text={"testing text"} />
            </div>
            <div className="mt-4">
              <Table data={data} />
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
                <Diagram text={"Issue worked on by priorty"} />
                <Svg  text={"testing text"} />
            </div>
            <div className="mt-4">
              <Table data={data} />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
                <Diagram text={"Issue worked on by priorty"} />
                <Svg  text={"testing text"} />
            </div>
            <div className="mt-4">
              <Table data={data} />
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
                <Diagram text={"Issue worked on by priorty"} />
                <Svg  text={"testing text"} />
            </div>
            <div className="mt-4">
              <Table data={data} />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
                <Diagram text={"Issue worked on by priorty"} />
                <Svg  text={"testing text"} />
            </div>
            <div className="mt-4">
              <Table data={data} />
            </div>
          </div>
        </div>
        <div>
          <Img
            width="100%"
            src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1698444011/Accel_Email_Reports_1_.pdf_2_rrley7.png"
          />
        </div>
      </div>
    </Container>
  </Tailwind>
);
