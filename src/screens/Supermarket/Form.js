import React from 'react'
import PropTypes from 'prop-types'
import SupermarketForm from '../../components/Supermarket/Form/Form'


const ScreensSupermarketForm = ({ match: { params } }) => (
  <div>
    <h1>
      { `${!params.id? 'Create': 'Update'}`} Supermarket
    </h1>
    <SupermarketForm id={params.id} />
  </div>
)

ScreensSupermarketForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
}

export default ScreensSupermarketForm