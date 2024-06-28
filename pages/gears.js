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
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="Gears" />
            <h4 className="mt-4 text-2xl">Checkout The Gears That I Use</h4>
          </Col>
        </Row>
        <Row>
          {gears.map((item) => (
            <Col
              style={{ margin: "10px 0px" }}
              key={item.id}
              lg="4"
              md="4"
              sm="6"
            >
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
