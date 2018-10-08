/*import { Component, State}from '@stencil/core';


@Component({
  tag: 'app-add',
  styleUrl: 'app-add.css',
  shadow: true
})
export class AppAdd{
  @State() apiURL: string ='https://polymer-101-workshop.cleverapps.io/api/blogpost';
  constructor(){

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
   data.append("json",JSON.stringify(data));
  fetch(`${this.apiURL}`, {
    method: 'POST',
    body: data
    //JSON.stringify({
     /* title:this.titre.value,
      autor: this.autor.value,
      article: this.article.value,}),
  });}
 headers: {
    'Accept': 'application/json',
    'Content-Type':'application/json'
  }
})
}
  
  render() {
    return (
      <div>
          <form action="POST" onSubmit={this.handleSubmit}>
          <input type="text" name="titre" placeholder="entrer le titre"></input><br></br>
          <input type="text" placeholder="entrer l'article"></input><br></br>
          <input type="text" placeholder="entrer l'auteur"></input><br></br>
          <input type="date" placeholder="entrer la date de creation"></input><br></br>
<br></br>
          <stencil-route-link url='/'>
          <button type="submit">submit</button>
         
        </stencil-route-link>
          
          </form>
          </div>)}}*/
          
          import { Component, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
    tag: 'app-add',
    styleUrl: 'app-add.css',
  })
export class AppAddArticle {
  
@State()  apiRootUrl: string = 'https://polymer-101-workshop.cleverapps.io/api/blogpost/';

 autor : HTMLInputElement = null;
 title : HTMLInputElement = null;
 article : HTMLTextAreaElement = null;
 date: HTMLTextAreaElement = null;
@Prop() history: RouterHistory;
handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    data.append( "json", JSON.stringify( data ) );

    fetch(`${this.apiRootUrl}`,{
      method: 'POST',
      body: JSON.stringify({  
        title:  this.title.value,
        autor: this.autor.value,
        article: this.article.value,
        date: this.date.value
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() =>{ alert('les données sont bien envoyées'); this.goback();} );
      }

 componentWillLoad () {
    this.handleSubmit = this.handleSubmit.bind(this);
 }  
 goback() {

  this.history.goBack();
 }   
    render() {
        return (
          
<div class="container ">  



      <form onSubmit={this.handleSubmit}>

      <div class="form-group">
        <label htmlFor="author">Enter the author name</label>
        <input id="autor" class="form-control" placeholder="entrer le nom d'auteur" name="autor" type="text"  ref={(autor: HTMLInputElement) => this.autor = autor }  required />
        </div>
        <div class="form-group">

        <label htmlFor="title">Enter your title</label>
        <input id="title" class="form-control" placeholder="entrer le titre de l'article" name="title" type="text" ref={(title: HTMLInputElement) => this.title = title }  required />
        </div>
        <div class="form-group">

        <label htmlFor="text">Enter your texte</label>
        <textarea id="article" class="form-control"  placeholder="le contenu de l'article"  ref={(article: HTMLTextAreaElement) => this.article = article }  required></textarea>
        
        </div> 
        <div class="form-group">

         <button class="btn btn-primary ">Send data!</button>
        <button class="btn btn-dark " onClick={() => this.goback()}>Cancel</button>
        </div> 
      </form>
     
      </div> 
     
           
        );
    }
}
          
  
          
