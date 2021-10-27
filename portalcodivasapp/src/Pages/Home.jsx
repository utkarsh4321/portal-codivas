import styled from "styled-components";
import Question from "../Components/Question";

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Filters = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e6e6e6;
`;

const Heading = styled.h2`
  font-size: 54px;
`;

const Text = styled.p`
  font-size: 18px;
`;

const Tab = styled.button`
  font-size: 18px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const Button = styled.button`
  background: #78529c;
  color: #fff;
  font-size: 18px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Home = () => {
  return (
    <div style={{ width: "100%", padding: "40px" }}>
      <Header>
        <Heading>All Questions</Heading>
        <Button>Ask Question</Button>
      </Header>
      <Filters>
        <Text>21,764,711 questions</Text>
        <div>
          <Tab>Newest</Tab>
          <Tab>Active</Tab>
          <Tab>Unanswered</Tab>
          <Tab>More</Tab>
          <Tab>Filter</Tab>
        </div>
      </Filters>
      <Question
        title="Python splitting both windows and linux file names on Linux"
        description='I have a probgram that runs on linux and is fed file paths of both windwos and "nix based systems. I have tried a few methods as shwqon in the example below, howerer it seems tahta the standrd os.path ..."'
        badge="python"
        votes={0}
        answers={0}
        views={3}
        user="Johndoe"
        time="2 days ago"
      />
      <Question
        title="Making a selection Program"
        description="A store is offering a certain percetnage off all purchases, depending on the amount spent: A customer spending $0.01-$40.00 will receive 10% off..."
        badge="netbeans"
        votes={0}
        answers={0}
        views={4}
        user="Lexluthor"
        time="3 days ago"
      />
      <Question
        title="Easiest way to connect to wifi in python"
        description="I want to connect to wifi using python both new and previous connection and also in any os like raspberry pie ,windows etc. can any on tell me how to do that and also I want to connect to wifi with ..."
        badge="python"
        votes={0}
        answers={0}
        views={2}
        user="Clark"
        time="1 min ago"
      />
    </div>
  );
};

export default Home;
