import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { makeStyles } from '@material-ui/core';
import { styled } from '@mui/material/styles'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Stack, Slider, TextField, Box } from '@mui/material'

import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { withStyles } from '@material-ui/core'

// Icons
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'

// Custom styled Typographie
const CustomPersonalColor = withStyles({
  root: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '12px',
    lineHeight: '16px',
    background: "-webkit-linear-gradient(0deg, #99A7C7 100%, #C1CEEC 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
})(Typography)
const TitleColor = withStyles({
  root: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '16px',
    lineHeight: '24px',
    background: "-webkit-linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
})(Typography)

// Set TextField's Color
const useStyles = makeStyles({
  root: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '20px',
    width: '100%',
    borderRadius: '4px',
    "& .MuiDialog-paperScrollPaper": {
      background: 'red',
      borderRadius: '4px'
    },
    '& .MuiOutlinedInput-input': {
      color: '#fff',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '20px',
      width: '100%',
      borderRadius: '4px',
      textAlign: 'center'
    },
  },
  slider: {
    '& .MuiSlider-root': {
      color: 'rgb(129, 71, 218)',
      height: '12px',
    },
    '& .MuiSlider-thumb': {
      width: '18px',
      height: '18px',
      background: '#FFFFFF'
    },
  },
})

// For custom slider: color, height, etc...
const CustomizedSlider = styled(Slider)`
  color: #10E57A;
  height: 4px;
  borderRadius: 2px;
  width: 100%;
  :hover {
    color: #10B07A;
  }
  zIndex: 9999
`
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    overflow: 'hidden',
    height: 'auto'
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    background: '#151C2D',
    border: '1px solid #1B2437',
    boxSizing: 'border-box',
    borderRadius: '6px',
    width: '100%'
  },
}))

// Set BootstrapDialog's Title
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2, borderBottom: 'solid 1px #1B2437' }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#58627A',
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

