import Sequelize, { Model } from 'sequelize';

class User extends Model {
  // Método chamado automaticamente pelo sequelize.
  // Instancia a conexão
  static init(sequelize) {
    // Chama o método init da classe Model e define as colunas que podem ser criadas por usuarios
    super.init(
      // Objeto que contem nas colunas
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
