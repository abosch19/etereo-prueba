import { Phone } from "./Phone";

export interface PhoneRepository {
	findAll(): Promise<Phone[]>
}