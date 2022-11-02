import { connect } from 'react-redux';
import {
  fetchAllDecks
} from '../../actions/deck_actions';

import IndexDeckPage from './index_deck_page'

const mapStateToProps = state => {
  // console.log(state)
  return ({
    decks: Object.values(state.entities.decks)
  })
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPins: () => dispatch(fetchAllDecks()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexDeckPage);