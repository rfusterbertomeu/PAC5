export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  order: number;
  weight: number;
  type: string[];
  ability: string[];
  hidden_ability: string[];
  url_imatge: string;
  url_icon: string;
}
