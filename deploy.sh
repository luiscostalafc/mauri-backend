
#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

function deploy () {
  echo -e "${GREEN}Up Containers${NC}"
  docker-compose up -d
  echo -e "${GREEN}Install dependences${NC}"
  yarn
  echo -e "${GREEN}Build application${NC}"
  yarn build
  echo -e "${GREEN}Run migrations${NC}"
  yarn migrate
  echo -e "${GREEN}Run Seeders${NC}"
  yarn seed
  echo -e "${GREEN}Install dependences of production${NC}"
  cd build && yarn install --production
  echo -e "${GREEN}Restart PM2${NC}"
  pm2 restart 0
}

deploy