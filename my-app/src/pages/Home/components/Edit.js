import { useState } from "react"
import {v4} from 'uuid'

const Edit = ({ add }) => {
    const[user,setUser] = useState("")
    function userChange(e){
        setUser(e.target.value)
    }
    const[title,setTitle] = useState("")
    function titleChange(e){
        setTitle(e.target.value)
    }
    const[note,setNote] = useState("")
    function noteChange(e){
        setNote(e.target.value)
    }

    function addItem(){
        add(function(prevData){
            return [
            {
                id: v4(),
                user,title,note
            },
            ...prevData,]
    })
}

    console.log(user,title, note);

    return <div className="container">
                <div className="row" >
                    <div class="col-md-6 mb-4">
        <h1>React Blog</h1>
        <div className="mb-2">
        <p>User</p>
        <input type = "text" value = {user} onChange = {userChange}></input>
        <p>Title</p>
        <input type = "text" value = {title} onChange = {titleChange}></input>
        <p>Note</p>
        <input type = "text" value = {note} onChange = {noteChange}></input>
        <p> </p>
        <div className="d-grid gap-2">
        <button onClick ={addItem} className="btn btn-outline-dark">Add</button>
        </div>
        </div>
        </div>
        </div>
    </div>
}
export default Edit