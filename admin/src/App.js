import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList"
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";


function App() {
    const { user } = useContext(AuthContext);
  return (
      <Router>
          <Switch>
              <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
              {user && (
                  <>
      <Topbar />
      <div className="container">
        <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
                          {/*<Route path="/users">
            <UserList />
          </Route>*/}
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/movies">
            <ProductList />
          </Route>
          <Route path="/movies/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/lists">
            <ListList/>
          </Route>
          <Route path="/list/:listId">
            <List />
          </Route>
          <Route path="/newlist">
            <NewList />
          </Route>
      </div>
                  </>
              )}
            </Switch>
        </Router>
    );
}

export default App;
