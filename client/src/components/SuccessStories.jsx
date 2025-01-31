import React from "react";
import { Carousel } from "react-responsive-carousel"; // Install this package for the carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card } from "@mui/material"; // Assuming you are using Material UI for the card
import child1 from "./images/image1.png";
import child2 from "./images/image2.png";
import child3 from "./images/image3.png";

const successStories = [
  {
    text:
      "With your help, we have distributed over 1000 warm sweaters, jackets, and blankets to Asha Kiran NGO, Jhajjar District, Haryana.",
    donors: "600+",
    families: "100+",
    image: child1,
  },
  {
    text:
      "Thanks to our supporters, we provided food and shelter to over 200 families in need during the harsh winter season.",
    donors: "800+",
    families: "200+",
    image: child2,
  },
  {
    text:
      "We have successfully organized health camps, benefiting 500+ underprivileged individuals with free medical checkups.",
    donors: "500+",
    families: "150+",
    image: child3,
  },
];

const SuccessStoriesCarousel = () => {
  return (
    <div style={styles.carouselWrapper}>
      <Carousel autoPlay interval={2000} infiniteLoop>
        {successStories.map((story, index) => (
          <div key={index} style={styles.carouselItem}>
            <Card style={styles.card}>
              <div style={styles.cardContent}>
                <h2><b>Success Stories</b></h2>
                <p>{story.text}</p>
                <div style={styles.donorFamily}>
                  <span><b>{story.donors}</b> Donors</span>
                  <span><b>{story.families}</b> Families</span>
                </div>
              </div>
              <div style={styles.cardImage}>
                <img
                  src={story.image}
                  alt="Success story image"
                  style={styles.image}
                />
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

// Inline styles for the component
const styles = {
  carouselWrapper: {
    margin: "0 auto",
    width: "100%",
    marginTop: "20px",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    border: "1px solid #e1e4e8",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    maxWidth: "90%",
  },
  cardImage: {
    width: "40%",
    height: "auto",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    objectFit: "cover",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
    paddingRight: "20px",
  },
  donorFamily: {
    display: "flex",
    gap: "15px",
    fontSize: "1rem",
    marginTop: "12px",
  },
};

export default SuccessStoriesCarousel;
