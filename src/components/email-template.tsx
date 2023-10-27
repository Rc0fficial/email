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
  <Tailwind>
    <Container className="bg-white py-10">
      <div className="flex flex-col gap-14">
        <div className="flex gap-20">
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
              <Diagram text={"Issue worked on by priorty"} />
              <Svg text={"Issue Worked On by Priority"} />
            </div>
            <div className="mt-4">
              <Table data={data} />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
              <Diagram text={"Issue worked on by priorty"} />
              <Svg text={"Issue Worked On by Company"} />
            </div>
            <div className="mt-4">
              <Table data={data2} />
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
              <Diagram text={"Issue worked on by priorty"} />
              <Svg text={"Issue Worked On by Type"} />
            </div>
            <div className="mt-4">
              <Table data={data3} />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
              <Diagram text={"Issue worked on by priorty"} />
              <Svg text={"Issue Worked On by Type"} />
            </div>
            <div className="mt-4">
              <Table data={data4} />
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
              <Diagram text={"Issue worked on by priorty"} />
              <Svg text={"Issue Worked On by Assignee"} />
            </div>
            <div className="mt-4">
              <Table data={data5} />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-6">
              <Diagram text={"Issue worked on by priorty"} />
              <Svg text={"Issue By Status"} />
            </div>
            <div className="mt-4">
              <Table data={data6} />
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
