class ShowAlert extends Component {
    showAlert() {
      alert('So WOW')
    }
   
    render() {
      return this.props.children(this.showAlert)
    }
   }

   const App = () => {
    return (
      <div>
        <ShowAlert>
          {showAlert => <Doge onClick={showAlert} />}
        </ShowAlert>
        <br />
        <ShowAlert>
          {showAlert => <Button onClick={showAlert}>Click me</Button>}
        </ShowAlert>
      </div>
    )
   }


   const App = () => {
    return (
      <div>
    		<ShowAlert render={showAlert => <Doge onClick={showAlert} />} />
    		<br />
    		<ShowAlert
      		render={showAlert => <Button onClick={showAlert}>Click me</Button>}
    		/>
   	</div>
    )
   }
   function sum(a,b,f){
    return function f(a,b){
    return a+b
  }
  }