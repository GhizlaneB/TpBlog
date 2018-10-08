
import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-details',
  styleUrl: 'app-details.css',
  shadow: true
})
export class AppDetails {
  @Prop() match: MatchResults;
  @State() data :any[] = [] ;
  @Prop() history: RouterHistory;

  @State() apiUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';
  
  load() {

        
      fetch(`${this.apiUrl}${this.match.params.name}`)
        .then((response: any) => {
          return response.json()
        }).then((data) => {
          this.data = data;
        });

    }
  
    componentWillLoad() { 
  
     if (this.match.params.name) {
        
        this.load();
      }
  
      console.log('Component is being rendered');  
    }

    close() {
      this.history.goBack();
    }
    
  render() {
      return (
        <div >
               <table id="det">  
               <tr>
       <th>title</th></tr>
       <tr>
      <td>{this.data['title']}</td>
     </tr>
     <tr>
       <th>article</th></tr>
      <tr><td>{this.data['article']}</td>
     </tr>
     <tr>
       <th>author</th></tr>
      <tr><td>{this.data['autor']}</td>
     </tr>
     <tr>
       <th>date de création</th></tr>
       <tr>
      <td>{this.data['creationDate'] }</td>
     </tr>                                
        <tr>
        <stencil-route-link>
                <button  id="precedent" onClick={() => this.close()} >
                    précedent
                  </button>
                </stencil-route-link>
        </tr>

                </table>

                

           
            </div>
      );
  }
}