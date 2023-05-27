import { theme } from "antd";

const lightTheme = {
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: "#408492",//header跟footer//
      colorBgBase	: "#ffffff",//content背景//
      colorTextBase: "#ffffff",//文字顏色//
      colorTag:"44d4d4c2",//tag顏色
      colorCreatorList:"#87b5bf",//創作者列表背景
      colorCreator:"#39737fb5",//創作者
      colorProductDetail:"#5a97a3",//委託須知背景
      colorNotComplete:"#ffffff",//未完成
      colorComplete: "#000000",//已完成
      colorItem:"#daf9ff",//物件顏色//
      colorReverse:"#000000",//反轉色//
      colorNavItem:"#000000",
      colorTextFooter: "#ffffff",
      colorBgFooter: "#000000",

    },
    components: {
      Button: {
        colorPrimary: "#6366f2;",
        colorPrimaryHover: "#9192f5",
      }
    },
  };

  const darkTheme = {
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: "#222222",//header跟footer//
      colorBgBase	: "#464646",//content背景//
      colorTextBase: "#ffffff",//文字顏色//
      colorItem:"#daf9ff",//物件顏色//
      colorReverse:"#000000",//反轉色//
      colorNavItem:"#000000",
      colorTextFooter: "#ffffff",
      colorBgFooter: "#000000",
      colorComplete: "#9b9b9b"
    },
    components: {
      Button: {
        colorPrimary: "#6366f2;",
        colorPrimaryHover: "#9192f5",
      }
    },
  };

  export {lightTheme, darkTheme } ;