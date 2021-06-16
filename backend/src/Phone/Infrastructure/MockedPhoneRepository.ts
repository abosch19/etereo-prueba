import { Phone } from "../Domain/Phone";
import { PhoneRepository } from "../Domain/PhoneRepository";
import mockedPhones from './mockedPhonesList.json';

export class MockedPhoneRepository implements PhoneRepository {
	findAll(): Promise<Phone[]> {
		return Promise.resolve(mockedPhones as Phone[]);
	}
}