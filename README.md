# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```
## user admin

## firstName  - lastName  - email              - password
01) Jose      - Alvarez   - jose@test.com      - admin
02) Alberto   - Rodriguez - alberto@test.com   - admin
03) katherine - Rodrigo   - katherine@test.com - admin
04) Cesar     - Castillo  - cesar@test.com     - admin
05) Israel    - Salazar   - salazar@test.com   - admin
06) Gorge     - Silva     - gorge@test.com     - admin
08) Juan      - Del mar   - juan@test.com      - admin
08) Jessica   - Martinez  - jessica@test.com   - admin
09) Angelica  - picasso   - angelica@test.com  - admin
10) Albert    - Del mar   - albert@test.com    - admin

## user standard

## firstName   - lastName   - email               - password
01) Max        - Gutierrez  - max@test.com        - standard
02) Francisco  - Alvarado   - francisco@test.com  - standard
03) Pedro      - Salazar    - pedro@test.com      - standard
04) Marco      - Vazquez    - marco@test.com      - standard
05) Mar        - Kennedy    - mar@test.com        - standard
06) Osvaldo    - Perez      - osvaldo@test.com    - standard
07) Lion       - Magallanes - lion.com            - standard
08) Francesca  - Salas      - francesca@test.com  - standard
09) Luz        - Turin      - luz@test.com        - standard
10) Maximilian - Perez      - maximilian@test.com - standard