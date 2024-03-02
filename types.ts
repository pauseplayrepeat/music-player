import Stripe from 'stripe';

export interface Song {
    id: string;
    user_id: string;
    author: string;
    title: string;
    song_path: string;
    image_path: string;
    name?: string; 
    artist?: string;
    artwork?: string;
}

export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string; 
    full_name?: string;
    avatar_url?: string;
    billing_address?: Stripe.Address;
    payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
};

export interface Product {
    id: string;
    active?: boolean;
    name?: string;
    description?: string;
    image?: string;
    metadata?: Stripe.Metadata;
}

export interface Price {
    id: string;
    product_id?: string;
    active?: boolean;
    description?: string;
    unit_amount?: number;
    currency?: string;
    type?: Stripe.Price.Type;
    interval?: Stripe.Price.Recurring.Interval;
    interval_count?: number;
    trial_period_days?: number;
    metadata?: Stripe.Metadata;
    products?: Product;
}

export interface Subscription {
    id: string;
    user_id: string;
    status?: Stripe.Subscription.Status;
    metadata?: Stripe.Metadata;
    price_id?: string;
    quantity?: number;
    cancel_at_period_end?: boolean;
    created: string;
    current_period_start: string;
    current_period_end: string;
    end_at?: string;
    cancel_at?: string;
    canceled_at?: string;
    trial_start?: string;
    trial_end?: string;
    prices?: Price;
}

export type SpotifyTrack = {
    id: string;
    track_url: string;
    artist_name: string;
    song_title: string;
    song_artwork: string;
    user_id?: any; // Consider using a more specific type instead of `any` if possible
    // Add any other fields that are stored in your spotify_tracks table
};

// export type SpotifyPlaylist = {
//         collaborative: boolean;
//         description: string;
//         external_urls: { spotify: string };
//         href: string;
//         id: string;
//         images: { url: string }[];
//         name: string;
//         owner: {
//           external_urls: { spotify: string };
//           href: string;
//           id: string;
//           type: string;
//           uri: string;
//           display_name: string;
//         };
//         public: boolean;
//         snapshot_id: string;
//         tracks: {
//           href: string;
//           total: number;
//         };
// }

export type SpotifyPlaylist = {
    id: number; // serial in PostgreSQL translates to number in TypeScript
    playlist_id: string; // character varying translates to string in TypeScript
    collaborative?: boolean; // boolean can be null in your schema, hence it's optional in TypeScript
    description?: string; // text can be null in your schema, hence it's optional in TypeScript
    spotify_url: string; // character varying can be null in your schema, hence it's optional in TypeScript
    href?: string; // character varying can be null in your schema, hence it's optional in TypeScript
    images?: any; // jsonb translates to any in TypeScript, consider using a more specific type if possible
    name?: string; // character varying can be null in your schema, hence it's optional in TypeScript
    owner?: any; // jsonb translates to any in TypeScript, consider using a more specific type if possible
    public?: boolean; // boolean can be null in your schema, hence it's optional in TypeScript
    snapshot_id?: string; // character varying can be null in your schema, hence it's optional in TypeScript
    tracks?: any; // jsonb translates to any in TypeScript, consider using a more specific type if possible
    user_id?: string; // character varying can be null in your schema, hence it's optional in TypeScript
}