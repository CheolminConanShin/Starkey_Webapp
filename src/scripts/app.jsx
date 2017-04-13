import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import ResponsiveHeader from './components/ResponsiveHeader'
import Home from './components/Home'
import CenterPhoto from './components/CenterPhoto'

const Index = (
  <div>
    <ResponsiveHeader/>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/centerphoto" component={CenterPhoto}/>
      </div>
    </Router>
  </div>
)

export default Index
// export default class Index extends React.Component {
//     render() {
//       return(
//         <div>
//           <ResponsiveHeader/>
//           <Router>
//             <div>
//               <Route exact path="/" component={Home}/>
//               <Route exact path="/centerphoto" component={CenterPhoto}/>
//             </div>
//           </Router>
//         </div>
//       )
//     }
// }
