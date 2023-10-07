class HeaderComponent extends HTMLElement{
    connectedCallback(){
this.innerHTML = `
<div class="container">

        <div class="Logo">
            <h1 class>JBK</h1>
        </div>
    
    
        <div class="navbar-container">
            <ul class="ul-container">
                <li><a href="/HTML/home.html">Home</a></li>
            </ul>
            <ul class="ul-container">
                <li><a href="/HTML/about.html">About</a></li>
            </ul>
            <ul class="ul-container">
                <li><a href="/HTML/Login.html">Login</a></li>
            </ul>
        </div>
    
    </div>
`
    }
}

customElements.define('header-1', HeaderComponent)