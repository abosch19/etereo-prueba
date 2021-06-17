import { Phone } from "../Domain/Phone";
import { PhoneRepository } from "../Domain/PhoneRepository";
import mockedPhones from './mockedPhonesList.json';
import { timer } from '../../Share/Utils'

export class MockedPhoneRepository implements PhoneRepository {
	async findAll(): Promise<Phone[]> {
		await timer();
		return mockedPhones as Phone[];
	}
}