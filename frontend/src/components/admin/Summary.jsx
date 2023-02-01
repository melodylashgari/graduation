import styled from "styled-components";
import {FaUsers, FaChartBar, FaClipboard} from "react-icons/fa"
import Widget from "./summary-components/Widget";

const Summary = () => {

    const data = [
        {
            icon: <FaUsers/>,
            digits: 50,
            isMoney: false,
            title: "Users",
            color: "rgb(102, 108, 255)",
            bgColor: "rgba(102, 108, 255, 0.12)",
            percentage: 30
        },
        {
            icon: <FaClipboard/>,
            digits: 70,
            isMoney: false,
            title: "Orders",
            color: "rgb(38, 198, 249)",
            bgColor: "rgba(38, 198, 249, 0.12)",
            percentage: 20
        },
        {
            icon: <FaChartBar/>,
            digits: 5000,
            isMoney: true,
            title: "Earnings",
            color: "rgb(253, 181, 40)",
            bgColor: "rgba(253, 181, 40, 0.12)",
            percentage: 60
        }
    ]
  return <StyledSummary>
    <MainStats>
        <Overview>
            <Title>
                <h2>Overview</h2>
                <p>How your shop is performing compared to the previous month.</p>
            </Title>
            <WidgetWrapper>
                {data?.map((data, index) => <Widget key={index} data={data}/>)}
            </WidgetWrapper>
        </Overview>
    </MainStats>
    <SideStats></SideStats>
  </StyledSummary>;
};

export default Summary;

const StyledSummary = styled.div`
  width: 100%;
  display: flex;
`;

const MainStats = styled.div`
  flex: 2;
  width: 100%;
`;

const Title = styled.div`
  p {
    font-size: 14px;
    color: rgba(234, 234, 255, 0.68);
  }
`;

const Overview = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  width: 100%;
  padding: 1.5rem;
  height: 170px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WidgetWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SideStats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 100%;
`;
