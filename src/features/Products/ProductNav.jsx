import { InputBase } from "@mui/material";
import TextField from "@mui/material/TextField";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

const Input = styled.input`
  background-color: #ccff00;
  border-radius: 24px;
  outline: none;
  border: 1px solid black;
  transition: all ease-in-out 0.3s;
  color: black;
  &:focus {
    scale: 1.05;
    box-shadow: 0.1px 1px 6px 0.2px #000000;
  }
`;

const Select = styled.select`
  background-color: #ccff00;
  color: black;
  border-radius: 16px;
  /* padding: 1rem; */
  width: 100%;
  outline: none;
  cursor: pointer;
  backdrop-filter: blur(5px);
  &:hover {
    background-color: #b5d826;
  }
`;
const Option = styled.option`
  color: #ffffff;
  background-color: black;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Button = styled.button`
  color: black;
  background-color: #ccff00;
  border-radius: 16px;
  transition: background-color ease-out 0.5s;

  &:hover {
    /* background: linear-gradient(#dfdfdf, #9c9c9c); */
    background-color: #b5d826;
    /* color: white; */
    /* box-shadow: 0.1px 0.1px 10px 0.1px #ffffff; */
  }
`;

function ProductNav() {
  return (
    <div className="grid min-h-[30vh] w-full grid-rows-2 items-center justify-center p-5 text-xl md:gap-12 md:p-7 lg:grid-cols-[30%_70%] lg:gap-8 lg:p-10 lg:text-2xl">
      {/* search bar */}
      <div className="relative grid w-full grid-cols-[80%_20%] gap-5">
        <div className="relative">
          <Input
            type="search"
            name="search_bar"
            id="search_bar"
            className="z-10 w-full p-3 lg:p-5"
            placeholder="Search..."
          />
          <BiSearch className="absolute top-4 right-5 text-xl text-black lg:top-5 lg:text-3xl" />
        </div>
        <Button className="cursor-pointer rounded-2xl">Search</Button>
      </div>

      {/* buttons */}
      <div className="grid h-fit w-full grid-rows-2 gap-5 md:grid-cols-2 md:grid-rows-none">
        <div className="grid w-full grid-cols-2 justify-center gap-5">
          <div className="rounded-4xl">
            <Select className="p-3 lg:p-6" name="category" id="">
              <Option value="">Category</Option>
              <Option value="electronics">Electronics</Option>
              <Option value="vehicles">Vehicles</Option>
              <Option value="books">Books</Option>
              <Option value="accomodation">Accomodation</Option>
              <Option value="sports">Sports</Option>
              <Option value="music">Music Intruments</Option>
            </Select>
          </div>

          <div>
            <Select className="p-3 lg:p-6" name="category" id="">
              <Option value="">Category</Option>
              <Option value="electronics">Electronics</Option>
              <Option value="vehicles">Vehicles</Option>
              <Option value="books">Books</Option>
              <Option value="accomodation">Accomodation</Option>
              <Option value="sports">Sports</Option>
              <Option value="music">Music Intruments</Option>
            </Select>
          </div>
        </div>

        <div className="grid w-full grid-cols-3 rounded-2xl bg-[#ccff00] text-xl lg:text-3xl">
          <Button className="cursor-pointer">Booked</Button>
          <Button className="cursor-pointer">UnBooked</Button>
          <Button className="cursor-pointer">Button3</Button>
        </div>
      </div>
    </div>
  );
}
export default ProductNav;
