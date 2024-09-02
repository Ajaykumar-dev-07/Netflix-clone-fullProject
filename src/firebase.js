import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcq3f4hZ1yrHM2yxMTYSkFzC0wynUNpjY",
  authDomain: "netflix-clone-81455.firebaseapp.com",
  projectId: "netflix-clone-81455",
  storageBucket: "netflix-clone-81455.appspot.com",
  messagingSenderId: "204383127659",
  appId: "1:204383127659:web:8133e5b40fbcea038b092e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
    try {
       const res= await createUserWithEmailAndPassword(auth,email,password);
       const user=res.user;
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name ,
        authProvider:"local",
        email
       });
    } catch (error) {
        console.log(error);
        alert(error);
    }
  
}

const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
        
    } catch (error) {
        console.log(error);
        alert(error);
    }
  
}

const logOut=async()=>{
    try {
        await signOut(auth);
    } catch (error) {
        alert(error);
    }
   
    
}

export {auth,db,signup,login,logOut}