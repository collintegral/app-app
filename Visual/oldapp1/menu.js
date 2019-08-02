import './menu.css';

function App() {
    return (
        <aside className="menu is-pulled-left">
            <p className="menu-label">
                <p className="menu-label">
                    Components
</p>
                <ul classNameName="menu-list">
                    <li><a id="card" draggable="true" ondragstart="drag(event)">Card</a>
                        <div className="card" draggable="true" ondragstart="drag(event)">
                            <div className="card-content">
                                <p className="title">
                                    Card
                    </p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <span>
                                        View on <a href="">Twitter</a>
                                    </span>
                                </p>
                                <p className="card-footer-item">
                                    <span>
                                        Share on <a href="#">Facebook</a>
                                    </span>
                                </p>
                            </footer>
                        </div>
                    </li>
                    <li><a id="navBar" draggable="true" ondragstart="drag(event)">Navbar</a>
                        <nav className="navbar" draggable="true" ondragstart="drag(event)" role="navigation" aria-label="main navigation">
                            <div className="navbar-brand">

                                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>
                            </div>
                        </nav>
                    </li>
                    <li><a id="message" draggable="true" ondragstart="drag(event)">Message</a>
                        <article className="message" draggable="true" ondragstart="drag(event)">
                            <div className="message-header">
                                <p>Message</p>
                                <button className="delete" aria-label="delete"></button>
                            </div>
                            <div className="message-body">
                                Message Body
                </div>
                        </article>
                    </li>
                    <li><a id="imageBox" draggable="true" ondragstart="drag(event)">Image Box</a>
                        <figure className="image is-128x128" draggable="true" ondragstart="drag(event)">
                            <img src=""></img>
                        </figure>
                    </li>
                    <li><a id="hero" draggable="true" ondragstart="drag(event)">Hero</a>
                        <section className="hero" draggable="true" ondragstart="drag(event)">
                            <div className="hero-body">
                                <div className="container">
                                    <h1 className="title">
                                        Hero title
                        </h1>
                                    <h2 className="subtitle">
                                        Hero subtitle
                        </h2>
                                </div>
                            </div>
                        </section>
                    </li>
                    <li><a id="form" draggable="true" ondragstart="drag(event)">Form</a>
                        <div className="field" draggable="true" ondragstart="drag(event)">
                            <label className="label">Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="e.g Alex Smith"></input>
                            </div>
                        </div>
                    </li>
                    <li><a id="container" draggable="true" ondragstart="drag(event)">Container</a>
                        <div className="container" draggable="true" ondragstart="drag(event)">
                            <div className="notification">
                                This container is <strong>centered</strong> on desktop.
            </div>
                        </div>
                    </li>
                    <li><a id="footer" draggable="true" ondragstart="drag(event)">Footer</a>
                        <footer className="footer" draggable="true" ondragstart="drag(event)">
                            <div className="content has-text-centered">
                                <p>
                                </p>
                            </div>
                        </footer>
                    </li>
                </ul>
                </p>
</aside>

            );
        }


function drag(ev) {
                ev.dataTransfer.setData("text", ev.target.id);
            };
            
export default App;