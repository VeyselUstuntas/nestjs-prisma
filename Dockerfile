FROM node:22.11.0

WORKDIR /usr/src/app

COPY . .

RUN npm install 

RUN npm run build

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "start:prod" ]
