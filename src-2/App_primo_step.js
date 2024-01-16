// src/App.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "./redux/actions";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

function App({ data, loading, error, fetchDataRequest, fetchDataSuccess, fetchDataFailure }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      fetchDataRequest();
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          //setTimeout(function() { //puoi commentare/decommentare questo timeout per attendere 5 secondi la risposta e mostrare il loader (insieme alla riga sotto)
            fetchDataSuccess(data);
          //}, 5000)
        } catch (error) {
          fetchDataFailure(error.message);
        }
    };
    fetchData();
  }, [fetchDataRequest, fetchDataSuccess, fetchDataFailure]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.length > 0 && data.map((item) => (
          <li key={item.id}> {item.title}</li>
        ))}
      </ul>
    </div>
  );
}
//mapStateToProps, attraverso la quale passiamo le proprietà dell'oggetto State (lo stato globale dell'applicazione restituito dal rootReducer) al Container Component tramite l'oggetto props
const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
Metodo connect()
Una volta messo a disposizione lo store all’applicazione dobbiamo collegare  React con questo. L’unico modo per comunicare con lo store è quello di  inviare azioni e di recuperare lo stato. In precedenza abbiamo visto come fare utilizzando i metodi store.dispatch() per inviare azioni e store.getState() per recuperare l’ultimo snapshot dello stato.Il metodo connect() ci consente di fare la medesima cosa con l’ausilio di due metodi denominati mapDispatchToProps e mapStateToProps
mapStateToProps e mapDispatchToProps restituiscono entrambi un oggetto e la chiave di questo oggetto diventa una props del componente collegato. Per esempio , state.contacts.newContact è mappata a props.newContact. L’action creator addContact() viene mappato a props.addContact.

La funzione connect() restituisce una funzione che ci permette di creare un Container Component a partire da un determinato componente che passiamo come argomento. La funzione connect() può ricevere invece due argomenti che sono due riferimenti a due funzioni. La prima è la funzione mapStateToProps, attraverso la quale passiamo le proprietà dell'oggetto State (lo stato globale dell'applicazione restituito dal rootReducer) al Container Component tramite l'oggetto props. In questo modo, invece di dover invocare la funzione state.getState() e poi accedere alle diverse proprietà, accediamo alle proprietà dell'oggetto State usando semplicemente this.props.nome_proprietà. Per far ciò dovremo definire una funzione mapStateToProps come segue.

*/

