import React from "react";
import { Col } from "react-bootstrap";

export const Openinghours = () => {
  return (
    <Col>
      <footer>
        <table className="m-1">
          <thead>
            <th colSpan={3}>Openingsuren</th>
          </thead>
          <tbody>
            <br />
            <tr>
              <td>Ma</td>
              <td> | </td>
              <td>Gesloten</td>
            </tr>
            <tr>
              <td>Di</td>
              <td> | </td>
              <td>Gesloten</td>
            </tr>
            <tr>
              <td>Wo</td>
              <td> | </td>
              <td>10:00 - 16:00</td>
            </tr>
            <tr>
              <td>Do</td>
              <td> | </td>
              <td>10:00 - 16:00</td>
            </tr>
            <tr>
              <td>Vr</td>
              <td> | </td>
              <td>10:00 - 16:00</td>
            </tr>
            <tr>
              <td>Za</td>
              <td> | </td>
              <td>10:00 - 16:00</td>
            </tr>
            <tr>
              <td>Zo</td>
              <td> | </td>
              <td>10:00 - 16:00</td>
            </tr>
            <br />
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>
                Ook gesloten op 1 januari, 1 mei, 1 november en 25 december
              </td>
            </tr>
          </tfoot>
        </table>
      </footer>
    </Col>
  );
};
