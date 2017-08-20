class Parent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      SendToChild: "Sent From Parent",
      RecieveFromChild:"",
    };
   this.actionfromchild=this.actionfromchild.bind(this)
  }
  actionfromchild(paramFromChild){
    this.setState({RecieveFromChild:paramFromChild})
  }
  render() {
    return (
      <div id="holder">
          <ChildA fromParent={this.state.SendToChild}
                  fromChild={this.state.RecieveFromChild}
                  childASelection={this.actionfromchild}
          />
          <ChildB fromParent={this.state.SendToChild}
                  fromChild={this.state.RecieveFromChild}
                  childBSelection={this.actionfromchild}
          />
      </div>
     )
  }
};

class ChildA extends React.Component{
  constructor(props){
    super(props)
    this.dropdownchange=this.dropdownchange.bind(this)
  }
  dropdownchange(e){
    this.props.childASelection(e);
  }
  populateDrop(child){
    let inp=[1,2,3]
    let MenuItem = ReactBootstrap.MenuItem ;
    let mappedInp=inp.map(function(i){
      let s = "Child " + child + " Item " + i.toString();
      return(<MenuItem eventKey={s}>{s}</MenuItem>)
    })
    return mappedInp;
  }
  render(){
    let DropdownButton = ReactBootstrap.DropdownButton ;
    let MenuItem = ReactBootstrap.MenuItem ;

    return (
        <div>
          <h1>{this.props.fromParent}</h1>
          <h1>{this.props.fromChild}</h1>
          <DropdownButton bsStyle={"primary"} title="Child A Drop Down" onSelect={this.dropdownchange}>
              {this.populateDrop("A")}
          </DropdownButton>
        </div>
    )
  }
}

class ChildB extends React.Component{
  constructor(props){
    super(props)
    this.dropdownchange=this.dropdownchange.bind(this)
  }
  dropdownchange(e){
    this.props.childBSelection(e);
  }
  populateDrop(child){
    let inp=[1,2,3]
    let MenuItem = ReactBootstrap.MenuItem ;
    let mappedInp=inp.map(function(i){
      let s = "Child " + child + " Item " + i.toString();
      return(<MenuItem eventKey={s}>{s}</MenuItem>)
    })
    return mappedInp;
  }
  render(){
    let DropdownButton = ReactBootstrap.DropdownButton ;
    let MenuItem = ReactBootstrap.MenuItem ;

    return (
        <div>
          <h1>{this.props.fromParent}</h1>
          <h1>{this.props.fromChild}</h1>
          <DropdownButton bsStyle={"warning"} title="Child B Drop Down" onSelect={this.dropdownchange}>
              {this.populateDrop("B")}
          </DropdownButton>
        </div>
    )
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
