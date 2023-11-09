import * as React from "react";

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="  border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[10px] max-w-[39rem]">
          <Section className="bg-[#283342]  py-4 px-4">
            <Row>
              <Column align="left">
                <Img
                  src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699257122/Hello_By_Mainland_1_wvhv9o.png"
                  alt="Cat"
                  width="125"
                  height="23"
                />
              </Column>
              <Column align="right">
                <Text className="text-white m-0 text-[16px] font-semibold">
                  Sylvan Learning
                </Text>
                <Text className="text-white m-0 text-[8px] font-[400]">
                  Login to Your Dashboard
                </Text>
              </Column>
            </Row>
          </Section>
          <Section align="center" className="bg-[#E11C22] h-[52px]  w-full">
            <Row align="right">
              {/* <Img
                src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699266306/Ellipse_58_yjiagp.png"
                alt="red circle"
                width="67"
                height="67"
                className="   "
              /> */}

              <Text className="  text-[12px] font-[500] text-white text-center z-10">
                Story published
              </Text>
            </Row>
          </Section>
          <Section
            align="center"
            className="bg-[#EBEBEB] px-[20px] pt-[20px] mt-[0px]"
          >
            <Section>
              <Section align="center">
                <Row align="center">
                  <Column align="left">
                    <Section
                      align="left"
                      className="h-[253px] max-w-[231px] bg-[#283342] w-full"
                    >
                      <Text className="text-white font-[800] size-[12px] px-[12px] pt-[5px] uppercase">
                        Sylvan Learning
                      </Text>
                      <Hr className=" border-t-[#E11C22] " />
                      <Section
                        align="center"
                        className="max-w-[231px] mt-[10px]"
                      >
                        <Img
                          className="w-full h-[131px]"
                          src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699306125/8261e5e01ed7112ce73e5e01ea9418274711_1_diwrkt.png"
                        />
                        <Section className=" h-[94px] bg-[#E11C22]">
                          <Text className="  w-[68px] h-[12px] text-[#D0352F] text-center my-0 text-[7px] font-[700] bg-white leading-[10px]">
                            Featured article
                          </Text>
                          <Text className="text-center text-white font-[700] text-[10px] leading-[11px]">
                            The Daily Gazette: Another Sylvan Learning Center to
                            Open in Saratoga County
                          </Text>
                        </Section>
                        <Section align="center" className="bg-[#B72D26]">
                          <Row align="center">
                            <Column
                              align="left"
                              className="text-[#fff] text-[10px] text-[700] leading-[0px]"
                            >
                              <Text className="text-center text-white font-[700] text-[10px] leading-[11px]">
                                SHARE:
                              </Text>
                            </Column>
                            <Column align="left">
                              <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699309964/Group_848_fi1yhk.png" />
                            </Column>
                            <Column align="center">
                              <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699395179/Icon_2_wiijow.png" />
                            </Column>
                            {/* <Column align="center">
                              <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699309964/Group_848_fi1yhk.png" />
                            </Column> */}
                            <Column align="right">
                              <Text className="text-center text-white font-[700] text-[10px] leading-[11px]">
                                READ MORE
                              </Text>
                            </Column>
                          </Row>
                        </Section>
                      </Section>
                    </Section>
                  </Column>

                  <Column align="right" className="max-w-[245px] ml-[10px]">
                    <Text className="text-start text-[14px] font-[600] leading-[18px]">
                      Brand Name
                    </Text>
                    <Text className="text-start leading-[18px]">
                      Congratulations your story has been published. Would you
                      like to increase the amount of readers? Here how
                    </Text>
                    <Section>
                      <Row align="center">
                        <Column align="left">
                          <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699374017/Group_1089_sonjdy.png"></Img>
                        </Column>
                        <Column align="center" className="max-w-[91px]">
                          <Text className="leading-[12px] text-[10px] text-start">
                            <strong> Launch an AMPD Campaign </strong> <br /> to
                            increase the size of the audience
                          </Text>
                        </Column>
                        <Column align="right">
                          <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699373914/Group_1074_yeusn6.png"></Img>
                        </Column>
                      </Row>
                      <Row align="center">
                        <Column align="left">
                          <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699373915/Group_1088_fqxnpr.png"></Img>
                        </Column>
                        <Column align="center" className="max-w-[91px]">
                          <Text className="leading-[12px] text-[10px] text-start">
                            <strong> Launch an AMPD Campaign </strong> <br /> to
                            increase the size of the audience
                          </Text>
                        </Column>
                        <Column align="right">
                          <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699373917/Group_850_pkejds.png"></Img>
                        </Column>
                      </Row>
                      <Row align="center">
                        <Column align="left">
                          <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699373914/Group_1087_oklnw6.png"></Img>
                        </Column>
                        <Column align="center" className="max-w-[91px]">
                          <Text className="leading-[12px] text-[10px] text-start">
                            <strong> Launch an AMPD Campaign </strong> <br /> to
                            increase the size of the audience
                          </Text>
                        </Column>
                        <Column align="right">
                          <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699373918/Group_848_1_kermjj.png"></Img>
                        </Column>
                      </Row>
                      <Row align="center">
                        <Column align="left">
                          <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699373917/Group_1090_ylnqgo.png"></Img>
                        </Column>
                        <Column align="center" className="max-w-[91px]">
                          <Text className="leading-[12px] text-[10px] text-start">
                            <strong> Launch an AMPD Campaign </strong> <br /> to
                            increase the size of the audience
                          </Text>
                        </Column>
                        <Column align="right">
                          <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699373915/Group_1075_mrgwyd.png"></Img>
                        </Column>
                      </Row>
                    </Section>
                  </Column>
                </Row>
              </Section>
              <Section
                align="center"
                className="bg-[#E11C22] h-[52px]  w-full mt-[31px] bg-[]"
              >
                <Row align="right">
                  <Text className="  text-[12px] font-[500] text-white text-center z-10">
                    AMPLIFY A TRENDING STORY
                  </Text>
                </Row>
              </Section>
              <Section className="bg-[#283342]">
                <Hr className=" border-t-[#E11C22] my-[31px]" />
                <Section align="center" className="">
                  <Row align="center" className="">
                  <Column align="left" className="max-w-[100px] pr-4 pl-2  ">
                      <Img
                        className="w-full h-[131px]"
                        src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699426244/a361bdc1ace0a2da41031961b3300bab9315_2_l0xrhj.png"
                      />
                      <Section align="center" className="bg-[#E11C22]">
                        <Row align="left">
                          <Column>
                            <Text className="text-white font-[700] text-[21px] mx-[6px] text-start">
                              1
                            </Text>
                          </Column>
                          <Column>
                            <Text className="text-center text-white font-[700] text-[10px] leading-[11px] text-start">
                              Sylvan Learning Franchisees Discuss Multi-Unit
                              Ownership and Scaling Their Business
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                      <Section align="center" className="bg-[#B72D26]">
                        <Row align="center">
                          <Column
                            align="left"
                            className="text-[#fff] text-[10px] text-[700] leading-[0px]"
                          ></Column>
                          <Column align="right">
                            <Text className="text-end text-white font-[700] text-[10px] leading-[0px] m-[8px]">
                              Amplify Reach
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                    </Column>

                    <Column align="right" className="max-w-[100px] ml-6 pl-4 pr-2">
                      <Img
                        className="w-full h-[131px]"
                        src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699426244/a361bdc1ace0a2da41031961b3300bab9315_2_l0xrhj.png"
                      />
                      <Section align="center" className="bg-[#E11C22]">
                        <Row align="left">
                          <Column>
                            <Text className="text-white font-[700] text-[21px] mx-[6px] text-start">
                              1
                            </Text>
                          </Column>
                          <Column>
                            <Text className="text-center text-white font-[700] text-[10px] leading-[11px] text-start">
                              Sylvan Learning Franchisees Discuss Multi-Unit
                              Ownership and Scaling Their Business
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                      <Section align="center" className="bg-[#B72D26]">
                        <Row align="center">
                          <Column
                            align="left"
                            className="text-[#fff] text-[10px] text-[700] leading-[0px]"
                          ></Column>
                          <Column align="right">
                            <Text className="text-end text-white font-[700] text-[10px] leading-[0px] m-[8px]">
                              Amplify Reach
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                    </Column>
                  </Row>
                </Section>
                <Section align="center" className="mt-10">
                  <Row align="center" className="">
                  <Column align="left" className="max-w-[100px] pr-4 pl-2 ">
                      <Img
                        className="w-full h-[131px]"
                        src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699426244/a361bdc1ace0a2da41031961b3300bab9315_3_cwoyvx.png"
                      />
                      <Section align="center" className="bg-[#E11C22]">
                        <Row align="left">
                          <Column>
                            <Text className="text-white font-[700] text-[21px] mx-[6px] text-start">
                              1
                            </Text>
                          </Column>
                          <Column>
                            <Text className="text-center text-white font-[700] text-[10px] leading-[11px] text-start">
                              Sylvan Learning Franchisees Discuss Multi-Unit
                              Ownership and Scaling Their Business
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                      <Section align="center" className="bg-[#B72D26]">
                        <Row align="center">
                          <Column
                            align="left"
                            className="text-[#fff] text-[10px] text-[700] leading-[0px]"
                          ></Column>
                          <Column align="right">
                            <Text className="text-end text-white font-[700] text-[10px] leading-[0px] m-[8px]">
                              Amplify Reach
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                    </Column>

                    <Column align="right" className="max-w-[100px] ml-6 pl-4 pr-2">
                      <Img
                        className="w-full h-[131px]"
                        src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699426270/a361bdc1ace0a2da41031961b3300bab9315_1_wyh02r.png"
                      />
                      <Section align="center" className="bg-[#E11C22]">
                        <Row align="left">
                          <Column>
                            <Text className="text-white font-[700] text-[21px] mx-[6px] text-start">
                              1
                            </Text>
                          </Column>
                          <Column>
                            <Text className="text-center text-white font-[700] text-[10px] leading-[11px] text-start">
                              Sylvan Learning Franchisees Discuss Multi-Unit
                              Ownership and Scaling Their Business
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                      <Section align="center" className="bg-[#B72D26]">
                        <Row align="center">
                          <Column
                            align="left"
                            className="text-[#fff] text-[10px] text-[700] leading-[0px]"
                          ></Column>
                          <Column align="right">
                            <Text className="text-end text-white font-[700] text-[10px] leading-[0px] m-[8px]">
                              Amplify Reach
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                    </Column>
                  </Row>
                </Section>
                <Section align="center" className="mt-10 mb-10">
                  <Row align="center" className="">
                  <Column align="left" className="max-w-[100px] pr-4 pl-2 ">
                      <Img
                        className="w-full h-[131px]"
                        src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699426244/a361bdc1ace0a2da41031961b3300bab9315_3_cwoyvx.png"
                      />
                      <Section align="center" className="bg-[#E11C22]">
                        <Row align="left">
                          <Column>
                            <Text className="text-white font-[700] text-[21px] mx-[6px] text-start">
                              1
                            </Text>
                          </Column>
                          <Column>
                            <Text className="text-center text-white font-[700] text-[10px] leading-[11px] text-start">
                              Sylvan Learning Franchisees Discuss Multi-Unit
                              Ownership and Scaling Their Business
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                      <Section align="center" className="bg-[#B72D26]">
                        <Row align="center">
                          <Column
                            align="left"
                            className="text-[#fff] text-[10px] text-[700] leading-[0px]"
                          ></Column>
                          <Column align="right">
                            <Text className="text-end text-white font-[700] text-[10px] leading-[0px] m-[8px]">
                              Amplify Reach
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                    </Column>

                    <Column align="right" className="max-w-[100px] ml-6 pl-4 pr-2">
                      <Img
                        className="w-full h-[131px]"
                        src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699426244/a361bdc1ace0a2da41031961b3300bab9315_2_l0xrhj.png"
                      />
                      <Section align="center" className="bg-[#E11C22]">
                        <Row align="left">
                          <Column>
                            <Text className="text-white font-[700] text-[21px] mx-[6px] text-start">
                              1
                            </Text>
                          </Column>
                          <Column>
                            <Text className="text-center text-white font-[700] text-[10px] leading-[11px] text-start">
                              Sylvan Learning Franchisees Discuss Multi-Unit
                              Ownership and Scaling Their Business
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                      <Section align="center" className="bg-[#B72D26]">
                        <Row align="center">
                          <Column
                            align="left"
                            className="text-[#fff] text-[10px] text-[700] leading-[0px]"
                          ></Column>
                          <Column align="right">
                            <Text className="text-end text-white font-[700] text-[10px] leading-[0px] m-[8px]">
                              Amplify Reach
                            </Text>
                          </Column>
                        </Row>
                      </Section>
                    </Column>
                  </Row>
                </Section>
                {/* <Section className="mx-auto ml-[2px] mt-[29px] mb-[20px]">
                  <Row align="center" className="px-[10px] pl-[33px]">
                    <Column align="center">
                      <Section align="left" className="max-w-[167px] mt-[10px]">
                        <Img
                          className="w-full h-[131px]"
                          src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699426270/a361bdc1ace0a2da41031961b3300bab9315_1_wyh02r.png"
                        />
                        <Section align="center" className="bg-[#E11C22]">
                          <Row align="left">
                            <Column>
                              <Text className="text-white font-[700] text-[21px] mx-[6px] text-start">
                                1
                              </Text>
                            </Column>
                            <Column>
                              <Text className="text-center text-white font-[700] text-[10px] leading-[11px] text-start">
                                Sylvan Learning Franchisees Discuss Multi-Unit
                                Ownership and Scaling Their Business
                              </Text>
                            </Column>
                          </Row>
                        </Section>
                        <Section align="center" className="bg-[#B72D26]">
                          <Row align="center">
                            <Column
                              align="left"
                              className="text-[#fff] text-[10px] text-[700] leading-[0px]"
                            ></Column>
                            <Column align="right">
                              <Text className="text-end text-white font-[700] text-[10px] leading-[0px] m-[8px]">
                                Amplify Reach
                              </Text>
                            </Column>
                          </Row>
                        </Section>
                      </Section>
                    </Column>

                    <Column align="right">
                      <Section align="left" className="max-w-[167px] mt-[10px]">
                        <Img
                          className="w-full h-[131px]"
                          src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699426244/a361bdc1ace0a2da41031961b3300bab9315_3_cwoyvx.png"
                        />
                        <Section align="center" className="bg-[#E11C22]">
                          <Row align="left">
                            <Column>
                              <Text className="text-white font-[700] text-[21px] mx-[6px] text-start">
                                1
                              </Text>
                            </Column>
                            <Column>
                              <Text className="text-center text-white font-[700] text-[10px] leading-[11px] text-start">
                                Sylvan Learning Franchisees Discuss Multi-Unit
                                Ownership and Scaling Their Business
                              </Text>
                            </Column>
                          </Row>
                        </Section>
                        <Section align="center" className="bg-[#B72D26]">
                          <Row align="center">
                            <Column
                              align="left"
                              className="text-[#fff] text-[10px] text-[700] leading-[0px]"
                            ></Column>
                            <Column align="right">
                              <Text className="text-end text-white font-[700] text-[10px] leading-[0px] m-[8px]">
                                Amplify Reach
                              </Text>
                            </Column>
                          </Row>
                        </Section>
                      </Section>
                    </Column>
                  </Row>
                </Section> */}
              </Section>
              <Section className="bg-[#E11C22] px-[43px] py-[30px] mt-[58px]">
                <Row>
                  <Column align="left" className="max-w-[234px]">
                    <Button
                      className="bg-[#283342] rounded-[25px] text-white py-[13px] px-4 text-[12px]"
                      href="/"
                    >
                      View Complete AMPD Statistics
                    </Button>
                  </Column>
                  <Column align="right" className="max-w-[234px]">
                    <Button
                      className="bg-[#283342] rounded-[25px] text-center text-white py-[13px] px-4 text-[12px]"
                      href="/"
                    >
                      Login to Dashboard
                    </Button>
                  </Column>
                </Row>
              </Section>
              <Section align="center" className="mt-[38px]">
                <Column align="center">
                  <Row align="center">
                    <Img src="https://res.cloudinary.com/dsexjh4mb/image/upload/v1699380563/Logo_Copy_jl0nj6.png" />
                  </Row>
                  <Row align="center">
                    <Text className="text-[#AAAAAA] text-center text-[12px] font-[400]">
                      {"1851franchise.com"}
                    </Text>
                    <Text className="text-[#AAAAAA] text-center text-[12px] font-[400] mt-[37px]">
                      Prudential Plaza, 130 E Randolph St #1950, Chicago, IL
                      60601 <br /> Click here to unsubscribe
                    </Text>
                  </Row>
                </Column>
              </Section>
            </Section>
            <Section></Section>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
