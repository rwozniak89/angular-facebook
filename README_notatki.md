#ANgular szkolenie 24-26.06.2019 r.

##wprowadzenie
komunikator slack.com
wspólny kod codeshare.io

JS -> (Core, DOM, BOM)

JS: var, let, const
zapis ...array

Module bundlers: webpack
testrunners: gulp

MArkdown - sposób dokumentowania tak jak tutaj, albo Readme.me pliki

pieciosha -> github prowadzącego

Angury Plugin do CHROME -> podgląd structury Aapliakcji ANgulara

git -> Untracted files -- 'git add .'-> STage area --'git commit' -> commit file --'git push' ->
## przygotowanie

install node.js
install git, git bash
https://altkom-angular.slack.com/messages/CKW55FL3G/
https://github.com/piecioshka/training-implement-task-manager
https://github.com/rwozniak89
http://10.10.6.4/angular-guide/#/chapters/cli

git bash

$ ssh-keygen -t rsa -b 4096 -C rwozniak89@gmail.com
dalej puste i hasło 2x
--$ ssh-keygen -t rsa -C altkom-sala-06

$ notepad /c/USers/Student/.ssh/id_rsa.pub

przekopiwoać KLUCZ publiczny do github konto  -> settings -> ssh... -> new ssh key -> copy paste to...

sprawdzenie klucza i połączenia $ ssh -T git@github.com -> yes 

sprawcenie angular $ ng --version

$ npm install -g @angular/cli

Student@it2061 MINGW64 ~/downloads
$ git config --global user.email "rwozniak89@gmail.com"
Student@it2061 MINGW64 ~/downloads
$ git config --global user.name "Radek"


## start projektu

zmiana miejsca np...

$ ng new facebook --routing

przechodzimy do projektu 

Student@it2061 MINGW64 ~/downloads
$ cd facebook

Student@it2061 MINGW64 ~/downloads/facebook (master)
$ npm start


uruchomienie przeglądarki -> localhost:4200

## otwarcie przez VSC

otórz folder -> facebook

## kolejny git bash do poleceń w folderzez projektem

git log ->> 0 commits...
Student@it2061 MINGW64 ~/downloads/facebook (master)
$ git commit -am "Create project scaffolds:"

Student@it2061 MINGW64 ~/downloads/facebook (master)
$ git status

## utworzenie repo na github

dodanie go
skopiowanie linijki z remote i pusch
git remote add origin https://github.com/rwozniak89/angular-facebook.git
git push -u origin master

i odpalenie w gitbash

git remote add origin https://github.com/rwozniak89/angular-facebook.git


git push -u origin master

logownaie przez rwozniak89@gmail.com

## dodwananie komponentu przez git bash

Student@it2061 MINGW64 ~/downloads/facebook (master)
$ ng generate component menu
lub 
$ ng g c menu


dodanie folder components, oraz app,
w copmponets w app i przeniesienie app.compnentów, 4 szt
w coponents przeniesienie całego foledru menu

ctr + , -> tree indent -> 8 na 20

ctr + f, ctrl + h -> zamiana AppModule na CoreModule (kliknąć enetr aby wyszukać), zmiana nazwy pliku równeiż core.module.ts

core-routing.module to samo co wyżej albo doinstalwoanie routingu, jeżeli wczesniej nie dodałem $ ng g m core-routing --routing, albo zmiana nazwy na core-routing.modules

prawidłowy wygląd to foldery src -> app -> core i tam folder componets z app i menu
oraz w core pliki core.module.ts i core-routing.module.ts

$ git commit -am "create core i refactor folders core"

$ git push

zmiany w menu component...

katalog e2e -> testy ent to end

package.json -> script  lista poleceń mi.n, dodanie/zmiana  "e2e": "ng e2e --port 4201",

npm run e2e zmiana w plikach...
commi i push

##bootstrap 

$ npm i bootstrap

w styles.css import -> @import "../node_modules/bootstrap/dist/css/bootstrap.css"

lub w angular.json
"styles": [
              "src/styles.css"
            ],
lepsza I wersja.

