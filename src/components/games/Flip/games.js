import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// mui elements
import Typography from '@mui/material/Typography';
import { withStyles } from '@material-ui/core'
import { Stack } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// modals
import JoinGameModal from '../../modals/joinGame'
import WinnerModal from '../../modals/winner'
import InProgressModal from '../../modals/spinning'

// actions
import { test } from '../../../actions/auth'

const Games = ({ isAuthenticated, test }) => {
  //State variables
  const [coinStats, setCoinStats] = useState(null)
  console.log(coinStats)
  const [openJoin, setOpenJoin] = useState(false)
  const [openWinner, setOpenWinner] = useState(false)
  const [openInProgress, setOpenInProgress] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)

  useEffect(() => {
    async function init() {
      setCoinStats('tails')
    }

    init()
  })

  const handleOpenJoin = () => {
    setOpenJoin(true)
  }
  const handleOpenWinner = () => {
    setOpenWinner(true)
  }
  const handleOpenInProgress = () => {
    setOpenInProgress(true)
  }
  const handleClose = (value) => {
    setOpenJoin(false)
    setOpenWinner(false)
    setOpenInProgress(false)
  }

  const endGame = (value) => {
    setGameEnded(value)
  }

  const HeaderColor = withStyles({
    root: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '24px',
      background: "-webkit-linear-gradient(#ffda6f 15%, #e2a139 56%, #a44e01 80%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  })(Typography)

  const JoinGameColor = withStyles({
    root: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '20px',
      background: "-webkit-linear-gradient(45deg, #10B07A 100%, #10E57A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      cursor: 'pointer'
    }
  })(Typography)

  const InProgressColor = withStyles({
    root: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: '14px',
      lineHeight: '20px',
      background: "-webkit-linear-gradient(0deg, #99A7C7 100%, #C1CEEC 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      cursor: 'pointer',
      marginRight: '10px'
    }
  })(Typography)

  const WinnerColor = withStyles({
    root: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: '14px',
      lineHeight: '20px',
      background: "-webkit-linear-gradient(0deg, #DDB529 100%, #E5DC10 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      cursor: 'pointer'
    }
  })(Typography)

  return (
    <>
      {/* Heads */}
      <Stack direction="row" justifyContent={'space-between'} alignItems="center" sx={{
        background: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '2px',
        height: '34px',
        marginBottom: '10px',
        padding: '15px'
      }}>
        <HeaderColor> Players </HeaderColor>
        <HeaderColor> Status </HeaderColor>
        <HeaderColor> Value </HeaderColor>
      </Stack>

      {/* Listing */}
      {[...Array(3)].map((_, index) => (
        <Fragment key={index}>
          {/* Join Game */}
          <Stack direction="row" justifyContent={'space-between'} sx={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '15px',
            height: '48px',
            marginBottom: '2px',
            borderRadius: '2px'
          }}>
            <Stack direction="row" spacing={2}>
              <Stack >
                <img src="/assets/default_avatar.png" alt="avatar" style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderImage: 'linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
                  background: 'linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
                  borderImageSlice: 1
                }} />
              </Stack>
              <Stack justifyContent="center">
                <Typography sx={{
                  color: "#fff",
                  fontFamily: 'Helvetica',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                  Moni
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <JoinGameColor onClick={handleOpenJoin}>
                Open Bet
              </JoinGameColor>
              <ArrowForwardIcon sx={{ color: "#10B07A", margin: '0px 10px' }} />
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <Stack justifyContent="center">
                <Typography sx={{
                  color: "#fff",
                  fontFamily: 'Helvetica',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                  $100
                </Typography>
              </Stack>
              <img src="/assets/heads.png" alt="avatar" style={{ width: '24px', height: '24px' }} />
            </Stack>
          </Stack>
          {/* In progress */}
          <Stack direction="row" justifyContent={'space-between'} sx={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '15px',
            height: '48px',
            marginBottom: '2px',
            borderRadius: '2px'
          }}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <img src="/assets/default_avatar.png" alt="avatar" style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderImage: 'linear-gradient(0deg, #64718E 18.75%, #919FBF 100%)',
                  background: 'linear-gradient(0deg, #64718E 18.75%, #919FBF 100%)',
                  borderImageSlice: 1
                }} />
              </Stack>
              <Stack justifyContent="center">
                <Typography sx={{
                  color: "#fff",
                  fontFamily: 'Helvetica',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                  Moni
                </Typography>
              </Stack>
            </Stack>
            {
              gameEnded ?
                <Stack direction="row" justifyContent="flex-end" alignItems="center">
                  <WinnerColor onClick={handleOpenWinner}>
                    Closed Bet
                  </WinnerColor>
                  <img src="/assets/default_avatar.png" alt="avatar" style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderImage: 'linear-gradient(0deg, #DDB529 18.75%, #E5DC10 100%)',
                    background: 'linear-gradient(0deg, #DDB529 18.75%, #E5DC10 100%)',
                    borderImageSlice: 1,
                    marginLeft: '10px'
                  }} />
                </Stack> :
                <Stack direction="row" justifyContent="flex-end" alignItems="center">
                  <InProgressColor onClick={handleOpenInProgress}>
                    In Progress
                  </InProgressColor>
                  <img src="/assets/tail-spin.svg" alt="loader" style={{ width: '24px' }} />
                </Stack>
            }
            <Stack direction="row" justifyContent="center" spacing={2}>
              <Stack justifyContent="center">
                <Typography sx={{
                  color: "#fff",
                  fontFamily: 'Helvetica',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                  $2500
                </Typography>
              </Stack>
              <img src="/assets/tails.png" alt="avatar" style={{ width: '24px', height: '24px' }} />
            </Stack>
          </Stack>

          {/* Winner */}
          <Stack direction="row" justifyContent={'space-between'} sx={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '15px',
            height: '48px',
            marginBottom: '2px',
            borderRadius: '2px'
          }}>
            <Stack direction="row" spacing={2}>
              {/* Player */}
              <Stack>
                <img src="/assets/default_avatar.png" alt="avatar" style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderImage: 'linear-gradient(0deg, #DDB529 18.75%, #E5DC10 100%)',
                  background: 'linear-gradient(0deg, #DDB529 18.75%, #E5DC10 100%)',
                  borderImageSlice: 1
                }} />
              </Stack>
              {/* Status */}
              <Stack justifyContent="center">
                <Typography sx={{
                  color: "#fff",
                  fontFamily: 'Helvetica',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                  Winner
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <WinnerColor onClick={handleOpenWinner}>
                Closed Bet
              </WinnerColor>
              <img src="/assets/default_avatar.png" alt="avatar" style={{
                width: '24px',
                height: '24px',
                borderRadius: '8px',
                border: '1px solid',
                borderImage: 'linear-gradient(0deg, #DDB529 18.75%, #E5DC10 100%)',
                background: 'linear-gradient(0deg, #DDB529 18.75%, #E5DC10 100%)',
                borderImageSlice: 1,
                marginLeft: '10px'
              }} />
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <Stack justifyContent="center">
                <Typography sx={{
                  color: "#fff",
                  fontFamily: 'Helvetica',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                  $100
                </Typography>
              </Stack>
              <img src="/assets/heads.png" alt="avatar" style={{ width: '24px', height: '24px' }} />
            </Stack>
          </Stack>

          <JoinGameModal
            open={openJoin}
            onClose={handleClose}
          />
          <WinnerModal
            open={openWinner}
            onClose={handleClose}
          />
          <InProgressModal
            open={openInProgress}
            onClose={handleClose}
            endGame={endGame}
          />
        </Fragment>

      ))}
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
