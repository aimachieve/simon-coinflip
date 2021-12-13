import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles, withStyles } from '@material-ui/core'
import { Stack } from '@mui/material'

const CoinStats = ({ isAuthenticated }) => {
  //State variables
  const [coinStats, setCoinStats] = useState(null)

  useEffect(() => {
    async function init() {
      setCoinStats('tails')
    }

    init()
  })

  // Set TextField's Color
  const useStyles = makeStyles({
    cardcontent: {
      padding: 0,
      '&:last-child': {
        paddingBottom: 0
      }
    }
  })
  const classes = useStyles()

  const CustomGeneralColor = withStyles({
    root: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: '12px',
      lineHeight: '16px',
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
      fontSize: '12px',
      lineHeight: '16px',
      background: "-webkit-linear-gradient(0deg, #99A7C7 100%, #C1CEEC 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  })(Typography)

  return (
    <Card sx={{ width: '100%', background: '#151C2D80' }}>
      <CardHeader
        title="Coin Statistics Last  24 Hours"
        titleTypographyProps={{
          fontFamily: 'Lato',
          fontStyle: 'normal',
          fontWeight: 900,
          fontSize: '10px',
          lineHeight: '12px',
        }}
        sx={{
          borderBottom: '2px solid #101624',
          color: '#58627A'
        }}
      />
      <CardContent className={classes.cardcontent}>
        {/* Heads */}
        <Stack direction="row" spacing={5} justifyContent={'space-between'} sx={{
          background: coinStats && coinStats === 'heads' ?  'linear-gradient(96.9deg, rgba(18, 25, 40, 0) 0%, #10B07A 149.07%)' : '',
          boxShadow: '0px 2px 2px 0px #0000001A',
          borderRadius: '4px',
          padding: '20px',
        }}>
          <Stack direction="row" spacing={2}>
            <Stack>
              <img src="/assets/heads.png" alt="heads" style={{ width: '48px', height: '48px' }} />
            </Stack>
            <Stack justifyContent="center">
              {
                coinStats && coinStats === 'heads' ?
                  <CustomGeneralColor> Heads </CustomGeneralColor> :
                  <CustomPersonalColor> Heads </CustomPersonalColor>
              }
              <Typography sx={{
                color: "#fff",
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '16px',
                lineHeight: '24px',
              }}>
                45.67%
              </Typography>
            </Stack>
          </Stack>
          <Stack justifyContent="center">
            {coinStats && coinStats === 'heads' ? <img src="/assets/icon_star.png" alt="icon" style={{ width: '24px', height: '24px' }} /> : ''}
          </Stack>
        </Stack>

        {/* Tails */}
        <Stack direction="row" spacing={5} justifyContent={'space-between'} sx={{
          background: coinStats && coinStats === 'tails' ?  'linear-gradient(96.9deg, rgba(18, 25, 40, 0) 0%, #10B07A 149.07%)' : '',
          boxShadow: '0px 2px 2px 0px #0000001A',
          borderRadius: '0px 0px 0px 6px',
          padding: '20px',
        }}>
          <Stack direction="row" spacing={2}>
            <Stack>
              <img src="/assets/tails.png" alt="tails" style={{ width: '48px', height: '48px' }} />
            </Stack>
            <Stack justifyContent="center">
              {
                coinStats && coinStats === 'tails' ?
                  <CustomGeneralColor> Tails </CustomGeneralColor> :
                  <CustomPersonalColor> Tails </CustomPersonalColor>
              }
              <Typography sx={{
                color: "#fff",
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '16px',
                lineHeight: '24px',
              }}>
                54.33%
              </Typography>
            </Stack>
          </Stack>
          <Stack justifyContent="center">
            {coinStats && coinStats === 'tails' ? <img src="/assets/icon_star.png" alt="icon" style={{ width: '24px', height: '24px' }} /> : ''}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
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
