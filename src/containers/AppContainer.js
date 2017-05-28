// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import component
import App from '../components/App';

// give component access any keys in the Store-state @ reducers/index.js
const mapStateToProps = state => ({

});

// give the component access to any functionality @ actions folder
const mapDispatchToProps = dispatch => bindActionCreators(
  {

  },
    dispatch,
  );

// connect the component!
export default connect(mapStateToProps, mapDispatchToProps)(App);
