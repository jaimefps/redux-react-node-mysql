// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import component
import Form from '../components/Form';

// import test-POST action
import { testPost } from '../actions/test-action';

// give component access to any keys in the Store-state @ reducers/index.js
const mapStateToProps = (state) => {
  return {
    
  }
}

// give the component access to any functionality @ actions folder 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      testPost,
    }, 
    dispatch
  );
}

// connect the component!
export default connect(mapStateToProps, mapDispatchToProps)(Form);