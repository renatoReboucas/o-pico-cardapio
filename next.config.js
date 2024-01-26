/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[{
      protocol:'https',
      hostname: 'o-pico-cardapio.vercel.app/',
      port: ''
    }]
  }
}

module.exports = nextConfig
