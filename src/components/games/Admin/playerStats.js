import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core'
import { Stack, Typography, Button } from '@mui/material'

import SiteWallets from './modals/siteWallets'
import CommisionWallets from './modals/commissionWallets'
import PlayerStats from './modals/playerStats'

const CustomGeneralColor = withStyles({
  root: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '16px',
    lineHeight: '16px',
    background: "-webkit-linear-gradient(45deg, #10B07A 100%, #10E57A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
})(Typography)


const HeaderColor = withStyles({
  root: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '9px',
    lineHeight: '10.8px',
    background: "-webkit-linear-gradient(45deg, #99A7C7 100%, #C1CEEC 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
})(Typography)

const CoinStats = ({ isAuthenticated }) => {
  //State variables
  const [coinStats, setCoinStats] = useState(null)
  console.log(coinStats)
  const [openSiteWallets, setSiteWallets] = useState(false)
  const [openCommisionWallets, setCommisionWallets] = useState(false)
  const [openPlayerStats, setOpenPlayerStats] = useState(false)

  useEffect(() => {
    async function init() {
      setCoinStats('tails')
    }

    init()
  })

  const showSiteWallets = (value) => {
    setSiteWallets(true)
  }

  const showCommisionWallets = (value) => {
    setCommisionWallets(true)
  }

  const showPlayerStats = (value) => {
    setOpenPlayerStats(true)
  }
  
  const handleClose = (value) => {
    setSiteWallets(false)
    setCommisionWallets(false)
    setOpenPlayerStats(false)
  }

  return (
    <Stack>
      {/* Active players */}
      <Stack
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{
          border: '3px solid transparent',
          // background: 'linear-gradient(180deg, rgba(21, 28, 45, 0.1) 0%, rgba(145, 159, 191, 0.1) 100%), #151C2D',
          boxShadow: '0px 2px 2px 0px #0000001A',
          borderRadius: '4px',
          padding: '12px',
          borderImage: 'linear-gradient(0deg, #64718E 18.75%, #919FBF 100%)',
          borderImageSlice: 1,
          mb: 5
        }}>
        <CustomGeneralColor>
          736
        </CustomGeneralColor>

        <Typography sx={{
          color: "#fff",
          fontFamily: 'Lato',
          fontStyle: 'normal',
          fontWeight: '900',
          fontSize: '10px',
          lineHeight: '12px',
        }}>
          Active Players
        </Typography>
      </Stack>

      {/* Wallets: site and commision */}
      <Stack
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          border: '3px solid transparent',
          // background: 'linear-gradient(180deg, rgba(21, 28, 45, 0.1) 0%, rgba(145, 159, 191, 0.1) 100%), #151C2D',
          boxShadow: '0px 2px 2px 0px #0000001A',
          borderRadius: '4px',
          padding: '25px',
          borderImage: 'linear-gradient(0deg, #64718E 18.75%, #919FBF 100%)',
          borderImageSlice: 1,
          mb: 5
        }}>

        <Button
          variant="contained"
          className="new_flip_btn"
          onClick={showSiteWallets}
          style={{
            color: '#fff',
            borderRadius: '4px',
            fontSize: '10px',
            lineHeight: '12px',
            fontWeight: '900',
            background: 'url(/assets/btn_bg.png), linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
            fontFamily: 'Lato',
            textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            width: '200px',
            height: '42px',
            padding: '10px 18px'
          }}
        >
          Site Wallets
        </Button>
        <Button
          variant="contained"
          className="new_flip_btn"
          onClick={showCommisionWallets}
          style={{
            color: '#fff',
            borderRadius: '4px',
            fontSize: '10px',
            lineHeight: '12px',
            fontWeight: '900',
            background: 'url(/assets/btn_bg.png), linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
            fontFamily: 'Lato',
            textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            width: '200px',
            height: '42px',
            padding: '10px 18px'
          }}
        >
          Commission Wallets
        </Button>
      </Stack>

      {/* Player List */}

      {/* Heads */}
      <Stack
        direction="row"
        spacing={5}
        justifyContent={'space-between'}
        alignItems="center"
        sx={{
          background: '#151C2DBF',
          height: '34px',
          marginBottom: '10px',
          padding: '12px',
        }}
      >
        <Typography sx={{
          color: "#fff",
          fontFamily: 'Lato',
          fontStyle: 'normal',
          fontWeight: 900,
          fontSize: '9px',
          lineHeight: '10.8px',
        }}>
          Player
        </Typography>
        <Typography sx={{
          color: "#fff",
          fontFamily: 'Lato',
          fontStyle: 'normal',
          fontWeight: 900,
          fontSize: '9px',
          lineHeight: '10.8px',
        }}>
          Amount Bet
        </Typography>
        <Typography sx={{
          color: "#fff",
          fontFamily: 'Lato',
          fontStyle: 'normal',
          fontWeight: 900,
          fontSize: '9px',
          lineHeight: '10.8px',
        }}>
          Steam ID
        </Typography>
      </Stack>
      {/* Listing */}
      {[...Array(12)].map((_, index) => (
        <Fragment key={index}>
          {/* Steams */}
          <Stack 
          direction="row" 
          spacing={5} 
          justifyContent={'space-between'}
          onClick={showPlayerStats}
          sx={{
            background: '#151C2D80',
            padding: '12px',
            height: '48px',
            marginBottom: '1px',
            cursor: 'pointer'
          }}
          >
            <Stack direction="row" spacing={2}>
              <Stack justifyContent="center">
                <HeaderColor>Anakin</HeaderColor>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <HeaderColor>0.093BTC</HeaderColor>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <Stack justifyContent="center">
                <HeaderColor>Ateam Link</HeaderColor>
              </Stack>
            </Stack>
          </Stack>
        </Fragment>
      ))
      }
      
      {/* Site Wallets button */}
      <SiteWallets 
        open={openSiteWallets}
        onClose={handleClose}
      />

      {/* Commision Wallets button */}
      <CommisionWallets 
        open={openCommisionWallets}
        onClose={handleClose}
      />

      {/* Player Stats Modal */}
      <PlayerStats 
        open={openPlayerStats}
        onClose={handleClose}
      />
    </Stack >
  );
}

CoinStats.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  game: state.game
})

export default connect(mapStateToProps, {})(CoinStats)
