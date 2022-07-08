import "./App.css";

import { useState } from "react";

function App() {
  const [WPNumber, setWPNumber] = useState("");
  const [WPMessage, setWPMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/54${WPNumber}?text=${WPMessage}`);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3 h2">
          Envía un mensaje de Whatsapp a cualquier número sin tener que
          agendarlo
        </h1>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="whatsappNumber" className="form-label">
                  Número de Whatsapp
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    🇦🇷 +54
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1112131415"
                    aria-label="whatsappNumber"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setWPNumber(e.target.value)}
                  />
                </div>
                <div id="whatsappHelp" className="form-text">
                  Solo para números de Argentina
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Mensaje
                </label>
                <textarea
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setWPMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg gradient-button w-100"
                disabled={WPNumber === ""}
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
