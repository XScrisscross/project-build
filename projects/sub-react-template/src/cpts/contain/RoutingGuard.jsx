import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default (Comp) =>
  class extends React.Component {
    render() {
      const { history, location } = this.props
      // if (location.pathname === '/app/book') {
      //   return <Comp {...this.props} />
      // } else {
      //   return <Redirect to="/app/book" />
      // }
       console.log(this.props, 'RoutingGuard')
       console.log(history, 'RoutingGuard')
      return <Comp {...this.props}/>
    }
  }
// export default Comp => {
//   (props) => {
//     console.log(props, 'RoutingGuard');
//     return <Comp />;
//   };
// };
