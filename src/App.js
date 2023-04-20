import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-4">
            <h1>Primera parte</h1>
            <table>
              <tr>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Telefono</th>
              </tr>
              <tr>
                <td>Diego</td>
                <td>Ciudad</td>
                <td>123456798</td>
              </tr>
              <tr>
                <td>Denilson</td>
                <td>Barillas</td>
                <td>32165498</td>
              </tr>
              <tr>
                <td>Amilcar</td>
                <td>Cambote</td>
                <td>65432178</td>
              </tr>
            </table>
          </div>
          <div className="col-4">
            <h1>Parte dos</h1>
          </div>
        </div>
      </Container>
    </>
  );
}
