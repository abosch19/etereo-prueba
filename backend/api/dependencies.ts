import { PhonesGetter } from "../src/Phone/Application/PhonesGetter";
import { MockedPhoneRepository } from "../src/Phone/Infrastructure/MockedPhoneRepository";

const phoneRepository = new MockedPhoneRepository();
export const phonesGetter = new PhonesGetter(phoneRepository);