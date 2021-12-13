import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { makeStyles } from '@material-ui/core';
import { styled } from '@mui/material/styles'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Stack, TextField } from '@mui/material'

import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { withStyles } from '@material-ui/core'

import CloseIcon from '@mui/icons-material/Close'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Info(props) {
  const { onClose, open } = props;
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
      fontFamily: 'Lato',
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
      color: '#8690A7'
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
        <TitleColor> Provably Fair Information ID #162  </TitleColor>
      </BootstrapDialogTitle>
      <DialogContent >
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

Info.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Info
