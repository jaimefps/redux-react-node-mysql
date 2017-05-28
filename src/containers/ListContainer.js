// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import component
import List from '../components/List';

// import test functionality
import { testGet, testNoSQLGet } from '../actions/test-action';

// give component access any keys in the Store-state @ reducers/index.js
const mapStateToProps = (state) => {
  return {
    async: state.async,
  }
}

// give the component access to any functionality @ actions folder 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      testGet,
      testNoSQLGet,
    }, 
    dispatch
  );
}

// connect the component!
export default connect(mapStateToProps, mapDispatchToProps)(List);