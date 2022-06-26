import styled from 'styled-components';

export const ViewApplicationContainer = styled.main`
  padding: 80px 120px;
  display: flex;
  flex-direaction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  .no-highlight{
    text-decoration: none;
    color: black;
  }
  @media (max-width: 860px) {
    padding: 80px 60px;
    justify-content: center;
  }
  @media (max-width: 480px) {
    padding: 20px 20px;
    justify-content: center;
  }
`;


export const NoApplication = styled.div`
 
  text-align:center;
  h2{
    font-size: 30px;
  }
  p{
    font-size: 24px;
  }
 `


 export const ResponseContainer = styled.main`
 `