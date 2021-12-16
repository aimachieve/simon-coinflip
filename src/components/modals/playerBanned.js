import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles'

import {
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material'

import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { withStyles } from '@material-ui/core'

// Icons
import CloseIcon from '@mui/icons-material/Close'

function Fairness(props) {
  const { onClose, open } = props;

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  const handleClose = () => {
    onClose();
  };

  // Custom BootstrapDialog
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

  // Styled Typography
  const TitleColor = withStyles({
    root: {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: '16px',
      lineHeight: '24px',
      background: "-webkit-linear-gradient(0deg, #B01010 18.75%, #FF7E7E 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  })(Typography)

  return (
    < BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{ 
        width: isDesktop ? '641px' : '350px', 
        margin: 'auto', 
        marginTop: isDesktop ? '0px' : '80px' 
      }}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      >
        <TitleColor> PLAYER BANNED </TitleColor>
      </BootstrapDialogTitle>
      <DialogContent >
        <Typography sx={{
          fontFamily: 'Helvetica',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#8690A7',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          PLAYER HAS BEEN BANNED. PLEASE WAIT FOR UNBAN TIMER BELOW. 
        </Typography>
        <Typography sx={{
          fontFamily: 'Helvetica',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '20px',
          color: '#ffffff',
          marginTop: '20px',
          textAlign: 'center'
        }}>
          19:29:00 
        </Typography>
      </DialogContent>
    </BootstrapDialog >
  );
}

Fairness.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Fairness
