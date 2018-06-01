CREATE TABLE houser (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  address VARCHAR(100),
  city varchar(100),
  state text,
  zip integer,
  url text,
  monthlymortage integer,
  desiredmortage integer
);

ALTER TABLE houser
RENAME desiredmortage to rent;


insert into houser (name, address, city, state, zip, url, monthlymortage, rent)
values ($1, $2, $3, $4, $5, $6, $7, $8);
select * from houser