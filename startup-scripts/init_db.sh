#!/bin/bash
cd docker-entrypoint-initdb.d

echo "Running SQL Scripts"
for f in ; 
do
    if [ "${f:-4}" == ".sql" ]; then
        echo "Running $f"
        mysql -u ${MYSQL_USER} -p${MYSQL_ROOT_PASSWORD} ${MYSQL_DATABASE} < $f
    fi
done