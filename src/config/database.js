module.exports = {
  dialect: 'mysql',
  database: 'sequelize-typescript',
  username: 'root',
  password: 'docker',
  host: 'localhost',
  define: {
    timestamps: true,
    underscored: true,
  }
}
