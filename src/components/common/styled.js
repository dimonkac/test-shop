import styled from "styled-components";

export const Wraper = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color: cadetblue;
  padding: 30px;
`;

export const Heding = styled.h3`
  text-align: center;
  font-size: 24px;
  color: green;
  margin: 0 0 30px;
`;

export const Flex = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const Card = styled.div`
  width: 30%;
  height: 480px;
  background-color: gray;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 99%;
  }
`;

export const Container = styled.section`
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonS = styled.button`
  width: 55px;
  height: 30px;
  cursor: pointer;
`;

export const Count = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: aliceblue;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
