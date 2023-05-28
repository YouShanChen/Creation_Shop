import { theme } from "antd";

const lightTheme = {
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: "#408492",//header跟footer//
      colorBgBase	: "#ffffff",//content背景//
      colorTextBase: "#ffffff",//文字顏色//
      colorOrder:"#408492",//order背景
      colorTagList:"#39737f",//tag背景
      colorTag:"#44d4d4c2",//tag顏色
      colorCreatorList:"#87b5bf",//創作者列表背景
      colorCreator:"#39737fb5",//創作者
      colorProductDetail:"#5a97a3",//委託須知背景
      colorDetailTitle:"#44D4D4C2",//委託須知標題
      colorNotComplete:"#ffffff",//未完成
      colorComplete: "#000000",//已完成
      colorItem:"#daf9ff",//物件顏色//
      colorButton:"#000000",//按鈕反轉色//
      colorDetail:"#39737f",//委託詳情文字
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
      colorBgBase	: "#303030",//content背景//
      colorTextBase: "#ffffff",//文字顏色//
      colorOrder:"#303030",//order背景
      colorTagList:"#242424",//tag背景
      colorTag:"#218484c2",//tag顏色
      colorCreatorList:"#5a5a5a",//創作者列表背景
      colorCreator:"#285159b5",//創作者
      colorProductDetail:"#434343",//委託須知背景
      colorDetailTitle:"#2b8787c2",//委託須知標題
      colorNotComplete:"#ffffff",//未完成
      colorComplete: "#9b9b9b",//已完成

      colorItem:"#daf9ff",//物件顏色//
      colorButton:"#ffffff",//按鈕反轉色//
      colorDetail:"#ffffff",//委託詳情文字
      colorNavItem:"#000000",
      colorTextFooter: "#ffffff",
      colorBgFooter: "#000000"
    },
    components: {
      Button: {
        colorPrimary: "#6366f2;",
        colorPrimaryHover: "#9192f5",
      }
    },
  };

  export {lightTheme, darkTheme } ;