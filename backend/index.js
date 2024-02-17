const express= require('express')
const admin=require('firebase-admin')
const cors=require('cors')
const app=express()
const port = 5000;
const acc=require('./firebase.json')
app.use(cors())
admin.initializeApp({
    credential: admin.credential.cert(acc),
    databaseURL: 'https://drone-cc292.firebaseio.com'
  });
  

app.get('/requests', (req,res)=>{
    const usersCllection=admin.firestore().collection('users')
    usersCllection.get()
    .then(snapshot=>{
        const users=[]
        snapshot.forEach(doc=>{
            console.log(doc.id, doc.data())
            if(doc.data().location){
                users.push({
                    id: doc.id,
                    data: doc.data()
                })
            }
        })
        res.json(users)
    })
    .catch(err=> {console.log(err)
    res.json("Error")
    })
})

app.listen(port, ()=>{
    console.log('Server is running');
})