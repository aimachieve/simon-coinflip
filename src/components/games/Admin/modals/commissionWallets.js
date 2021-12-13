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

function CommisionWallets(props) {
  const { onClose, open } = props;

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
        <TitleColor> Commision Wallets  </TitleColor>
      </BootstrapDialogTitle>
      <DialogContent >
        <Stack
          direction="row"
          mt={2}
          // justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            sx={{
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: 900,
              fontSize: '10px',
              lineHeight: '16px',
              alignItems: 'center',
              color: '#ffffff',
              width: 'auto'
            }}
          >
            12.093BTC
          </Typography>
          <TextField
            multiline={true}
            value="COMMISSION WALLET ADDRESS"
            // onChange={handleChange}
            InputProps={{
              className: classes.root,
              endAdornment: <ContentCopyIcon style={{ cursor: 'pointer' }} />,
            }}
            style={{
              color: '#FFFFFF',
              background: '#1B2437',
              borderRadius: '4px',
              width: '100%'
            }}
          />
        </Stack>
        <Stack
          direction="row"
          mt={2}
          // justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            sx={{
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: 900,
              fontSize: '10px',
              lineHeight: '16px',
              alignItems: 'center',
              color: '#ffffff',
              width: 'auto'
            }}
          >
            12.093BTC
          </Typography>
          <TextField
            multiline={true}
            value="COMMISSION WALLET ADDRESS"
            // onChange={handleChange}
            InputProps={{
              className: classes.root,
              endAdornment: <ContentCopyIcon style={{ cursor: 'pointer' }} />,
            }}
            style={{
              color: '#FFFFFF',
              background: '#1B2437',
              borderRadius: '4px',
              width: '100%'
            }}
          />
        </Stack>
        <Stack
          direction="row"
          mt={2}
          // justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            sx={{
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: 900,
              fontSize: '10px',
              lineHeight: '16px',
              alignItems: 'center',
              color: '#ffffff',
              width: 'auto'
            }}
          >
            12.093BTC
          </Typography>
          <TextField
            multiline={true}
            value="COMMISSION WALLET ADDRESS"
            // onChange={handleChange}
            InputProps={{
              className: classes.root,
              endAdornment: <ContentCopyIcon style={{ cursor: 'pointer' }} />,
            }}
            style={{
              color: '#FFFFFF',
              background: '#1B2437',
              borderRadius: '4px',
              width: '100%'
            }}
          />
        </Stack>
        <Stack
          direction="row"
          mt={2}
          // justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            sx={{
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: 900,
              fontSize: '10px',
              lineHeight: '16px',
              alignItems: 'center',
              color: '#ffffff',
              width: 'auto'
            }}
          >
            12.093BTC
          </Typography>
          <TextField
            multiline={true}
            value="COMMISSION WALLET ADDRESS"
            // onChange={handleChange}
            InputProps={{
              className: classes.root,
              endAdornment: <ContentCopyIcon style={{ cursor: 'pointer' }} />,
            }}
            style={{
              color: '#FFFFFF',
              background: '#1B2437',
              borderRadius: '4px',
              width: '100%'
            }}
          />
        </Stack>
      </DialogContent>
    </BootstrapDialog >
  );
}

CommisionWallets.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default CommisionWallets
