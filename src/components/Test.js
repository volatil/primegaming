import React, { Component } from 'react';
import { useEffect, useState } from "react";
// import $ from 'jquery';

class Test extends Component {
	
	render(){
		const Fetch = props => {
			
			const [tez, setUsers] = useState([]);
		  
			useEffect(() => {
			  async function getUsers() {
				const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/19oVpZ8uApHFzXeWo-s5VCqAO3aOtRzfiynmNDUZJ8uw/values/dias2?key=AIzaSyAOWV0qar-gsYcyp5yWS99GQlPVovkuxcU', {
				  method: 'GET',
				  headers: {
					accept: 'application/json',
				  },
				});
		  
				const data = await response.json();
		        
		        var tez = [];
				for ( var count = 0; count <= 2; count++ ) {
					var mes = data.values[count][0];
					tez.push({ "mes" : mes });
				};
		        
				setUsers(tez);
			  }
		  
			  getUsers();
			}, []);
		  
			return (
			  <div>
				{Array.isArray(tez)
				  ? tez.map(user => (
					  <div key={user.mes}>
						<h2><strong>MES:</strong> {user.mes}</h2>
					  </div>
					))
				  : null}
			  </div>
			);
		}
				
		return (
			<div>
				<br></br>
				<br></br>
				<Fetch />
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</div>
		)
		
	}
}
export default Test;
