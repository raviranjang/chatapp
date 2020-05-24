import React  from 'react';
import { withRouter } from 'react-router';


export default function requireAuth(Component) {
    class AuthenticatedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            auth: localStorage.get('auth')
            }
        }
        componentDidMount() {
            this.checkAuth();
        }
        checkAuth() {
            const location = this.props.location;
            const redirect = location.pathname + location.search;
            if ( ! localStorage.get('auth')) {
                this.props.history.push(`/login?redirect=${redirect}`);
            }
        }
        render() {
            return localStorage.get('auth')
                ? <Component { ...this.props } />
                : null;
        }
    }

    return  withRouter(AuthenticatedComponent)
}