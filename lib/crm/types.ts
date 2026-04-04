export type CustomerStatus = 'new' | 'contacted' | 'converted';

export type CustomerSource = 'landing_page' | 'instagram' | 'ads';

export type CustomerTag = 'VIP' | 'repeat' | 'tourist';

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  product_interest: string;
  status: CustomerStatus;
  source: CustomerSource;
  created_at: string;
  tags: CustomerTag[];
};
