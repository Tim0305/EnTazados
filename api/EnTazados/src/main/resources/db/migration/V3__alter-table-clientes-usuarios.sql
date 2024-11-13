ALTER TABLE clientes RENAME TO usuarios;

ALTER TABLE usuarios ADD COLUMN rol int not null;
