@@directive("'use client';")

@react.component
let make = () => {
  let (users, setUsers) = React.useState(_ => "");

  let setUsersText = (text: string) => {
    setUsers(_ => text);
  };

  let fetchUserData = () =>
    Fetch.fetch("https://jsonplaceholder.typicode.com/users")
    ->Js.Promise.then_(Fetch.Response.text, _)
    ->Js.Promise.then_(text => {
      Js.log(text);
      setUsersText(text);
      Js.Promise.resolve();
    }, _)
    ->ignore;

  React.useEffect1(() => {
    let _ = fetchUserData();
    Some(_ => ());
  }, []);

  <div>
    <div>{React.string(users)}</div>
  </div>;
};
