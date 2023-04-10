import { theme } from "antd";

const darkTheme = {
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: "#408492",//header跟footer//
      colorBgBase	: "#ffffff",//content背景//
      colorTextBase: "#ffffff",//文字顏色//
      colorTextFooter: "#ffffff",
      colorBgFooter: "#000000",
      colorItem:"#ffffff",//物件顏色//
      colorNavItem:"#000000",
    },
    components: {
      Button: {
        colorPrimary: "#6366f2;",
        colorPrimaryHover: "#9192f5",
      }
    },
  };

  export { darkTheme } ;