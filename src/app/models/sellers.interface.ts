export interface SellersInterface {
    id: number,
    nickname: string,
    registration_date: string,
    country_id: string,
    address: Object,
    user_type: string,
    tags: Array<Object>,
    logo: string,
    points: number,
    site_id: string,
    permalink: string,
    seller_reputation: Object,
    buyer_reputation: Object,
    status: Object
}
