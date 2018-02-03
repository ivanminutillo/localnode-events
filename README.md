# **Local nodes Events**

### Add your events on google calendar and they will appear directly on your website

(This project is a fork of the [torontojs website](torontojs/torontojs.com))

To add your events to the website you need to follow these steps:

1. Fork/Clone this repository
2. Create an account to google developers and enable google calendar API
3. Create an API key from the google developers console
4. Create one or more calendars and grab each calendar unique ID and also check the option to make it publically accessible. 
5. Customize with your data the [event.js](localnode-events/blob/master/src/data/events.js) file with the calendar ID and your google API Key
6. Customize the information and appearance of the events website with your local node identity


Built with [create-react-app](https://github.com/facebookincubator/create-react-app).

### Clone / Install

```
git clone https://github.com/ivanminutillo/localnode-events.git
cd localnode-events
yarn install
```

### Run in development mode

```
yarn start
```

This command should choose a port and open your default browser with the page open.

### Deploy to github pages (Requires contributor access)

```
yarn deploy
```

### Technologies

- [recompose](https://github.com/acdlite/recompose) helpers
- [glamor](https://github.com/threepointone/glamor) for css
- [color](https://github.com/Qix-/color) utility
- [eslint-config-minimal](https://github.com/alex-wilmer/eslint-config-minimal)
- [gitmoji](https://gitmoji.carloscuesta.me/)
