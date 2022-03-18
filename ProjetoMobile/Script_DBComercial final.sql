/*criar o banco de dados com o nome de dbcomercial*/
create database dbcomercial1;

/*usar o banco de dados*/
use dbcomercial1;

/*criar a tabela de usuario*/
create table usuario(
	idusuario bigint auto_increment primary key,
    nomeusuario varchar(30) not null unique,
    senha varchar(200) not null,
    nomecompleto varchar(50) not null,
    email varchar(50) not null unique,
    cpf varchar(13) not null unique,
    foto varchar(50)
);

/*criar a tabela de acesso*/
create table acesso(
	idacesso bigint auto_increment primary key,
    idusuario bigint not null,
    datahoralogin timestamp default current_timestamp(),
    datahoralogout datetime,
    dados text not null
);

/*criar a tabela de produto*/
create table produto(
	idproduto bigint auto_increment primary key,
    nomeproduto varchar(50) not null,
    descricao text not null,
    preco decimal(10,2) not null,
    foto1 varchar(100) not null,
    foto2 varchar(100) not null,
    foto3 varchar(100) not null
);

/*criar a tabela de pedido*/
create table pedido(
	idpedido bigint auto_increment primary key,
    datahora timestamp default current_timestamp(),
    idusuario bigint not null
);

/*criar a tabela de itenspedido*/
create table itenspedido(
	iditens bigint auto_increment primary key,
    idpedido bigint not null,
    idproduto bigint not null,
    quantidade int default 1,
    subtotal decimal(10,2) not null
);

/*criar a tabela pagamento*/
create table pagamento(
	idpagamento bigint auto_increment primary key,
    idusuario bigint not null,
    idpedido bigint not null,
    formapagamento varchar(30),
    detalhespagamento text not null,
    valortotal decimal(10,2) not null,
    numeroparcelas int not null default 1,
    valorparcelas decimal(10,2) not null,
    datahora timestamp default current_timestamp()
);
    
/*Relacionamento entre as tabelas acesso e usuário*/
ALTER TABLE acesso 
ADD CONSTRAINT fk_acesso_pk_usuario
  FOREIGN KEY (idusuario)
  REFERENCES usuario(idusuario);
  
  
/*Relacionamento entre as tabelas pedido e usuario*/
ALTER TABLE pedido 
ADD CONSTRAINT fk_pedido_pk_usuario
  FOREIGN KEY (idusuario)
  REFERENCES usuario(idusuario);
  
  
/*Relacionamento entre as tabelas itenspedido e pedido*/
ALTER TABLE itenspedido 
ADD CONSTRAINT fk_itenspedido_pk_pedido
  FOREIGN KEY (idpedido)
  REFERENCES pedido(idpedido);


/*Relacionamento entre as tabelas itenspedido e produto*/
ALTER TABLE itenspedido 
ADD CONSTRAINT fk_itenspedido_pk_produto
  FOREIGN KEY (idproduto)
  REFERENCES produto(idproduto);


/*Relacionamento entre as tabelas pagamento e pedido*/
ALTER TABLE pagamento 
ADD CONSTRAINT fk_pagamento_pk_pedido
  FOREIGN KEY (idpedido)
  REFERENCES pedido(idpedido);


/*Relacionamento entre as tabelas pagamento e usuario*/
ALTER TABLE pagamento 
ADD CONSTRAINT fk_pagamento_pk_usuario
  FOREIGN KEY (idusuario)
  REFERENCES usuario(idusuario);



insert into usuario(nomeusuario,senha,nomecompleto,email,cpf,foto)
 values("wagner","123","Wagner Simões","wagner@uol.com.br","111111","wagner.jpg");

select * from usuario;
use dbcomercial1;


insert into acesso(idusuario,datahoralogin,datahoralogout,dados)
values(1, now(),null,"Informações");
select * from acesso;


insert into produto(nomeproduto,descricao,preco,foto1,foto2,foto3)
values("Mouse","Mouse sem fio", 50.90,"bebida.jpg","bebida2.jpg","bebida3.jpg");
select * from produto;


    
insert into pedido(idusuario)values(1);
select * from pedido;

insert into itenspedido(idpedido, idproduto, quantidade,subtotal)
values(1,1,5,254.50);
select * from itenspedido;


insert into pagamento(
						idpedido,
                        idusuario,
                        formapagamento,
                        detalhespagamento,
                        valortotal,
                        numeroparcelas,
                        valorparcelas
                        )
                        values
                        (1,1,"Crédito",
                        "Titular: José; Número cartão:111111",
                        254.50,
                        5,
                        50.90);
select * from pagamento;


/*
nome do usuario: -> Usuario.nomecompleto,
produto comprado: -> Produto.nomeproduto,
data da compra: -> Pedido.datahora,
valor total da compra -> Pagamento.valortotal
*/

select 
		usuario.nomecompleto,
        produto.nomeproduto,
        pedido.datahora,
        pagamento.valortotal
        
        from usuario inner join pedido 
        on usuario.idusuario = pedido.idusuario 
        inner join itenspedido 
        on pedido.idpedido = itenspedido.idpedido 
        inner join produto 
        on itenspedido.idproduto = produto.idproduto 
        inner join pagamento 
        on pagamento.idpedido = pedido.idpedido;
        












drop database dbcomercial;










