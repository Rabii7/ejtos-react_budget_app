import { useState, useContext } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import { AppContext } from "../context/AppContext";

function DropDown({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //   const [currentCurrency, setCurrentCurrency] = useState("$ Dollar");
  const { dispatch } = useContext(AppContext);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle
          caret
          style={{ width: "181px", background: "#84d387", border: "none" }}
        >
          Currency (currentCurrency)
        </DropdownToggle>
        <DropdownMenu {...args} style={{ background: "#84d387" }}>
          <DropdownItem
            onClick={dispatch({ type: "CHG_CURRENCY", payload: "$" })}
          >
            $ Dollar
          </DropdownItem>
          <DropdownItem
            onClick={dispatch({ type: "CHG_CURRENCY", payload: "£" })}
          >
            £ Pound
          </DropdownItem>
          <DropdownItem
            onClick={dispatch({ type: "CHG_CURRENCY", payload: "€" })}
          >
            € Euro
          </DropdownItem>
          <DropdownItem
            onClick={dispatch({ type: "CHG_CURRENCY", payload: "₹" })}
          >
            ₹ Ruppee
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
DropDown.propTypes = {
  direction: PropTypes.string,
};
export default DropDown;
