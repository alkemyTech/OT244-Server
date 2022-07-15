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
01) Jose      - Alvarez   - jose@test.com      - 1234
02) Alberto   - Rodriguez - alberto@test.com   - 7846
03) katherine - Rodrigo   - katherine@test.com - 6492
04) Cesar     - Castillo  - cesar@test.com     - 1534
05) Israel    - Salazar   - salazar@test.com   - 1890
06) Gorge     - Silva     - gorge@test.com     - 0672
08) Juan      - Del mar   - juan@test.com      - 1264
08) Jessica   - Martinez  - jessica@test.com   - 9987
09) Angelica  - picasso   - angelica@test.com  - 1255
10) Albert    - Del mar   - albert@test.com    - 8971

## user standard

## firstName  - lastName   - email              - password
01) Max       - Gutierrez  - max@test.com       - 5471
02) Francisco - Alvarado   - francisco@test.com - 1789
03) Pedro     - Salazar    - pedro@test.com     - 4442
04) Marco     - Vazquez    - marco@test.com     - 5421
05) Mar       - Kennedy    - mar@test.com       - 5461
06) Osvaldo   - Perez      - osvaldo@test.com   - 2471
07) Lion      - Magallanes - lion.com           - 5471
08) Francesca - Salas      - francesca@test.com - 5671
09) Luz       - Turin      - luz@test.com       - 0909
10) Marco     - Perez      - marco@test.com     - 0308