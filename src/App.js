import React, { Component } from "react";
import ProtectedRoute from "./components/common/protectedRoute";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/loginForm";
import EditProject from "./components/editProject";
import NotFound from "./components/notFound";
import Logout from "./components/logout";
import NavBar from "./components/navBar";
import Projects from "./components/projects";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/footer";
import Contact from "./components/contact";
import News from "./components/news";
import Categorised from "./components/Categorised";
import FullProject from "./components/fullProject";
import Career from "./components/career";
import About from "./components/about";
import Home from "./components/home";
import { getProjects } from "./services/projectService";
import { getNews } from "./services/newsService";
import { getCategories } from "./services/categoryService";

class App extends Component {
  state = {
    newss: [],
    categories: [],
    projects: [],
    user: {}
  };

  async componentDidMount() {
    const { data: newss } = await getNews();
    const { data: projects } = await getProjects();
    const { data: categories } = await getCategories();
    const user = auth.getCurrentUser();

    this.setState({ user, newss, projects, categories });
  }

  render() {
    return (
      <React.Fragment>
        <div className="fluid-container">
          <ToastContainer />
          <NavBar />

          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/news"
              render={props => <News newss={this.state.newss} {...props} />}
            />
            <Route path="/career" component={Career} />
            <Route path="/about" component={About} />
            <Route
              render={props => (
                <Home
                  categories={this.state.categories}
                  projects={this.state.projects}
                  user={this.state.user}
                  {...props}
                />
              )}
              path="/home"
            />

            <Route path="/projects/category/:id" component={Categorised} />
            <Route path="/project/:id" component={FullProject} />
            <ProtectedRoute path="/projects/:id" component={EditProject} />
            {/* <ProtectedRoute path="/category/:id" component={EditCategory} />
          <ProtectedRoute path="/news/:id" component={EditNews} />
          <ProtectedRoute path="/career/:id" component={EditCareer} /> */}
            <Route path="/logout" component={Logout} />
            <Route
              path="/projects"
              render={props => (
                <Projects
                  categories={this.state.categories}
                  projects={this.state.projects}
                  user={this.state.user}
                  {...props}
                />
              )}
            />

            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
