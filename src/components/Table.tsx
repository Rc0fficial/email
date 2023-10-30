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

interface TableProps {
  data: any;
}

export const Table: React.FC<Readonly<TableProps>> = ({ data }) => (
  <Section>
    <table className="border border-black">
      <tr className="bg-gray-200">
        <th className="border-r-2 border-black">{data?.title1}</th>
        <th>{data?.title2}</th>
      </tr>
      {data?.content?.map((item: any, key: any) => (
        <tr key={key} className="bg-gray-100">
          <td className="border-r-2 border-black">{item.c1}</td>
          <td>{item.c2}</td>
        </tr>
      ))}
    </table>
  </Section>
);
