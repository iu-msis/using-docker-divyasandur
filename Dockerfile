FROM php:7.3.8-apache

LABEL maintainer="Divya Sandur"

COPY app /srv/public/app

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
