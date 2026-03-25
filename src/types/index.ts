export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface TravelStory {
    id: string;
    userId: string;
    imageUrl: string;
    description: string;
    createdAt: Date;
}

export interface VerifiedStay {
    id: string;
    name: string;
    location: string;
    rating: number;
    price: number;
    imageUrl: string;
}

export interface EmergencyContact {
    name: string;
    phone: string;
    relationship: string;
}