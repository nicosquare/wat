# For reference only

FROM websphere-liberty
ADD target/wat.war /opt/ibm/wlp/usr/servers/defaultServer/dropins/
ENV LICENSE accept
EXPOSE 9080

## Running the container locally
# mvn clean install
# docker build -t wat:latest .
# docker run -d --name myjavacontainer wat
# docker run -p 9080:9080 --name myjavacontainer wat
# Visit http://localhost:9080/wat/

## Push container to Bluemix
# Install cli and dependencies: https://console.ng.bluemix.net/docs/containers/container_cli_cfic_install.html#container_cli_cfic_install
# docker tag wat:latest registry.ng.bluemix.net/<my_namespace>/wat:latest
# docker push registry.ng.bluemix.net/<my_namespace>/wat:latest
# bx ic images # Verify new image
