import { connect } from 'react-redux'
import ProductRecords from "../pages/product/ProductRecords";


const mapStateToProps = state => ({
    products: state.products
});

export default connect(
    mapStateToProps,
)(ProductRecords)
