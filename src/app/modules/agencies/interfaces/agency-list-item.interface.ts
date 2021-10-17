export interface AgencyListItem {
	agencia: string;
	direccion: string;
	departamento: string;
	provincia?: string;
	distrito?: string;
	lat?: number;
	lon?: number;
	img?: string;
}