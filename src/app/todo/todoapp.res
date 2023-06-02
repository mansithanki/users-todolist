@@directive("'use client';")


type todo = {
  id: int,
  title: string,
  isDone: bool,
};

type state = { todoList: array<todo>, inputValue: string };

let initialState: state = {
  todoList: [],
  inputValue: "",
};

type actions =
  | AddTodo
  | ClearTodos
  | InputChanged(string)
  | MarkDone(int);

let reducer = (state, action) =>
  switch (action) {
  | AddTodo =>
    {
      inputValue: "",
      todoList: state.todoList->Js.Array2.concat([
        {
          id: Js.Array2.length(state.todoList)+200,
          title: state.inputValue,
          isDone: false,
        },
      ]),
    }
  | ClearTodos =>
    {
      ...state,
      todoList: [],
    }
  | InputChanged(newValue) =>
    {
      ...state,
      inputValue: newValue,
    }
  | MarkDone(index) =>
    {
      ...state,
      todoList: state.todoList->Belt.Array.mapWithIndex((i, todo) =>
        if (i == index) {
          {
            ...todo,
            isDone: !todo.isDone,
          }
        } else {
          todo
        }
      ),
    }
  };

@react.component
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, initialState);

  let handleInput = e => {
    let newValue = ReactEvent.Form.target(e)["value"];
    dispatch(InputChanged(newValue));
  };

  <div className="App bg-gray-200 min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-2xl mb-4 inline-block"> {"Todo Items"->React.string} </h1>
    <input className="border border-gray-800 rounded px-2 py-1 mb-2" value={state.inputValue} type_="text" onChange={handleInput} />
    <div className="inline-block">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-1" onClick={_ => dispatch(AddTodo)}> {"ADD"->React.string} </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded m-1" onClick={_ => dispatch(ClearTodos)}> {"CLEAR LIST"->React.string} </button>
    </div>
    <div className="w-screen mx-4 flex flex-wrap m-2">
      {state.todoList
      ->Belt.Array.mapWithIndex((i, todo) => {
        <div
          key={string_of_int(todo.id)}
          className={`flex items-center bg-${if todo.isDone { "bg-green-500 line-through" } else { "bg-blue-500"}} text-white px-4 py-2 mt-4 mx-4 text-lg w-full`}
        >
          <input
            className="mr-2 mt-1"
            type_="checkbox"
            checked={todo.isDone}
            onChange={_ => dispatch(MarkDone(i))}
          />
          <div className="inline-block ml-2 flex-grow whitespace-nowrap break-normal overflow-hidden overflow-ellipsis">
            <div className="todoid inline-block">{React.int(todo.id)} </div>
            <span className="whitespace-nowrap break-normal overflow-hidden overflow-ellipsis">{React.string("   " ++ todo.title)} </span>
          </div>
        </div>
      })
      ->React.array}
    </div>
  </div>;
};