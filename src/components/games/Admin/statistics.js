import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery, withStyles } from '@material-ui/core'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'

const Statistics = ({ isAuthenticated }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  console.log('isAuthenticated:', isAuthenticated)

  const CustomGeneralColor = withStyles({
    root: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: '16px',
      lineHeight: '24px',
      background: "-webkit-linear-gradient(45deg, #10B07A 100%, #10E57A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  })(Typography)

  const CustomPersonalColor = withStyles({
    root: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: '16px',
      lineHeight: '24px',
      background: "-webkit-linear-gradient(0deg, #99A7C7 100%, #C1CEEC 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }
  })(Typography)

  return (
    <Fragment>
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        justifyContent={isDesktop ? 'space-between' : 'center'}
        sx={{
          mb: 5
        }}
      >
        <Stack direction="row" spacing={1} justifyContent={'space-between'} sx={{
          border: '3px solid transparent',
          background: 'linear-gradient(180deg, rgba(21, 28, 45, 0.1) 0%, rgba(16, 229, 122, 0.1) 100%), #151C2D',
          boxShadow: '0px 2px 2px 0px #0000001A',
          borderRadius: '4px',
          padding: '12px',
          borderImage: 'linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
          borderImageSlice: 1
        }}>
          <Stack>
            <CustomGeneralColor> 0.48 BTC </CustomGeneralColor>
            <Typography sx={{
              color: "#fff",
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: '900',
              fontSize: '10px',
              lineHeight: '12px',
            }}>
              Total Active Amount
            </Typography>
          </Stack>
          <Stack>
            <CustomGeneralColor> 1.84093 BTC </CustomGeneralColor>
            <Typography sx={{
              color: "#fff",
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: '900',
              fontSize: '10px',
              lineHeight: '12px',
            }}>
              Total Comission Wallet
            </Typography>
          </Stack>
          <Stack>
            <Stack direction="row">
              {/* <img src="/assets/icon_terrorist.png" alt="icon" style={{ width: 'auto', height: '20px' }} /> */}
              <CustomGeneralColor>
                174.4628 BTC
              </CustomGeneralColor>
            </Stack>
            <Stack direction="row" justifyContent="flex-end">
              <Typography sx={{
                color: "#fff",
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: '900',
                fontSize: '10px',
                lineHeight: '12px'
              }}>
                Total Site Wallet
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent={'space-between'} sx={{
          border: '3px solid transparent',
          background: 'linear-gradient(180deg, rgba(21, 28, 45, 0.1) 0%, rgba(145, 159, 191, 0.1) 100%), #151C2D',
          boxShadow: '0px 2px 2px 0px #0000001A',
          borderRadius: '4px',
          padding: '12px',
          borderImage: 'linear-gradient(0deg, #64718E 18.75%, #919FBF 100%)',
          borderImageSlice: 1

        }}><Stack>
            <CustomPersonalColor> 22.3902 BTC </CustomPersonalColor>
            <Typography sx={{
              color: "#fff",
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: '900',
              fontSize: '10px',
              lineHeight: '12px',
            }}>
              Total Deposits
              <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}> Last 24 hrs</span>
            </Typography>
          </Stack>
          <Stack>
            <CustomPersonalColor> 0.7147 BTC </CustomPersonalColor>
            <Typography sx={{
              color: "#fff",
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: '900',
              fontSize: '10px',
              lineHeight: '12px',
            }}>
              Comission
              <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}> Last 24 hrs</span>
            </Typography>
          </Stack>
          <Stack>
            <CustomPersonalColor>
              10,309 BTC
            </CustomPersonalColor>
            <Typography sx={{
              color: "#fff",
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: '900',
              fontSize: '10px',
              lineHeight: '12px',
            }}>
              Total Flips
              <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}> Last 24 hrs</span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

    </Fragment >
  )
}

Statistics.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Statistics)
