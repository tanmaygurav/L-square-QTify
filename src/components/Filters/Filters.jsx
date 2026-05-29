import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Filters({
  filters,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) {
  const [value, setValue] = React.useState(0);
  // console.log("Filters filter:", filters);
  /*  filters
  [
    {
        "key": "all",
        "label": "All"
    },
    {
        "key": "jazz",
        "label": "Jazz"
    },
    {
        "key": "rock",
        "label": "Rock"
    },
    {
        "key": "pop",
        "label": "Pop"
    },
    {
        "key": "blues",
        "label": "Blues"
    }
]
  */

  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
    // setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedFilterIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {filters.map((filter, idx) => (
            <Tab label={filter.label} {...a11yProps(idx)} />
          ))}
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      {/* <CustomTabPanel value={selectedFilterIndex} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={selectedFilterIndex} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={selectedFilterIndex} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
}
