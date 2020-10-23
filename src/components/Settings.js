import React, { Component } from 'react'
// import { jsonfile } from 'jsonfile';
import { Button } from '@material-ui/core'
const jsonfile = require('jsonfile');

function Settings() {
    // const file = 'data.json';
    // let text = '';

//     const readFile = () => {
//         jsonfile.readFile(file, function (err, obj) {
//         if (err) console.error(err)
//         console.dir(obj)
// })
//     }

    const file = 'data.json'
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  console.dir(obj)
})



    return (
        <>


        </>
    );
  }

  export default Settings;