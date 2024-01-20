import Layout from "../../layout/layout";
import Header from "../../components/header";
import About from "../../components/About";
import Feedback from "../../components/Feedback";

const LandingPage = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Feedback />
    </Layout>
  );
};

export default LandingPage;
