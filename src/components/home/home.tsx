

import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-home',
  styleUrl: 'home.css'
})
export class MyHome {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return (
      <p>
           Welcome to {this.name}
           </p>);
    }

}

