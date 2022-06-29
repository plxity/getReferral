import styled from 'styled-components';

export const Pills = styled.span`
  padding: 6px 12px;
  background: ${(props) => props.theme.color.orange};
  font-size: 14px;
  color: white;
  margin: 4px;
  border-radius: 30px;
  display: inline-block;
`;

export const TableHeading = styled.th`
  height: 70px;
  min-width: 200px;
  max-width: 260px;
  padding: 26px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  border: 1px solid rgba(174, 171, 171, 0.5);
  background-color: ${(props) => props.theme.color.blue};
  .cursor-pointer {
    cursor: pointer;
  }
`;

export const TableRow = styled.tr`
  padding: 12px 0px;
`;

export const TableData = styled.td`
  padding: 16px;
  border: 1px solid rgba(4, 40, 197, 0.3);
  text-align: center;
  overflow-y: hidden;
  div {
    max-width: 240px;
    height: 55px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export const FilterContainer = styled.div`
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  height: 30px;
  border-radius: 30px;
  max-width: 180px;
  border: 1px solid ${(props) => props.theme.color.blue};
  padding-left: 14px;
  .w-80 {
    width: 80px;
  }
`;

export const SortIconContainer = styled.div`
  margin-left: 6px;
  display: inline-block;
  vertical-align: middle;
`;

export const NoRecord = styled.h1`
  text-align: center;
  margin-top: 40px;
`;
