import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Freelance: {
      jobTitle: "Freelance Software Developer",
      duration: "JUL 2024 - PRESENT",
      desc: [
        "Developed and delivered a wide range of projects including dashboards, e-commerce platforms, and portfolio websites.",
        "Built food ordering pages and digital book platforms with full database integration for seamless content management.",
        "Created games using Python, applying object-oriented programming and logic design."
      ]
    },
    DEPI: {
      jobTitle: "MERN Stack Developer Intern @",
      duration: "JUN 2025 - PRESENT",
      desc: [
        "Contributing to real-world web applications using MongoDB, Express.js, React.js, and Node.js, with a focus on building scalable and user-friendly solutions.",
        "Collaborated with teams to deliver full-stack solutions, integrating front-end interfaces with back-end APIs.",
        "Improved project efficiency by writing clean, maintainable code and following Agile development practices."
      ]
    },
    "University of Tanta": {
      jobTitle: "Software Developer and requierment engineer @",
      duration: "SEPT 2023 - DEC 2023",
      desc: [
        "Authored a comprehensive software documentation for a Pharmacy Management System, covering requirements analysis, system design, architecture diagrams, use cases, and database schema.",
        " Produced detailed user manuals and technical specifications to ensure clarity for both developers and non-technical stakeholders.",
        "Applied software engineering best practices including UML modeling, data flow diagrams, and ER diagrams to enhance maintainability and scalability.",
        "Collaborated with a project team to align documentation with system features, ensuring consistency between implementation and technical references."
      ]
    },
    Creativo: {
      jobTitle: "Software Developer @",
      duration: "AUG 2023 - JAN 2024",
      desc: [
        "Developed web applications using Vue.js for front-end and Laravel (PHP) for back-end.",
        "Implemented RESTful APIs and optimized database queries to improve performance."
      ]
    },
    // TDSB: {
    //   jobTitle: "Software Engineer @",
    //   duration: "SEPT 2019 - DEC 2020",
    //   desc: [
    //     "Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application."
    //   ]
    // },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
