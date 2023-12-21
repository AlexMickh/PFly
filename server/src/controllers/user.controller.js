const db = require("../db");

class UserController {
  async createUser(req, res) {
    const { email, login, password, image, about } = req.body;
    const newPerson = await db.query(
      "INSERT INTO person (email, login, password, image, about) values ($1, $2, $3, $4, $5) RETURNING *",
      [email, login, password, image, about]
    );
    res.status(200).json(newPerson.rows[0]);
  }

  async getRandomUser(req, res) {
    const getRandom = (max) => {
      return Math.floor(Math.random() * max);
    };

    const max = await db.query("SELECT count(*) FROM person");
    const num = parseInt(max.rows[0].count);
    const id = getRandom(num - 1) + 1;

    const user = await db.query("SELECT * FROM person where id = $1", [id]);
    res.status(201).json(user.rows[0]);
  }

  async getUser(req, res) {
    const id = req.params.id;
    const user = await db.query("SELECT * FROM person where id = $1", [id]);
    res.status(201).json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const newUsers = await db.query("DELETE FROM person where id = $1", [id]);
    res.status(200).send("ok");
  }

  async getImage(req, res) {
    const id = req.params.id;

    const image = await db.query("SELECT image FROM person where id = $1", [
      id,
    ]);

    request(
      {
        url: image.rows[0].image,
        encoding: null,
      },
      (err, resp, buffer) => {
        if (!err && resp.statusCode === 200) {
          res.set("Content-Type", "image/jpeg");
          res.send(resp.body);
        }
      }
    );
  }

  async sendLike(req, res) {
    const user1Id = req.params.id;
    const user2Id = req.body.id;

    // TODO: доделать фичу с отправкой лайков и сделать вторую sql табличку

    res.send("ok");
  }

  async test(req, res) {
    const id = req.params.id;

    const image = await db.query("SELECT image FROM person where id = $1", [
      id,
    ]);

    console.log(image.rows[0].image);
  }
}

module.exports = new UserController();
