const root = document.querySelector('.root');
function App() {
  const [state1, setCount1] = React.useState(0);
  const [state2, setCount2] = React.useState(0);
  React.useEffect(() => {
    console.log(document.querySelectorAll('button'))
  }, [state1]);
  return (
    <>
    <button onClick={
      function () {
        setCount1(() => state1+1)
      }
    }>Klik Gw Dong cok</button>
    <button onClick={
      function(){
        setCount2(()=>state2+1);
      }
    }>Klik gw aja dahh: {state2}</button>
    </>
    );
}

ReactDOM.render(<App/>, root)
