docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sistzp2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t sistzp2-java/app ../../..
