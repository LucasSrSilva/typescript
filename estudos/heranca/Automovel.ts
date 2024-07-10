import { Terrestre } from "./Terrestre";

export class Automovel extends Terrestre{
    private _cor: string;
    private _numPortas: number;
    private _placa: string;
    private _marchas: number;


	constructor(capacidade: number, numeroRodas: number, velocidade: number, cor: string, numPortas: number, placa: string, marchas: number) {
        super(capacidade, numeroRodas, velocidade);
		this._cor = cor;
		this._numPortas = numPortas;
		this._placa = placa;
		this._marchas = marchas;
	}

	public get cor(): string {
		return this._cor;
	}

	public get numPortas(): number {
		return this._numPortas;
	}

	public get placa(): string {
		return this._placa;
	}

	public get marchas(): number {
		return this._marchas;
	}

	public set cor(value: string) {
		this._cor = value;
	}

	public set numPortas(value: number) {
		this._numPortas = value;
	}

	public set placa(value: string) {
		this._placa = value;
	}

	public set marchas(value: number) {
		this._marchas = value;
	}

    public vizualizar(): void {
        super.vizualizar();
        console.log(`Cor: ${this._cor}`);
        console.log(`NumPortas: ${this._numPortas}`);
        console.log(`Marchas: ${this._marchas}`);
        console.log(`Placa: ${this._placa}`);
    }
}