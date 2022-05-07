const Item = ({id,user,title, note, deleteData}) => {

function deleteItem(){
 
    
deleteData(function(prev){
    return prev.filter(item => item.id !== id)
})
}

    return( <div className="item col-md-6 p-3">
<div> 
    <h4>Title: {title}</h4>
    <p>Posted By {user}</p>
    <p>Note: {note}</p>
  
</div>

<button type="button" onClick = {deleteItem} className ="btn btn-outline-danger">Delete </button>
    </div>
    )
}
export default Item