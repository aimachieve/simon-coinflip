import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core'

import {
  Stack,
  TextField,
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

// Icons
import CloseIcon from '@mui/icons-material/Close'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Modals
import JoinFlipModal from './joinFlip'

function JoinGame(props) {
  const { onClose, open } = props;
  let hashvalue = "27ys892h9sg2s92s8zg9zhz8gs9zh98zg"

  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  // const [selected, setSelected] = useState('heads')
  let selected = 'heads'

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

  return (
    < BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        width: isDesktop ? '541px' : '350px',
        margin: 'auto',
        marginTop: isDesktop ? '-220px' : '100px'
      }}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      >
        <TitleColor> Coinflip Round </TitleColor>
      </BootstrapDialogTitle>
      <DialogContent >
        <Stack
          direction="row"
          mt={2}
          justifyContent='space-around'>
          {/* First Player */}
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <img
              src="/assets/default_avatar.png"
              alt="avatar"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                border: '1px solid',
                borderImage: 'linear-gradient(0deg, #10B07A 100%, #10E57A 100%)',
                background: 'linear-gradient(0deg, #10B07A 100%, #10E57A 100%)',
                borderImageSlice: 1
              }} />
            {
              selected === 'heads' ?
                <img src="/assets/top_head.png" alt="prefix" style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '16px',
                  position: 'absolute',
                  top: '60px',
                  left: '130px',
                }} /> :
                <img src="/assets/top_tail.png" alt="prefix" style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '16px',
                  position: 'absolute',
                  top: '60px',
                  left: '130px',
                }} />
            }

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
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '20px',
              }}>
                $ 12,504
              </Typography>
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

          {/* Second Player */}
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              style={{
                width: '48px',
                height: '48px',
                background: '#1B2437',
                borderRadius: '16px',
                border: '1.5px solid #58627A',
              }}>
              <img src="/assets/tail-spin.svg" alt="loader" style={{
                width: '14px',
                height: '14px',
                borderImageSlice: 1,
              }} />
            </Stack>

            <Button variant="contained" sx={{
              background: '#1B2437',
              borderRadius: '6px',
              marginRight: '10px',
              padding: '8px 32px',
              border: '1px solid #232D43',
              boxSizing: 'border-box'
            }}>
              <Typography sx={{
                color: "#8690A7",
                fontFamily: 'Helvetica',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '20px',
              }}>
                ...Waiting
              </Typography>
            </Button>

            {/* Modal */}
            <JoinFlipModal
              closeOldModal={handleClose}
              selected={selected}
            />
          </Stack>
        </Stack>

        {/* Hash value */}
        <Stack>
          <TextField
            id="hash-value"
            value={`Hash: ${hashvalue}`}
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

JoinGame.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default JoinGame
