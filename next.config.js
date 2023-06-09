/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: [
            'img.icons8.com',
            'images.wsj.net',
            'notjustok.com',
            'www.completesports.com',
            'www.bellanaija.com',
            'cdn.punchng.com',
            'techcrunch.com',
            'techcabal.com',
            'x7d4c5z5.stackpathcdn.com',
            'techpoint.africa',
            'www.appsafrica.com',
            'restofworld.org',
            'localhost'
        ],
    },
    env: {
        CLIENT_HOST: process.env.SERVER_HOST,
    }
};