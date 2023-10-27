import * as React from "react";
import {
  Container,
  Heading,
  Button,
  Tailwind,
  Img,
  Row,
  Column,
  Text
} from "@react-email/components";

interface TestProps {
  firstName: string;
}

export const Test: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Tailwind>
    <Container className="bg-white px-10 py-10">
      <div>
        <div className="flex items-center  gap-4">
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
              <Text>Issue worked on by priorty</Text>
              </div>

            </div>
          </div>
          <div>
            <table className="border">
              <tr className="bg-gray-200">
                <th>Priorty</th>
                <th>Count</th>
              </tr>
              <tr className="bg-gray-100">
                <td>High</td>
                <td>3</td>
              </tr>
              <tr>
                <td>High</td>
                <td>6</td>
              </tr>
              <tr className="bg-gray-100">
                <td>Meduim</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Low</td>
                <td>1</td>
              </tr>
            </table>
          </div>
        </div>
        <div></div>
      </div>
    </Container>
  </Tailwind>
);
