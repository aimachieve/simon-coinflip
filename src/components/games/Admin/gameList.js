import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// mui elements
import Typography from '@mui/material/Typography';
import { withStyles } from '@material-ui/core'
import { Stack } from '@mui/material'

import Statistics from './statistics'

// Information modal
import InfoModal from './modals/infoModal'

// actions
import { test } from '../../../actions/auth'

// Custom Colored Typography
const HeaderColor = withStyles({
  root: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '10px',
    lineHeight: '12px',
    background: "-webkit-linear-gradient(45deg, #99A7C7 100%, #C1CEEC 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
})(Typography)

const Games = ({ isAuthenticated, test }) => {
  //State variables
  const [coinStats, setCoinStats] = useState(null)
  console.log(coinStats)
  const [openInfo, setOpenInfo] = useState(false)

  useEffect(() => {
    async function init() {
      setCoinStats('tails')
    }

    init()
  })

  const handleClose = (value) => {
    setOpenInfo(false)
  }

  const showInfo = (value) => {
    setOpenInfo(true)
  }

  return (
    <>
      {/* Statistics */}
      <Statistics />

      {/* Heads */}
      <Stack
        direction="row"
        spacing={5}
        justifyContent={'space-between'}
        alignItems="center"
        sx={{
          background: '#151C2DBF',
          height: '34px',
          marginBottom: '16px',
          padding: '12px'
        }}>
        <HeaderColor> Coinflip ID # </HeaderColor>
        <HeaderColor> Outcome </HeaderColor>
        <HeaderColor> Provably Fair Information </HeaderColor>
      </Stack>

      {/* Listing */}
      {[...Array(8)].map((_, index) => (
        <Fragment key={index}>
          {/* Heads */}
          <Stack
            direction="row"
            spacing={5}
            justifyContent={'space-between'}
            onClick={showInfo}
            sx={{
              background: '#151C2D80',
              cursor: 'pointer',
              padding: '12px',
              height: '48px',
              marginBottom: '1px'
            }}
          >
            <Stack direction="row" spacing={2}>
              <Stack justifyContent="center">
                <Typography sx={{
                  color: "#fff",
                  fontFamily: 'Lato',
                  fontStyle: 'normal',
                  fontWeight: 900,
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                  ID#162
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <Typography sx={{
                color: "#fff",
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: '14px',
                lineHeight: '20px',
              }}>
                Heads
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <Stack justifyContent="center">
                <Typography sx={{
                  color: "#fff",
                  fontFamily: 'Lato',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                  Provably Fair Info
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          {/* Tails */}
          <Stack
            direction="row"
            spacing={5}
            justifyContent={'space-between'}
            onClick={showInfo}
            sx={{
              background: '#151C2D80',
              cursor: 'pointer',
              padding: '12px',
              height: '48px',
              marginBottom: '1px'
            }}
          >
            <Stack direction="row" spacing={2}>
              <Stack justifyContent="center">
                <Typography sx={{
                  color: "#fff",
                  fontFamily: 'Lato',
                  fontStyle: 'normal',
                  fontWeight: 900,
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                  ID#168
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <Typography sx={{
                color: "#fff",
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: '14px',
                lineHeight: '20px',
              }}>
                Tails
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <Stack justifyContent="center">
                <Typography sx={{
                  color: "#fff",
                  fontFamily: 'Lato',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                  Provably Fair Info
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Fragment>

      ))}

      {/* Probably Info Modal */}
      <InfoModal
        open={openInfo}
        onClose={handleClose}
      />
    </>
  );
}

Games.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
})

export default connect(mapStateToProps, { test })(Games)
