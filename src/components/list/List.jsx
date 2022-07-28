import React from "react";
import "./style.css"


const List = ({users, onRemove, onToggle}) => {
    
    

     
   console.log(users)
    

    return (
        <div className="list-container">
            <div className="working">
                <h2>Working.. 🔥</h2>
                {
                users.map((a)=>{
                    return (
                        (<div className="todo-container" key={a.id} done="false">
                        <h2>{a.title}</h2>
                        <p>{a.body}</p>
                        <button className="todo-delete-button button" onClick={()=>{onRemove(a.id)}}>삭제하기</button>
                        <button className="todo-complete-button button"onClick={()=> {onToggle(a.id)}}>완료</button>
                        </div> ) 
                    )
                })
                
                }
            </div>         

            <div className="Done">
                <h2>Done..!</h2>
            </div>   
            {
            users.map(a=>(a.isDone ===true ?(<div className="todo-container" key={a.id} >
                <h2>{a.title}</h2>
                <p>{a.body}</p>
                <button className="todo-delete-button button" onClick={()=>{onRemove(a.id)}}>삭제하기</button>
                <button className="todo-complete-button button"onClick={()=> {onToggle(a.id)}}>취소</button>
                </div> ):null
                ))
                
                }
        

         
                {/* <div className="list-wrapper">
                    <div className="todo-container">
                        <div>
                            <h2 className="todo-title">리액트 공부하기</h2>
                            <div>리액트 기초를 공부해봅시다.</div>
                        </div>
                        <div>
                            <button className="todo-delete-button button">삭제하기</button>
                            <button className="todo-complete-button button">취소</button>
                        </div>
                    </div>
                </div> */}
            
        </div>
        
    );
        
}

  export {List};



//   {users.map ((a) => {
//     return (
//         <div key={a.Id} className="todo-container">
//             <div>
//                 <h2 className="todo-title">{a.title}</h2>
//                 <div>{a.body}</div>
//             </div>
//             <div>
//                 <button className="todo-delete-button button" onClick={() => {onRemove(a.id)}}>삭제하기</button>
//                 <button className="todo-complete-button button" onClick={()=>{onToggle(a.id)}}>완료</button>
//             </div>
//         </div>
//     );
// })

// }

// (<div className="todo-container" key={a.id}>
//                 <h2>{a.title}</h2>
//                 <p>{a.body}</p>
//                 <button className="todo-delete-button button" onClick={()=>{onRemove(a.id)}}>삭제하기</button>
//                 <button className="todo-complete-button button"onClick={()=> {onToggle(a.id)}}>완료</button>
//                 </div> )