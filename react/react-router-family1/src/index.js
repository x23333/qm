import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
function AnimationExample() {
  return (
    <Router>
      <Route 
        render={({location}) => (
          <div style={styles.fill}>
          
            {/*JSON.stringify(location)*/}
        <Route exact path="/" render={() => <Redirect to="/hsl/10/90/50" />} />

            <ul style={styles.nav}>
              <NavLink to="/hsl/10/90/50">Red</NavLink>
              <NavLink to="/hsl/120/100/40">Green</NavLink>
              <NavLink to="/rgb/33/150/243">Blue</NavLink>
              <NavLink to="/rgb/240/98/246">Pink</NavLink>
            </ul>

            <div style={styles.content}>
              <Switch location={location}>
                <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                <Route exact path="/rgb/:r/:g/:b" component={RGB} />
              </Switch >
            </div>
          </div>
        )}
      />
    </Router>
  );
}

function NavLink(props) {
  return (
    <li style={styles.navItem}>
      <Link {...props}/>
    </li>
  )
}

function HSL({ match: { params } }) {
  return (
    <div
      style={{
        ...styles.fill,
        ...styles.hsl,
        background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
      }}>
      hsl({params.h}, {params.s}%, {params.l}%)
    </div>
  )
}

function RGB({ match: { params } }) {
  return (
    <div
      style={{
        ...styles.fill,
        ...styles.rgb,
        background: `rgb(${params.r}, ${params.g}, ${params.b})`
      }}
    >
      rgb(
      {params.r}, {params.g}, {params.b})
    </div>
  );
}

const styles = {};
styles.fill = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0
};
styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}
styles.nav = {
  position: "absolute",
  padding: 0,
  margin: 0,
  top: 0,
  height: "40px",
  width: "100%",
  display: 'flex'
}
styles.navItem = {
  flex: 1,
  textAlign: 'center',
  listStyleType: 'none',
  padding: '10px'
}
styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};
ReactDOM.render ( <AnimationExample />, document.getElementById('root'))

// import React from 'react';
// import {TransitionGroup, CSSTransition} from 'react-transition-group'; 
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// function NavLink (props) {
//   return (
//     <li style={styles.navItem}>
//       <Link {...props} />
//     </li>
//   )
// }

// const styles = {};
// styles.fill= {
//   position: "absolute",
//   left: 0,
//   top: 0,
//   right: 0,
//   buttom: 0
// }
// styles.content = {
//   ...styles.fill,
//   textAlign: "center",
//   top: '40px'
// }
// styles.nav = {
//   position: "absolute",
//   padding: 0,
//   margin: 0,
//   height: '40px',
//   width: '100%',
//   display: 'flex'
// }
// styles.navItem = {
//   flex: '1',
//   textAlign: "center",
//   listStyleType: 'none',
//   padding: '10px'
// }
// styles.hsl = {
//   ...styles.fill,
//   color: "white",
//   paddingTop: "20px",
//   fontSize: "30px"
// };

// styles.rgb = {
//   ...styles.fill,
//   color: "white",
//   paddingTop: "20px",
//   fontSize: "30px"
// };

// function HSL ({match: {params}}) {
//   return (
//     <div style={{
//       ...styles.fill,
//       ...styles.hsl,
//       background: `hsl(${params.h}, ${params.s}, ${params.l})`
//     }}>
//       hsl({params.h},{params.h}%,{params.h}%)
//     </div>
//   )
// }
// function RGB({ match: { params } }) {
//   return (
//     <div
//       style={{
//         ...styles.fill,
//         ...styles.rgb,
//         background: `rgb(${params.r}, ${params.g}, ${params.b})`
//       }}
//     >
//       rgb(
//       {params.r}, {params.g}, {params.b})
//     </div>
//   );
// }


