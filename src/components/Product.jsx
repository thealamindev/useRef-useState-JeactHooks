import React from "react";
import Container from "./Container";
import Image from "./Image";
import product from "../assets/product.png"
import Badge from "./Badge";
import Paragraph from "./Paragraph";
import Price from "./Price";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Product = () => {
  return (
    <Container>
      <div className="w-1/4 relative group">
       <Image src={product} className='w-full'/>
       <Badge text='New' className='absolute left-3 top-3'/>
       <Flex className='justify-between'>
       <Paragraph text='Basic Crew Neck Tee' className='text-primaryColor font-dm font-bold text-xl'/> 
       <Price text="$44.00"/>
       </Flex>
       <div className="bg-white py-8 pr-3 w-full invisible group-hover:visible duration-500 absolute bottom-6">
           
          <div>
          <Flex className='justify-end items-center gap-3'>
          <Paragraph text="Add to Wish List"/> <FaHeart />
          </Flex>
          </div>

          <div>
          <Flex className='justify-end items-center gap-3 py-5'>
          <Paragraph text="Compare"/> <FaHeart />
          </Flex>
          </div>

          <div>
          <Flex className='justify-end items-center gap-3'>
          <Paragraph text="Add to Cart"/> <FaCartShopping />
          </Flex>
          </div>
          
       </div>
      </div>
    </Container>
  );
};

export default Product;
