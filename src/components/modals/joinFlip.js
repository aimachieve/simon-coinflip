import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles'

import {
  Stack,
  Box,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material'

import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { withStyles } from '@material-ui/core'

// Icon
import CloseIcon from '@mui/icons-material/Close'

// Styled Typographies
const CustomGeneralColor = withStyles({
  root: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '12px',
    lineHeight: '16px',
    background: "-webkit-linear-gradient(45deg, #10B07A 100%, #10E57A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }
})(Typography)
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

// Custom BootstrapDialog
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

// Styled Typography
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

function Creation(props) {
  // useEffect(() => {
  //   async function init() {
  //     // setValue(amount / 2)
  //   }

  //   init()
  // })
  const { closeOldModal, selected } = props

  //State variables
  const [open, setOpen] = React.useState(false);

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  // Open Modal Action
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    closeOldModal()
  }

  return (
    <Box>
      {/* Join Flip Button */}
      <Button
        variant="contained"
        className="flip_history_btn"
        onClick={
          () => {
            handleClickOpen()
          }
        }
        style={{
          color: '#fff',
          borderRadius: '4px',
          fontSize: '10px',
          lineHeight: '12px',
          fontWeight: '900',
          background: 'linear-gradient(0deg, #64718E 18.75%, #919FBF 100%)',
          fontFamily: 'Helvetica',
          textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
          width: 'auto',
          height: '32px',
          padding: '10px 18px',
        }}
      >
        Join Flip
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
          <TitleColor> Join Flip </TitleColor>
        </BootstrapDialogTitle>
        <DialogContent >
          <Stack
            spacing={2}
            style={{
              borderBottom: 'solid 1px #1B2437',
              marginTop: '3px'
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: 'Helvetica',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                Select a Side
              </Typography>
              <CustomPersonalColor>
                Side already selected due to joining.
              </CustomPersonalColor>
            </Stack>

            {/* Heads */}
            <Stack
              direction="row"
              spacing={5}
              justifyContent={'space-between'}
              sx={{
                background: selected === 'heads' ? 'linear-gradient(96.9deg, rgba(18, 25, 40, 0) 0%, #10B07A 149.07%)' : '#1B2437',
                boxShadow: '0px 2px 2px 0px #0000001A',
                borderRadius: '6px',
                padding: '20px',
                '&:hover': selected !== 'heads' ?
                  { background: '#222C42' } :
                  ''
              }}
            >
              <Stack
                direction="row"
                spacing={2}
              >
                <Stack>
                  <img src="/assets/heads.png" alt="heads" style={{ width: '48px', height: '48px' }} />
                </Stack>
                <Stack
                  justifyContent="center"
                >
                  {
                    selected === 'heads' ?
                      <CustomGeneralColor> Heads </CustomGeneralColor> :
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

              {/* Selected Type */}
              <Stack
                justifyContent="center"
                direction="row"
                alignItems="center"
                spacing={1}
              >
                {
                  selected === 'heads' ?
                    <Typography sx={{
                      color: "#fff",
                      fontFamily: 'Helvetica',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      lineHeight: '24px',
                    }}>
                      Selected
                    </Typography> :
                    ''
                }
                {
                  selected === 'heads' ?
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
              sx={{
                background: selected === 'tails' ? 'linear-gradient(96.9deg, rgba(18, 25, 40, 0) 0%, #10B07A 149.07%)' : '#1B2437',
                boxShadow: '0px 2px 2px 0px #0000001A',
                borderRadius: '0px 0px 0px 6px',
                padding: '20px',
                '&:hover': selected !== 'tails' ?
                  { background: '#222C42' } :
                  ''
              }}>
              <Stack direction="row" spacing={2}>
                <Stack>
                  <img src="/assets/tails.png" alt="tails" style={{ width: '48px', height: '48px' }} />
                </Stack>
                <Stack justifyContent="center">
                  {
                    selected === 'tails' ?
                      <CustomGeneralColor> Tails </CustomGeneralColor> :
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
              <Stack
                justifyContent="center"
                direction="row"
                alignItems="center"
                spacing={1}
              >
                {
                  selected === 'tails' ?
                    <Typography sx={{
                      color: "#fff",
                      fontFamily: 'Helvetica',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      lineHeight: '24px',
                    }}>
                      Selected
                    </Typography> :
                    ''
                }
                {
                  selected === 'tails' ?
                    <img src="/assets/icon_star.png" alt="icon" style={{ width: '24px', height: '24px' }} /> :
                    <img src="/assets/icon_star_default.png" alt="icon" style={{ width: '24px', height: '24px' }} />
                }
              </Stack>
            </Stack>
          </Stack>

          <Stack
            mt={2}
            spacing={2}
          >
            <Typography sx={{
              color: "#fff",
              fontFamily: 'Helvetica',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '20px',
            }}>
              Joining Flip Amount & opponent
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                background: '#1B2437',
                borderRadius: '4px',
                padding: '10px 16px'
              }}
            >
              <Typography sx={{
                color: "#fff",
                fontFamily: 'Helvetica',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '20px',
              }}>
                $ 12,152.45
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <Typography sx={{
                  color: "#fff",
                  fontFamily: 'Helvetica',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '20px',
                }}>
                  TJStudio
                </Typography>
                <img src="/assets/default_avatar.png" alt="avatar" style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderImage: 'linear-gradient(0deg, #10B07A 100%, #10E57A 100%)',
                  background: 'linear-gradient(0deg, #10B07A 100%, #10E57A 100%)',
                  borderImageSlice: 1
                }} />
              </Stack>
            </Stack>

            {/* Join Flip */}
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
                  background: 'linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
                  fontFamily: 'Helvetica',
                  textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                  width: '173px',
                  height: '40px',
                  padding: '10px 32px',
                  margin: 'auto',
                }}
              >
                Join Flip
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </BootstrapDialog >
    </Box >
  );
}

Creation.propTypes = {
};

export default Creation