git status
git . add
$ git commit -m "dodanie bootstrapa"

$ git config core.autocrlf true 


## nowy komponent pages

$ ng g c core/pages/home-page

$ ng g c core/pages/not-found-page
<nav>
  <ul class="nav">
    <li class="nav-item">
      <a 
        class="nav-link" 
        routerLink="/"
      >
       Strona główna
      </a>
    </li>   
    <li>
      <a 
        class="nav-link" 
        routerLink="/404"
      >
      Strona 404
     </a>
    </li>    
  </ul>

</nav>


#moduł postów i coponenty post-list i post-list-item

$ ng g m posts

$ ng g c posts/components/post-list


$ ng g c posts/components/post-list-item


 dodać export do jednego modułu i import do drugiego
w pliku posts.module

@NgModule({
  declarations: [
    PostListComponent, 
    PostListItemComponent
  ],

  exports: [
    PostListComponent, 
    PostListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
 a w pliku core.modul 
NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


devtools do chroma -> Google Chrome Augury zainstalwoać trzeba -> f12 zakładka augury - plugin do przegląania drzewa angulara

https://picsum.photos/200/300

## dokumentacja angulara
$ ng doc trackby

# deploy aplikacji
należy zbudowac folder dist

$ npm run build

w pliku package.json dodajemy "build": "ng build --prod",
,czyli
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e --port 4201",
    "deploy": "ng build --prod"
  },

albo     "deploy": "gh-pages -d dist/facebook"
ale trzebadoinstalować
$ npm i -D gh-pages

czyli   "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e --port 4201",
  "predeploy": "ng build --prod --base-href=/angular-facebook/",
    "deploy": "gh-pages -d dist/facebook",
    "postdeploy": "echo 'App was deployed'"
  },

$ git status
$ git commit -am"setup deployment"
$ git push


$ npm run deploy

## moduł shared, moduł współdzielony
 
$ ng g m shared

dodanie serwisu
$ ng g s shared/services/posts

testowanie

$ npm test

## JSON i interfejsyg i shared/interfaces/post-list

'https://jsonplaceholder.typicode.com/todos/1'

buduje obiekty json na podstawie schematu:
json-schema-faker
https://json-schema-faker.js.org/

https://slack-redir.net/link?url=https%3A%2F%2Fgist.github.com%2Fpiecioshka%2Fc88802f559415ba01e9a79401cd47bfc&v=3

do budowy interfejsu na podstawie jsona
https://app.quicktype.io/


### budowa interfejsów przez konsole
$ ng g i shared/interfaces/post-list
CREATE src/app/shared/interfaces/post-list.ts (30 bytes)

Student@it2061 MINGW64 ~/Downloads/facebook (master)
$ ng g i shared/interfaces/post-list-item
CREATE src/app/shared/interfaces/post-list-item.ts (34 bytes)

Student@it2061 MINGW64 ~/Downloads/facebook (master)
$ ng g i shared/interfaces/author
CREATE src/app/shared/interfaces/author.ts (28 bytes)
Student@it2061 MINGW64 ~/Downloads/facebook (master)
$ ng g i shared/interfaces/response/response-posts
CREATE src/app/shared/interfaces/response/response-posts.ts (35 bytes)


## git
prozenienisenie do stage area
$ git add .
aby skomitować
$ git commit -am 'create inte
wysłać na serwer github np.
git push


## pipe

$ ng g p shared/pipes/my-date


## samodzielne posty

$ ng g c posts/pages/post-profile-page

## kmentarze 

$ ng g m comments
$ ng g c comments/commponents/comment-add-form
$ ng g c comments/commponents/comment-list
$ ng g c comments/commponents/comment-list-item


## intefaces

$ ng g i shared/interfaces/comment-list.ts

##smieszne czaski <img src="http://placeskull.com/170/170">
<img src="http://placeskull.com/170/170">


## moduł oddawani postów

 ng g c posts/components/post-add-form

## npm install UUID

$ npm install uuid

## zdjęcia z kotami 
http://placekitten.com/

## servis z danymi

$ ng g s shared/services/storage











