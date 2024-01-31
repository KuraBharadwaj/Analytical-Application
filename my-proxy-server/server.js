const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Enabling CORS for the React application. 
app.use(cors());

//Proxy endpoint
app.get('/api/business-partner',async(req,res) =>{
    try{
        const response = await axios.get('https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner?$top=20',{
            headers:{
                'APIKey': 'Wp168wyrDKdn50xp3bxn8sWcJhS9CeOo'
            }
        });
        res.json(response.data);
    } catch(error){
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=> console.log(`Sever running on port ${PORT}`));