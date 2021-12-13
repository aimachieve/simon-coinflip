import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles'
import { Button, Typography, useMediaQuery, Stack } from '@mui/material'

import { SiDiscord } from 'react-icons/si';
import TwitterIcon from '@mui/icons-material/Twitter';

import TermsModal from '../modals/terms'
import FirnessModal from '../modals/fairness'

const Footer = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const [openTerms, setOpenTerms] = React.useState(false)
  const [openFirness, setOpenFairness] = React.useState(false)
  
  const handleOpenTerms = () => {
    setOpenTerms(true)
  }
  const handleOpenFairness = () => {
    setOpenFairness(true)
  }
  const handleClose = (value) => {
    setOpenTerms(false)
    setOpenFairness(false)
  }

  useEffect(() => {
    async function fetchData() {
      // You can await here
    }
    fetchData()
  }, [])

  if (isDesktop) {
    return (
      <footer className="footer">
        <Stack
          direction="row"
          justifyContent={isDesktop ? 'space-between' : 'center'}
          flexWrap="wrap"
        >
          <Stack direction="row">
            <Link to="/">
              <Typography
                style={{
                  color: '#58627A',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '100%',
                  fontFamily: 'Oxanium',
                  letterSpacing: '0.02em'
                }}
              >
                DICED
                <span
                  style={{
                    color: '#58627A',
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '100%',
                    fontFamily: 'Oxanium',
                  }}
                >
                  .GG
                </span>
              </Typography>
            </Link>
            <Link to='/'>
              <SiDiscord style={{
                color: '#58627A',
                width: '20px',
                height: '20px',
              }} />
            </Link>
            <Link to='/'>
              <TwitterIcon style={{
                color: '#58627A',
                width: '20px',
                height: '20px',
              }} />
            </Link>
          </Stack>
          <Stack direction="row">
            <Stack justifyContent="flex-start">
              <Button variant="text" onClick={handleOpenTerms} sx={{
                color: "#58627A",
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '12px',
                lineHeight: '16px',
              }}>
                Terms of Service
              </Button>
            </Stack>
            <Stack justifyContent="flex-start">
              <Button variant="text" onClick={handleOpenFairness} sx={{
                color: "#58627A",
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '12px',
                lineHeight: '16px',
              }}>
                Fairness
              </Button>
            </Stack>
            <Stack justifyContent="flex-start" sx={{marginLeft: '40px'}}>
              <Button variant="text" sx={{
                color: "#58627A",
                fontFamily: 'Lato',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '12px',
                lineHeight: '16px',
              }}>
                Copyright © 2021 Diced.gg
              </Button>
            </Stack>
          </Stack >
        </Stack >
        <TermsModal
          open={openTerms}
          onClose={handleClose}
        />
        <FirnessModal
          open={openFirness}
          onClose={handleClose}
        />
      </footer >
    )
  } else {
    return (
      <footer className="container">
        <Stack direction="row">
          <Link to="/">
            <Typography
              style={{
                color: '#ffffff',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '100%',
                fontFamily: 'Oxanium',
                letterSpacing: '0.02em'
              }}
            >
              DICED
              <span
                style={{
                  color: '#10E57A',
                  fontSize: '18px',
                  fontWeight: 600,
                  lineHeight: '100%',
                  fontFamily: 'Oxanium',
                }}
              >
                .GG
              </span>
            </Typography>
          </Link>
        </Stack>
      </footer>
    )
  }
}

export default Footer
