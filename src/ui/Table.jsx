import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid gray;
  background-color: #eeffcc;
  border-radius: 7px;
  overflow: auto;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  width: 100%;
  height: 100%;
  transition: none;
  align-items: center;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1rem 2.4rem;
  overflow: auto;
  background-color: #bbff44;
  border-bottom: 1px solid #303030;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: #000;
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid #dfdfdf;
  }

  overflow: auto;
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
  color: black;
`;

const Footer = styled.footer`
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable className="text-sm md:text-lg lg:text-xl" role="table">
        {children}
      </StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader className="gap-7" as="header" role="row" columns={columns}>
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" className="gap-7" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
