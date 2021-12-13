import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Stack, Button } from '@mui/material'

import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { withStyles } from '@material-ui/core'

import CloseIcon from '@mui/icons-material/Close'

function CommisionWallets(props) {
  const { onClose, open } = props;

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  const handleClose = () => {
    onClose();
  };

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
      sx={{ width: isDesktop ? '641px' : '350px', margin: 'auto', marginTop: isDesktop ? '-220px' : '100px' }
      }
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      >
        <TitleColor> Anakin Player Stats  </TitleColor>
      </BootstrapDialogTitle>
      <DialogContent >
        {/* Total Wagered / SteamId */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            mt: 2,
            background: '#141A2B',
            padding: '10px'
          }}
        >
          <Typography sx={{
            fontFamily: 'Lato',
            fontWeight: 900,
            fontStyle: 'normal',
            fontSize: '9px',
            lineHeight: '10.8px',
            color: '#fff'
          }}
          >
            Total Wagered
          </Typography>
          <Typography sx={{
            fontFamily: 'Lato',
            fontWeight: 900,
            fontStyle: 'normal',
            fontSize: '9px',
            lineHeight: '10.8px',
            color: '#fff'
          }}
          >
            Steam ID
          </Typography>
        </Stack>
        {/* Amount / SteamId */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            mt: 2,
            background: '#141A2B',
            padding: '10px'
          }}
        >
          <Typography sx={{
            fontFamily: 'Lato',
            fontWeight: 900,
            fontStyle: 'normal',
            fontSize: '9px',
            lineHeight: '10.8px',
            color: '#fff'
          }}
          >
            0.2983 BTC
          </Typography>
          <Typography sx={{
            fontFamily: 'Lato',
            fontWeight: 900,
            fontStyle: 'normal',
            fontSize: '9px',
            lineHeight: '10.8px',
            color: '#fff'
          }}
          >
            https://steamcommunity.com/profiles/76561198111383457
          </Typography>
        </Stack>
        {/* Total Deposit */}
        <Stack
        direction="row"
          spacing={1}
          justifyContent="space-between"
          sx={{
            mt: 2
          }}
        >
          <Stack
            spacing={5}
            alignItems="center"
            justifyContent="center"
            sx={{
              background: '#141A2B',
              padding: '10px',
              width: '150px'
            }}
          >
            <Typography sx={{
              fontFamily: 'Lato',
              fontWeight: 900,
              fontStyle: 'normal',
              fontSize: '9px',
              lineHeight: '10.8px',
              color: '#fff'
            }}
            >
              Total Deposit
            </Typography>
            <Typography sx={{
              fontFamily: 'Lato',
              fontWeight: 900,
              fontStyle: 'normal',
              fontSize: '9px',
              lineHeight: '10.8px',
              color: '#fff'
            }}
            >
              0.0232 BTC
            </Typography>
          </Stack>
          <Button
            variant="contained"
            className="ban_btn"
            style={{
              color: '#fff',
              borderRadius: '4px',
              fontSize: '9px',
              lineHeight: '10.8px',
              fontWeight: '900',
              background: 'url(/assets/btn_bg.png), linear-gradient(0deg, #B01010 18.75%, rgba(255, 118, 118, 0.65) 100%)',
              fontFamily: 'Lato',
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
              width: '150px',
              height: '32px',
              padding: '10px 18px'
            }}
          >
            BAN 1 HOUR
          </Button>
          <Button
            variant="contained"
            className="ban_btn"
            style={{
              color: '#fff',
              borderRadius: '4px',
              fontSize: '9px',
              lineHeight: '10.8px',
              fontWeight: '900',
              background: 'url(/assets/btn_bg.png), linear-gradient(0deg, #B01010 18.75%, rgba(255, 118, 118, 0.65) 100%)',
              fontFamily: 'Lato',
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
              width: '150px',
              height: '32px',
              padding: '10px 18px'
            }}
          >
            BAN 6 HOUR
          </Button>
          <Button
            variant="contained"
            className="ban_btn"
            style={{
              color: '#fff',
              borderRadius: '4px',
              fontSize: '9px',
              lineHeight: '10.8px',
              fontWeight: '900',
              background: 'url(/assets/btn_bg.png), linear-gradient(0deg, #B01010 18.75%, rgba(255, 118, 118, 0.65) 100%)',
              fontFamily: 'Lato',
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
              width: '150px',
              height: '32px',
              padding: '10px 18px'
            }}
          >
            BAN 24 HOUR
          </Button>
          <Button
            variant="contained"
            className="ban_btn"
            style={{
              color: '#fff',
              borderRadius: '4px',
              fontSize: '9px',
              lineHeight: '10.8px',
              fontWeight: '900',
              background: 'url(/assets/btn_bg.png), linear-gradient(0deg, #10B07A 18.75%, #10E57A 100%)',
              fontFamily: 'Lato',
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
              width: '150px',
              height: '32px',
              padding: '10px 18px'
            }}
          >
            UNBAN
          </Button>
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
