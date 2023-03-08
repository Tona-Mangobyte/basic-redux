import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import InputForm from "./InputForm";
import {addProduct} from "../../actions";

const ProductCreate = (props) => {
    let navigate = useNavigate();
    const handlerSubmit = (data) => {
        props.dispatch(addProduct(data.name, data.qty, data.price));
        navigate('/product/list');
    }
    return(
      <div>
          <h3>Product Create</h3>
          <InputForm handlerSubmit={handlerSubmit}/>
      </div>
    );
};

export default connect()(ProductCreate);
