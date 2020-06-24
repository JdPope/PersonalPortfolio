let fakeData = ['dog', 'cat', 'bird']

const link = document.querySelector('#Portfolio')
console.log(link)


link.addEventListener('click', ()=> makeCards())

function makeCards(){
   return fakeData.forEach(card => {
       const p = document.createElement('p')
       p.innerHTML = `<style>
       .demo-card-wide.mdl-card {
         width: 512px;
       }
       .demo-card-wide > .mdl-card__title {
         color: #fff;
         height: 176px;
         background: url('../assets/demos/welcome_card.jpg') center / cover;
       }
       .demo-card-wide > .mdl-card__menu {
         color: #fff;
       }
       </style>
       
       <div class="demo-card-wide mdl-card mdl-shadow--2dp">
         <div class="mdl-card__title">
           <h2 class="mdl-card__title-text">Welcome</h2>
         </div>
         <div class="mdl-card__supporting-text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Mauris sagittis pellentesque lacus eleifend lacinia...
         </div>
         <div class="mdl-card__actions mdl-card--border">
           <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
             Get Started
           </a>
         </div>
         <div class="mdl-card__menu">
           <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
             <i class="material-icons">share</i>
           </button>
         </div>
       </div>`
       document.body.append(p)
   })
}


