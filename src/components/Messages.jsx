import React, { useEffect, useState } from 'react'
import Message from './Message'
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore'
import { db } from "../firebase.js";
import  { useDispatch, useSelector } from 'react-redux'
import { setEmails } from './redux/appSlice.js';
const Messages = () => {
  const dispatch = useDispatch();
  const {searchText,emails} = useSelector(store=>store.appSlice);
  const[tempEmails,setTempEmails] = useState(emails)
  useEffect(()=>{
    const q = query(collection(db,"emails"),orderBy('createdAt','desc'));
    const unsubscribe = onSnapshot(q,(snapshot)=>{
      const allEmails = snapshot.docs.map((doc)=>({...doc.data(),id:doc.id}));
      // console.log(allEmails);
      dispatch(setEmails(allEmails))
    })
    return ()=>unsubscribe();
  },[]);
  useEffect(()=>{
    const filterdEmail = emails?.filter((email)=>{
      return (
        email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.to?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.message?.toLowerCase().includes(searchText.toLowerCase())
      );
    })
    setTempEmails(filterdEmail);
  },[searchText,emails])
  return (
    <div>
      {tempEmails && tempEmails?.map((email) => <Message email={email} />)}
    </div>
  );
}

export default Messages
