module.exports = {

  apps: [

    {

      name: "controlSystemArf-server",

      script: "nodemon",

      args: "--config nodemon.json",

      watch: true,

      ignore_watch: ["node_modules", "db.json"], // Ignora mudanças nestes diretórios

      env: {

        NODE_ENV: "development",

        PORT: 3000

      },

      env_production: {

        NODE_ENV: "production",

        PORT: 3000

      }

    }

  ]

};
