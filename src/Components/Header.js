import React, {Component} from 'react';
// import'../css/layout.css'
// import'../css/default.css'


class Header extends Component {


    render() {
        let {name, occupation, objective, address} = this.props.data;

        return (
            <header id="home">

                <nav id="nav-wrap">
                    <ul id="nav" className="nav">
                        <li><a className="smoothscroll" href="#home" >home</a></li>
                        <li><a className="smoothscroll" href="#about" >about</a></li>
                        <li><a className="smoothscroll" href="#resume" >resume</a></li>
                        <li><a className="smoothscroll" href="#contact" >contact me</a></li>
                    </ul>
                </nav>

                <div className="row banner banner-text" >

                <h1>{name} <span style={{"font-size":9+"pt","font":"helvetica" }}>thats me</span></h1>
                    <h3> I'm a {address.city} based <span>{occupation}</span> who is {objective}</h3>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        );
    }
}

export default Header;
