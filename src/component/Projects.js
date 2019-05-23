import React from 'react'
import Project from './Project'
class Projects extends React.Component{
    state = {
        projects: []
    }

    constructor(props){
        super(props);
        this.projects = [];
        this.projects.push({name:"test",description:"test",progress:"25"});
    }

    render(){
        return(
            <div id="projects">
                <Project projects={this.projects}/>
            </div>
        );
    }
    
    componentDidMount() {/*
        fetch('http://localhost:8080/project/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ projects: data })
        }).catch(console.log);*/
      }

    componentWillUnmount() {
    }
}
export default Projects;