import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
};

//map state to prop example

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchfunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchfunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
// when only need to dispatch
// export default connect(null, mapDispatchToProps)(ItemContainer);
