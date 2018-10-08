import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <my-home name="BLOG"></my-home>
          
        </header>
        
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/add/stencil">New Article</a></li>
  
</ul>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/add/stencil' component='app-add'/>
              <stencil-route url='/fetch/:name' component='app-details'/>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
