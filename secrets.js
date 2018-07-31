const secrets = {
	dbUri: process.env.DB_URI,
	jwt: process.env.JWT_SECRET
};

export const getSecret = key => secrets[key];
