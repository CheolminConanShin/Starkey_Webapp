import React from 'react'
import {HashRouter as Router, Route} from "react-router-dom";
import ResponsiveHeader from './components/ResponsiveHeader/'
import Home from './components/Home'
import About from './components/Home/About'
import Aids from './components/Home/Aids'
import CenterPhoto from './components/CenterPhoto'

const Index = (
  <div>
    <ResponsiveHeader/>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/centerPhoto" component={CenterPhoto}/>
        <Route exact path="/question" component={About}/>
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
