export interface Doctor {
  _id: string;
  firstName: string;
  lastName: string;
  designation: string;
  title: string;
  country: string;
  consultationType: string[];
  attachedHospital?: string; // This might remain, but we'll add clinic support
  clinic?: { _id: string; name: string }[]; // Array of clinics the doctor is associated with
  profileImage?: {
    signedUrl: string;
  };
  charges?: {
    onlineCharge?: { amount: number; currency: string };
    clinicCharge?: { amount: number; currency: string };
    onlineSlotDuration?: number;
    clinicSlotDuration?: number;
  };
  services?: string[]; // IDs or Names
  service?: string[]; // key from profile API
  languages?: string[];
  gender?: string;
  experience?: number;
  about?: string;
  averageRating?: number;
}

export interface Clinic {
  _id: string;
  clinicName: string;
  clinicAddress?: string;
  city?: string;
}

export interface Service {
  _id: string;
  name: string;
}

export interface Language {
  _id: string;
  name: string;
}

export interface FilterConstants {
  genders: string[];
  consultationTypes: string[];
  services?: Service[];
  languages?: Language[];
  clinics?: Clinic[];
}

export interface SearchParams {
  searchTerm?: string;
  pageNumber: number;
  limit: number;
  filter?: {
    gender?: string[];
    consultationType?: string[];
    languages?: string[];
    service?: string[];
    clinic?: string[];
    chargeMin?: number;
    chargeMax?: number;
  };
}
