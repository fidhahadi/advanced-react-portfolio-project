import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link} from "@chakra-ui/react";
import './style.css'

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/fidhahadi",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <div className="social">
           {<a href="https://mail.google.com/"
        className="instagram social">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>}
            {<a href="https://github.com/fidhahadi"
        className="instagram social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>}
      {<a href="https://www.linkedin.com/in/fidha-rafeeque-n-86802a105?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3c%2FXJYn%2FSdaYJa3X08U3RQ%3D%3D"
        className="instagram social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>}
      {<a href="https://medium.com/"
        className="instagram social">
        <FontAwesomeIcon icon={faMedium} size="2x" />
      </a>}
      {<a href="https://stackoverflow.com/"
        className="instagram social">
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
      </a>}
      </div>
          </nav>
          <nav>
            <HStack spacing={8}>
            <Link onClick={handleClick("projects")} id="projects-link">Projects</Link>
              <Link onClick={handleClick("contactme")} id="contactme-link">Contact me</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
