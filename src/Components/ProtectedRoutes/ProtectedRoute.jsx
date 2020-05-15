import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				user === true ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)}
		/>
	)
}

export default ProtectedRoute
