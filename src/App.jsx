function App() {
  //Isso é um componente: jsx

  //State ou estado:
  let message = "Showman"; //let pq o valor pode mudar

  return (
    //Retorna um único elemento: ex: uma div
    <div>
      <h2>{message}</h2>
      <button>Mudar mensagem</button>
    </div>
  );
}

export default App;
