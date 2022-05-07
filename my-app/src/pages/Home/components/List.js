import Item from './Item'

const List = ({ listData, deleteData }) => {
    // console.log('listData', listData)
    return(
     <div className="list">
        {
            listData.map((item) =>{
            const{userId,title, body, id} = item
            return( 
            <Item 
            key = {id} 
            id = {id}
            user = {userId}
            title = {title}
            note = {body}  
            deleteData = {deleteData}
         
            />
            )
        })}
    </div>
    )
}
export default List