// function AnimationExample() {
//   return (
//     <Router>
//       <Route
//         render={({location}) => (
//           <div style={styles.fill}>
//             {/* {JSON.stringify(location)} */}
//             <ul style={styles.nav}>
//               <NavLink to="/hsl/10/90/50">Red</NavLink>
//               <NavLink to="/hsl/120/100/40">Green</NavLink>
//               <NavLink to="/hsl/33/150/243">Blue</NavLink>
//               <NavLink to="/hsl/240/98/246">Pink</NavLink>
//             </ul>
//             <div style={styles.content}>
//               <Switch location={location}>
//                 <Route exact path="/hsl/:h/:s/:l" component={HSL} />
//                 <Route exact path="/hsl/:r/:g/:b" component={RGB} />
//               </Switch>
//             </div>
//           </div> 
//         )}
//       />
//     </Router>
//   )
// }


// ReactDOM.render ( <AnimationExample />, document.getElementById('root'))




// // 路由配置
// const routes = [
//   {
//     path: "/",
//     exact: true,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: "/bubblegum",
//     exact: false,
//     main: Bubblegum
//   },
//   {
//     path: "/shoelaces",
//     exact: false,
//     main: Shoelaces
//   }
// ]

// function Bubblegum() {
//   return (
//     <div>Bubblegum</div>
//   )
// }
// function Shoelaces() {
//   return (
//     <div>Shoelaces</div>
//   )
// }

// function SidebarExample () {
//   return (
//     <Router>
//       <div style={{display: "flex"}}>
//         <div style={{
//           padding: "10px",
//           width: "40%",
//           background:"#0f0f0f"
//         }}>
//           <div style={{
//             flex: 1,
//             padding: '10px'
//           }}>
          
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/bubblegum">Bubblegum</Link>
//               </li>
//               <li>
//                 <Link to="/shoelaces">Shoelaces</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {routes.map((route,index) => (
//           <Route key={index} path={route.path} exact={route.exact} component={route.main} />
//         ))}
//       </div>

//     </Router>
//   )
// }

// ReactDOM.render ( <SidebarExample />, document.getElementById('root'))



// function ParamsExample() {
//   return (
//     <Router>
//       <div>
//         <p>
//         React Router does not have any opinions about how your parse URL query
//         strings. Some applications use simple key=value query strings, but
//         others embed arrays and objects in the query string. So it's up to you
//         to parse the search string yourself.
//       </p>
//       <p>
//         In modern browsers that support{" "}
//         <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL">
//           the URL API
//         </a>
//         , you can instantiate a <code>URLSearchParams</code> object from{" "}
//         <code>location.search</code> and use that.
//       </p>
//       <p>
//         In{" "}
//         <a href="https://caniuse.com/#feat=url">
//           browsers that do not support the URL API (read: IE)
//         </a>{" "}
//         you can use a 3rd party library such as{" "}
//         <a href="https://github.com/sindresorhus/query-string">query-string</a>.
//       </p>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to={{ pathname: "/account", search: "?name=netflix" }}>
//               Netflix
//             </Link>
//           </li>
//           <li>
//             <Link to={{ pathname: "/account", search: "?name=zillow-group" }}>
//               Zillow Group
//             </Link>
//           </li>
//           <li>
//             <Link to={{ pathname: "/account", search: "?name=yahoo" }}>
//               Yahoo
//             </Link>
//           </li>
//           <li>
//             <Link to={{ pathname: "/account", search: "?name=modus-create" }}>
//               Modus Create
//             </Link>
//           </li>
//         </ul>
//         <Route path={{pathname: "/account", search: "?name=netflix"}} component={Child} />
//       </div>
//     </Router>
//   );
// }

// function Child({location}) {
//   return (
//     <div>{location.search}</div>
//   )
// }

// ReactDOM.render ( <ParamsExample />, document.getElementById('root'))

// function About() {
//   return <h2>About</h2>
// }
// function Company() {
//   return <h2>Company</h2>
// }
// function User({match}) {
//   return (
//     <div>User:{match.params.user}</div>
//   )
// }

// function AmbiguousExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
          
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/company">company</Link>
//           </li>
//           <li>
//             <Link to="/kim">Kim</Link>
//           </li>
//           <li>
//             <Link to="/cris">Cris</Link>
//           </li>
//         </ul>
//         <hr/>
//         <Switch>
//         <Route path="/about" component={About}/>
//         <Route path="/company" component={Company}/>
//         <Route path="/:user" component={User} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// ReactDOM.render ( <AmbiguousExample />, document.getElementById('root'));
