import { useCallback, useRef, useState, useEffect } from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import PieGraph from './PieGraph'
import './CreateTokens.css'
import blue from '../../images/blue.png'
import yellow from '../../images/yellow.png'
import green from '../../images/green.png'
export default function Step2({
  setActiveStep,
  tokenname,
  asset1,
  asset2,
  asset3,
  setasset1,
  setasset2,
  setasset3,
  percent1,
  percent2,
  percent3,
  setpercent2,
  setpercent3,
  setpercent1,
  createFund,
}) {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.9),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    maxWidth: '700px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    color: 'black',
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      maxWidth: '700px',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }))

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div>
      <div className="stepheader">
        <p className="step-title">Select Assets</p>
        <p className="step-subtitle" style={{ marginTop: '-1rem' }}>
          These will be the underlying assets of your fund
        </p>
      </div>

      <Search style={{ background: 'rgba(255, 255, 255, 0.9)', width: '586px', marginTop: '1.6rem' }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search to select..." inputProps={{ 'aria-label': 'search' }} />
      </Search>
      <div className="input-container">
        <br />
        <br />
        <br />
        <br />
        <input
          className="input-dashes"
          placeholder="Asset 1 of 3"
          value={asset1}
          onChange={(e) => setasset1(e.target.value)}
        />
        <input
          className="input-dashes"
          placeholder="Asset 2 of 3"
          value={asset2}
          onChange={(e) => setasset2(e.target.value)}
        />
        <input
          className="input-dashes"
          placeholder="Asset 3 of 3"
          value={asset3}
          onChange={(e) => setasset3(e.target.value)}
        />
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="stepheader">
        <p className="step-title">Select Percentages</p>
        <p className="step-subtitle">This will define the distribution of your fund </p>
      </div>

      <br />
      <br />

      <div className="indexdetailsbox">
        <p>{tokenname}</p>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <PieGraph assets={[percent1, percent2, percent3]} />
          </Grid>
          <Grid item xs={4}>
            <div className="">
              <div className="centerflex">
                <img src={blue} alt="blue" style={{ marginRight: '10px' }} />
                <p> Asset number 1</p>
              </div>

              <div>
                <input
                  className="percentage-input"
                  placeholder="percent1"
                  value={percent1}
                  onChange={(e) => setpercent1(e.target.value)}
                />
              </div>
            </div>

            <br />
            <br />

            <div className="">
              <div className="centerflex">
                <img src={green} alt="blue" style={{ marginRight: '10px' }} />
                <p> Asset number 2</p>
              </div>
              <div>
                <input
                  className="percentage-input"
                  placeholder="percent3"
                  value={percent3}
                  onChange={(e) => setpercent3(e.target.value)}
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="">
              <div className="centerflex">
                <img src={yellow} alt="blue" style={{ marginRight: '10px' }} />
                <p> Asset number 2</p>
              </div>

              <div>
                <input
                  className="percentage-input"
                  style={{ marginLeft: '2rem' }}
                  placeholder="percent2"
                  value={percent2}
                  onChange={(e) => setpercent2(e.target.value)}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
      <br />

      <center>
        {/* <Button variant="contained" style={{ backgroundColor: '#2e5422' }} size="large" onClick={handleBack}>
          Back
        </Button> */}
        <Button variant="contained" className="step-btn" size="large" onClick={createFund}>
          Create Fund
        </Button>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
