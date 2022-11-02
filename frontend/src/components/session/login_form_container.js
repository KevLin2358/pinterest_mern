import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,        
    auth: state.session.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    processDemo: demo => dispatch(login(demo)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);