import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { makeStyles } from '@material-ui/core';
import { styled } from '@mui/material/styles'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Stack, TextField } from '@mui/material'

import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { withStyles } from '@material-ui/core'

import CloseIcon from '@mui/icons-material/Close'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Deposit(props) {
  const { onClose, open } = props;
  let siteWallet = "0x300...89"

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  const handleClose = () => {
    onClose();
  };

  // Set TextField's Color
  const useStyles = makeStyles({
    root: {
      color: '#fff',
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '20px',
      width: '100%',
      borderRadius:'4px',
      "& .MuiDialog-paperScrollPaper": {
        background: 'red',
        borderRadius: '4px'
      }
    }
  })
  const classes = useStyles()

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

  const TitleColor = withStyles({
    root: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: '16px',
      lineHeight: '24px',
      background: "-webkit-linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  })(Typography)

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
        <TitleColor> Deposit Funds </TitleColor>
      </BootstrapDialogTitle>
      <DialogContent >
        <Stack direction="row" mt={2}>
          <Button variant="contained" sx={{
            background: '#222C42',
            borderRadius: '4px',
            marginRight: '10px',
            padding: '10px 20px'
          }}>
            <img src='/assets/btc.png' alt="bitcoin" style={{ width: '18px', height: '18px', marginRight: '8px', }} />
            BTC
          </Button>
          {/* <Button variant="contained" sx={{
            background: '#222C42',
            borderRadius: '4px',
            opacity: '0.5'
          }}>
            <img src='/assets/eth.png' alt="bitcoin" style={{ width: '18px', height: '18px', marginRight: '8px', }} />
            ETH
          </Button> */}
        </Stack>
        <Stack>
          <TextField
            id="bet-amount"
            value={siteWallet}
            // onChange={handleChange}
            InputProps={{
              className: classes.root,
              endAdornment: <ContentCopyIcon style={{ cursor: 'pointer' }} />,
            }}
            style={{
              marginTop: '16px',
              color: '#fff',
              background: '#1B2437',
              borderRadius: '4px',
              width: '100%'
            }}
          />
        </Stack>
        <Stack direction="row" mt={'16px'} spacing={2}>
          <img src='/assets/QR.png' alt="QR Code" style={{
            background: '#FFFFFF',
            borderRadius: '6px',
            width: '55px',
            height: '55px'
          }} />
          <Typography sx={{
            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '20px',
            color: '#8690A7',
          }}>
            Only send BTC to this address, 1 Confirmation is required until funds are credited.
          </Typography>
        </Stack>
      </DialogContent>
    </BootstrapDialog >
  );
}

Deposit.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Deposit
