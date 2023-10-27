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



interface DiagramProps {
  text: string;
}

export const Diagram: React.FC<Readonly<DiagramProps>> = ({
  text,
}) => (
  <Tailwind>
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
          </div>
    </Container>
  </Tailwind>
);





