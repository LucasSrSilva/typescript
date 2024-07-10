import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";

const t1: Transporte = new Transporte(5);
t1.vizualizar();

const tr1: Terrestre = new Terrestre(5, 4, 120);
tr1.vizualizar();

const auto: Automovel = new Automovel(5, 4, 300, "Azul Subaru", 4, "dfg-43fg", 6);
auto.vizualizar();