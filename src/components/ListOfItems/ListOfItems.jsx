import styles from "./ListOfItems.module.scss";
import ListItem1 from "../ListItem/ListItem1";
import ListItem2 from "../ListItem2/ListItem2";
const ListOfItems = (props) => {
  let numberOfList = 0;
  if (props.id == "pizza") {
    numberOfList = 2;
  } else if (props.id == "salad" || props.id == "breakfast") {
    numberOfList = 1;
  }
  return numberOfList === 2 ? (
    <ul>
      <ListItem1
        titleForm={props.titleForm1}
        id={props.id}
        addCashToTotalPrice={props.addCashToTotalPrice}
        addCashToTotalPrice2={props.addCashToTotalPrice2}
        auxProp={props.auxProp}
        testProps={props.testProps}
        showImg={props.showImg}
      />
      <ListItem2
        titleForm={props.titleForm2}
        id={props.id}
        addCashToTotalPrice={props.addCashToTotalPrice}
        addCashToTotalPrice2={props.addCashToTotalPrice2}
        showImg={props.showImg}
      />
    </ul>
  ) : numberOfList === 1 ? (
    <ul>
      {" "}
      <ListItem2
        titleForm={props.titleForm1}
        id={props.id}
        addCashToTotalPrice={props.addCashToTotalPrice}
        addCashToTotalPrice2={props.addCashToTotalPrice2}
        showImg={props.showImg}
      />{" "}
    </ul>
  ) : (
    <ul></ul>
  );
};

export default ListOfItems;
