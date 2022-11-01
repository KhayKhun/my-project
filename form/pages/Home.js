import React, { useEffect, useState } from 'react';
import {storage} from '../firebase'
import {uploadBytes,ref,listAll,getDownloadURL} from 'firebase/storage'

export default function Home() {
  return (
    <>
    <h1>This is home</h1>    
    </>
  )
}
