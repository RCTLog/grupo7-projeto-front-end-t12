export interface IServices {
  createUserId: number;
  description: string;
  getUserId: number;
  id: number;
  contact: string;
  typeUser: "Cliente" | "Motorista";
  destination: [
    {
      city: string;
      state: string;
    }
  ];
  origin: [
    {
      city: string;
      state: string;
    }
  ];
}
