class Chat extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      messages:['']
    };
    //critical otherwise this is not recognized in the function trying to set
    this.updateInput = this.updateInput.bind(this);
    this.submit = this.submit.bind(this);
  }
  submit(ev){
    ev.preventDefault();
    var newMessage = <ChatMessage message={this.state.text}/>;
    console.log(newMessage)
    this.setState({ messages: this.state.messages.concat([newMessage])
    });
  }
  updateInput(ev){
    var char=ev.target.value;
    this.setState({text:char})
  }
  render() {
  return (
    <div>
       <div>{this.state.messages}</div>
       <form onSubmit={this.submit}>
         <input onChange={this.updateInput} type="text" placeholder="Your Message" />
         <input type="submit" value="Send" />
       </form>
    </div>
   )
  }
};

class ChatMessage extends React.Component{
  render(){
    return <p>{this.props.message}</p>
  }
}


ReactDOM.render(
  <Chat />,
  document.getElementById('app')
);
