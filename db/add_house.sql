insert into houser (name, address, city, state, zip, url, monthlymortage, rent)
values ($1, $2, $3, $4, $5, $6, $7, $8);
select * from houser