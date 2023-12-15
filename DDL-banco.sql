-- public.artigos definition
-- Drop table
-- DROP TABLE public.artigos;
CREATE TABLE public.artigos (
    artigo_id serial4 NOT NULL,
    titulo varchar NULL,
    texto varchar NULL
);
-- public.cartoes definition
-- Drop table
-- DROP TABLE public.cartoes;
CREATE TABLE public.cartoes (
    cartao_id serial4 NOT NULL,
    "number" varchar NULL,
    expiry varchar NULL,
    cvc varchar NULL,
    "name" varchar NULL,
    usuario_id int4 NULL,
    CONSTRAINT cartoes_pk PRIMARY KEY (cartao_id)
);
-- public.objetivos definition
-- Drop table
-- DROP TABLE public.objetivos;
CREATE TABLE public.objetivos (
    objetivo_id serial4 NOT NULL,
    descricao varchar NULL,
    valor numeric(12, 4) NULL,
    progresso numeric(12, 4) NULL,
    usuario_id int4 NULL,
    CONSTRAINT objetivos_pk PRIMARY KEY (objetivo_id)
);
-- public.tipos_movimentacoes definition
-- Drop table
-- DROP TABLE public.tipos_movimentacoes;
CREATE TABLE public.tipos_movimentacoes (
    tipo_movimentacao_id serial4 NOT NULL,
    descricao varchar NULL,
    CONSTRAINT tipos_movimentacoes_pk PRIMARY KEY (tipo_movimentacao_id)
);
-- public.transacoes definition
-- Drop table
-- DROP TABLE public.transacoes;
CREATE TABLE public.transacoes (
    transacoes_id serial4 NOT NULL,
    numero_cartao varchar NULL,
    "data" varchar NULL,
    tipo_movimentacao varchar NULL,
    valor numeric(12, 4) NULL,
    plataforma varchar NULL,
    referente varchar NULL,
    usuario_id int4 NULL,
    CONSTRAINT movimentacoes_pk PRIMARY KEY (transacoes_id)
);
-- public.usuarios definition
-- Drop table
-- DROP TABLE public.usuarios;
CREATE TABLE public.usuarios (
    usuario_id serial4 NOT NULL,
    nome varchar NULL,
    email varchar NULL,
    senha varchar NULL,
    sobrenome varchar NULL,
    telefone varchar NULL,
    CONSTRAINT usuarios_pk PRIMARY KEY (usuario_id)
);