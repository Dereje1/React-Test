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
    console.log(e)
    this.props.childASelection(e);
  }
  render(){
    let DropdownButton = ReactBootstrap.DropdownButton ;
    let MenuItem = ReactBootstrap.MenuItem ;
    return (
        <div>
          <h1>{this.props.fromParent}</h1>
          <h1>{this.props.fromChild}</h1>
          <DropdownButton bsStyle={"primary"} title="Child A Drop Down" onSelect={this.dropdownchange}>
              <MenuItem eventKey="Child Item 1">Child Item 1</MenuItem>
              <MenuItem eventKey="Child Item 2">Child Item 2</MenuItem>
              <MenuItem eventKey="Child Item 3">Child Item 3</MenuItem>
          </DropdownButton>
        </div>
    )
  }
}


ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
