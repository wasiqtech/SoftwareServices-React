import logo from "./logo.svg";
import "./App.css";
import { Header } from "./MyComponent/Header";
import { Home } from "./MyComponent/Home";
import { Footer } from "./MyComponent/Footer";
import { About } from "./MyComponent/About";
import { Contact } from "./MyComponent/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 1;
    } else {
      sno = todos.length + 1;
      console.log(sno);
    }
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState([
    // {
    //   sno: 1,
    //   title: "Ali Go to the Market",
    //   desc: "you have to buy 1 something",
    // },
    // {
    //   sno: 2,
    //   title: "Nasir Go to the Market",
    //   desc: "you have to buy 2 something",
    // },
    // {
    //   sno: 3,
    //   title: "Yasir Go to the Market",
    //   desc: "you have to buy 3 something",
    // },
  ]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddToDO addTodo={addTodo}></AddToDO>
                  <Todos todos={todos} onDelete={onDelete}></Todos>
                </>
              );
            }}
          ></Route> */}
          <Route exact path="/" element={<Home addTodo={addTodo} todos={todos} onDelete={onDelete}/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>

        <Footer
          hTitle="Home"
          fTitle="About Us"
          PTitle="Pricing"
          contactUsEnableDisable={false}
        />
      </Router>
    </>
  );

}

export default App;
