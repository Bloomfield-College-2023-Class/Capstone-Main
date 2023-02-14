export const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45", // manually adjusted
    700: "#141937",
    800: "#424242", // manually adjusted grey
    900: "#212121", // manually adjusted sidebar grey
  },
  secondary: {
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#000000", 
    200: "#ffedc2", //manaully adjusted red
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#FF0000", //manually changed red
    700: "#FF0000",
    800: "#665429",
    900: "#000000", //manually adjusted black
    950: "#ffffff"  //white
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              main: tokensDark.secondary[300],
            },
            neutral: {
              
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[800],
              alt: tokensDark.primary[900],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[300],
            },
            neutral: {
              main: tokensDark.grey[900],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};