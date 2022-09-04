import React from "react";
const MenuItem = ({ name, description, price }) => {
	return (
		<div style={{ display: "flex", justifyContent: "space-between" }}>
			<div>
				<div>
					{name}
				</div>
				<div>
					{description}
				</div>
				<div>
					{price}
				</div>
			</div>
			<div>
				<div>
					<label htmlFor="amountInput"></label>
					<input type={Number} value={1}></input>
				</div>
				<button>Add</button>
			</div>
		</div>
	);
}

export default MenuItem;