import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import gears from "../components/data/gears";
import PortfolioItem from "../components/UI/PortfolioItem";
import SectionSubtitle from "../components/UI/SectionSubtitle";

export default function Gears() {
  return (
    <div>
      <Head>
        <title>Piyush Garg - Gears</title>
      </Head>
      <Container className="mt-5">
        <SectionSubtitle subtitle="Gears" />
        <Row>
          {gears.map((item) => (
            <Col
              style={{ margin: "25px 0px" }}
              key={item.id}
              lg="4"
              md="4"
              sm="6"
              className="hover:scale-[1.04] hover:ease-out duration-300 shadow-md"
            >
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
