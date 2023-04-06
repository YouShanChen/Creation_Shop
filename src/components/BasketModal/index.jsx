import {  Button, theme } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems } from "../../redux/cartSlice";

import styles from "./basketmodal.module.css"

import { selectCartItems } from "../../redux/cartSlice";
const { Option } = Select;
export default function BasketModal() {
    
}