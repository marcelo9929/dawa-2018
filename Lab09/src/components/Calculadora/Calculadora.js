import React, {Component} from 'react';

import classes from './Calculadora.css'

export default class Calculadora extends Component{
	function ejecutarOperacion(num1, num2, accion) {
    switch (accion) {
            case 'sumar':
            return num1 + num2
            break;
            case 'restar':
            return num1 - num2
            break;
            case 'multiplica':
            return num1 * num2
            break;
            case 'divide':
               try {
                return num1 / num2
               } catch (error) {
                 return 'Error en la operación: '+ error  
               } 
            break;
        default:
        return 'error'   
        break;
    }
}
	render(){
		return(<div>
			<h1>Calculadora</h1>
Introduce el primer número: <input type="text" name="nombre" size="10"/>
<br />Introduce el segundo numero: <input name="mensaje" type="textarea" size="10" />
           <br />
           <select name="accion" class="form-control">
                    <option value="sumar">Sumar</option>
                    <option value="restar">Restar</option>
                    <option value="multiplica">Multiplica</option>
                    <option value="divide">Divide</option>
                </select>
                <br></br>

           <input type="submit" value="Calcular" />

			</div>)
	}
}