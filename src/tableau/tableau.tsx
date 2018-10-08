import { Component, Prop ,State, Method} from '@stencil/core';

@Component({
  tag: 'my-table',
  styleUrl: 'tableau.css'

})
export class MyTable {

  // Indicate that name should be a public property on the component
  @State() data :any[] ;
  @Prop()
   name: string='/fetch/';
   
  apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';

  @Method()
  load () {
  
    fetch(`${this.apiRootUrl}`).then(rsp => {
      return   rsp.json();
  
    }).then(data => {
      this.data = data;
  
    }).catch((err) => {
      console.error('Could not load data', err);
    }); 
  }


  componentWillLoad() { 
    console.log('Component is being rendered');

    this.load();
  }
  componentDidLoad() {
    this.load();

    console.log('Component has been rendered');
  }

 
  componentDidUpdate() {
    this.load();

    console.log('Component did update');
  }


  render() {
    if(this.data && this.data.length>0) {

      return (
        
        <div>
          
              { 
 this.data.map((data) =>
 <div>
   <table id="art">
     <tr>
       <th>title</th></tr>
       <tr>
      <td>{data.title}</td>
     </tr>
     <tr>
       <th>article</th></tr>
      <tr><td id="caractere">{data.article}</td>
     </tr>
     <tr>
       <th>author</th></tr>
      <tr><td>{data.autor}</td>
     </tr>
     <tr>
       <th>date de création</th></tr>
       <tr>
      <td>{data.creationDate}</td>
     </tr>
              <tr> <stencil-route-link url={this.name+data._id}>
 <button id="detail">
   Détail
 </button>
</stencil-route-link></tr>
   </table>

   
 </div> )
              } 
              
        </div>
              )



    }
    else {
   
   return (" Nothing to render ");
   
    } 
   

    
  }
}