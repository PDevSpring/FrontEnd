export class Loans {
  constructor(
    public  IdLoan: number,
    public Status: string,
    public Prixprod: number,
    public StartedDate: string,
    public Salaire: number,
    public Interet: number,
    public Interetall: number,
    public MontantRemb: number,
    public Principale: number,
    public Mensuel: number,
    public Mensualite: number,
    public CapaciteRembouresement: number,
    public Taux: number,
  ){}
}
