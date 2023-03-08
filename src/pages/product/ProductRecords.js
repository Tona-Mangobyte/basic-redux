import React from "react";

const ProductRecords = (props) => {
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    props?.products?.map((product, index) => {
                        return(
                            <DisplayCell product={product} key={index} index={index} />
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
};

const DisplayCell = (props) => {

    return(
        <tr>
            <td>{ props.product.name }</td>
            <td>{ props.product.qty }</td>
            <td>$ { props.product.price }</td>
            <td>$ { props.product.qty * props.product.price }</td>
            <td>
                <button>edit</button>
                <button>remove</button>
            </td>
        </tr>
    );
}

export default ProductRecords;
