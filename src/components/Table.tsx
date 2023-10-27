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

interface TableProps {
  data: any;
}

export const Table: React.FC<Readonly<TableProps>> = ({ data }) => (
  <Tailwind>
    <Container className="bg-white">
      <div>
        <table className="border">
          <tr className="bg-gray-200">
            <th>{data?.title1}</th>
            <th>{data?.title2}</th>
          </tr>
          {data?.content?.map((item: any, key: any) => (
            <tr key={key} className="bg-gray-100">
              <td>{item.c1}</td>
              <td>{item.c2}</td>
            </tr>
          ))}
        </table>
      </div>
    </Container>
  </Tailwind>
);




