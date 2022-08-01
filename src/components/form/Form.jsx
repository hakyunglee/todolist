import React, { useState, useRef } from "react";
import "./style.css"
import { List } from "../list/List";


const Form = () => {
    const [inputs, setInputs] = useState({
        title: "",
        body: "",
      });
    const [users, setUsers] = useState([
        {
          id: 1,
          title: "리액트",
          body: "리액트 공부를 합시다",
          isDone: false
        },
      ]);
      
    const { title, body } = inputs;
    const nextId = useRef(4);
    
    const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
        ...inputs,
        [name]: value,
    });
    };
    
      const onCreate = () => {
        const user = {
          id: nextId.current,
          title,
          body,
        };
    
        setUsers([...users, user]);
    
        setInputs({
          title: "",
          body: "",
          isDone: false
        });
        nextId.current += 1;
        
    }

    const onRemove = (id) => {
      setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
      setUsers(
          users.map((user) =>
          user.id === id ? { ...user, isDone: !user.isDone } : user
          )
      );
  };


    
    return (
        <>
            <div className="form-box">
                <input
                    type = 'text'
                    value={title}
                    placeholder="title"
                    name="title"
                    onChange={onChange}
                />
                <input
                    type = 'text'
                    value={body}
                    placeholder="body"
                    name="body"
                    onChange={onChange}
                />
                <button className="btn1" onClick={onCreate}>추가하기</button>
        
            </div>
        <List users={users} tilte={title} body={body} setUsers={setUsers} onChange={onChange} onToggle={onToggle} onRemove={onRemove} onCreate={onCreate} />
        </>
        
   )
    }

  export {Form};
