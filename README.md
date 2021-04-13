# Remotely IMDb API

Hello, My name is Alexandre Odoni and this is the IMDb test. Bellow are all the steps to run and search this api:

## How it works ?
When you start the api, first of all it will crawl the IMDb movies and save them into memory.
After thar it will start the http server and you are ready to search into the api.

## Pre-requisites
Make sure you have node, npm and yarn installed in your computer

https://nodejs.org/en/download/

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

https://classic.yarnpkg.com/en/docs/install/#debian-stable

## Instalation
Clone this repository using this command:
```bash
git clone https://github.com/aleodoni/imdb-seach.git
```

After that, please go to the project directory and install all dependencies:
```bash
cd imdb-search
yarn
```

That's it, you are able to run the api using the command:
```bash
yarn dev:server
```

## Searching the API
This api is able to perform the following searches:
- by Director
- by Star
- by Director and Star
- by Genre

### By Director
You can send to api the following url:

```bash
http://localhost:3333/searchByDirector?director=Quentin%20Tarantino
```

It will return something like this:

```bash
[
  {
    "title": "Pulp Fiction: Tempo de Violência",
    "year": "(1994)",
    "genre": "Crime, Drama",
    "rating": "8,9",
    "director": "Quentin Tarantino",
    "stars": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis"
  },
  {
    "title": "Django Livre",
    "year": "(2012)",
    "genre": "Drama, Western",
    "rating": "8,4",
    "director": "Quentin Tarantino",
    "stars": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington"
  },
  {
    "title": "Bastardos Inglórios",
    "year": "(2009)",
    "genre": "Adventure, Drama, War",
    "rating": "8,3",
    "director": "Quentin Tarantino",
    "stars": "Brad Pitt, Diane Kruger, Eli Roth, Mélanie Laurent"
  }
]
```

### By Star
You can send to api the following url:

```bash
http://localhost:3333/searchByStar?star=Brad%20Pitt
```

It will return something like this:

```bash
[
  {
    "title": "Clube da Luta",
    "year": "(1999)",
    "genre": "Drama",
    "rating": "8,8",
    "director": "David Fincher",
    "stars": "Brad Pitt, Edward Norton, Meat Loaf, Zach Grenier"
  },
  {
    "title": "Seven: Os Sete Crimes Capitais",
    "year": "(1995)",
    "genre": "Crime, Drama, Mystery",
    "rating": "8,6",
    "director": "David Fincher",
    "stars": "Morgan Freeman, Brad Pitt, Kevin Spacey, Andrew Kevin Walker"
  },
  {
    "title": "Bastardos Inglórios",
    "year": "(2009)",
    "genre": "Adventure, Drama, War",
    "rating": "8,3",
    "director": "Quentin Tarantino",
    "stars": "Brad Pitt, Diane Kruger, Eli Roth, Mélanie Laurent"
  },
  {
    "title": "Snatch: Porcos e Diamantes",
    "year": "(2000)",
    "genre": "Comedy, Crime",
    "rating": "8,3",
    "director": "Guy Ritchie",
    "stars": "Jason Statham, Brad Pitt, Benicio Del Toro, Dennis Farina"
  }
]
```

### By Director and Star
You can send to api the following url:

```bash
http://localhost:3333/searchByDirectorAndStar?director=Quentin%20Tarantino&star=Brad%20Pitt
```

It will return something like this:

```bash
[
  {
    "title": "Bastardos Inglórios",
    "year": "(2009)",
    "genre": "Adventure, Drama, War",
    "rating": "8,3",
    "director": "Quentin Tarantino",
    "stars": "Brad Pitt, Diane Kruger, Eli Roth, Mélanie Laurent"
  }
]
```

### By Genre
You can send to api the following url:

```bash
http://localhost:3333/searchByGenre?genre=war
```

It will return something like this:

```bash
[
  {
    "title": "O Resgate do Soldado Ryan",
    "year": "(1998)",
    "genre": "Drama, War",
    "rating": "8,6",
    "director": "Steven Spielberg",
    "stars": "Tom Hanks, Matt Damon, Tom Sizemore, Edward Burns"
  },
  {
    "title": "Túmulo dos Vagalumes",
    "year": "(1988)",
    "genre": "Animation, Drama, War",
    "rating": "8,5",
    "director": "Isao Takahata",
    "stars": "Tsutomu Tatsumi, Ayano Shiraishi, Akemi Yamaguchi, Yoshiko Shinohara"
  },
  {
    "title": "Casablanca",
    "year": "(1942)",
    "genre": "Drama, Romance, War",
    "rating": "8,5",
    "director": "Michael Curtiz",
    "stars": "Humphrey Bogart, Ingrid Bergman, Paul Henreid, Claude Rains"
  },
  {
    "title": "Apocalypse Now",
    "year": "(1979)",
    "genre": "Drama, Mystery, War",
    "rating": "8,4",
    "director": "Francis Ford Coppola",
    "stars": "Martin Sheen, Marlon Brando, Robert Duvall, Frederic Forrest"
  },
  {
    "title": "Glória Feita de Sangue",
    "year": "(1957)",
    "genre": "Drama, War",
    "rating": "8,4",
    "director": "Stanley Kubrick",
    "stars": "Kirk Douglas, Ralph Meeker, Adolphe Menjou, George Macready"
  },
  {
    "title": "O Grande Ditador",
    "year": "(1940)",
    "genre": "Comedy, Drama, War",
    "rating": "8,4",
    "director": "Charles Chaplin",
    "stars": "Charles Chaplin, Paulette Goddard, Jack Oakie, Reginald Gardiner"
  },
  {
    "title": "1917",
    "year": "(2019)",
    "genre": "Drama, Thriller, War",
    "rating": "8,3",
    "director": "Sam Mendes",
    "stars": "Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth"
  },
  {
    "title": "Incêndios",
    "year": "(2010)",
    "genre": "Drama, Mystery, War",
    "rating": "8,3",
    "director": "Denis Villeneuve",
    "stars": "Lubna Azabal, Mélissa Désormeaux-Poulin, Maxim Gaudette, Mustafa Kamel"
  },
  {
    "title": "Dara iz Jasenovca",
    "year": "(2020)",
    "genre": "Drama, War",
    "rating": "8,3",
    "director": "Predrag Antonijevic",
    "stars": "Biljana Cekic, Zlatan Vidovic, Anja Stanic, Luka Saranovic"
  },
  {
    "title": "Bastardos Inglórios",
    "year": "(2009)",
    "genre": "Adventure, Drama, War",
    "rating": "8,3",
    "director": "Quentin Tarantino",
    "stars": "Brad Pitt, Diane Kruger, Eli Roth, Mélanie Laurent"
  }
]
```
