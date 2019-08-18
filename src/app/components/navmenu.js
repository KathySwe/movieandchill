import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <nav>
        <table style={{
          backgroundColor: '#000',
          display: 'block',
          color: '#fff',
          paddingLeft: 50
        }}><tbody>
            <tr>
              <td>
                <img src="logo.png" width="80" style={{ margin: 10 }} alt="logo" />
              </td>

              <td >
                <Link to="/"> Home </Link>
              </td>
              

            </tr>
          </tbody>
        </table>

      </nav>

    );

  }
}
export default Nav;
