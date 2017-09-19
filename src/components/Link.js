import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state,ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  }
}

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (

    // eslint-disable-next-line
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Link);
