// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import component
import Home from '../components/Home';

// import test functionality
import { flipBoolean } from '../actions/test-action';

// give component access any keys in the Store-state @ reducers/index.js
const mapStateToProps = (state) => {
  return {
    boolean: state.boolean,
  }
}

// give the component access to any functionality @ actions folder 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      flipBoolean,
    }, 
    dispatch
  );
}

// connect the component!
export default connect(mapStateToProps, mapDispatchToProps)(Home);