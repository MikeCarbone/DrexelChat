export default function decode(token) {
	var decoded = jwt.decode(token);
	return decoded;
}
