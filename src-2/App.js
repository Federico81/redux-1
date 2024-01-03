// src/App.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';/*aggiunta*/
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  fetchDataIdSuccess,/*aggiunta*/
} from "./redux/actions";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

function App({ data, data2, loading, error, fetchDataRequest, fetchDataSuccess, fetchDataFailure, fetchDataIdSuccess }) {
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
  }, [fetchDataRequest, fetchDataSuccess, fetchDataFailure, fetchDataIdSuccess]);

  /*aggiunta*/
  const fetchDataId = async (id) => {
    fetchDataRequest();
    try {
      const response = await fetch(API_URL+ '/' + id);
      const data = await response.json();
      //setTimeout(function() { //puoi commentare/decommentare questo timeout per attendere 5 secondi la risposta e mostrare il loader (insieme alla riga sotto)
      console.log(data);
      fetchDataIdSuccess(data);/*atenzione al nome*/
      //}, 5000)
    } catch (error) {
      fetchDataFailure(error.message);
    }
  };
  /*fine aggiunta*/

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.length > 0 && data.map((item) => (
          <li key={item.id}><button onClick={() => fetchDataId(item.id)}>Go</button> {item.title}</li>
        ))}
      </ul>
      {data2 && <h1>{data2.title}</h1>}
    </div>
  );
}
//mapStateToProps, attraverso la quale passiamo le proprietà dell'oggetto State (lo stato globale dell'applicazione restituito dal rootReducer) al Container Component tramite l'oggetto props
const mapStateToProps = (state) => ({
  data: state.data,
  data2: state.data2,/*aggiunta*/
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  fetchDataIdSuccess,/*aggiunta*/
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
