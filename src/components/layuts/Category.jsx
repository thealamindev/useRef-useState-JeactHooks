import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Bars from "../icons/Bars";
import Paragraph from "../Paragraph";
import { FaUser, FaCaretDown, FaShoppingCart, FaSearch } from "react-icons/fa";

const Category = () => {
  return (
    <section className="py-6 bg-categoryColor border-y border-borderColor">
      <Container>
        <Flex className={"items-center"}>
          <div className="w-1/4">
            <Flex className="items-center gap-4">
              <Bars />
              <Paragraph
                text="Shop by Category"
                className="text-primaryColor text-sm"
              />
            </Flex>
          </div>
          <Flex className="w-1/2 text-center items-center justify-center ">
            <input
              type="text"
              className="w-[600px] py-4 px-5 outline-transparent placeholder:text-[#C4C4C4] placeholder:text-sm"
              placeholder="Search Products"
            />
            <FaSearch className="ml-[-40px]" />
          </Flex>
          <div className="w-1/4">
            <Flex className="justify-end">
              <FaUser />
              <FaCaretDown />
              <FaShoppingCart className="ml-5" />
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Category;
