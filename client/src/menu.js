function App() {
    return (
        <aside class="menu">
            <p class="menu-label">
                Components
        </p>
            <ul class="menu-list">
                <li><a id="card" draggable="true" ondragstart="drag(event)">Card</a>
                    <div class="card">
                        <div class="card-content">
                            <p class="title">
                                Card
                            </p>
                        </div>
                        <footer class="card-footer">
                            <p class="card-footer-item">
                                <span>
                                    View on <a href="">Twitter</a>
                                </span>
                            </p>
                            <p class="card-footer-item">
                                <span>
                                    Share on <a href="#">Facebook</a>
                                </span>
                            </p>
                        </footer>
                    </div>
                </li>
                <li><a id="navBar" draggable="true" ondragstart="drag(event)">Navbar</a>
                    <nav class="navbar" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">

                            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                    </nav>
                </li>
                <li><a id="message" draggable="true" ondragstart="drag(event)">Message</a>
                    <article class="message">
                        <div class="message-header">
                            <p>Message</p>
                            <button class="delete" aria-label="delete"></button>
                        </div>
                        <div class="message-body">
                            Message Body
                        </div>
                    </article>
                </li>
                <li><a id="imageBox" draggable="true" ondragstart="drag(event)">Image Box</a>
                    <figure class="image is-128x128">
                        <img src=""></img>
                    </figure>
                </li>
                <li><a id="hero" draggable="true" ondragstart="drag(event)">Hero</a>
                    <section class="hero">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title">
                                    Hero title
                                </h1>
                                <h2 class="subtitle">
                                    Hero subtitle
                                </h2>
                            </div>
                        </div>
                    </section>
                </li>
                <li><a id="form" draggable="true" ondragstart="drag(event)">Form</a>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="e.g Alex Smith"></input>
                        </div>
                    </div>
                </li>
                <li><a id="container" draggable="true" ondragstart="drag(event)">Container</a>
                    <div class="container">
                        <div class="notification">
                            This container is <strong>centered</strong> on desktop.
                    </div>
                    </div>
                </li>
                <li><a id="footer" draggable="true" ondragstart="drag(event)">Footer</a>
                    <footer class="footer">
                        <div class="content has-text-centered">
                            <p>                            
                            </p>
                        </div>
                    </footer>
                </li>
            </ul>
        </aside>
    );
}


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

export default App;