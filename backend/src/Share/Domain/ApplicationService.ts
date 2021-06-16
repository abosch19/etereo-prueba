export interface ApplicationService {
	execute(...args: any): Promise<any>;
}