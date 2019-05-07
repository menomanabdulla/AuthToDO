import React, {Component} from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/MyLayout.js'
import '../style/style.scss';
class ToDo extends Component {
  myTodo = []
  componentDidMount() {
    let data = localStorage.getItem('myState')
    data = JSON.parse(data)
    console.log(data)
    if(data) {
      this.setState(() => ({
        todos: [data.todo]
      }))
    }
    this.myTodo = data.todo
  }
  render(){
    return(
      <Layout>
        <Link href="/">
            <a>Go Back</a>
          </Link>
        <div className="todo-block">
          <h2>My Todo</h2>
          <ol className="todo-list">
              {this.myTodo.map( (item,key) =>
                <li key={key}>{item}</li>
              )}
            </ol>
          </div>
      </Layout>
    );
  }
}
export default withRouter(ToDo)
