import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login, logout, setIsAuthenticated } from '../../actions/auth'
import { useTheme } from '@material-ui/core/styles'
import { Button, Typography, useMediaQuery, Stack } from '@mui/material'
import { withStyles } from '@material-ui/core'

import { SiDiscord } from 'react-icons/si';
import TwitterIcon from '@mui/icons-material/Twitter';

import DepositModal from '../modals/deposit'
import WithdrawModal from '../modals/withdraw'


const CustomPersonalColor = withStyles({
  root: {
    fontFamily: 'Lato',
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
    fontFamily: 'Lato',
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
  const [openDeposit, setOpenDeposit] = React.useState(false)
  const [openWithdraw, setOpenWithdraw] = React.useState(false)

  console.log(isAuthenticated)

  //State variables

  useEffect(() => {
    window.addEventListener("message", event => {
      if (event.origin !== process.env.REACT_APP_API_URL) return;

      const { token, user, ok } = event.data;
      if (ok) {
        localStorage.setItem("jwtToken", token);
        console.log(token, user);
        setIsAuthenticated(user)
      }
    });
  }, [setIsAuthenticated]);


  let auth = localStorage.getItem('auth')
  let userInfo = JSON.parse(localStorage.getItem('userInfo'))

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

  const authLinks = (
    <ul>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <Stack justifyContent="flex-end" alignItems="flex-end">
          <Typography
            style={{
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 'bold',
              fontStyle: 'normal',
              lineHeight: '16px',
              fontFamily: 'Lato',
            }}
          >
            Simon
          </Typography>
          <CustomPersonalColor onClick={handleOpenWithdraw}>
            Withdraw
          </CustomPersonalColor>
        </Stack>
        {/* <Stack>
          <img src={userInfo ? userInfo.avatar : ''} alt="avatar" style={{
            width: '34px',
            height: '34px',
            borderRadius: '10px',
            border: '1.5px solid #151c2D',
            borderImage: 'linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
            background: 'linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
            borderImageSlice: 1
          }} />
        </Stack> */}
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
              fontFamily: 'Lato',
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
                fontFamily: 'Lato',
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

  const guestLinks = (
    <ul>
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
          fontFamily: 'Lato',
          textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
          width: 'auto',
          height: '32px',
          padding: '10px 18px'
        }}
        onClick={handleLogin}
      >
        Sign in via NFT
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
            borderBottom: 'solid 1px #1B2437',
            borderRadius: '1px'
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
                  fontFamily: 'Oxanium',
                  letterSpacing: '0.02em'
                }}
              >
                SIMON
                <span
                  style={{
                    color: '#10E57A',
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '100%',
                    fontFamily: 'Oxanium',
                  }}
                >
                  .P
                </span>
              </Typography>
            </Link>
            <Link to='/' style={{ marginTop: '8px' }}>
              <SiDiscord style={{
                color: '#58627A',
                width: '20px',
                height: '20px',
              }} />
            </Link>
            <Link to='/' style={{ marginTop: '8px' }}>
              <TwitterIcon style={{
                color: '#58627A',
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
                  background: '#151C2D',
                  border: '1px solid #1B2437',
                  boxSizing: 'border-box',
                  borderRadius: '8px',
                  padding: '6px 16px',
                  // marginBottom: '10px'
                }}>
                <Typography
                  style={{
                    color: '#EBEBEB',
                    fontStyle: 'normal',
                    fontSize: '14px',
                    fontWeight: 900,
                    lineHeight: '20px',
                    fontFamily: 'Lato',
                    letterSpacing: '0.02em'
                  }}
                >
                  $ 24,304.90
                </Typography>
                <Button onClick={handleOpenDeposit}>
                  <DepositColor>
                    DEPOSIT
                  </DepositColor>
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
                fontFamily: 'Oxanium',
                letterSpacing: '0.02em'
              }}
            >
              DICED
              <span
                style={{
                  color: '#10E57A',
                  fontSize: '18px',
                  fontWeight: 600,
                  lineHeight: '100%',
                  fontFamily: 'Oxanium',
                }}
              >
                .GG
              </span>
            </Typography>
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
