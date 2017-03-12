import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import './start.css';

const TodoList = () => {
  return (
    <section>
      Todos:
      <ul>

      </ul>
    </section>
  )
};

const AddTodo = () => {
  return (
    <section>
      <input type="text" />
    </section>
  )
}

const Home = () => {
  return (
    <article>
      <header>
        <Link to="/add"> Make a todo </Link>
      </header>
      <TodoList />
    </article>
  )
};

const TodoPage = ({match}) => {
  return (
    <section>
      Todo!  {match.params.todo.id}
    </section>
  )
};
const Application = ({state}) => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/todo/:todoid" component={TodoPage}/>
        <Route path="/add" component={AddTodo}/>
      </div>
    </Router>
  )
};

export default Application;
