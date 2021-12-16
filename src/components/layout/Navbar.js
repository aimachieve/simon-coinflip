import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core'

import { Button, Typography, useMediaQuery, Stack, Popover } from '@mui/material'
import { login, logout, setIsAuthenticated } from '../../actions/auth'

// Wallet Connect
import {
  connectWallet,
  getCurrentWalletConnected,
} from '../../utils/interact.js'

// Popover
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

// Icons
import { SiDiscord } from 'react-icons/si';
import TwitterIcon from '@mui/icons-material/Twitter';

// Modals
import DepositModal from '../modals/deposit'
import WithdrawModal from '../modals/withdraw'

// Custom styled Typographies
const CustomPersonalColor = withStyles({
  root: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#58627A',
    cursor: 'pointer'
  }
})(Typography)
const DepositColor = withStyles({
  root: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '12px',
    lineHeight: '16px',
    background: "-webkit-linear-gradient(45deg, #10B07A 100%, #10E57A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: '0px 1px 40px rgba(16, 198, 122, 0.35)',
  }
})(Typography)

const Navbar = ({ auth: { isAuthenticated }, login, logout, setIsAuthenticated }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  // States
  const [openDeposit, setOpenDeposit] = React.useState(false)
  const [openWithdraw, setOpenWithdraw] = React.useState(false)
  const [walletAddress, setWallet] = useState('')

  // Get auth flag from localStorage
  let auth = localStorage.getItem('auth')
  let userInfo = JSON.parse(localStorage.getItem('userInfo'))

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const { address } = await getCurrentWalletConnected()
      setWallet(address)
      // ...
    }

    fetchData()
  }, [])

  // Wallet connect
  const connectWalletPressed = async () => {
    //TODO: implement
    const walletResponse = await connectWallet()
    setWallet(walletResponse.address)

    addWalletListener()

    if (walletResponse.success) {
      login(walletResponse.address)
    }
  }
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0])
        } else {
          setWallet('')
        }
      })
    } else {
    }
  }


  // Control Modals
  const handleOpenDeposit = () => {
    setOpenDeposit(true)
  }
  const handleOpenWithdraw = () => {
    setOpenWithdraw(true)
  }
  const handleClose = (value) => {
    setOpenDeposit(false)
    setOpenWithdraw(false)
  }

  const handleLogin = () => {
    localStorage.setItem('auth', true)
  }

  // Authenticated Section
  const authLinks = (
    <ul>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center">
        {/* User name */}
        <Stack
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            style={{
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 'bold',
              fontStyle: 'normal',
              lineHeight: '16px',
              fontFamily: 'Helvetica',
            }}
          >
            Simon
          </Typography>
        </Stack>

        {/* Avartar */}
        <Stack>
          <img src={userInfo ? userInfo.avatar : ''} alt="avatar" style={{
            width: '34px',
            height: '34px',
            borderRadius: '10px',
            border: '1.5px solid #151c2D',
            borderImage: 'linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
            background: 'linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
            borderImageSlice: 1
          }} />
        </Stack>

        {/* Button Group */}
        <Stack>
          <Button
            variant="contained"
            className="new_flip_btn"
            style={{
              color: '#fff',
              borderRadius: '4px',
              fontSize: '10px',
              lineHeight: '12px',
              fontWeight: '900',
              background: 'url(/assets/btn_bg.png), linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
              fontFamily: 'Helvetica',
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
              width: 'auto',
              height: '32px',
              padding: '10px 18px'
            }}
            onClick={logout}
          >
            Sign Out
          </Button>
        </Stack>
        {userInfo && userInfo.role === 1
          ?
          <Stack>
            <Button
              variant="contained"
              className="new_flip_btn"
              href="/admin"
              style={{
                color: '#fff',
                borderRadius: '4px',
                fontSize: '10px',
                lineHeight: '12px',
                fontWeight: '900',
                background: 'url(/assets/btn_bg.png), linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
                fontFamily: 'Helvetica',
                textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                width: 'auto',
                height: '32px',
                padding: '10px 18px'
              }}
            >
              Dashboard
            </Button>
          </Stack>
          : ''
        }
      </Stack>
    </ul>
  )

  // Unsigned users section
  const guestLinks = (
    <ul>
      <Button
        variant="contained"
        size="large"
        onClick={connectWalletPressed}
        sx={{
          color: 'white',
          fontSize: '15px',
          borderRadius: '20px',
          fontWeight: 'bold',
          fontFamily: 'Helvetica',
          background:
            'linear-gradient(120deg , #dc2424 15%, #4a569d 80%)',
          '&:hover': {
            background:
              'linear-gradient(120deg , #4a569d 15%, #dc2424 80%)'
          }
        }}
      >
        {walletAddress.length > 0 ? (
          'Connected: ' +
          String(walletAddress).substring(0, 6) +
          '...' +
          String(walletAddress).substring(38)
        ) : (
          <span>🦊 Connect Wallet</span>
        )}
      </Button>
    </ul>
  )

  if (isDesktop) {
    return (
      <nav className="navbar">
        <Stack
          direction="row"
          justifyContent={isDesktop ? 'space-between' : 'center'}
          flexWrap="wrap"
          alignItems="center"
          sx={{
            width: '100%',
            borderBottom: 'solid 1px #fffffd',
            borderRadius: '1px',
            paddingBottom: '10px'
          }}
        >
          <Stack direction="row" justifyContent="center" alignItems='center'>
            <Link to="/">
              <Typography
                style={{
                  color: '#ffffff',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '100%',
                  fontFamily: 'Helvetica',
                  letterSpacing: '0.02em'
                }}
              >
                DEGEN CASINO
              </Typography>
              <span
                style={{
                  color: '#58627A',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '100%',
                  fontFamily: 'Helvetica',
                }}
              >
                COIN FLIP GAME
              </span>
            </Link>

            {/* Icons */}
            <Link to='/'>
              <SiDiscord style={{
                color: 'white',
                width: '20px',
                height: '20px',
              }} />
            </Link>
            <Link to='/'>
              <TwitterIcon style={{
                color: 'white',
                width: '20px',
                height: '20px',
              }} />
            </Link>
          </Stack>
          {
            auth ?
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{
                  background: 'rgb(255,255, 255, 0.5)',
                  boxSizing: 'border-box',
                  borderRadius: '8px',
                  padding: '6px 16px',
                }}>
                <Typography
                  style={{
                    color: '#EBEBEB',
                    fontStyle: 'normal',
                    fontSize: '14px',
                    fontWeight: 900,
                    lineHeight: '20px',
                    fontFamily: 'Helvetica',
                    letterSpacing: '0.02em'
                  }}
                >
                  500 $CHIPS
                </Typography>
                <Button onClick={handleOpenDeposit}>
                  <DepositColor>
                    DEPOSIT
                  </DepositColor>
                </Button>
                <Button onClick={handleOpenWithdraw}>
                  <CustomPersonalColor>
                    Withdraw
                  </CustomPersonalColor>
                </Button>
              </Stack> :
              ''
          }

          <Stack
            justifyContent="center"
            alignItems="center"
          >
            <Fragment>
              {auth ? authLinks : guestLinks}
            </Fragment>
          </Stack>
        </Stack>
        <DepositModal
          open={openDeposit}
          onClose={handleClose}
        />
        <WithdrawModal
          open={openWithdraw}
          onClose={handleClose}
        />
      </nav>
    )
  } else {
    return (
      <nav className="navbar">
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Link to="/">
            <Typography
              style={{
                color: '#ffffff',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '100%',
                fontFamily: 'Helvetica',
                letterSpacing: '0.02em'
              }}
            >
              GENEN CASINO
            </Typography>
            <span
              style={{
                color: '#58627A',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '100%',
                fontFamily: 'Helvetica',
              }}
            >
              COIN FLIP GAME
            </span>
          </Link>
        </Stack>
        <Fragment>{auth ? authLinks : guestLinks}</Fragment>
      </nav>
    )
  }
}

Navbar.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { login, logout, setIsAuthenticated })(Navbar)
