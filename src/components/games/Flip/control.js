import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { Stack, TextField, MenuItem, InputBase } from '@mui/material'

// Modal
import CreationModal from '../../modals/creation'

// Icon
import SearchIcon from '@mui/icons-material/Search';

// Styled Components
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.35),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.45),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '35ch',
      },
    },
  },
}));

const Statistics = ({ isAuthenticated }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  const [currency, setCurrency] = React.useState(-1);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const statuses = [
    // All Status
    {
      value: -1,
      label: 'All',
    },
    // open bets
    {
      value: 0,
      label: 'Open bets',
    },
    // In progress
    {
      value: 1,
      label: 'In progress',
    },
    // closed bets
    {
      value: 2,
      label: 'Closed bets',
    },
  ];

  return (
    <Stack
      direction={{ md: 'row', xs: 'column' }}
      justifyContent={isDesktop ? 'space-between' : 'center'}
      alignItems="center"
      sx={{
        background: 'rgb(255, 255, 255, 0.4)',
        padding: '15px',
        borderRadius: '5px',
      }}
    >
      {/* Filtering status */}
      <Stack>
        <TextField
          id="outlined-select-status"
          select
          label="Status"
          value={currency}
          onChange={handleChange}
          sx={{
          }}
        >
          {statuses.map((status) => (
            <MenuItem key={status.value} value={status.value}>
              {status.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Stack>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search user…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Stack>
      <Stack>
        <CreationModal />
      </Stack>
    </Stack>
  )
}

Statistics.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Statistics)