function Creation() {
  // useEffect(() => {
  //   async function init() {
  //     // setValue(amount / 2)
  //   }

  //   init()
  // })

  const amount = 24304.9

  //State variables
  const [coinStats, setCoinStats] = useState('')
  const [value, setValue] = useState(amount / 2)
  const [open, setOpen] = React.useState(false);

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  // Auth flag
  let auth = localStorage.getItem('auth')

  // Open Modal Action
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  // Select side
  const selectSide = (side) => {
    setCoinStats(side)
  }

  // Set slider change value
  const sliderChange = (event, newValue) => {
    setValue(newValue);
  }
  const handleOnChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  const classes = useStyles()

  return (
    <Box>
      {/* Open Creation Flip Modal */}
      <Button
        variant="contained"
        onClick={handleClickOpen}
        disabled={!auth}
        className="new_flip_btn"
        startIcon={<AddIcon />}
        style={{
          color: '#fff',
          borderRadius: '4px',
          fontSize: '10px',
          lineHeight: '12px',
          fontWeight: '900',
          background: 'linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
          fontFamily: 'Helvetica',
          textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
          width: 'auto',
          height: '39px',
          padding: '10px 18px',
          marginLeft: '8px',
          opacity: `${auth ? 1 : 0.3}`
        }}
      >
        Start New Bet
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          width: isDesktop ? '463px' : '350px',
          margin: 'auto',
          overflowY: 'none',
          marginTop: isDesktop ? '50px' : '100px'
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <TitleColor> Create a new Flip </TitleColor>
        </BootstrapDialogTitle>
        <DialogContent >
          <Stack
            spacing={2}
            style={{ borderBottom: 'solid 1px #1B2437' }}
          >
            <Typography sx={{
              color: "#fff",
              fontFamily: 'Helvetica',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '20px',
            }}>
              Select a Side
            </Typography>
            {/* Heads */}
            <Stack
              direction="row"
              spacing={5}
              justifyContent={'space-between'}
              onClick={
                () => {
                  selectSide('heads')
                }
              }
              sx={{
                background: coinStats && coinStats === 'heads' ? 'linear-gradient(96.9deg, rgba(18, 25, 40, 0) 0%, #10B07A 149.07%)' : '#1B2437',
                boxShadow: '0px 2px 2px 0px #0000001A',
                borderRadius: '6px',
                padding: '20px',
                '&:hover': coinStats !== 'heads' ? { background: '#222C42' } : ''
              }}>
              <Stack
                direction="row"
                spacing={2}
              >
                <Stack>
                  <img src="/assets/heads.png" alt="heads" style={{ width: '48px', height: '48px' }} />
                </Stack>
                <Stack justifyContent="center">
                  {
                    coinStats && coinStats === 'heads' ?
                      <TitleColor> Heads </TitleColor> :
                      <CustomPersonalColor> Heads </CustomPersonalColor>
                  }
                  <Typography sx={{
                    color: "#fff",
                    fontFamily: 'Helvetica',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    lineHeight: '24px',
                  }}>
                    45.67%
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                justifyContent="center"
              >
                {
                  coinStats && coinStats === 'heads' ?
                    <img src="/assets/icon_star.png" alt="icon" style={{ width: '24px', height: '24px' }} /> :
                    <img src="/assets/icon_star_default.png" alt="icon" style={{ width: '24px', height: '24px' }} />
                }
              </Stack>
            </Stack>

            {/* Tails */}
            <Stack
              direction="row"
              spacing={5}
              justifyContent={'space-between'}
              onClick={
                () => {
                  selectSide('tails')
                }
              }
              sx={{
                background: coinStats && coinStats === 'tails' ? 'linear-gradient(96.9deg, rgba(18, 25, 40, 0) 0%, #10B07A 149.07%)' : '#1B2437',
                boxShadow: '0px 2px 2px 0px #0000001A',
                borderRadius: '0px 0px 0px 6px',
                padding: '20px',
                '&:hover': coinStats !== 'tails' ? { background: '#222C42' } : ''
              }}>
              <Stack
                direction="row"
                spacing={2}
              >
                <Stack>
                  <img src="/assets/tails.png" alt="tails" style={{ width: '48px', height: '48px' }} />
                </Stack>
                <Stack justifyContent="center">
                  {
                    coinStats && coinStats === 'tails' ?
                      <TitleColor> Tails </TitleColor> :
                      <CustomPersonalColor> Tails </CustomPersonalColor>
                  }
                  <Typography sx={{
                    color: "#fff",
                    fontFamily: 'Helvetica',
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
                {coinStats && coinStats === 'tails' ? <img src="/assets/icon_star.png" alt="icon" style={{ width: '24px', height: '24px' }} /> : <img src="/assets/icon_star_default.png" alt="icon" style={{ width: '24px', height: '24px' }} />}
              </Stack>
            </Stack>
          </Stack>

          {/* Slider: Select Flip amount */}
          <Stack
            mt={2}
            spacing={2}
          >
            <Typography sx={{
              color: "#fff",
              fontFamily: 'Helvetica',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '20px',
            }}>
              Select Flip Amount
            </Typography>

            {/* Button list(Max, Min, Current) */}
            <Stack direction="row" spacing={2} justifyContent="space-between" >
              <Button
                variant="contained"
                sx={{
                  background: '#1B2437',
                  borderRadius: '4px',
                  opacity: '0.5'
                }}
                onClick={() => { setValue(0) }}
              >
                $0.00
              </Button>

              <TextField
                value={value}
                className={classes.root}
                style={{
                  color: '#fff',
                  background: '#1B2437',
                  borderRadius: '4px',
                  width: 'auto'
                }}
                onChange={handleOnChange}
              />

              <Button
                variant="contained"
                sx={{
                  background: '#1B2437',
                  borderRadius: '4px',
                  opacity: '0.5'
                }}
                onClick={() => { setValue(amount) }}
              >
                {'$' + amount.toFixed(2)}
              </Button>
            </Stack>

            {/* Slider */}
            <Stack style={{ zIndex: 9999 }}>
              <CustomizedSlider
                className={classes.slider}
                defaultValue={amount / 2}
                aria-label="Small"
                value={value}
                onChange={sliderChange}
                min={0}
                max={amount}
                valueLabelDisplay="auto"
              />
            </Stack>

            <Stack>
              <Button
                variant="contained"
                // disabled={!auth}
                className="new_flip_btn"
                style={{
                  color: '#fff',
                  borderRadius: '4px',
                  fontSize: '10px',
                  lineHeight: '12px',
                  fontWeight: '900',
                  background: 'linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
                  fontFamily: 'Helvetica',
                  textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                  width: '173px',
                  height: '40px',
                  padding: '10px 32px',
                  margin: 'auto',
                  opacity: `${coinStats ? 1 : 0.3}`
                }}
              >
                Create a new Flip
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </BootstrapDialog >
    </Box>
  );
}

Creation.propTypes = {
};

export default Creation
