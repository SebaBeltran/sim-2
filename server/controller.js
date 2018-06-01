module.exports = {
  getAll: (req, res) =>{
    const db = req.app.get("db");

    db.get_all()
    .then(houses => res.status(200).send(houses))
    .catch(()=> res.status(500).send())
  },

  deleteHouse: (req, res) => {
    const db = req.app.get('db');
    
    db.delete_house([req.params.id])
    .then(houses => res.status(200).send(houses))
    .catch(() => res.status(500).send())
  },

  addHouse: (req, res) => {
    const db = req.app.get('db');
    console.log(req.body)
    const {name, address, city, state, zip, url, monthlymortage, rent} = req.body;
    db.add_house(name, address, city, state, zip, url, monthlymortage, rent)
    .then(houses => res.status(200).send(houses))
    .catch(() => res.status(500).send())
  }
}