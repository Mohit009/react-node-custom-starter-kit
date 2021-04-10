import Head from 'next/head'
import FormikTest from "./components/FormikTest";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";

//material-ui styled components
const useStyles = makeStyles({
  main: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        Welcome to Kartik-Mohit
        <FormikTest />
      </main>

      <footer >
        
      </footer>
    </div>
  )
}
