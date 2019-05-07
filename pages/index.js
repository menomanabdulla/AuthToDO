
import React, {Component} from 'react'
import Link from 'next/link'
import Layout from '../components/MyLayout.js'
import '../style/style.scss';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogdIn : false,
      logInfo: 'login',
      text: '',
      todo: []
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.Auth = this.Auth.bind(this);
  }
  onChange = (event) => {
    this.setState({text: event.target.value});
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.setState(() => ({
      text: '',
      todo: [...this.state.todo, this.state.text]
    }));
    setTimeout(localStorage.setItem('myState',JSON.stringify(this.state)) , 3000);
  }
  Auth(){
    let value = null;
    if(this.state.isLogdIn){
      value = 'Login'
    }else{
      value = 'Logout'
    }
    this.setState(() => ({
      isLogdIn : !this.state.isLogdIn,
      logInfo : value
    }));
  }
  render(){
    return(
      <Layout>
        <div className="content-block">
          <h3>Simple to do app</h3>
          <button onClick={this.Auth}>{`${this.state.logInfo}`}</button>
          {
            this.state.isLogdIn ?  
            <Link as={`/p/1`} href={`/todo?id=1` }><a>View Todo</a></Link> :
            <Link as={`/`} href={`/` }><a>Login for view</a></Link>
          }
         
          <form onSubmit={this.onSubmit}>
            <input value={this.state.text} onChange={this.onChange} />
            <button>Submit</button>
          </form>
        </div>
      </Layout>
    )
  }
}
