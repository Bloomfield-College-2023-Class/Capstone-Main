import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material/styles";

//change the code bellow to have light and dark mode
const PieChart = ({ data }) => {

  // get regular mui theme
  const theme = useTheme();
  //nivo theme
  const nivoTheme = {
    background: theme.palette.background.default,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    textColor: theme.palette.text.primary,
    tooltip: {
      container: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        padding: theme.spacing(1),
        fontSize: theme.typography.body1.fontSize,
      },
    },
    crosshair: {
      line: {
        stroke: theme.palette.text.primary,
        strokeWidth: 1,
        strokeOpacity: 0.35,
        strokeDasharray: "4 4",
      },
    },
  };

  return (
    <ResponsivePie
      data={data}
      padding={{ left: 10 }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={1}
      activeOuterRadiusOffset={6}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.mode === "dark" ? "#ffffff" : "#333333"}
      arcLinkLabelsThickness={6}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={theme.palette.mode === "dark" ? "#ffffff" : {
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(0, 0, 0)",
          size: 3,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(0, 0, 0)",
          rotation: -45,
          lineWidth: 2,
          spacing: 2,
        },
      ]}
      fill={[
        {
          match: {
            id: "Available",
          },
          id: "dots",
        },
        {
          match: {
            id: "Used",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: theme.palette.mode === "dark" ? "#ffffff" : "#333333",
          itemDirection: "left-to-right",
          itemOpacity: 10,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
      theme={nivoTheme}
    />
  );
};

//make a ternary operator to change the theme
//if the theme is light, use the light theme
//if the theme is dark, use the dark theme

// arcLinkLabelsSkipAngle={10}
//       arcLinkLabelsTextColor="#333333"
//       arcLinkLabelsThickness={6}
//       arcLinkLabelsColor={{ from: "color" }}
//       arcLabelsSkipAngle={10}
//       arcLabelsTextColor={{
//         from: "color",
//         modifiers: [["darker", 2]],
//       }}

export default PieChart;
