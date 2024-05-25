import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import styles from "../modules/FaqAccordion.module.css";

const FaqAccordion = ({ faqs }) => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "#FFFFFF", padding: "20px" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontFamily: "inherit", fontWeight: "600", marginBottom: "20px" }}
      >
        FAQs
      </Typography>
      <div className={styles.centeredAccordion}>
        <div className={styles.accordionsContainer}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              style={{
                width: "70%",
                border: "1px solid white",
                borderRadius:"10px",
                marginBottom: "5px"
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon className={styles.accordionArrow} />
                }
                className={styles.accordionSummary}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default FaqAccordion;
