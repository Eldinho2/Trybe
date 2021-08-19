import React, { Component } from "react";
import './Form.css'

export default class Form extends Component {
  render() {
    return (<div className="div">
			<form className="form">
				<fieldset>
					<label className="label"> Nome:
					 <input type="text" name="Nome" maxLength="50" required></input>
					</label>
					<label className="label"> Email: 
					 <input type="text" name="Email" maxLength="50" required></input>
					</label>
					<label className="label"> CPF: 
					 <input type="text" name="CPF" maxLength="11" required></input>
					</label> 
					<label className="label"> Endereço: 
					 <input type="text" name="Endereço" maxLength="200" required></input>
					</label>
					<label className="label"> Cidade: 
					 <input type="text" name="Cidade" maxLength="28" required></input>
					</label>
					<label className="label"> Estado: 
					<select name="Cidade">
            <option>Selecione</option>
          </select>
					</label>
					<label className="label"> Tipo: 
					 <input type="radio" name="Tipo" required></input>
					</label>
				</fieldset>
				<fieldset>
					<label className="label"> Resumo do currículo:
						<textarea maxLength="1000" required></textarea>
					</label>
					<label className="label"> Cargo:
						<textarea maxLength="40" required resize="none"></textarea>
					</label>
					<label className="label"> Descrição do cargo:
						<input maxLength="500" required></input>
					</label>
				</fieldset>
				<button>Enviar</button>
			</form>
    </div>);
  }
}

