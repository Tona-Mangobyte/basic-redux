import React from "react";

const InputForm = (props) => {
    let name,qty, price;
    return(
        <div>
            <h3>Create Product</h3>
            <form onSubmit={e => {
                e.preventDefault()
                if (!name.value.trim() || !qty.value.trim() || !price.value.trim()) {
                    return
                }
                props.handlerSubmit({ name: name.value, qty: qty.value, price: price.value });
                name.value = '';
                qty.value = '';
                price.value = '';
            }}>
                <input ref={node => name = node} />
                <input type={"number"} ref={node => qty = node} />
                <input type={"number"} ref={node => price = node} />
                <button type="submit">
                    Add Product
                </button>
            </form>
        </div>
    );
};
export default InputForm;
