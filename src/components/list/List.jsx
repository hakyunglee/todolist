import React from "react";
import "./style.css";

const List = ({ users, onRemove, onToggle }) => {
  console.log(users);

  return (
    <div className="list-container">
      <div className="working">
        <h2>Working.. 🔥</h2>
        {users.map((a) => {
          if (!a.isDone) {
            return (
              <div className="todo-container" key={a.id} done="false">
                <h2>{a.title}</h2>
                <p>{a.body}</p>
                <button
                  className="todo-delete-button button"
                  onClick={() => {
                    onRemove(a.id);
                  }}
                >
                  삭제하기
                </button>
                <button
                  className="todo-complete-button button"
                  onClick={() => {
                    onToggle(a.id);
                  }}
                >
                  완료
                </button>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="Done">
        <h2>Done..!</h2>
      </div>
      {users.map((a) =>
        a.isDone === true ? (
          <div className="todo-container" key={a.id}>
            <h2>{a.title}</h2>
            <p>{a.body}</p>
            <button
              className="todo-delete-button button"
              onClick={() => {
                onRemove(a.id);
              }}
            >
              삭제하기
            </button>
            <button
              className="todo-complete-button button"
              onClick={() => {
                onToggle(a.id);
              }}
            >
              취소
            </button>
          </div>
        ) : null
      )}

    </div>
  );
};

export { List };
