import axios from "axios";
import { BusinessPartner } from "../models/BusinessPartner";

export const fetchBusinessPartners = async (): Promise<BusinessPartner[]> => {
    try{
        const response = await axios.get('http://localhost:3001/api/business-partner');

        return response.data.d.results.map((item: any)=> ({
            BusinessPartnerFullName: item.BusinessPartnerFullName,
            CreatedByUser: item.CreatedByUser,
            CreationDate: item.CreationDate,
            BusinessPartner: item.BusinessPartner,
            FormOfAddress: item.FormOfAddress
        }));

    } catch(error){
        console.error('Error fetching the data: ', error);
        return[];
    }
    
}