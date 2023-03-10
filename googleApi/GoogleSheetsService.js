const dotenv = require('dotenv');
dotenv.config();
const { google } = require('googleapis');

const authentication = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "branch.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();

    const sheets = google.sheets({
        version: 'v4',
        auth: client
    });
    return { sheets }
}
const sheetsID = process.env.SHEETS_ID;

module.exports = { authentication, sheetsID };