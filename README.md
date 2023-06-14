# WolfMinute


A meeting scheduler web app that analyzes optimal meeting times based on team members' availability. It also records the meeting and gives you a summary and key points of the meeting.



<img width="400" alt="Screen Shot 2021-06-18 at 14 19 13" src="app/assets/images/Screenshot 2023-06-05 at 11.54.03.png">



## Getting Started
### Setup

Install gems
```
bundle install
```
Install JS packages
```
yarn install
```

### ENV Variables
Create `.env` file
```
touch .env
```
Inside `.env`, set these variables.
```
CLOUDINARY_URL= your_cloudinary_key
OPENAI_ACCESS_TOKEN= your_openai_api_key
OPENTOK_API_KEY= opentok_api_key
OPENTOK_API_SECRET= opentok_api_secret
MODERATOR_NAME= WOLFMINUTE
PARTY_PASSWORD= PASSWORD
CLOUD_MERSIVE= d3f3351a-5eaf-44d8-8845-e3f8159f04d3

### DB Setup
```
rails db:create
rails db:migrate
rails db:seed
```

### Run a server
```
rails s
```

## Built With
- [Rails 7](https://guides.rubyonrails.org/) - Backend / Front-end
- [Stimulus JS](https://stimulus.hotwired.dev/) - Front-end JS
- [Heroku](https://heroku.com/) - Deployment
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Bootstrap](https://getbootstrap.com/) — Styling
- [Figma](https://www.figma.com) — Prototyping

## Acknowledgements
Inspired by Airbnb

## Team Members
- [Juan Bernal](https://github.com/mesieou)
- [Rika Saito](https://github.com/arki-s)
- [Xuemei Huang](https://github.com/meifruit)
- [Jun Ukemori](https://github.com/jukemori)


## License
This project is licensed under the MIT License
