import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Slider from "react-slick";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const ChevronPosition = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        top: "95px",
        right: "95px",
        position: "absolute",
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right" />
    </div>
  );
};

const Services = ({ youtubeStats, youtubeVideos }) => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ChevronPosition />,
    prevArrow: <ChevronPosition />,
  };
  return (
    <section id="youtube-stats">
      <Container>
        <Row>
          <Col lg="3" md="12" sm="12">
            <Slider {...settings} className="mb-10 cursor-pointer md:mb:0">
              {youtubeVideos
                ?.filter((video) => video.id.videoId)
                ?.map((video) => (
                  <div
                    onClick={() =>
                      window.open(
                        `https://youtube.com/watch?v=${video.id.videoId}`,
                        "_blank"
                      )
                    }
                    style={{ padding: "10px" }}
                    key={video.id.videoId}
                  >
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      height={0}
                      width={0}
                      sizes="100vw"
                      style={{
                        borderRadius: "20px",
                        marginBottom: "10px",
                        width: "100%",
                        height: "auto",
                      }}
                      alt={video.snippet.title}
                    />
                    <p>{video.snippet.title}</p>
                    <p className="p-2.5 bg-[#171f38] w-fit text-xs text-white mt-2 rounded-md">
                      {new Date(video.snippet.publishTime).toDateString()}
                    </p>
                  </div>
                ))}
            </Slider>
          </Col>
          <Col lg="3" md="6">
            <ServicesItem
              title={`${(
                Number(youtubeStats?.statistics?.subscriberCount) / 1000
              ).toPrecision(3)}K Subscribers`}
              icon="ri-user-add-line"
            />
            <ServicesItem
              title={`${youtubeStats?.statistics?.videoCount} Videos Uploaded`}
              icon="ri-film-line"
            />
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Youtube" />
            <h3 className="mt-4 mb-0">Popular</h3>
            <h3 className="mb-2">Uploads from My Youtube Channel</h3>
            <p>
              I would really appreciate it if you could check it out and maybe
              even hit the subscribe button if you enjoy the content.
            </p>
            <p className="mb-3">Thanks in advance!</p>
            <a
              href="https://www.youtube.com/@piyushgargdev?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
            >
              <Button color="danger">Subscribe</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
