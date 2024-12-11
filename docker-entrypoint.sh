#!/bin/bash
set -e

echo "waiting myssql"

/usr/src/app/wait-for-it.sh mysql:3306 --timeout=20 -- echo mysql up


echo "prisma migration deploying..."
npx prisma migrate deploy

echo "Starting migrations..."
npm run seed

echo "starting api..."
npm run start:prod