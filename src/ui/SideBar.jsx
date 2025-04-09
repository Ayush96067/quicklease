import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const TabButton = styled.button`
  ${(props) =>
    props.active === "true" &&
    css`
      background-color: #606060e7;
    `}
`;

function SideBar({ setShow, sideBarComponent }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentTab, setCurrentTab] = useState("profile");

  useEffect(() => {
    if (!searchParams.has("tab")) {
      searchParams.set("tab", "profile");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const handleClick = (paramName, paramValue) => {
    searchParams.set(paramName, paramValue);
    setSearchParams(searchParams);
    setCurrentTab(paramValue);
  };

  return (
    <div className="mt-15 flex h-full flex-col items-start p-1 text-2xl lg:text-4xl">
      <h1 className="w-full text-center text-3xl lg:text-5xl">User Section</h1>
      {sideBarComponent.map((comp) => (
        <TabButton
          key={comp.name}
          onClick={() => {
            handleClick("tab", comp.tabName);
            setShow(false);
          }}
          active={`${currentTab === comp.tabName}`}
          className="w-full cursor-pointer bg-[#ffffff10] p-3 text-start hover:bg-[#606060e7]"
        >
          {comp.name}
        </TabButton>
      ))}
    </div>
  );
}

export default SideBar;
