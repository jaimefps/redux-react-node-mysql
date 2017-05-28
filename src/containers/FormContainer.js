// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import component
import Form from '../components/Form';

// import test-POST action
import { testPost, testNoSQLPost } from '../actions/test-action';

// give component access to any keys in the Store-state @ reducers/index.js
const mapStateToProps = state => ({

});

// give the component access to any functionality @ actions folder
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    testPost,
    testNoSQLPost,
  },
    dispatch,
  );

// connect the component!
export default connect(mapStateToProps, mapDispatchToProps)(Form);
