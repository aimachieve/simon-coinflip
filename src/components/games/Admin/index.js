import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../../actions/auth'

import {
  Grid,
} from '@mui/material'

import PlayerStats from './playerStats'
import Games from './gameList'

const Flip = ({ isAuthenticated, login }) => {
  // For smart contract
  const [chainId, setChainId] = useState(undefined);
  console.log(chainId)

  useEffect(() => {
    async function fetchData() {
      // Get Chain ID
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      // handleChainChanged(chainId);
      setChainId(chainId)
    }
    fetchData()
  }, [])

  //Start Rendering
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="container">

          {/* Main Components */}
          <Grid
            item
            container
            xs={12}
            md={12}
            justifyContent="space-between"
            spacing={3}
          >
            <Grid
              item
              xs={12}
              md={8.5}
              justifyContent="center"
            >
              <Games />
            </Grid>
            <Grid
              item
              xs={12}
              md={3.5}
              justifyContent="center"
            >
              <PlayerStats />
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  )
}

Flip.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
})

export default connect(mapStateToProps, { login })(Flip)
