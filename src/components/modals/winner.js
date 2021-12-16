import React from 'react';
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core'

import {
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Button,
  TextField
} from '@mui/material'

import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { withStyles } from '@material-ui/core'

// Icons
import CloseIcon from '@mui/icons-material/Close'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Winner(props) {
  const { onClose, open } = props;

  // Probably Fair Info
  let hashvalue = "27ys892h9sg2s92s8zg9zhz8gs9zh98zg"
  let secret = "s38s920sh29s"
  let winningTicket = " 32.3928493%"

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  const handleClose = () => {
    onClose();
  };

  // Set TextField's Color
  const useStyles = makeStyles({
    root: {
      color: '#8690A7',
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '16px',
      width: '100%',
      borderRadius: '4px',
      "& .MuiDialog-paperScrollPaper": {
        background: 'red',
        borderRadius: '4px'
      },
      textAlign: 'right'
    }
  })
  const classes = useStyles()

  // Custom Styled Typography
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

  // Custom Styled BootstrapDialog
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
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

  return (
    < BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{ width: isDesktop ? '541px' : '350px', margin: 'auto', marginTop: isDesktop ? '-220px' : '100px' }
      }
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      >
        <TitleColor> Coinflip Round </TitleColor>
      </BootstrapDialogTitle>
      <DialogContent >
        <Stack direction="row" mt={2} justifyContent='space-around'>
          {/* First Player */}
          <Stack justifyContent="center" alignItems="center" spacing={1}>
            <img src="/assets/default_avatar.png" alt="avatar" style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              border: '1px solid',
              borderImage: 'linear-gradient(0deg, #10B07A 100%, #10E57A 100%)',
              background: 'linear-gradient(0deg, #10B07A 100%, #10E57A 100%)',
              borderImageSlice: 1
            }} />
            <img src="/assets/top_head.png" alt="prefix" style={{
              width: '24px',
              height: '24px',
              borderRadius: '16px',
              position: 'absolute',
              top: '55px',
              left: '110px',
            }} />
            <Button variant="contained" sx={{
              background: '#1B2437',
              borderRadius: '6px',
              marginRight: '10px',
              padding: '8px 32px',
              border: '1px solid #232D43',
              boxSizing: 'border-box'
            }}>
              <JoinGameColor>
                + $ 25,008
              </JoinGameColor>
            </Button>
            <Typography sx={{
              color: "#fff",
              fontFamily: 'Helvetica',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '20px',
            }}>
              Moni @ Dicedgg
            </Typography>
            <Typography sx={{
              color: "#58627A",
              fontFamily: 'Helvetica',
              fontStyle: 'normal',
              fontWeight: 900,
              fontSize: '12px',
              lineHeight: '16px',
            }}>
              Level 129
            </Typography>
          </Stack>

          {/* Winner Side */}
          <Stack>
            <img src="/assets/heads.png" alt="winner-side" style={{
              width: '64px',
              height: '64px',
              borderRadius: '32px',
              border: '1px solid',
              borderImage: 'linear-gradient(0deg, #10B07A 100%, #10E57A 100%)',
              background: 'linear-gradient(0deg, #10B07A 100%, #10E57A 100%)',
              borderImageSlice: 1,
              filter: 'drop-shadow(0px 4px 20px rgba(16, 229, 122, 0.15))',
            }} />
          </Stack>

          {/* Second Player */}
          <Stack justifyContent="center" alignItems="center" spacing={1} style={{ opacity: '0.25' }}>
            {/* Avatar */}
            <img src="/assets/avatar2.png" alt="avatar" style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              border: '1px solid #58627A',
            }} />
            {/* Side */}
            <img src="/assets/top_tail.png" alt="prefix" style={{
              width: '24px',
              height: '24px',
              borderRadius: '16px',
              position: 'absolute',
              top: '55px',
              left: '340px',
            }} />

            {/* Amount */}
            <Button variant="contained" sx={{
              background: '#1B2437',
              borderRadius: '6px',
              marginRight: '10px',
              padding: '8px 32px',
              border: '1px solid #232D43',
              boxSizing: 'border-box'
            }}>
              <Typography sx={{
                color: "#fff",
                fontFamily: 'Helvetica',
                fontStyle: 'normal',
                fontWeight: 900,
                fontSize: '14px',
                lineHeight: '20px',
              }}>
                $ 12,504
              </Typography>
            </Button>

            {/* User name */}
            <Typography sx={{
              color: "#fff",
              fontFamily: 'Helvetica',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '20px',
            }}>
              TJStudio @ TJStudio
            </Typography>

            {/* Level */}
            <Typography sx={{
              color: "#58627A",
              fontFamily: 'Helvetica',
              fontStyle: 'normal',
              fontWeight: 900,
              fontSize: '12px',
              lineHeight: '16px',
            }}>
              Level 1337
            </Typography>
          </Stack>
        </Stack>

        {/* Hash Value */}
        <Stack>
          <TextField
            id="hash-value"
            multiline={true}
            value={
              `Hash: ${hashvalue} 
              Secret: ${secret} 
              Winning Ticket: ${winningTicket}`
            }
            // onChange={handleChange}
            InputProps={{
              className: classes.root,
              startAdornment: "Provably Fair Data",
              endAdornment: <ContentCopyIcon style={{ cursor: 'pointer' }} />,
            }}
            style={{
              marginTop: '16px',
              color: '#8690A7',
              background: '#1B2437',
              borderRadius: '4px',
              width: '100%',
            }}
          />
        </Stack>
      </DialogContent>
    </BootstrapDialog >
  );
}

Winner.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Winner
