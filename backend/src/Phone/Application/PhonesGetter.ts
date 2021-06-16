import { ApplicationService } from "../../Share/Domain/ApplicationService";
import { Phone } from "../Domain/Phone";
import { PhoneRepository } from "../Domain/PhoneRepository";

export class PhonesGetter implements ApplicationService {
	constructor(
		private phoneRepository: PhoneRepository,
	) { }

	execute(): Promise<Phone[]> {
		return this.phoneRepository.findAll();
	}
}