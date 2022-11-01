import { useCallback, useRef, useState } from 'react'
import styles from '../../styles/Home.module.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';

export default function ExploreFunds() {
  return (
    <div className={styles.container}>
      <h1>ExploreFunds</h1>
      <Typography variant="body1">
        Top Performers
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <div className={styles.card}>
            <div className={styles.flex}>
              <Avatar>H</Avatar>
              <p>Fund</p>
            </div>
            <AvatarGroup max={4}>
              <Avatar>H</Avatar>
              <Avatar>H</Avatar>
              <Avatar>H</Avatar>
            </AvatarGroup>
            <p className={styles.margin0}>USD 3500.96</p>
            <p className={styles.greenPrice}>+121.37 (3.46%)</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={styles.card}>
            <div className={styles.flex}>
              <Avatar>H</Avatar>
              <p>Fund</p>
            </div>
            <AvatarGroup max={4}>
              <Avatar>H</Avatar>
              <Avatar>H</Avatar>
              <Avatar>H</Avatar>
            </AvatarGroup>
            <p className={styles.margin0}>USD 3500.96</p>
            <p className={styles.redPrice}>-54.62 (3.21%)</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={styles.card}>
            <div className={styles.flex}>
              <Avatar>H</Avatar>
              <p>Fund</p>
            </div>
            <AvatarGroup max={4}>
              <Avatar>H</Avatar>
              <Avatar>H</Avatar>
              <Avatar>H</Avatar>
            </AvatarGroup>
            <p className={styles.margin0}>USD 3500.96</p>
            <p className={styles.redPrice}>-54.62 (3.21%)</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={styles.card}>
            <div className={styles.flex}>
              <Avatar>H</Avatar>
              <p>Fund</p>
            </div>
            <AvatarGroup max={4}>
              <Avatar>H</Avatar>
              <Avatar>H</Avatar>
              <Avatar>H</Avatar>
            </AvatarGroup>
            <p className={styles.margin0}>USD 3500.96</p>
            <p className={styles.redPrice}>-54.62 (3.21%)</p>
          </div>
        </Grid>
      </Grid>
      <div className={styles.table}>
        <h3>All Funds</h3>
        <Divider light />
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <div className={styles.flexJustbetweenspace }>
              <div className={styles.flex}>
                <Avatar>H</Avatar>
                <p>Fund</p>
              </div>
              <p>+121.37 (3.46%)</p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.flexJustbetweenspace }>
              <div className={styles.flex}>
                <Avatar>H</Avatar>
                <p>Fund</p>
              </div>
              <p>+121.37 (3.46%)</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
